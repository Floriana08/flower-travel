"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

const travellingWithOptions = [
  "Solo",
  "Partner",
  "Friends",
  "Family",
  "Other",
] as const;

export function FoundingApplicationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const based = String(data.get("based") || "").trim();
    const destinations = String(data.get("destinations") || "").trim();
    const dates = String(data.get("dates") || "").trim();
    const travellingWith = String(data.get("travellingWith") || "").trim();
    const interests = String(data.get("interests") || "").trim();
    const takeOffPlate = String(data.get("takeOffPlate") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const consent = data.get("consent");

    if (
      !name ||
      !email ||
      !based ||
      !destinations ||
      !dates ||
      !travellingWith ||
      !interests ||
      !takeOffPlate ||
      !consent
    ) {
      setStatus("error");
      setMessage("Please complete the required fields and confirm consent.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const payload = {
      source: "founding-membership",
      name,
      email,
      based,
      destinations,
      dates,
      travellingWith,
      interests,
      takeOffPlate,
      notes,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      form.reset();
    } catch {
      const mailBody = [
        "Founding Membership application",
        `Name: ${name}`,
        `Email: ${email}`,
        `Based: ${based}`,
        `Going: ${destinations}`,
        `When: ${dates}`,
        `Travelling with: ${travellingWith}`,
        `What matters: ${interests}`,
        `Wish someone would handle: ${takeOffPlate}`,
        `Notes: ${notes || "—"}`,
      ].join("\n");

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Founding Membership application — ${destinations}`,
      )}&body=${encodeURIComponent(mailBody)}`;

      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="apply-confirmation" role="status">
        <h2>Your application is with Altrove.</h2>
        <p>
          Founding Membership is intentionally limited. We&rsquo;ll be in touch
          soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className="trip-enquiry-form apply-form apply-form-simple"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
          />
        </label>
        <label className="form-span-2">
          <span>Where are you based?</span>
          <input
            name="based"
            type="text"
            autoComplete="address-level2"
            placeholder="City, country"
            required
            aria-required="true"
          />
        </label>
        <label className="form-span-2">
          <span>Where are you travelling next?</span>
          <textarea
            name="destinations"
            rows={2}
            placeholder="A city, a country, or a few ideas"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>When?</span>
          <input
            name="dates"
            type="text"
            placeholder="Month, season, or still flexible"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>Who do you normally travel with?</span>
          <select
            name="travellingWith"
            defaultValue=""
            required
            aria-required="true"
          >
            <option value="" disabled>
              Select
            </option>
            {travellingWithOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-span-2">
          <span>What matters most to you when travelling?</span>
          <textarea
            name="interests"
            rows={3}
            placeholder="Food, hotels, pace, neighbourhoods, design…"
            required
            aria-required="true"
          />
        </label>
        <label className="form-span-2">
          <span>
            What do you wish someone else would handle when planning a trip?
          </span>
          <textarea name="takeOffPlate" rows={3} required aria-required="true" />
        </label>
        <label className="form-span-2">
          <span>Anything else Altrove should know?</span>
          <textarea name="notes" rows={2} placeholder="Optional" />
        </label>
      </div>

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Altrove may use these details to review my Founding
          Membership application. See the{" "}
          <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>

      <button
        className="button dark"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Apply"}
      </button>

      {message ? (
        <p className="form-status is-error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
