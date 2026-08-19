"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

const tripPlannedOptions = ["Yes", "I have a few ideas", "Not yet"] as const;

const travellingWithOptions = ["Solo", "Partner", "Friends", "Family"] as const;

const budgetOptions = [
  "Under €2,000",
  "€2,000–€4,000",
  "€4,000–€8,000",
  "€8,000+",
  "Prefer not to say",
] as const;

const hotelBudgetOptions = [
  "Under €150",
  "€150–€250",
  "€250–€400",
  "€400+",
] as const;

const interestOptions = [
  "Food",
  "Hotels",
  "Culture",
  "Beaches",
  "Design",
  "Nature",
  "Nightlife",
  "Wellness",
  "Local experiences",
  "Slow travel",
] as const;

export function BetaApplicationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const based = String(data.get("based") || "").trim();
    const tripPlanned = String(data.get("tripPlanned") || "").trim();
    const destinations = String(data.get("destinations") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !based || !tripPlanned || !destinations || !consent) {
      setStatus("error");
      setMessage("Please complete the required fields and confirm consent.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const dates = String(data.get("dates") || "").trim();
    const travellingWith = String(data.get("travellingWith") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const hotelBudget = String(data.get("hotelBudget") || "").trim();
    const interests = data.getAll("interests").join(", ");
    const frustrating = String(data.get("frustrating") || "").trim();
    const takeOffPlate = String(data.get("takeOffPlate") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const payload = {
      source: "private-beta",
      name,
      email,
      based,
      tripPlanned,
      destinations,
      dates,
      travellingWith,
      budget,
      hotelBudget,
      interests,
      frustrating,
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
        "Private beta application",
        `Name: ${name}`,
        `Email: ${email}`,
        `Based: ${based}`,
        `Trip in the next 3 months: ${tripPlanned}`,
        `Going: ${destinations}`,
        `When: ${dates || "—"}`,
        `Travelling with: ${travellingWith || "—"}`,
        `Budget: ${budget || "—"}`,
        `Hotel budget: ${hotelBudget || "—"}`,
        `What matters: ${interests || "—"}`,
        `Most frustrating: ${frustrating || "—"}`,
        `Take off their plate: ${takeOffPlate || "—"}`,
        `Notes: ${notes || "—"}`,
      ].join("\n");

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Private beta application — ${destinations}`,
      )}&body=${encodeURIComponent(mailBody)}`;

      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="beta-confirmation" role="status">
        <p className="eyebrow">Application received</p>
        <h2>Thank you. We&rsquo;re reading this carefully.</h2>
        <p>
          Altrove is reviewing a small number of founding beta applications.
          Places are limited, and we cannot accept everyone who applies. If your
          trip is a good fit for this stage, we will be in touch.
        </p>
        <p>
          In the meantime, you are welcome to read the{" "}
          <Link className="text-link" href="/journal">
            Journal
          </Link>{" "}
          — it is the clearest picture of how we think about travel.
        </p>
      </div>
    );
  }

  return (
    <form className="trip-enquiry-form beta-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required aria-required="true" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required aria-required="true" />
        </label>
        <label className="form-span-2">
          <span>Where are you based? *</span>
          <input
            name="based"
            type="text"
            autoComplete="address-level2"
            placeholder="City, country"
            required
            aria-required="true"
          />
        </label>

        <fieldset className="form-span-2 traveller-type-fieldset">
          <legend>Do you have a trip planned in the next 3 months? *</legend>
          <div className="traveller-type-grid">
            {tripPlannedOptions.map((option) => (
              <label key={option} className="traveller-type-check">
                <input name="tripPlanned" type="radio" value={option} required />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="form-span-2">
          <span>Where are you thinking of going? *</span>
          <input
            name="destinations"
            type="text"
            placeholder="Lisbon, Naples, somewhere you haven’t decided yet"
            required
            aria-required="true"
          />
        </label>

        <label>
          <span>When are you travelling?</span>
          <input name="dates" type="text" placeholder="Month, season, or still flexible" />
        </label>
        <label>
          <span>Who are you travelling with?</span>
          <select name="travellingWith" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {travellingWithOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Approximate trip budget</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Hotel budget per night</span>
          <select name="hotelBudget" defaultValue="">
            <option value="">Optional</option>
            {hotelBudgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="form-span-2 traveller-type-fieldset">
          <legend>What matters most to you when you travel?</legend>
          <div className="traveller-type-grid interest-grid">
            {interestOptions.map((option) => (
              <label key={option} className="traveller-type-check">
                <input name="interests" type="checkbox" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="form-span-2">
          <span>What is the most frustrating part of planning a trip?</span>
          <textarea name="frustrating" rows={3} />
        </label>
        <label className="form-span-2">
          <span>If Altrove could take one thing off your plate when you travel, what would it be?</span>
          <textarea name="takeOffPlate" rows={3} />
        </label>
        <label className="form-span-2">
          <span>Anything else we should know?</span>
          <textarea name="notes" rows={3} placeholder="Optional" />
        </label>
      </div>

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Altrove may use these details to review my private beta
          application. See the <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>

      <button className="button dark" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Apply for the Private Beta"}
      </button>

      {message ? (
        <p className="form-status is-error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
