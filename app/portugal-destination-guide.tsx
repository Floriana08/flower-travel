import Link from "next/link";
import {
  ItineraryCard,
  NewsletterBand,
  SectionHeading,
} from "./components";
import {
  FlorNote,
  PullQuote,
  TrustBadgeRow,
} from "./editorial-components";
import { getDestination, guides, itineraries } from "./data";
import { portugalGuide } from "./portugal-content";

export function PortugalDestinationGuide() {
  const destination = getDestination("portugal");
  const featuredItinerary = itineraries.find(
    (item) => item.slug === portugalGuide.featuredItinerarySlug,
  );
  const featuredStory = guides.find(
    (item) => item.slug === portugalGuide.featuredStorySlug,
  );
  const relatedItineraries = itineraries.filter((item) =>
    ["portugal-by-train", "lisbon-food-tour", "porto-wine-day"].includes(
      item.slug,
    ),
  );
  const relatedStories = guides.filter((item) =>
    ["where-to-stay-lisbon", "madeira-first-timers"].includes(item.slug),
  );

  if (!destination) return null;

  const touristDestinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Portugal",
    description: portugalGuide.introParagraphs[0],
    image: destination.image,
    touristType: ["Slow travel", "Food travel", "Rail travel"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://flowertravel.studio/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: "https://flowertravel.studio/destinations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portugal",
        item: "https://flowertravel.studio/destinations/portugal",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([touristDestinationSchema, breadcrumbSchema]),
        }}
      />

      <section className="portugal-hero-block section-shell">
        <div className="portugal-hero-copy">
          <p className="eyebrow">{portugalGuide.heroEyebrow}</p>
          <h1>{portugalGuide.heroTitle}</h1>
          <TrustBadgeRow
            items={[
              "Based on first-hand travel",
              `Updated ${portugalGuide.lastUpdated}`,
              "Independent recommendations",
            ]}
          />
          {portugalGuide.heroLede.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className="destination-hero-actions">
            <Link className="button dark" href="#editorial-intro">
              Start reading
            </Link>
            <Link className="button ghost" href="#places-to-stay">
              Places to stay
            </Link>
          </div>
        </div>
        <div className="portugal-hero-media">
          <img src={destination.image} alt={destination.alt} />
        </div>
      </section>

      <section
        className="section-shell destination-intro"
        id="editorial-intro"
      >
        <div className="destination-intro-grid">
          <aside className="destination-glance" id="at-a-glance">
            <p className="eyebrow">At a glance</p>
            <h2>Travel snapshot</h2>
            <dl className="portugal-glance-list">
              {portugalGuide.glance.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <strong>{item.value}</strong>
                    {item.detail ? <span>{item.detail}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="story-copy destination-intro-copy">
            <SectionHeading
              eyebrow="Editorial introduction"
              title={portugalGuide.introTitle}
            />
            {portugalGuide.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <PullQuote>
              The best version of Portugal is rarely the one that tries to do
              everything.
            </PullQuote>
          </div>
        </div>
      </section>

      <section className="section-shell tinted" id="flors-pick">
        <FlorNote title="Flor’s Pick">
          <h2>{portugalGuide.florPick.title}</h2>
          <p>{portugalGuide.florPick.body}</p>
          {portugalGuide.florPick.href ? (
            <Link className="text-link" href={portugalGuide.florPick.href}>
              {portugalGuide.florPick.cta}
            </Link>
          ) : null}
        </FlorNote>
      </section>

      {featuredItinerary ? (
        <section className="section-shell" id="featured-itinerary">
          <SectionHeading
            eyebrow="Featured itinerary"
            title={featuredItinerary.title}
          >
            <p>{featuredItinerary.summary}</p>
          </SectionHeading>
          <div className="featured-itinerary-solo">
            <ItineraryCard itinerary={featuredItinerary} ctaLabel="Open route" />
          </div>
        </section>
      ) : null}

      {featuredStory ? (
        <section className="section-shell tinted" id="latest-story">
          <SectionHeading eyebrow="Latest journal story" title={featuredStory.title}>
            <p>{featuredStory.excerpt}</p>
          </SectionHeading>
          <article className="featured-story-row">
            <img src={featuredStory.image} alt={featuredStory.alt} />
            <div>
              <p className="story-card-meta">
                <span>{featuredStory.category}</span>
                <span>{featuredStory.readTime}</span>
              </p>
              <Link
                className="button dark"
                href={`/travel-guides/${featuredStory.slug}`}
              >
                Read the story
              </Link>
            </div>
          </article>
        </section>
      ) : null}

      <section className="section-shell tinted" id="places-to-stay">
        <SectionHeading eyebrow="Places to stay" title="Where I would base myself" />
        <div className="recommendation-list">
          {portugalGuide.stays.map((stay) => (
            <article key={stay.name}>
              <p className="eyebrow">{stay.area}</p>
              <h3>{stay.name}</h3>
              <p>{stay.note}</p>
              {stay.href ? (
                <Link className="text-link" href={stay.href}>
                  Related guide
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="restaurants">
        <SectionHeading
          eyebrow="Restaurants and cafés"
          title="Tables worth planning around"
        />
        <div className="recommendation-list compact">
          {portugalGuide.restaurants.map((place) => (
            <article key={place.name}>
              <p className="eyebrow">
                {place.area} · {place.kind === "cafe" ? "Café" : "Restaurant"}
              </p>
              <h3>{place.name}</h3>
              <p>{place.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="regions">
        <SectionHeading
          eyebrow="Neighbourhoods and regions"
          title="Choose one Portugal at a time"
        />
        <div className="region-link-grid">
          {portugalGuide.regions.map((region) => (
            <article key={region.name}>
              <h3>
                {region.href ? (
                  <Link href={region.href}>{region.name}</Link>
                ) : (
                  region.name
                )}
              </h3>
              <p>{region.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="itineraries">
        <SectionHeading
          eyebrow="Suggested routes"
          title="Itineraries worth building a trip around"
        />
        <div className="itinerary-grid wide">
          {relatedItineraries.map((itinerary) => (
            <ItineraryCard
              key={itinerary.slug}
              itinerary={itinerary}
              ctaLabel="View itinerary"
            />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="related-stories">
        <SectionHeading eyebrow="Related stories" title="Keep reading" />
        <div className="destination-article-grid">
          {relatedStories.map((story) => (
            <Link
              className="destination-article-card"
              key={story.slug}
              href={`/travel-guides/${story.slug}`}
            >
              <img src={story.image} alt={story.alt} loading="lazy" />
              <div className="card-body">
                <div className="meta-line">
                  <span>{story.category}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterBand
        title="Join the Altrove Club"
        description="Every month: one carefully planned route, one hotel worth remembering, one restaurant worth travelling for, and notes that do not always make the website."
        footnote="No daily emails. Just thoughtful travel inspiration and practical ideas."
      />
    </>
  );
}
