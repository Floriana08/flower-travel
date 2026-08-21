import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "../../data";
import { lisbonDestination } from "../../lisbon-destination";
import { TripEditGlimpse } from "../../sample-trip";
import { lisbonSampleTrip } from "../../sample-trips";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "../../image-utils";

export const metadata: Metadata = {
  title: "Lisbon",
  description:
    "How Altrove approaches Lisbon: a considered base, a short list of tables, neighbourhood walking, and the notes we would actually give a friend.",
  alternates: {
    canonical: "https://altrove.studio/destinations/lisbon",
  },
};

const journalStories = lisbonDestination.journalSlugs
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((story): story is (typeof guides)[number] => Boolean(story));

function PlaceList({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: readonly { name: string; area: string; note: string }[];
}) {
  return (
    <section className="lisbon-block section-shell" aria-labelledby={`lisbon-${id}`}>
      <h2 id={`lisbon-${id}`} className="display-title">
        {heading}
      </h2>
      <ul className="lisbon-shortlist">
        {items.map((item) => (
          <li key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.area}</span>
            </div>
            <p>{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LisbonDestinationPage() {
  const { title, kicker, heroImage, heroAlt, intro, take, stay, eat, coffee, do: toDo, skip } =
    lisbonDestination;

  return (
    <main className="lisbon-page">
      <header className="country-mag-hero">
        <img
          src={heroImage}
          srcSet={unsplashSrcSet(heroImage)}
          sizes={heroImageSizes}
          alt={heroAlt}
        />
        <div className="country-mag-hero-copy">
          <p className="country-mag-kicker">{kicker}</p>
          <h1>{title}</h1>
        </div>
      </header>

      <section className="section-shell lisbon-intro">
        <p className="lisbon-lede">{intro}</p>
      </section>

      <section className="section-shell tinted lisbon-take" aria-labelledby="lisbon-take">
        <p className="eyebrow">The Altrove Take</p>
        <h2 id="lisbon-take" className="display-title">
          How we would approach the city.
        </h2>
        <ul className="lisbon-take-list">
          {take.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <PlaceList id="stay" heading="Where to Stay" items={stay} />
      <PlaceList id="eat" heading="Where to Eat" items={eat} />
      <PlaceList id="coffee" heading="Coffee & Brunch" items={coffee} />
      <PlaceList id="do" heading="What to Do" items={toDo} />

      <section className="section-shell tinted lisbon-skip" aria-labelledby="lisbon-skip">
        <p className="eyebrow">What to Skip</p>
        <h2 id="lisbon-skip" className="display-title">
          Useful refusals.
        </h2>
        <ul className="lisbon-skip-list">
          {skip.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell lisbon-example" aria-labelledby="lisbon-example">
        <div className="home-section-head">
          <p className="eyebrow">Example Trip</p>
          <h2 id="lisbon-example" className="display-title">
            A Lisbon Trip Edit.
          </h2>
        </div>
        <TripEditGlimpse trip={lisbonSampleTrip} ctaLabel="See the full Lisbon Trip Edit" />
      </section>

      {journalStories.length ? (
        <section className="section-shell tinted lisbon-journal" aria-labelledby="lisbon-journal">
          <div className="home-section-head">
            <p className="eyebrow">Journal</p>
            <h2 id="lisbon-journal" className="display-title">
              Further reading.
            </h2>
          </div>
          <div className="home-journal-row">
            {journalStories.map((story) => (
              <article key={story.slug} className="home-journal-row-card">
                <Link href={`/journal/${story.slug}`}>
                  <img
                    src={story.image}
                    srcSet={unsplashSrcSet(story.image)}
                    sizes={defaultImageSizes}
                    alt={story.alt}
                    loading="lazy"
                  />
                  <p className="eyebrow">{story.category}</p>
                  <h3>{story.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell membership-now">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">Going to Lisbon?</h2>
        <p>Let Altrove shape the trip around you.</p>
        <Link className="button dark" href="/apply">
          Become a Founding Member
        </Link>
      </section>
    </main>
  );
}
