import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** The Journal now lives at /journal. Keep SEO equity via redirect. */
export default async function TravelGuidesMoodRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/journal/mood/${slug}`);
}
