import { redirect } from "next/navigation";

/** Consultations are now part of Plan with Altrove. Keep SEO equity via redirect. */
export default function TravelConsultationsRedirect() {
  redirect("/plan-a-trip");
}
