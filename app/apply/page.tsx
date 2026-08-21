import type { Metadata } from "next";
import { FoundingApplicationPage } from "../founding-application-page";

export const metadata: Metadata = {
  title: "Become a Founding Member",
  description:
    "Founding Membership is currently complimentary and offered to a limited number of travellers. Tell us a little about how you travel and what you're planning next.",
  alternates: {
    canonical: "https://altrove.studio/apply",
  },
};

export default function ApplyPage() {
  return <FoundingApplicationPage />;
}
