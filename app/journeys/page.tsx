import type { Metadata } from "next";
import { DestinationItineraryTabs } from "../destination-itinerary-tabs";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Every Altrove itinerary begins with a real journey — hotels, neighbourhoods, restaurants and routes experienced before they are recommended.",
  alternates: {
    canonical: "https://flowertravel.studio/journeys",
  },
};

export default function JourneysPage() {
  return (
    <main className="journeys-studio">
      <header className="section-shell page-top journeys-studio-hero">
        <p className="eyebrow">Journeys</p>
        <h1 className="display-title">
          Every itinerary begins
          <br />
          with a real journey.
        </h1>
        <div className="journeys-studio-lede">
          <p>
            We personally experience the hotels, neighbourhoods, restaurants and
            routes before recommending them. What you read here is not a catalogue
            of packages — it is the shape of travel Altrove stands behind.
          </p>
          <p>
            Choose a destination below to see how an Altrove itinerary moves:
            fewer bases, clearer days, and room for a place to settle in.
          </p>
        </div>
      </header>

      <section
        className="section-shell tinted journeys-studio-examples"
        aria-label="Example itineraries by destination"
      >
        <DestinationItineraryTabs />
      </section>
    </main>
  );
}
