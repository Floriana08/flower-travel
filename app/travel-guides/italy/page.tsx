import { redirect } from "next/navigation";

/** The Journal now lives at /journal. Keep SEO equity via redirect. */
export default function TravelGuidesItalyRedirect() {
  redirect("/journal/italy");
}
