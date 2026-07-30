"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

const tripTypes = [
  "Honeymoon",
  "Anniversary",
  "Slow European journey",
  "City break",
  "Road trip",
  "Not sure yet",
];

/**
 * Trip enquiry form. Submissions currently open a mailto draft until a
 * form backend or CRM is connected. UI includes validation and status states.
 */
export function TripEnquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const destinations = String(data.get("destinations") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !destinations || !consent) {
      setStatus("error");
      setMessage("Please complete the required fields and confirm consent.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Destinations: ${destinations}`,
      `Dates: ${String(data.get("dates") || "").trim() || "—"}`,
      `Travellers: ${String(data.get("travellers") || "").trim() || "—"}`,
      `Trip length: ${String(data.get("length") || "").trim() || "—"}`,
      `Budget: ${String(data.get("budget") || "").trim() || "—"}`,
      `Trip type: ${String(data.get("tripType") || "").trim() || "—"}`,
      `What matters most: ${String(data.get("priorities") || "").trim() || "—"}`,
      `Notes: ${String(data.get("notes") || "").trim() || "—"}`,
    ].join("\n");

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Trip enquiry — ${destinations}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setMessage(
        "Thank you. Your email client should open so you can send the enquiry. We will review requests that match the destinations and services Altrove is currently developing.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `Something went wrong. Please email ${site.email} directly with your trip details.`,
      );
    }
  }

  return (
    <form className="trip-enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-span-2">
          <span>Destination or destinations *</span>
          <input
            name="destinations"
            type="text"
            placeholder="e.g. Portugal, Naples and the Amalfi Coast"
            required
          />
        </label>
        <label>
          <span>Approximate dates</span>
          <input name="dates" type="text" placeholder="Month / season / flexible" />
        </label>
        <label>
          <span>Number of travellers</span>
          <input name="travellers" type="text" inputMode="numeric" />
        </label>
        <label>
          <span>Estimated trip length</span>
          <input name="length" type="text" placeholder="e.g. 8–10 days" />
        </label>
        <label>
          <span>Approximate budget</span>
          <input
            name="budget"
            type="text"
            placeholder="Optional — a range is enough"
          />
        </label>
        <label className="form-span-2">
          <span>Type of trip</span>
          <select name="tripType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {tripTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="form-span-2">
          <span>What matters most</span>
          <textarea
            name="priorities"
            rows={3}
            placeholder="Pace, food, hotels, landscape, celebrations…"
          />
        </label>
        <label className="form-span-2">
          <span>Additional notes</span>
          <textarea name="notes" rows={4} />
        </label>
      </div>

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Altrove may use these details to respond to my enquiry. See
          the{" "}
          <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>

      <button className="button dark" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Preparing…" : "Send enquiry"}
      </button>

      {message ? (
        <p
          className={`form-status ${status === "error" ? "is-error" : "is-success"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
