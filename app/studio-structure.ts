import { getDestination, guides } from "./data";
import { getCatalogueJourneys, getJourney, journeys, type Journey } from "./journeys-data";

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

export type CollectionStatus =
  | "Currently Curating"
  | "In Development"
  | "Opening Next";

export type RegionalCollection = {
  title: string;
  note: string;
  image: string;
  alt: string;
  status?: CollectionStatus;
  href?: string;
};

export type PlaceLoveKind =
  | "Hotels"
  | "Restaurants"
  | "Neighbourhoods"
  | "Experiences";

export type PlaceLove = {
  kind: PlaceLoveKind;
  items: { name: string; note: string }[];
};

export type StudioCountry = {
  slug: StudioCountrySlug;
  title: string;
  short: string;
  image: string;
  alt: string;
  /** Short Altrove POV — how we experience this country */
  hubLede: string;
  featuredJourneySlug: string;
  collections: RegionalCollection[];
  placesWeLove: PlaceLove[];
  /** Max three carefully selected journal stories */
  journalSlugs: string[];
  /** Used by the Journeys index day tabs */
  example: ExampleItinerary;
};

/** The three destinations that define Altrove’s public offer. */
export const studioCountries: StudioCountry[] = [
  {
    slug: "italy",
    title: "Italy",
    short: "City intensity, coastal light, and food that sets the pace.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=84",
    alt: "Cliffside villages on the Amalfi Coast above blue water",
    hubLede:
      "We take Italy slowly — one neighbourhood in the city, one base on the coast, and meals that decide the day. Campania comes first: Naples and the shore Flor knows by heart.",
    featuredJourneySlug: "naples-amalfi",
    collections: [
      {
        title: "Campania",
        note: "Naples energy, then ferry light and one coastal bed.",
        image:
          "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1400&q=80",
        alt: "Colourful boats in a harbour on the Amalfi Coast",
        href: "/journeys/naples-amalfi",
      },
      {
        title: "Tuscany",
        note: "Hill towns and long tables — paced for lingering, not looping.",
        image:
          "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
        alt: "Rolling Tuscan hills at golden hour",
        status: "Currently Curating",
      },
      {
        title: "Sicily",
        note: "Island light, markets, and a coast taken at walking pace.",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=80",
        alt: "Warm light over a Sicilian coastal town",
        status: "In Development",
      },
      {
        title: "Dolomites",
        note: "Mountain air, design hotels, and days shaped by the view.",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
        alt: "Dramatic peaks in the Dolomites",
        status: "Opening Next",
      },
    ],
    placesWeLove: [
      {
        kind: "Hotels",
        items: [
          {
            name: "A Naples neighbourhood base",
            note: "Quiet enough to sleep, close enough to walk to dinner.",
          },
          {
            name: "One coastal stay",
            note: "A single Amalfi or Sorrento bed — not five hotel changes.",
          },
        ],
      },
      {
        kind: "Restaurants",
        items: [
          {
            name: "Neighbourhood pizza",
            note: "The table you’d send a friend to without hesitating.",
          },
          {
            name: "A long coastal lunch",
            note: "Sea air, simple fish, and nowhere else to be.",
          },
        ],
      },
      {
        kind: "Neighbourhoods",
        items: [
          {
            name: "Chiaia or Vomero",
            note: "Lived-in Naples — aperitivo light, evening walks.",
          },
          {
            name: "One coast town",
            note: "Choose a base and day-trip; don’t hop every village.",
          },
        ],
      },
      {
        kind: "Experiences",
        items: [
          {
            name: "Ferry days",
            note: "Boats over summer bus stacks whenever you can.",
          },
          {
            name: "Ravello gardens",
            note: "Height, quiet, and a slower afternoon above the coast.",
          },
        ],
      },
    ],
    journalSlugs: ["rome-food-walk"],
    example: {
      title: "Naples and the Coast",
      duration: "6 days",
      lede: "Arrive in the city. Settle on the coast. Leave room for the sea.",
      days: [
        { label: "Day 1", title: "Arrive in Naples", note: "One neighbourhood base. Dinner nearby." },
        { label: "Day 2–4", title: "Stay in Positano", note: "One coastal base — not five towns." },
        { label: "Day 5", title: "Boat to Capri", note: "A ferry day, back to the same bed." },
        { label: "Day 6", title: "Return to Naples", note: "A last morning walk before the flight." },
      ],
    },
  },
  {
    slug: "portugal",
    title: "Portugal",
    short: "Rail days, tiled cities, and Atlantic pauses between them.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=84",
    alt: "Lisbon tram climbing a steep tiled street",
    hubLede:
      "Portugal is where Altrove feels most at home — Lisbon mornings, train light north, and time left over for the Atlantic. Fewer hotels. More attention.",
    featuredJourneySlug: "portugal-by-train",
    collections: [
      {
        title: "Lisbon",
        note: "A hill neighbourhood, long lunches, and the city at walking pace.",
        image:
          "https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1400&q=80",
        alt: "Lisbon’s yellow Tram 28 on a narrow tiled street",
        href: "/journeys/lisbon-slowly",
      },
      {
        title: "Porto & the Douro",
        note: "River light, tiled stations, and one day in the valley.",
        image:
          "https://images.unsplash.com/photo-1555881407-bb2d4e463a49?auto=format&fit=crop&w=1400&q=80",
        alt: "Ribeira waterfront houses along the Douro in Porto",
        status: "Currently Curating",
      },
      {
        title: "Madeira",
        note: "Its own week — Atlantic cliffs, soft adventure, weather-flex days.",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1400&q=80",
        alt: "Steep green cliffs meeting the Atlantic in Madeira",
        status: "Currently Curating",
      },
      {
        title: "The Alentejo",
        note: "Quiet towns, cork forests, and evenings that refuse to rush.",
        image:
          "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1400&q=80",
        alt: "Golden countryside light over rolling hills",
        status: "In Development",
      },
    ],
    placesWeLove: [
      {
        kind: "Hotels",
        items: [
          {
            name: "A Lisbon hill base",
            note: "Graça, Estrela or a calm corner of Príncipe Real.",
          },
          {
            name: "A Porto riverside stay",
            note: "Close enough to walk; quiet enough to sleep.",
          },
        ],
      },
      {
        kind: "Restaurants",
        items: [
          {
            name: "Neighbourhood tasca",
            note: "The lunch that becomes the day’s main event.",
          },
          {
            name: "Pastelaria before a miradouro",
            note: "Coffee, pastry, then the view — in that order.",
          },
        ],
      },
      {
        kind: "Neighbourhoods",
        items: [
          {
            name: "Graça or Estrela",
            note: "Morning light and evenings that stay local.",
          },
          {
            name: "Cedofeita or Ribeira",
            note: "Porto with character — design shops or river walks.",
          },
        ],
      },
      {
        kind: "Experiences",
        items: [
          {
            name: "Train north",
            note: "Lisbon to Porto with the landscape as the show.",
          },
          {
            name: "Cascais pause",
            note: "Atlantic air without changing hotels.",
          },
        ],
      },
    ],
    journalSlugs: ["where-to-stay-lisbon", "madeira-first-timers", "train-travel-europe"],
    example: {
      title: "Portugal by Train",
      duration: "10 days",
      lede: "Lisbon to Porto with one Atlantic pause — fewer hotels, more attention.",
      days: [
        { label: "Days 1–4", title: "Lisbon base", note: "Neighbourhood mornings and long lunches." },
        { label: "Day 5", title: "Cascais pause", note: "Atlantic air without changing hotels." },
        { label: "Days 6–7", title: "Train north", note: "Coimbra or a direct Lisbon–Porto day." },
        { label: "Days 8–10", title: "Porto and Douro", note: "River light, one day in the valley." },
      ],
    },
  },
  {
    slug: "spain",
    title: "Spain",
    short: "Food, warm cities, and routes curated with care.",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=2000&q=84",
    alt: "A warm Spanish street with historic architecture",
    hubLede:
      "Spain, for us, is food first — one barrio as home, markets that set the morning, and a second region only when the first has had enough time.",
    featuredJourneySlug: "northern-spain",
    collections: [
      {
        title: "Andalusia",
        note: "Courtyards, tapas rhythm, and cities taken without the rush.",
        image:
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1400&q=80",
        alt: "Warm evening light over a historic Spanish square",
        status: "Currently Curating",
      },
      {
        title: "Northern Spain",
        note: "Landscape, character, and a route for travellers who prefer depth.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
        alt: "Green mountains and mist over a northern landscape",
        href: "/journeys/northern-spain",
        status: "Currently Curating",
      },
      {
        title: "Barcelona",
        note: "Neighbourhood days and design hotels — still being edited.",
        image:
          "https://images.unsplash.com/photo-1583422403309-80447b2c0d0f?auto=format&fit=crop&w=1400&q=80",
        alt: "Barcelona street with warm Mediterranean light",
        status: "In Development",
      },
      {
        title: "Madrid",
        note: "Galleries, long lunches, and evenings that start late.",
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
        alt: "Grand architecture along a Madrid avenue",
        status: "Opening Next",
      },
    ],
    placesWeLove: [
      {
        kind: "Hotels",
        items: [
          {
            name: "A courtyard city hotel",
            note: "Somewhere with atmosphere — and a quiet room upstairs.",
          },
          {
            name: "One regional stay",
            note: "A second base only when the first has been lived in.",
          },
        ],
      },
      {
        kind: "Restaurants",
        items: [
          {
            name: "Market lunch",
            note: "The table that explains a city better than a checklist.",
          },
          {
            name: "A late dinner",
            note: "Spanish timing — unhurried, local, worth staying out for.",
          },
        ],
      },
      {
        kind: "Neighbourhoods",
        items: [
          {
            name: "One barrio as home",
            note: "Walkable mornings; evenings that don’t need a taxi.",
          },
          {
            name: "A quieter second base",
            note: "Coast, countryside or a smaller city with character.",
          },
        ],
      },
      {
        kind: "Experiences",
        items: [
          {
            name: "A food-led day",
            note: "Markets and meals organise the map.",
          },
          {
            name: "A landscape day",
            note: "Coast, hills or wine country — one clean focus.",
          },
        ],
      },
    ],
    journalSlugs: [],
    example: {
      title: "A Slow Spain Sketch",
      duration: "8 days",
      lede: "How Altrove thinks about Spain — currently being curated into a finished journey.",
      days: [
        { label: "Days 1–3", title: "One city base", note: "Markets, neighbourhood lunches, evening walks." },
        { label: "Days 4–6", title: "A second region", note: "Train or short drive — not a daily hop." },
        { label: "Day 7", title: "Landscape day", note: "Coast, countryside or wine country." },
        { label: "Day 8", title: "Return slowly", note: "A soft last morning before departure." },
      ],
    },
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

export function getFeaturedJourneyForCountry(slug: StudioCountrySlug) {
  const country = getStudioCountry(slug);
  if (!country) return undefined;
  return getJourney(country.featuredJourneySlug);
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

/** Up to three curated journal stories for a country hub. */
export function getHubJournalStories(slug: StudioCountrySlug) {
  const country = getStudioCountry(slug);
  return storiesFromSlugs(country?.journalSlugs ?? []).slice(0, 3);
}

export function getGuidesForCountry(slug: StudioCountrySlug) {
  const curated = getHubJournalStories(slug);
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
