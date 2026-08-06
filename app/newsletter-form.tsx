"use client";

import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Newsletter signup UI with loading / success / error states.
 * Submits to `/api/newsletter`, which persists the signup in D1. If that
 * request fails, falls back to a mailto draft so the signup isn't lost.
 */
export function NewsletterForm({
  placeholder = "Your email address",
  buttonLabel = "Join the Club",
  consentLabel = `I agree to receive ${site.name} emails and understand that I can unsubscribe at any time.`,
  source = "newsletter",
}: {
  placeholder?: string;
  buttonLabel?: string;
  consentLabel?: string;
  /** Tags the signup so guide-waitlist interest is distinguishable from general newsletter signups. */
  source?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const consent = data.get("consent");

    if (!email || !consent) {
      setStatus("error");
      setMessage("Please add your email and confirm consent.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = (await response.json()) as { alreadySubscribed?: boolean };

      setStatus("success");
      setMessage(
        result.alreadySubscribed
          ? "You're already on the list — thanks for double-checking!"
          : "Thanks — you're on the list.",
      );
      form.reset();
    } catch {
      // Couldn't reach the server — fall back to mailto so the signup isn't
      // silently dropped.
      const subject = source.startsWith("guide:") ? "Guide waitlist" : "Newsletter signup";
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(`Please add me to the list (${source}).\n\nEmail: ${email}`)}`;
      setStatus("success");
      setMessage(
        "We couldn’t reach our server just now, so your email client should open instead — please send that draft to finish signing up.",
      );
      form.reset();
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Email address</span>
        <input
          name="email"
          type="email"
          placeholder={placeholder}
          required
          disabled={status === "loading"}
          autoComplete="email"
        />
      </label>
      <label className="consent-check">
        <input
          name="consent"
          type="checkbox"
          required
          disabled={status === "loading"}
        />
        <span>{consentLabel}</span>
      </label>
      <button className="button dark" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining…" : buttonLabel}
      </button>
      <p
        className={`form-status form-status-${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
