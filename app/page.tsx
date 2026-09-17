import type { Metadata } from "next";
import Link from "next/link";
import { guides, site } from "./data";
import { NewsletterForm } from "./newsletter-form";
import { studioPositioning } from "./membership-config";
import { studioCountries } from "./studio-structure";
import { StudioNewsletter } from "./studio-components";
import { lisbonSampleTrip } from "./sample-trips";
import { unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  description: studioPositioning.short,
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Travel blog for slower, sustainable trips",
    description: studioPositioning.short,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Warm afternoon light on a Mediterranean coastal street",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: "https://altrove.studio/",
      description: site.studioLine,
      email: site.email,
    },
    {
      "@type": "Blog",
      name: "Altrove",
      url: "https://altrove.studio/",
      description: site.studioLine,
    },
  ],
};

const latestSlugs = [
  "where-to-eat-lisbon",
  "where-to-stay-lisbon",
  "sustainable-travel-basics",
  "rome-food-walk",
  "train-travel-europe",
] as const;

const latestPosts = latestSlugs
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((post): post is (typeof guides)[number] => Boolean(post));

const [featuredPost, ...morePosts] = latestPosts;

export default function Home() {
  return (
    <main className="home-blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <p className="blog-dispatch">
        New this week: where to eat in Lisbon — skip the obvious list
      </p>

      {featuredPost ? (
        <article className="blog-feature">
          <Link
            className="blog-feature-media"
            href={`/journal/${featuredPost.slug}`}
            aria-label={featuredPost.title}
          >
            <img
              src={featuredPost.image}
              srcSet={unsplashSrcSet(featuredPost.image)}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt={featuredPost.alt}
            />
          </Link>
          <div className="blog-feature-copy">
            <p className="blog-meta">
              {featuredPost.category} · {featuredPost.destination} ·{" "}
              {featuredPost.date}
            </p>
            <h1>
              Where to eat in <em>Lisbon</em>
            </h1>
            <p>{featuredPost.excerpt}</p>
            <Link className="button dark" href={`/journal/${featuredPost.slug}`}>
              Read the post
            </Link>
          </div>
        </article>
      ) : null}

      <section className="blog-latest" id="journal">
        <div className="blog-section-head">
          <h2>Latest posts</h2>
          <Link className="text-link" href="/journal">
            All posts
          </Link>
        </div>
        <div className="blog-post-grid">
          {morePosts.map((post) => (
            <article key={post.slug} className="blog-post-card">
              <Link href={`/journal/${post.slug}`}>
                <img
                  src={post.image}
                  srcSet={unsplashSrcSet(post.image)}
                  sizes="(max-width: 900px) 100vw, 30vw"
                  alt={post.alt}
                  loading="lazy"
                />
                <p className="blog-meta">
                  {post.category} · {post.date}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-places" id="destinations">
        <div className="blog-section-head">
          <h2>Where we write</h2>
          <Link className="text-link" href="/destinations">
            All places
          </Link>
        </div>
        <p className="blog-section-dek">
          Portugal, Italy and Spain — not the whole world. The posts get
          better when we stay with a place.
        </p>
        <div className="blog-place-row">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="blog-place"
              href={`/destinations/${country.slug}`}
            >
              <img
                src={country.image}
                srcSet={unsplashSrcSet(country.image)}
                sizes="(max-width: 900px) 100vw, 32vw"
                alt={country.alt}
                loading="lazy"
              />
              <h3>{country.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-trip" id="itineraries">
        <Link className="blog-trip-card" href="/trips/lisbon">
          <img
            src={lisbonSampleTrip.heroImage}
            srcSet={unsplashSrcSet(lisbonSampleTrip.heroImage)}
            sizes="(max-width: 900px) 100vw, 48vw"
            alt={lisbonSampleTrip.heroAlt}
            loading="lazy"
          />
          <div>
            <p className="blog-meta">Itinerary · 4 days · Lisbon</p>
            <h2>
              A weekend in <em>Lisbon</em>
            </h2>
            <p>
              One neighbourhood, a short list of tables, and a pace that leaves
              room to walk. Use it as a starting point — not a booking.
            </p>
            <span className="text-link">Read the itinerary</span>
          </div>
        </Link>
        <p className="blog-section-link">
          <Link className="text-link" href="/itineraries">
            More itineraries
          </Link>
        </p>
      </section>

      <section className="blog-note" id="sustainable">
        <p className="blog-meta">How we travel</p>
        <h2>
          Trains when they earn the day. Fewer hotel moves. Lunch that belongs
          to the neighbourhood.
        </h2>
        <p>
          Sustainable travel, for us, is mostly the shape of the trip — not a
          lecture. We write the practical version.
        </p>
        <Link
          className="text-link"
          href="/journal/sustainable-travel-basics"
        >
          How to travel more sustainably
        </Link>
      </section>

      <StudioNewsletter
        id="letters"
        title="New posts, in your inbox"
        description="When a new itinerary or a hotel note is ready, it goes out as a letter. Occasional. Easy to leave."
      >
        <NewsletterForm buttonLabel="Send me new posts" />
      </StudioNewsletter>
    </main>
  );
}
