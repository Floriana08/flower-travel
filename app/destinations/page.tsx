import type { Metadata } from "next";
import Link from "next/link";
import { DestinationCard, GuideCard, PageHero, SectionHeading } from "../components";
import { destinations, guides } from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated Flower Travel destination guides for Portugal, France, Italy, Greece, Morocco, island escapes, city breaks, and future honeymoon routes.",
};

export default function DestinationsPage() {
  const continentOrder = [
    "Europe",
    "Africa",
    "Asia",
    "North America",
    "South America",
    "Oceania",
  ];
  const continentGroups = continentOrder
    .map((continent) => {
      const continentDestinations = destinations.filter(
        (destination) => destination.continent === continent,
      );
      const countries = Array.from(
        new Set(continentDestinations.map((destination) => destination.country)),
      ).map((country) => ({
        country,
        destinations: continentDestinations.filter(
          (destination) => destination.country === country,
        ),
      }));

      return { continent, countries };
    })
    .filter((group) => group.countries.length > 0);

  return (
    <main>
      <PageHero
        eyebrow="Destination atlas"
        title="A global atlas for places with feeling."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84"
        alt="A winding road through a dramatic mountain landscape"
      >
        <p>
          Destination articles can grow around the world: continents first,
          countries next, then city edits, hotel notes, routes, and stories from
          places I know well enough to recommend with care.
        </p>
      </PageHero>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Browse by continent"
          title="A travel atlas that can expand as the community grows."
        >
          <p>
            The current atlas starts with places already in the editorial
            archive. New countries can be added as lived experience, research,
            and reader demand make them worth publishing.
          </p>
        </SectionHeading>

        <div className="continent-directory">
          {continentGroups.map((group, index) => (
            <details
              className="continent-group"
              key={group.continent}
              open={index === 0}
            >
              <summary>
                <span>{group.continent}</span>
                <small>
                  {group.countries.length}{" "}
                  {group.countries.length === 1 ? "country" : "countries"}
                </small>
              </summary>

              <div className="country-directory">
                {group.countries.map((countryGroup) => (
                  <section className="country-group" key={countryGroup.country}>
                    <div className="country-heading">
                      <p className="eyebrow">Country</p>
                      <h2>{countryGroup.country}</h2>
                    </div>
                    <div className="destination-grid">
                      {countryGroup.destinations.map((destination) => (
                        <article
                          className="destination-detail"
                          id={destination.slug}
                          key={destination.slug}
                        >
                          <DestinationCard destination={destination} />
                          <div className="destination-notes">
                            <p className="eyebrow">Best time</p>
                            <h3>{destination.season}</h3>
                            <p>{destination.bestFor}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Destination articles"
          title="Global stories and city notes live here."
        >
          <p>
            Portugal guides will become the shop. Wider destination articles can
            keep building audience, search traffic, and trust across the places
            Flower Travel may cover as a members' community.
          </p>
        </SectionHeading>
        <div className="guide-grid wide">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} ctaLabel="Read article" />
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">Coming next</p>
          <h2>Destinations can become the community atlas.</h2>
        </div>
        <p>
          The structure is ready for country pages, city articles, neighborhood
          notes, hotel shortlists, lower-impact route ideas, and member-only
          edits once the audience signals what they need.
        </p>
        <Link className="button dark" href="/travel-guides">
          Browse Portugal guides
        </Link>
      </section>
    </main>
  );
}
