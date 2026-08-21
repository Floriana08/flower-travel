import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DestinationHub } from "../../destination-hub";
import { getStudioCountry, isStudioCountrySlug } from "../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "italy" }, { slug: "portugal" }, { slug: "spain" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getStudioCountry(slug);
  if (!country) return {};

  return {
    title: country.title,
    description: country.hubLede,
    alternates: {
      canonical: `https://altrove.studio/destinations/${country.slug}`,
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (isStudioCountrySlug(slug)) {
    const country = getStudioCountry(slug)!;
    return <DestinationHub country={country} />;
  }

  if (slug === "madeira" || slug === "porto") {
    redirect("/destinations/portugal");
  }

  if (
    slug === "naples" ||
    slug === "amalfi-coast" ||
    slug === "rome" ||
    slug === "milan" ||
    slug === "sicily"
  ) {
    redirect("/destinations/italy");
  }

  if (slug === "andalusia" || slug === "barcelona" || slug === "madrid") {
    redirect("/destinations/spain");
  }

  redirect("/destinations");
}
