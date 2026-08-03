import { redirect } from "next/navigation";
import { isStudioCountrySlug } from "../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Destinations now live inside Journeys. Keep SEO equity via redirects. */
export default async function DestinationDetailRedirect({ params }: PageProps) {
  const { slug } = await params;

  if (isStudioCountrySlug(slug)) {
    redirect(`/journeys/${slug}`);
  }

  if (slug === "lisbon" || slug === "madeira" || slug === "porto") {
    redirect("/journeys/portugal");
  }

  if (
    slug === "naples" ||
    slug === "amalfi-coast" ||
    slug === "rome" ||
    slug === "milan" ||
    slug === "sicily"
  ) {
    redirect("/journeys/italy");
  }

  if (slug === "andalusia" || slug === "barcelona" || slug === "madrid") {
    redirect("/journeys/spain");
  }

  redirect("/journeys");
}
