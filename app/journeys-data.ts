export type JourneyStatus = "available" | "in-development" | "custom";

export type Journey = {
  slug: string;
  title: string;
  destination: string;
  destinationSlug?: string;
  duration: string;
  summary: string;
  status: JourneyStatus;
  statusLabel: string;
  image: string;
  alt: string;
  overview: string[];
  forWhom: string[];
  bestTime: string;
  route: string[];
  /** Existing SEO route detail, if any */
  routeSlug?: string;
  hotels: { name: string; note: string }[];
  experiences: string[];
  practicalNotes: string[];
  /** Signature journey — shown first, larger treatment */
  signature?: boolean;
  /** Included in the public catalogue (max three) */
  catalogue?: boolean;
};

/**
 * Curated Altrove journeys. Draft items use intentional status labels.
 * Do not invent partnerships, prices or availability.
 */
export const journeys: Journey[] = [
  {
    slug: "portugal-by-train",
    title: "Portugal by Train",
    destination: "Portugal",
    destinationSlug: "portugal",
    duration: "10 days",
    summary:
      "Lisbon to Porto by rail — tiled stations, river light, one Atlantic pause.",
    status: "available",
    statusLabel: "Signature",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
    alt: "A train moving through a scenic railway landscape",
    overview: [
      "Lisbon to Porto by rail, with room for Coimbra or a Douro day — paced so the journey itself becomes part of the trip.",
      "The most complete mainland Portugal route in the collection: neighbourhood bases, train light, and time to linger.",
    ],
    forWhom: [
      "First Portugal trips",
      "Travellers who prefer trains to rental cars",
      "Anyone who wants few hotel changes",
    ],
    bestTime: "March–June and September–November",
    route: ["Porto", "Coimbra", "Lisbon", "Cascais"],
    routeSlug: "portugal-by-train",
    hotels: [
      {
        name: "Lisbon and Porto bases",
        note: "Start with the Portugal collection and Lisbon stay notes for neighbourhood direction worth waking up in.",
      },
    ],
    experiences: [
      "Douro day from Porto",
      "Lisbon food morning",
      "Cascais Atlantic pause",
    ],
    practicalNotes: [
      "Open the full day-by-day for pacing detail.",
      "Ask us to shape this corridor around your dates via Plan a Trip.",
    ],
    signature: true,
    catalogue: true,
  },
  {
    slug: "lisbon-slowly",
    title: "Lisbon, Slowly",
    destination: "Lisbon",
    destinationSlug: "lisbon",
    duration: "4 days",
    summary:
      "Neighbourhood mornings, long lunches, and a city taken at walking pace.",
    status: "in-development",
    statusLabel: "Currently Curating",
    image:
      "https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1600&q=80",
    alt: "Lisbon’s yellow Tram 28 on a narrow tiled street",
    overview: [
      "A short stay shaped around one calm neighbourhood base, long lunches and viewpoint mornings that do not fight the heat or the crowds.",
      "The itinerary is being written from first-hand time in Lisbon, with hotel and restaurant notes that favour character over the obvious tourist strip.",
    ],
    forWhom: [
      "First-time visitors who dislike rushing",
      "Couples and solo travellers",
      "Anyone who wants food and neighbourhood life to set the pace",
    ],
    bestTime: "March–June and September–November",
    route: [
      "Graça or Estrela base",
      "Baixa and Chiado",
      "Alfama morning",
      "Cascais half-day optional",
    ],
    routeSlug: "lisbon-food-tour",
    hotels: [
      {
        name: "A quiet hill neighbourhood base",
        note: "Prefer Graça, Estrela or a calm corner of Príncipe Real over the loudest Baixa blocks. Specific hotel shortlists will publish with the finished journey.",
      },
    ],
    experiences: [
      "Neighbourhood tasca lunch",
      "Pastelaria before a miradouro",
      "One design or azulejo museum, not three",
    ],
    practicalNotes: [
      "This journey is still being curated. Enquire if you are planning Lisbon dates.",
      "Trams and walking cover most of the city; skip driving in the centre.",
    ],
    catalogue: true,
  },
  {
    slug: "naples-amalfi",
    title: "Naples and the Amalfi Coast",
    destination: "Campania",
    destinationSlug: "amalfi-coast",
    duration: "7–9 days",
    summary:
      "Flor’s home region — city intensity, then one coastal base and ferry light.",
    status: "in-development",
    statusLabel: "Journey concept",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    alt: "Cliffside villages on the Amalfi Coast above blue Mediterranean water",
    overview: [
      "Naples and the Amalfi Coast belong together when you give each room to breathe: a neighbourhood base in the city, then one coastal bed — not a different hotel every night.",
      "Skip the five-town sprint. Capri, Pompeii and the full Amalfi strip on the same short trip will flatten the week. Pick two coastal focuses, use ferries when you can, and leave evenings free.",
      "This is how Altrove paces Campania: meals that shape the day, boats over summer bus stacks, and height (Ravello) when the shore feels crowded.",
    ],
    forWhom: [
      "Travellers who want both city and coast",
      "Food-led trips and honeymoons",
      "Return visitors ready to go beyond Positano-only plans",
    ],
    bestTime: "May–June and September",
    route: [
      "Naples",
      "Sorrento or Salerno base",
      "Positano or Amalfi day",
      "Ravello quieter day",
    ],
    routeSlug: "amalfi-coast-tours",
    hotels: [
      {
        name: "One Naples neighbourhood, one coast base",
        note: "Two hotel changes at most. Named properties will be listed when the journey is ready.",
      },
    ],
    experiences: [
      "Neighbourhood pizza and pastry in Naples",
      "Ferry light along the coast",
      "Ravello gardens or a half-day Path of the Gods",
    ],
    practicalNotes: [
      "Pick two coastal focuses, not five. The coast punishes overambition in summer.",
      "Boats often beat buses for both views and sanity.",
      "Heat and peak crowds change the plan — build weather-flex days.",
    ],
    catalogue: true,
  },
  {
    slug: "northern-spain",
    title: "Northern Spain",
    destination: "Spain",
    destinationSlug: "spain",
    duration: "8–10 days",
    summary:
      "Food, landscape and character across a route designed for travellers who prefer depth over checklists.",
    status: "in-development",
    statusLabel: "Currently Curating",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1600&q=84",
    alt: "Warm evening light over a historic Spanish city square",
    overview: [
      "Cities, coast and food culture across northern Spain — shaped for travellers who prefer depth over checklists.",
      "The route is being researched into a finished Altrove journey, with room for one slower town pause.",
    ],
    forWhom: [
      "Food travellers",
      "Road or rail-curious visitors",
      "Second Spain trips beyond Madrid and Barcelona defaults",
    ],
    bestTime: "May–June and September–October",
    route: ["To be confirmed as research continues"],
    hotels: [
      {
        name: "Shortlist forthcoming",
        note: "Recommendations will follow real stays and careful research.",
      },
    ],
    experiences: ["Regional food focus", "Landscape days", "One slower town pause"],
    practicalNotes: [
      "Join the list to hear when this journey is ready.",
    ],
    catalogue: false,
  },
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}

/** Public catalogue: signature first, then up to two supporting journeys. */
export function getCatalogueJourneys() {
  const catalogue = journeys.filter((journey) => journey.catalogue);
  const signature = catalogue.filter((journey) => journey.signature);
  const supporting = catalogue.filter((journey) => !journey.signature);
  return [...signature, ...supporting].slice(0, 3);
}

/** @deprecated Prefer getCatalogueJourneys */
export function getHomepageJourneys() {
  return getCatalogueJourneys();
}

export function getJourneysByStatus(status: JourneyStatus) {
  return journeys.filter((journey) => journey.status === status);
}
