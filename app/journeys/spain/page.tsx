import { redirect } from "next/navigation";

/** Country hubs now live under Destinations. Keep SEO equity via redirect. */
export default function SpainJourneysRedirect() {
  redirect("/destinations/spain");
}
