import type { Metadata } from "next";
import { GuideCard, PageHero, SectionHeading } from "../components";
import { guides } from "../data";

export const metadata: Metadata = {
  title: "Travel Guides",
  description:
    "Read Flower Travel destination guides, hotel notes, food walks, planning frameworks, and personal stories for more thoughtful trips.",
};

export default function TravelGuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));

  return (
    <main>
      <PageHero
        eyebrow="Travel guides"
        title="Useful, elegant research for travelers with taste."
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=84"
        alt="A notebook, camera, and travel objects on a table"
      >
        <p>
          Guides combine personal travel notes with practical planning: where to
          stay, how to move, what to reserve, and which details turn a trip from
          functional into memorable.
        </p>
      </PageHero>

      <section className="section-shell">
        <div className="guide-category-row" aria-label="Guide categories">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <SectionHeading
          eyebrow="Latest research"
          title="Destination notes, planning essays, and stories with receipts."
        >
          <p>
            The content is structured for organic traffic now and future
            monetization later: guide clusters, affiliate-ready hotel thinking,
            downloadable formats, and consultation pathways.
          </p>
        </SectionHeading>

        <div className="guide-grid wide">
          {guides.map((guide) => (
            <div id={guide.slug} key={guide.slug}>
              <GuideCard guide={guide} />
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-band light-band">
        <div>
          <p className="eyebrow">Editorial standard</p>
          <h2>Every guide should answer the questions readers are actually searching.</h2>
        </div>
        <p>
          When to go, where to stay, what to book early, how to avoid rushed
          days, what is worth the money, and how the trip feels once the
          logistics meet real life.
        </p>
      </section>
    </main>
  );
}
