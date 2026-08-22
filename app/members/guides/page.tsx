import type { Metadata } from "next";
import Link from "next/link";
import { demoGuides } from "../demo-data";

export const metadata: Metadata = {
  title: "Guides",
  robots: { index: false, follow: false },
};

export default function MemberGuidesPage() {
  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Library</p>
        <h1 className="display-title">Guides</h1>
        <p className="lede">
          Destination guides and travel notes — editorial, not downloadable PDFs.
        </p>
      </header>
      <div className="members-guide-grid">
        {demoGuides.map((guide) => (
          <article key={guide.slug} className="members-guide-card">
            <Link href={`/members/guides/${guide.slug}`}>
              <img src={guide.coverImage} alt="" loading="lazy" />
              <p className="eyebrow">{guide.destination}</p>
              <h2>{guide.title}</h2>
              <p>{guide.summary}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
