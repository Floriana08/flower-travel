"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "./data";

type FormStatus = "idle" | "loading" | "success" | "error";

const tripPlannedOptions = ["Yes", "I have a few ideas", "Not yet"] as const;

const travellingWithOptions = [
  "Solo",
  "Partner",
  "Friends",
  "Family",
  "Other",
] as const;

const tripLengthOptions = [
  "A weekend",
  "4–7 days",
  "8–14 days",
  "2–3 weeks",
  "A month or more",
  "Not sure yet",
] as const;

const budgetOptions = [
  "Under €3,000",
  "€3,000–€6,000",
  "€6,000–€12,000",
  "€12,000+",
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
  "Nature",
  "Design",
  "Nightlife",
  "Wellness",
  "Local places",
  "Slow travel",
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
    const tripPlanned = String(data.get("tripPlanned") || "").trim();
    const destinations = String(data.get("destinations") || "").trim();
    const dates = String(data.get("dates") || "").trim();
    const travellingWith = String(data.get("travellingWith") || "").trim();
    const tripLength = String(data.get("tripLength") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const frustrating = String(data.get("frustrating") || "").trim();
    const takeOffPlate = String(data.get("takeOffPlate") || "").trim();
    const consent = data.get("consent");

    if (
      !name ||
      !email ||
      !based ||
      !tripPlanned ||
      !destinations ||
      !dates ||
      !travellingWith ||
      !tripLength ||
      !budget ||
      !frustrating ||
      !takeOffPlate ||
      !consent
    ) {
      setStatus("error");
      setMessage("Please complete the required fields and confirm consent.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const hotelBudget = String(data.get("hotelBudget") || "").trim();
    const interests = data.getAll("interests").join(", ");
    const notes = String(data.get("notes") || "").trim();

    const payload = {
      source: "founding-membership",
      name,
      email,
      based,
      tripPlanned,
      destinations,
      dates,
      travellingWith,
      tripLength,
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
        "Founding Membership application",
        `Name: ${name}`,
        `Email: ${email}`,
        `Based: ${based}`,
        `Trip in the next 3 months: ${tripPlanned}`,
        `Going: ${destinations}`,
        `When: ${dates}`,
        `Travelling with: ${travellingWith}`,
        `Trip length: ${tripLength}`,
        `Budget: ${budget}`,
        `Hotel budget: ${hotelBudget || "—"}`,
        `What matters: ${interests || "—"}`,
        `Most frustrating: ${frustrating}`,
        `Take off their plate: ${takeOffPlate}`,
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
          if Altrove is a good fit for the way you travel.
        </p>
      </div>
    );
  }

  return (
    <form className="trip-enquiry-form apply-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required aria-required="true" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required aria-required="true" />
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

        <fieldset className="form-span-2 traveller-type-fieldset">
          <legend>Do you have a trip planned in the next three months?</legend>
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
          <span>Where are you thinking of going?</span>
          <textarea
            name="destinations"
            rows={3}
            placeholder="A city, a country, or a few ideas"
            required
            aria-required="true"
          />
        </label>

        <label>
          <span>When are you planning to travel?</span>
          <input
            name="dates"
            type="text"
            placeholder="Month, season, or still flexible"
            required
            aria-required="true"
          />
        </label>
        <label>
          <span>How long is the trip?</span>
          <select name="tripLength" defaultValue="" required aria-required="true">
            <option value="" disabled>
              Select a length
            </option>
            {tripLengthOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="form-span-2 traveller-type-fieldset">
          <legend>Who are you travelling with?</legend>
          <div className="traveller-type-grid">
            {travellingWithOptions.map((option) => (
              <label key={option} className="traveller-type-check">
                <input name="travellingWith" type="radio" value={option} required />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label>
          <span>Approximate total trip budget</span>
          <select name="budget" defaultValue="" required aria-required="true">
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
          <span>Approximate hotel budget per night</span>
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
          <span>What do you find most frustrating about planning a trip?</span>
          <textarea name="frustrating" rows={4} required aria-required="true" />
        </label>
        <label className="form-span-2">
          <span>
            If Altrove could take one thing off your plate when you travel, what
            would it be?
          </span>
          <textarea name="takeOffPlate" rows={4} required aria-required="true" />
        </label>
        <label className="form-span-2">
          <span>Anything else we should know?</span>
          <textarea name="notes" rows={3} placeholder="Optional" />
        </label>
      </div>

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Altrove may use these details to review my Founding
          Membership application. See the <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>

      <button className="button dark" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Apply for Founding Membership"}
      </button>

      {message ? (
        <p className="form-status is-error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
