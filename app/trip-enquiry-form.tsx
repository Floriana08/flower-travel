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
 * Trip enquiry form. Submits to `/api/enquiry`, which persists the enquiry
 * in D1 so it's captured even if the visitor has no configured mail client.
 * If the request itself fails (offline, database not yet provisioned), we
 * fall back to opening a mailto draft so the enquiry isn't silently lost.
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

    const dates = String(data.get("dates") || "").trim();
    const travellers = String(data.get("travellers") || "").trim();
    const tripLength = String(data.get("length") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const tripType = String(data.get("tripType") || "").trim();
    const priorities = String(data.get("priorities") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          destinations,
          dates,
          travellers,
          tripLength,
          budget,
          tripType,
          priorities,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setMessage(
        "Thank you. We’ve received your enquiry and will reply with next steps for your trip.",
      );
      form.reset();
    } catch {
      // The enquiry couldn't be saved server-side — fall back to mailto so
      // the details aren't lost, rather than failing silently.
      const mailBody = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Destinations: ${destinations}`,
        `Dates: ${dates || "—"}`,
        `Travellers: ${travellers || "—"}`,
        `Trip length: ${tripLength || "—"}`,
        `Budget: ${budget || "—"}`,
        `Trip type: ${tripType || "—"}`,
        `What matters most: ${priorities || "—"}`,
        `Notes: ${notes || "—"}`,
      ].join("\n");

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Trip enquiry — ${destinations}`,
      )}&body=${encodeURIComponent(mailBody)}`;

      setStatus("success");
      setMessage(
        "We couldn’t reach our server just now, so your email client should open instead — please send that draft and we’ll reply with next steps.",
      );
      form.reset();
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
