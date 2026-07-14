import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Flower Travel for travel consultations, editorial collaborations, destination guide ideas, and future planning services.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell me where you are dreaming of going."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84"
        alt="A traveler standing on a scenic road at golden hour"
      >
        <p>
          For consultations, editorial collaborations, guide requests, or future
          planning services, send a note with as much context as you have.
        </p>
      </PageHero>

      <section className="contact-page section-shell">
        <div className="contact-notes">
          <p className="eyebrow">Get in touch</p>
          <h2>{site.email}</h2>
          <p>
            Use the form for trip questions, consultation requests, partnership
            ideas, press, or destination suggestions.
          </p>
          <div className="contact-links">
            <Link href="/travel-consultations">Travel consultations</Link>
            <Link href="/travel-guides">Guide library</Link>
            <Link href="/destinations">Destination atlas</Link>
          </div>
        </div>

        <form
          className="contact-form"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>Reason</span>
            <select name="reason" defaultValue="consultation">
              <option value="consultation">Travel consultation</option>
              <option value="guide">Guide request</option>
              <option value="collaboration">Editorial collaboration</option>
              <option value="press">Press or partnership</option>
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} required />
          </label>
          <button className="button dark" type="submit">
            Send message
          </button>
        </form>
      </section>

      <section className="editorial-band light-band">
        <div>
          <p className="eyebrow">For readers</p>
          <h2>Ask for the guide you wish existed.</h2>
        </div>
        <p>
          The next stage of Flower Travel should be shaped by real reader
          questions: destination dilemmas, route ideas, honeymoon worries, hotel
          criteria, and the planning details that are hard to find elsewhere.
        </p>
      </section>
    </main>
  );
}
