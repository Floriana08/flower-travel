"use client";

import { useState, type FormEvent } from "react";
import { site, type GuideProduct } from "./data";

/**
 * Purchase CTA for a guide product. No guide has a `stripePriceId` yet, so
 * this always renders the honest waitlist state — a real "Buy now" button
 * that posts to `/api/checkout` only appears once a guide gets one.
 */
export function GuideCheckoutCta({ product }: { product: GuideProduct }) {
  if (product.stripePriceId) {
    return <BuyNowButton product={product} />;
  }

  return <WaitlistForm product={product} />;
}

function BuyNowButton({ product }: { product: GuideProduct }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug }),
      });
      const result = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error ?? "Checkout failed");
      window.location.href = result.url;
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="guide-checkout">
      <button className="button dark" type="button" onClick={handleClick} disabled={status === "loading"}>
        {status === "loading" ? "Starting checkout…" : `Buy now — ${product.price}`}
      </button>
      {status === "error" ? (
        <p className="form-status form-status-error">
          Checkout couldn&rsquo;t start. Please try again shortly.
        </p>
      ) : null}
    </div>
  );
}

function WaitlistForm({ product }: { product: GuideProduct }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();

    if (!email) {
      setStatus("error");
      setMessage("Add your email to join the waitlist.");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `guide:${product.slug}` }),
      });
      if (!response.ok) throw new Error("Request failed");
      const result = (await response.json()) as { alreadySubscribed?: boolean };
      setStatus("success");
      setMessage(
        result.alreadySubscribed
          ? "You're already on our list — we'll email you the moment this guide is ready."
          : "You're on the waitlist — we'll email you the moment this guide is ready.",
      );
      form.reset();
    } catch {
      // Couldn't reach the server — fall back to mailto so interest isn't
      // silently dropped, matching NewsletterForm's resilience pattern.
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Guide waitlist",
      )}&body=${encodeURIComponent(
        `Please add me to the waitlist for "${product.title}".\n\nEmail: ${email}`,
      )}`;
      setStatus("success");
      setMessage(
        "We couldn’t reach our server just now, so your email client should open instead — please send that draft to join the waitlist.",
      );
      form.reset();
    }
  }

  return (
    <form className="guide-checkout guide-waitlist-form" onSubmit={handleSubmit} noValidate>
      <p className="guide-checkout-price">
        {product.stripePriceId ? product.price : "Launching soon"}
        {product.stripePriceId ? null : (
          <em> · {product.price}</em>
        )}
      </p>
      <p className="guide-waitlist-lede">
        This guide isn&rsquo;t for sale yet. Join the waitlist and we&rsquo;ll
        email you the day checkout opens — no payment taken now.
      </p>
      <div className="guide-waitlist-row">
        <label className="visually-hidden" htmlFor={`waitlist-email-${product.slug}`}>
          Email address
        </label>
        <input
          id={`waitlist-email-${product.slug}`}
          name="email"
          type="email"
          placeholder="Your email address"
          required
          aria-required="true"
          disabled={status === "loading"}
          autoComplete="email"
        />
        <button className="button dark" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Join the guide waitlist"}
        </button>
      </div>
      <p className={`form-status form-status-${status}`} role="status" aria-live="polite">
        {message ||
          (status === "idle"
            ? "We’ll only use your email for this guide’s availability."
            : "")}
      </p>
    </form>
  );
}
