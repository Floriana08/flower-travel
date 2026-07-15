import type { Metadata } from "next";
import {
  GuideCard,
  GuideProductCard,
  NewsletterBand,
  PageHero,
  SectionHeading,
} from "../components";
import { guideProducts, guides } from "../data";

export const metadata: Metadata = {
  title: "Portugal Travel Guides",
  description:
    "Browse Flower Travel's Portugal guide shop for Lisbon, Madeira, train routes, sustainable travel notes, and future downloadable guides.",
};

export default function TravelGuidesPage() {
  const portugalArticles = guides.filter((guide) =>
    ["Lisbon", "Madeira", "Portugal"].includes(guide.destination),
  );

  return (
    <main>
      <PageHero
        eyebrow="Portugal guide shop"
        title="Collectible guides for traveling Portugal beautifully."
        image="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=84"
        alt="Lisbon rooftops and tiled buildings in warm evening light"
      >
        <p>
          The guide library starts with Portugal: Lisbon food notes, Madeira
          planning, train routes, lower-impact weekends, and future downloadable
          editions for readers who want more than a generic itinerary.
        </p>
      </PageHero>

      <section className="section-shell">
        <div className="guide-category-row" aria-label="Guide categories">
          {[
            "Lisbon",
            "Madeira",
            "Portugal by train",
            "Sustainable travel",
            "Downloadable guides",
          ].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <SectionHeading
          eyebrow="Guide shop"
          title="Portugal-first products, with previews while the shop grows."
        >
          <p>
            For now, every product points to a free preview or the Club
            waitlist. Later this can connect to checkout, reader pricing,
            downloadable PDFs, affiliate hotel edits, and private city maps.
          </p>
        </SectionHeading>

        <div className="guide-product-grid">
          {guideProducts.map((product) => (
            <GuideProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Free previews"
          title="Portugal articles that can become paid guide chapters."
        >
          <p>
            The free layer builds trust and search traffic. The paid layer can
            later package deeper maps, restaurant notes, hotel criteria, transit
            details, and seasonal updates.
          </p>
        </SectionHeading>
        <div className="guide-grid wide">
          {portugalArticles.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} ctaLabel="Read preview" />
          ))}
        </div>
      </section>

      <section className="editorial-band light-band">
        <div>
          <p className="eyebrow">Commerce later</p>
          <h2>The shop can start as a waitlist, then become a guide library.</h2>
        </div>
        <p>
          This keeps the site sustainable: build audience first, learn what
          people want, then sell useful digital guides instead of pushing
          packaged holidays before the Club has a clear point of view.
        </p>
      </section>

      <NewsletterBand />
    </main>
  );
}
