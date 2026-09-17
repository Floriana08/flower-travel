import type { Metadata } from "next";
import { CommunityView } from "../community-view";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Altrove community. Letters from the journal — itineraries, recommendations, and notes on travelling more sustainably. Occasional, without noise.",
  alternates: {
    canonical: "https://altrove.studio/community",
  },
};

export default function CommunityPage() {
  return <CommunityView />;
}
