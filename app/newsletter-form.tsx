"use client";

import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Newsletter signup UI with loading / success / error states.
 * Email delivery is not integrated yet — submissions currently open mailto
 * as a temporary path until an ESP (e.g. Buttondown, Loops, Mailchimp) is wired.
 */
export function NewsletterForm({
  placeholder = "Your email address",
  buttonLabel = "Join the Club",
  consentLabel = `I agree to receive ${site.name} emails and understand that I can unsubscribe at any time.`,
}: {
  placeholder?: string;
  buttonLabel?: string;
  consentLabel?: string;
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
      // TODO: Replace with ESP API route when ready.
      // Example: await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })
      await new Promise((resolve) => setTimeout(resolve, 450));
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Club signup",
      )}&body=${encodeURIComponent(`Please add me to the Club.\n\nEmail: ${email}`)}`;
      setStatus("success");
      setMessage("Thanks — your email client should open to finish signing up.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
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
