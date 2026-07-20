import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ItineraryCard, NewsletterBand } from "../../components";
import { itineraries, routeDetails, site } from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getRoute(slug: string) {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

function getRouteDetail(slug: string) {
  return routeDetails.find((detail) => detail.slug === slug);
}

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  const detail = getRouteDetail(slug);

  if (!route || !detail) {
    return {};
  }

  return {
    title: route.title,
    description: detail.intro,
    openGraph: {
      title: `${route.title} | ${site.name}`,
      description: detail.intro,
      type: "article",
      images: [
        {
          url: route.image,
          width: 1600,
          height: 1067,
          alt: route.alt,
        },
      ],
    },
  };
}

export default async function RouteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRoute(slug);
  const detail = getRouteDetail(slug);

  if (!route || !detail) {
    notFound();
  }

  const relatedRoutes = itineraries
    .filter((itinerary) => itinerary.slug !== route.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: route.title,
    description: detail.intro,
    image: route.image,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://flowertravel.studio/logo-altrove.png",
      },
    },
    mainEntityOfPage: `https://flowertravel.studio/routes/${route.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="article-page route-page">
        <header className="article-hero">
          <div className="article-hero-copy reveal">
            <Link className="article-back-link" href="/routes">
              Routes
            </Link>
            <p className="eyebrow">{route.pace}</p>
            <h1>{route.title}</h1>
            <p className="article-dek">{detail.intro}</p>
            <div className="article-meta">
              <span>{route.days}</span>
              <span>{route.region}</span>
              <span>{route.bestFor}</span>
            </div>
          </div>
          <figure className="article-hero-image reveal delay-1">
            <img src={route.image} alt={route.alt} />
          </figure>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Route summary">
            <div className="article-panel">
              <h2>Route rhythm</h2>
              <p>{detail.rhythm}</p>
            </div>
            <div className="article-panel">
              <h2>Lower-impact angle</h2>
              <p>{detail.footprint}</p>
            </div>
          </aside>

          <div className="article-body">
            <section>
              <h2>Route at a glance</h2>
              <div className="route-line large" aria-label={`Route for ${route.title}`}>
                {route.route.map((stop) => (
                  <span key={stop}>{stop}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>Suggested flow</h2>
              <div className="route-day-list">
                {detail.days.map((day) => (
                  <article className="route-day" key={`${day.label}-${day.place}`}>
                    <p className="eyebrow">{day.label}</p>
                    <h3>{day.place}</h3>
                    <p>{day.plan}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2>Planning notes</h2>
              <ul>
                {detail.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">More route ideas</p>
          <h2>Keep exploring the route library.</h2>
        </div>
        <div className="itinerary-grid">
          {relatedRoutes.map((relatedRoute) => (
            <ItineraryCard key={relatedRoute.slug} itinerary={relatedRoute} />
          ))}
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
