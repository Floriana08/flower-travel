import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Altrove for club notes, editorial collaborations, destination article ideas, and future travel partnerships.",
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
          For club notes, editorial collaborations, article ideas, or
          future travel partnerships, send a note with as much context as you
          have.
        </p>
      </PageHero>

      <section className="contact-page section-shell">
        <div className="contact-notes">
          <p className="eyebrow">Get in touch</p>
          <h2>{site.email}</h2>
          <p>
            Use the form for reader questions, article requests, partnership
            ideas, press, or destination suggestions.
          </p>
          <div className="contact-links">
            <Link href="/#newsletter">Join the list</Link>
            <Link href="/journeys">Journeys</Link>
          </div>
        </div>

        <form
          className="contact-form"
          action={`mailto:${site.email}`}
          method="post"
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
            <select name="reason" defaultValue="community">
              <option value="community">Club note</option>
              <option value="article">Article request</option>
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
          <h2>Ask for the article you wish existed.</h2>
        </div>
        <p>
          The next stage of Altrove should be shaped by real reader
          questions: Portugal dilemmas, route ideas, sustainable travel worries,
          hotel criteria, and the planning details that are hard to find
          elsewhere.
        </p>
      </section>
    </main>
  );
}
