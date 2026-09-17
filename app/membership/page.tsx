import type { Metadata } from "next";
import { CommunityView } from "../community-view";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Altrove community. Letters from the journal — itineraries, recommendations, and notes on travelling more sustainably.",
  alternates: {
    canonical: "https://altrove.studio/community",
  },
};

/** Renders the community page so an older /community → /membership redirect cannot loop. */
export default function MembershipAliasPage() {
  return <CommunityView />;
}
