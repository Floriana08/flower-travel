import { getDestination, guides } from "./data";
import { getCatalogueJourneys, journeys, type Journey } from "./journeys-data";

export type StudioCountrySlug = "italy" | "portugal" | "spain";

export type ItineraryDay = {
  label: string;
  title: string;
  note?: string;
};

export type ExampleItinerary = {
  title: string;
  duration: string;
  lede: string;
  days: ItineraryDay[];
};

export type StudioCountry = {
  slug: StudioCountrySlug;
  title: string;
  short: string;
  image: string;
  alt: string;
  hubLede: string;
  example: ExampleItinerary;
  articleSlugs: string[];
  recommendations: string[];
};

/** The three destinations that define Altrove’s public offer. */
export const studioCountries: StudioCountry[] = [
  {
    slug: "italy",
    title: "Italy",
    short: "City intensity, coastal light, and food that sets the pace.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
    alt: "Cliffside villages on the Amalfi Coast above blue water",
    hubLede:
      "Italy rewards fewer bases and more time at the table. Altrove’s Italy work starts in Campania — Naples and the coast Flor knows personally — then expands only when a route has been walked, stayed and edited.",
    example: {
      title: "Naples and the Coast",
      duration: "6 days",
      lede: "A short Campania rhythm: arrive in the city, settle on the coast, leave room for the sea.",
      days: [
        { label: "Day 1", title: "Arrive in Naples", note: "One neighbourhood base. Dinner nearby." },
        { label: "Day 2–4", title: "Stay in Positano", note: "One coastal base — not five towns." },
        { label: "Day 5", title: "Boat to Capri", note: "A ferry day, back to the same bed." },
        { label: "Day 6", title: "Return to Naples", note: "A last morning walk before the flight." },
      ],
    },
    articleSlugs: ["rome-food-walk"],
    recommendations: [
      "Two hotel changes at most",
      "Ferries over summer bus stacks",
      "One coastal focus, not a checklist",
    ],
  },
  {
    slug: "portugal",
    title: "Portugal",
    short: "Rail days, tiled cities, and Atlantic pauses between them.",
    image:
      "https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1400&q=80",
    alt: "Lisbon’s yellow Tram 28 on a narrow tiled street",
    hubLede:
      "Portugal is Altrove’s clearest mainland chapter so far — Lisbon to Porto by train, neighbourhood bases, and the kind of pacing that makes a first visit feel lived-in rather than rushed.",
    example: {
      title: "Portugal by Train",
      duration: "10 days",
      lede: "Lisbon to Porto with room for one Atlantic pause — fewer hotels, more attention.",
      days: [
        { label: "Days 1–4", title: "Lisbon base", note: "Neighbourhood mornings and long lunches." },
        { label: "Day 5", title: "Cascais pause", note: "Atlantic air without changing hotels." },
        { label: "Days 6–7", title: "Train north", note: "Coimbra or a direct Lisbon–Porto day." },
        { label: "Days 8–10", title: "Porto and Douro", note: "River light, one day in the valley." },
      ],
    },
    articleSlugs: ["where-to-stay-lisbon", "madeira-first-timers"],
    recommendations: [
      "Rail before rental cars on the mainland",
      "One Lisbon neighbourhood, not three hotels",
      "Madeira as its own week, not a side trip",
    ],
  },
  {
    slug: "spain",
    title: "Spain",
    short: "Food culture, warm cities, and routes still being researched with care.",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80",
    alt: "A warm Spanish street with historic architecture",
    hubLede:
      "Spain enters the Altrove library when a route has enough first-hand texture to stand behind. The working direction is food, landscape and character — beyond the default city checklist.",
    example: {
      title: "A Slow Spain Sketch",
      duration: "8 days",
      lede: "An editorial outline for how Altrove thinks about Spain — still being researched into a finished journey.",
      days: [
        { label: "Days 1–3", title: "One city base", note: "Markets, neighbourhood lunches, evening walks." },
        { label: "Days 4–6", title: "A second region", note: "Train or short drive — not a daily hop." },
        { label: "Day 7", title: "Landscape day", note: "Coast, countryside or wine country." },
        { label: "Day 8", title: "Return slowly", note: "A soft last morning before departure." },
      ],
    },
    articleSlugs: [],
    recommendations: [
      "Depth over five-city circuits",
      "Food as the organising principle",
      "Shoulder season whenever possible",
    ],
  },
];

export type JournalMoodSlug =
  | "city-breaks"
  | "slow-travel"
  | "coastal-escapes"
  | "food-and-wine"
  | "road-trips"
  | "weekend-getaways";

export const journalMoods: {
  slug: JournalMoodSlug;
  title: string;
  description: string;
  articleSlugs: string[];
}[] = [
  {
    slug: "city-breaks",
    title: "City Breaks",
    description: "Neighbourhood bases, walkable days, and cities taken at human pace.",
    articleSlugs: ["solo-paris-weekend", "rome-food-walk", "where-to-stay-lisbon"],
  },
  {
    slug: "slow-travel",
    title: "Slow Travel",
    description: "Fewer places, longer stays, and routes that leave room to return.",
    articleSlugs: [
      "choosing-a-honeymoon-route",
      "train-travel-europe",
      "patagonia-without-rushing",
    ],
  },
  {
    slug: "coastal-escapes",
    title: "Coastal Escapes",
    description: "Islands, ferry light, and shores that reward an unhurried week.",
    articleSlugs: ["madeira-first-timers", "galapagos-twelve-days"],
  },
  {
    slug: "food-and-wine",
    title: "Food & Wine",
    description: "Markets, long lunches, and the meals worth planning a day around.",
    articleSlugs: ["rome-food-walk", "where-to-stay-lisbon"],
  },
  {
    slug: "road-trips",
    title: "Road Trips",
    description: "Drives with weather-flex days and bases that do the hard work.",
    articleSlugs: ["patagonia-without-rushing", "costa-rica-wildlife-loop"],
  },
  {
    slug: "weekend-getaways",
    title: "Weekend Getaways",
    description: "Short trips that still feel complete — one city, one rhythm.",
    articleSlugs: ["solo-paris-weekend", "carry-on-packing-edit"],
  },
];

const countryGuideMatch: Record<StudioCountrySlug, string[]> = {
  italy: ["Rome", "Italy", "Naples", "Amalfi", "Milan", "Sicily"],
  portugal: ["Lisbon", "Porto", "Portugal", "Madeira", "Algarve"],
  spain: ["Spain", "Andalusia", "Barcelona", "Madrid", "Basque"],
};

export function getStudioCountry(slug: string) {
  return studioCountries.find((country) => country.slug === slug);
}

export function isStudioCountrySlug(slug: string): slug is StudioCountrySlug {
  return studioCountries.some((country) => country.slug === slug);
}

/** Map legacy destination slugs into the Journeys hub experience. */
export function getDestinationHubHref(slug?: string) {
  if (!slug) return "/journeys";
  if (isStudioCountrySlug(slug)) return `/journeys/${slug}`;
  if (slug === "lisbon" || slug === "madeira" || slug === "porto") {
    return "/journeys/portugal";
  }
  if (
    slug === "naples" ||
    slug === "amalfi-coast" ||
    slug === "rome" ||
    slug === "milan" ||
    slug === "sicily"
  ) {
    return "/journeys/italy";
  }
  if (slug === "andalusia" || slug === "barcelona" || slug === "madrid") {
    return "/journeys/spain";
  }
  return "/journeys";
}

export function getStudioCountryDestination(slug: StudioCountrySlug) {
  return getDestination(slug);
}

export function getJourneysForCountry(slug: StudioCountrySlug): Journey[] {
  const related = new Set(
    journeys.filter((journey) => {
      if (slug === "italy") {
        return (
          journey.destinationSlug === "italy" ||
          journey.destinationSlug === "amalfi-coast" ||
          journey.destinationSlug === "naples" ||
          journey.destinationSlug === "rome" ||
          /italy|naples|amalfi|rome|campania/i.test(
            `${journey.destination} ${journey.title}`,
          )
        );
      }
      if (slug === "portugal") {
        return (
          journey.destinationSlug === "portugal" ||
          journey.destinationSlug === "lisbon" ||
          journey.destinationSlug === "madeira" ||
          /portugal|lisbon|porto|madeira/i.test(
            `${journey.destination} ${journey.title}`,
          )
        );
      }
      return (
        journey.destinationSlug === "spain" ||
        journey.destinationSlug === "andalusia" ||
        /spain|andalusia/i.test(`${journey.destination} ${journey.title}`)
      );
    }),
  );
  return [...related];
}

export function getCatalogueForCountry(slug: StudioCountrySlug) {
  const catalogueSlugs = new Set(getCatalogueJourneys().map((j) => j.slug));
  return getJourneysForCountry(slug).filter((journey) =>
    catalogueSlugs.has(journey.slug),
  );
}

export function getGuidesForCountry(slug: StudioCountrySlug) {
  const country = getStudioCountry(slug);
  const curated = (country?.articleSlugs ?? [])
    .map((articleSlug) => guides.find((guide) => guide.slug === articleSlug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

  if (curated.length) return curated;

  const needles = countryGuideMatch[slug];
  return guides
    .filter((guide) =>
      needles.some((needle) =>
        guide.destination.toLowerCase().includes(needle.toLowerCase()),
      ),
    )
    .slice(0, 6);
}

export function getJournalMood(slug: string) {
  return journalMoods.find((mood) => mood.slug === slug);
}

export function getGuidesForMood(slug: JournalMoodSlug) {
  const mood = getJournalMood(slug);
  if (!mood) return [];
  return mood.articleSlugs
    .map((articleSlug) => guides.find((guide) => guide.slug === articleSlug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
}

export function storiesFromSlugs(slugs: readonly string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
}
