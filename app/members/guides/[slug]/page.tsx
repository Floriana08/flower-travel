import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoGuides } from "../../demo-data";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = demoGuides.find((item) => item.slug === slug);
  return {
    title: guide?.title ?? "Guide",
    robots: { index: false, follow: false },
  };
}

export default async function MemberGuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = demoGuides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <main className="members-page members-guide-detail">
      <p className="eyebrow">{guide.destination}</p>
      <h1 className="display-title">{guide.title}</h1>
      <p className="lede">{guide.summary}</p>
      <figure className="members-guide-hero">
        <img src={guide.coverImage} alt="" />
      </figure>
      <div className="members-prose">
        <p>
          This is a placeholder for the full member guide. Published Altrove
          notes for stay, eat, drink and wander will live here — inside the
          platform, not as a static PDF.
        </p>
        <p>
          Meanwhile, explore the public journal and the interactive sample trip.
        </p>
      </div>
      <p className="home-section-link">
        <Link className="text-link" href="/members/maps">
          Open the map
        </Link>
        {" · "}
        <Link className="text-link" href="/trips/lisbon">
          See the Lisbon sample trip
        </Link>
      </p>
    </main>
  );
}
