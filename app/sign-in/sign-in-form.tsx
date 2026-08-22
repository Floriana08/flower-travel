"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setStatus("error");
      setMessage("Please enter your email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/auth/magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setMessage(
        "Sign-in isn’t fully connected yet. If you’re a Founding Member, email hello@altrove.studio and we’ll help you in.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="apply-confirmation" role="status">
        <h2>Check your email</h2>
        <p>
          If that address belongs to a member account, a login link is on its
          way.
        </p>
        <p>
          <Link className="text-link" href="/members">
            Continue to the member area
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form className="sign-in-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <button
        className="button dark"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send login link"}
      </button>
      {message ? (
        <p className="form-status is-error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
