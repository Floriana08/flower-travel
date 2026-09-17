import Link from "next/link";
import { AdSlot } from "./ad-slot";
import { guides } from "./data";
import { NewsletterForm } from "./newsletter-form";
import { StudioNewsletter } from "./studio-components";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";
import type { CityHub } from "./city-pages";

function storiesForCity(city: CityHub) {
  return city.articleSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((story): story is (typeof guides)[number] => Boolean(story));
}

export function CityHubPage({ city }: { city: CityHub }) {
  const posts = storiesForCity(city);
  const featured =
    posts.find((post) => post.slug === city.featuredSlug) ?? posts[0];
  const morePosts = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <main className="home-blog city-blog">
      <p className="blog-dispatch">{city.dispatch}</p>

      <header className="city-hero">
        <div className="city-hero-media">
          <img
            src={city.heroImage}
            srcSet={unsplashSrcSet(city.heroImage)}
            sizes="(max-width: 900px) 100vw, 56vw"
            alt={city.heroAlt}
          />
        </div>
        <div className="city-hero-copy">
          <p className="blog-meta">
            <Link href={`/destinations/${city.countrySlug}`}>{city.country}</Link>
            {" · "}
            city page
          </p>
          <h1>
            <em>{city.title}</em>
          </h1>
          <p>{city.lede}</p>
        </div>
      </header>

      <section className="city-intro">
        {city.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <AdSlot id={`${city.slug}-intro`} format="banner" />

      {featured ? (
        <article className="blog-feature">
          <Link
            className="blog-feature-media"
            href={`/journal/${featured.slug}`}
            aria-label={featured.title}
          >
            <img
              src={featured.image}
              srcSet={unsplashSrcSet(featured.image)}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt={featured.alt}
            />
          </Link>
          <div className="blog-feature-copy">
            <p className="blog-meta">
              {featured.category} · {featured.date}
            </p>
            <h2>
              <Link href={`/journal/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p>{featured.excerpt}</p>
            <Link className="button dark" href={`/journal/${featured.slug}`}>
              Read the post
            </Link>
          </div>
        </article>
      ) : null}

      <section className="city-with-ad" aria-labelledby="city-posts">
        <div>
          <div className="blog-section-head">
            <h2 id="city-posts">More from {city.title}</h2>
            <Link className="text-link" href="/journal">
              All posts
            </Link>
          </div>
          {morePosts.length ? (
            <div className="blog-post-grid">
              {morePosts.map((post) => (
                <article key={post.slug} className="blog-post-card">
                  <Link href={`/journal/${post.slug}`}>
                    <img
                      src={post.image}
                      srcSet={unsplashSrcSet(post.image)}
                      sizes={defaultImageSizes}
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
          ) : (
            <p className="blog-section-dek">
              More posts for {city.title} will land here.
            </p>
          )}
        </div>
        <AdSlot id={`${city.slug}-rail`} format="rectangle" />
      </section>

      <section className="city-short" aria-labelledby="city-take">
        <div>
          <p className="blog-meta">{city.takeHeading}</p>
          <h2 id="city-take">The short version</h2>
          <ul>
            {city.take.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="blog-meta">{city.skipHeading}</p>
          <h2>Skip these</h2>
          <ul>
            {city.skip.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {city.itinerary ? (
        <section className="blog-trip">
          <Link className="blog-trip-card" href={city.itinerary.href}>
            <img
              src={city.itinerary.image}
              srcSet={unsplashSrcSet(city.itinerary.image)}
              sizes="(max-width: 900px) 100vw, 48vw"
              alt={city.itinerary.alt}
              loading="lazy"
            />
            <div>
              <p className="blog-meta">{city.itinerary.kicker}</p>
              <h2>
                {city.itinerary.titleBefore}
                <em>{city.itinerary.emphasis}</em>
              </h2>
              <p>{city.itinerary.excerpt}</p>
              <span className="text-link">Read the itinerary</span>
            </div>
          </Link>
        </section>
      ) : null}

      <StudioNewsletter
        id="letters"
        title={`Going to ${city.title}?`}
        description="New posts for this city go out as a letter. Occasional. Easy to leave."
      >
        <NewsletterForm buttonLabel="Send me new posts" />
      </StudioNewsletter>
    </main>
  );
}
