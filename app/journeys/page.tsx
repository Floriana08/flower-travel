import { redirect } from "next/navigation";

/** Journeys now live inside Destinations. Keep SEO equity via redirect. */
export default function JourneysIndexRedirect() {
  redirect("/destinations");
}
