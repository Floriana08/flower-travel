"use client";

import { useState, type FormEvent } from "react";

export default function AskAltrovePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const response = await fetch("/api/members/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Advice</p>
        <h1 className="display-title">Ask Altrove</h1>
        <p className="lede">
          Personal travel advice for members — considered recommendations, not
          unlimited concierge service.
        </p>
      </header>

      {status === "sent" ? (
        <div className="apply-confirmation" role="status">
          <h2>Request received</h2>
          <p>Altrove has your note and will reply by email.</p>
        </div>
      ) : (
        <form className="members-ask-form" onSubmit={onSubmit}>
          <label>
            <span>Where are you going?</span>
            <input name="destination" required />
          </label>
          <div className="form-grid-2">
            <label>
              <span>Travel dates</span>
              <input name="dates" placeholder="e.g. 12–16 September" />
            </label>
            <label>
              <span>Who are you travelling with?</span>
              <input name="travellers" placeholder="Partner, friends…" />
            </label>
          </div>
          <label>
            <span>What are you looking for?</span>
            <input
              name="interests"
              placeholder="Stay, dinner, neighbourhood…"
              required
            />
          </label>
          <label>
            <span>Hotel already booked?</span>
            <input name="accommodation" placeholder="Optional" />
          </label>
          <label>
            <span>Tell us a little about the trip</span>
            <textarea name="message" rows={5} required />
          </label>
          <button
            className="button dark"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Ask Altrove"}
          </button>
          {status === "error" ? (
            <p className="form-status is-error">
              Couldn’t send just now. Email hello@altrove.studio and we’ll help.
            </p>
          ) : null}
        </form>
      )}
    </main>
  );
}
