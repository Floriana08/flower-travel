import { getDestination, guideProducts, guides } from "./data";
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
  | "Opening Next"
  | "Coming soon";

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

export type TravelNote = {
  title: string;
  body: string;
};

export type TasteNote = {
  kind: PlaceLoveKind;
  name: string;
  note: string;
  image: string;
  alt: string;
};

export type StudioCountry = {
  slug: StudioCountrySlug;
  title: string;
  short: string;
  image: string;
  alt: string;
  /** Short Altrove POV, how we experience this country */
  hubLede: string;
  featuredJourneySlug: string;
  collections: RegionalCollection[];
  placesWeLove: PlaceLove[];
  /** Practical side-rail notes on the country hub */
  notesIntro: string;
  travelNotes: TravelNote[];
  /** Three photographed taste notes for the hub grid */
  tasteNotes: TasteNote[];
  /** Image beside the example-itinerary heading */
  exampleImage: string;
  exampleImageAlt: string;
  planImage: string;
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
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2000&q=84",
    alt: "Warm light over a lived-in Mediterranean street",
    hubLede:
      "I take Italy slowly, one neighbourhood in the city, one base on the coast, and meals that decide the day. Campania comes first: Naples and the shore I know by heart.",
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
        note: "Hill towns and long tables, paced for lingering, not looping.",
        image:
          "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
        alt: "Rolling Tuscan hills at golden hour",
        status: "Coming soon",
      },
      {
        title: "Sicily",
        note: "Island light, markets, and a coast taken at walking pace.",
        image:
          "https://images.unsplash.com/photo-1498579843916-4e4d87eea1e8?auto=format&fit=crop&w=1400&q=80",
        alt: "Market stall with citrus and vegetables",
        status: "Coming soon",
      },
      {
        title: "Dolomites",
        note: "Mountain air, design hotels, and days shaped by the view.",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
        alt: "Dramatic peaks in the Dolomites",
        status: "Coming soon",
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
            note: "A single Amalfi or Sorrento bed, not five hotel changes.",
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
            note: "Lived-in Naples, aperitivo light, evening walks.",
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
    notesIntro:
      "Practical advice for Campania, written from how we actually travel here, not a checklist of every town on the map.",
    travelNotes: [
      {
        title: "Best time to go",
        body: "May-June and September. Warm enough for the coast, cooler for walking Naples, and easier than midsummer crowds and heat.",
      },
      {
        title: "How to pace it",
        body: "Two bases at most: a Naples neighbourhood, then one coastal stay. Day-trip the towns, don’t change hotels every night.",
      },
      {
        title: "Getting around",
        body: "Walk Naples. Train to Pompeii. Ferries along the Amalfi Coast whenever you can, boats usually beat summer buses for both views and sanity.",
      },
      {
        title: "Where to stay",
        body: "In Naples, prefer Chiaia or Vomero for a calmer base. On the coast, choose one town and stay put, Sorrento or Salerno can be more practical than Positano prices.",
      },
      {
        title: "Food first",
        body: "Let meals set the day. Pizza and pastry in Naples; a long coastal lunch with nowhere else to be. Reserve the one dinner that matters.",
      },
      {
        title: "What to leave out",
        body: "Five towns in three days. Capri, Pompeii and the full Amalfi strip on the same short trip. Pick one clean escape and keep evening free.",
      },
    ],
    tasteNotes: [
      {
        kind: "Hotels",
        name: "One coastal stay",
        note: "A single Amalfi or Sorrento bed, not five hotel changes.",
        image:
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=84",
        alt: "Cliffside villages on the Amalfi Coast above blue Mediterranean water",
      },
      {
        kind: "Restaurants",
        name: "Neighbourhood pizza",
        note: "The table you’d send a friend to without hesitating.",
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1800&q=84",
        alt: "Wood-fired pizza on a simple table",
      },
      {
        kind: "Experiences",
        name: "Ravello gardens",
        note: "Height, quiet, and a slower afternoon above the coast.",
        image:
          "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1800&q=80",
        alt: "Colourful boats in a harbour on the Amalfi Coast",
      },
    ],
    exampleImage:
      "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&w=1400&q=84",
    exampleImageAlt: "Positano stacked above the Mediterranean on the Amalfi Coast",
    planImage:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=84",
    journalSlugs: ["rome-food-walk", "train-travel-europe", "choosing-a-honeymoon-route"],
    example: {
      title: "Naples and the Amalfi Coast",
      duration: "7 to 9 days",
      lede: "Arrive in the city. Settle on the coast. Leave room for the sea.",
      days: [
        { label: "Day 1", title: "Arrive in Naples", note: "One neighbourhood base. Dinner nearby." },
        { label: "Day 2 to 4", title: "Stay in Positano", note: "One coastal base, not five towns." },
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
      "Portugal is where I feel most at home, Lisbon mornings, train light north, and time left over for the Atlantic. Fewer hotels. More attention.",
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
        status: "Coming soon",
      },
      {
        title: "Madeira",
        note: "Its own week, Atlantic cliffs, soft adventure, weather-flex days.",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1400&q=80",
        alt: "Steep green cliffs meeting the Atlantic in Madeira",
        status: "Coming soon",
      },
      {
        title: "The Alentejo",
        note: "Quiet towns, cork forests, and evenings that refuse to rush.",
        image:
          "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1400&q=80",
        alt: "Golden countryside light over rolling hills",
        status: "Coming soon",
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
            note: "Coffee, pastry, then the view, in that order.",
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
            note: "Porto with character, design shops or river walks.",
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
    notesIntro:
      "How we pace Portugal, rail days, neighbourhood bases, and Atlantic pauses without packing the map.",
    travelNotes: [
      {
        title: "Best time to go",
        body: "April-June and September-October. Soft light, fewer crowds, and weather that still suits outdoor lunches.",
      },
      {
        title: "How to pace it",
        body: "Two bases at most: Lisbon, then Porto. Leave room for one Atlantic day, Cascais or the coast near Porto.",
      },
      {
        title: "Getting around",
        body: "Trains between cities. Walk the hills. Save taxis for late nights or luggage, not every miradouro hop.",
      },
      {
        title: "Where to stay",
        body: "A hill neighbourhood in Lisbon; riverside or Cedofeita in Porto. Skip hotel-hopping for the sake of variety.",
      },
      {
        title: "Food first",
        body: "Let lunch organise the day. A neighbourhood tasca beats three rushed sightseeing stops.",
      },
      {
        title: "What to leave out",
        body: "Five cities in a week. Madeira bolted onto a Lisbon-Porto sprint. Give each base enough nights to settle.",
      },
    ],
    tasteNotes: [
      {
        kind: "Hotels",
        name: "A Lisbon hill base",
        note: "Graça, Estrela or a calm corner of Príncipe Real.",
        image:
          "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=84",
        alt: "Lisbon tram climbing a steep tiled street",
      },
      {
        kind: "Restaurants",
        name: "Neighbourhood tasca",
        note: "The lunch that becomes the day’s main event.",
        image:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=84",
        alt: "Simple Portuguese dishes on a restaurant table",
      },
      {
        kind: "Experiences",
        name: "Train north",
        note: "Lisbon to Porto with the landscape as the show.",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=84",
        alt: "Train travelling through green European countryside",
      },
    ],
    exampleImage:
      "https://images.unsplash.com/photo-1555881407-bb2d4e463a49?auto=format&fit=crop&w=1400&q=84",
    exampleImageAlt: "Ribeira waterfront houses along the Douro in Porto",
    planImage:
      "https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1400&q=80",
    journalSlugs: ["where-to-stay-lisbon", "madeira-first-timers", "train-travel-europe"],
    example: {
      title: "Portugal by Train",
      duration: "10 days",
      lede: "Lisbon to Porto with one Atlantic pause, fewer hotels, more attention.",
      days: [
        { label: "Days 1 to 4", title: "Lisbon base", note: "Neighbourhood mornings and long lunches." },
        { label: "Day 5", title: "Cascais pause", note: "Atlantic air without changing hotels." },
        { label: "Days 6 to 7", title: "Train north", note: "Coimbra or a direct Lisbon-Porto day." },
        { label: "Days 8 to 10", title: "Porto and Douro", note: "River light, one day in the valley." },
      ],
    },
  },
  {
    slug: "spain",
    title: "Spain",
    short: "Warm cities, long lunches, and routes worth taking slowly.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2000&q=84",
    alt: "Shared plates on a busy table in warm restaurant light",
    hubLede:
      "Spain, for me, is food first, one barrio as home, markets that set the morning, and a second region only when the first has had enough time. Andalusia comes first.",
    featuredJourneySlug: "northern-spain",
    collections: [
      {
        title: "Andalusia",
        note: "Courtyards, tapas rhythm, and cities taken without the rush.",
        image:
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1400&q=80",
        alt: "Warm evening light over a historic Spanish square",
        status: "Coming soon",
      },
      {
        title: "Northern Spain",
        note: "Landscape, character, and a route for travellers who prefer depth.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
        alt: "Green mountains and mist over a northern landscape",
        href: "/journeys/northern-spain",
        status: "Coming soon",
      },
      {
        title: "Barcelona",
        note: "Neighbourhood days and design hotels, still being edited.",
        image:
          "https://images.unsplash.com/photo-1583422403309-80447b2c0d0f?auto=format&fit=crop&w=1400&q=80",
        alt: "Barcelona street with warm Mediterranean light",
        status: "Coming soon",
      },
      {
        title: "Madrid",
        note: "Galleries, long lunches, and evenings that start late.",
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
        alt: "Grand architecture along a Madrid avenue",
        status: "Coming soon",
      },
    ],
    placesWeLove: [
      {
        kind: "Hotels",
        items: [
          {
            name: "A courtyard city hotel",
            note: "Somewhere with atmosphere, and a quiet room upstairs.",
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
            note: "Spanish timing, unhurried, local, worth staying out for.",
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
            note: "Coast, hills or wine country, one clean focus.",
          },
        ],
      },
    ],
    notesIntro:
      "How we think about Spain, food first, one barrio as home, and a second region only when the first has had enough time.",
    travelNotes: [
      {
        title: "Best time to go",
        body: "April-June and September-October for most routes. Shoulder seasons keep heat and crowds in check.",
      },
      {
        title: "How to pace it",
        body: "One city base, then one regional stay. Don’t change hotels every night for the sake of ticking boxes.",
      },
      {
        title: "Getting around",
        body: "Walk the barrio. Trains between regions when you can. Save driving for landscape days that need it.",
      },
      {
        title: "Where to stay",
        body: "A courtyard hotel with character in the city; one quieter second base on the coast or in the countryside.",
      },
      {
        title: "Food first",
        body: "Markets and meals organise the day. A late dinner is part of the itinerary, not an afterthought.",
      },
      {
        title: "What to leave out",
        body: "Three cities in five days. A checklist of monuments with no lunch plan. Leave room to return to the same table.",
      },
    ],
    tasteNotes: [
      {
        kind: "Hotels",
        name: "A courtyard city hotel",
        note: "Somewhere with atmosphere, and a quiet room upstairs.",
        image:
          "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1800&q=84",
        alt: "A warm Spanish street with historic architecture",
      },
      {
        kind: "Restaurants",
        name: "Market lunch",
        note: "The table that explains a city better than a checklist.",
        image:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=84",
        alt: "Tapas and shared plates on a busy table",
      },
      {
        kind: "Experiences",
        name: "A landscape day",
        note: "Coast, hills or wine country, one clean focus.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=84",
        alt: "Green mountains and mist over a northern landscape",
      },
    ],
    exampleImage:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1400&q=84",
    exampleImageAlt: "Warm evening light over a historic Spanish square",
    planImage:
      "https://images.unsplash.com/photo-1583422403309-80447b2c0d0f?auto=format&fit=crop&w=1400&q=80",
    journalSlugs: [],
    example: {
      title: "A Slow Spain Sketch",
      duration: "8 days",
      lede: "How Altrove thinks about Spain, currently being curated into a finished journey.",
      days: [
        { label: "Days 1 to 3", title: "One city base", note: "Markets, neighbourhood lunches, evening walks." },
        { label: "Days 4 to 6", title: "A second region", note: "Train or short drive, not a daily hop." },
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
    articleSlugs: ["rome-food-walk", "where-to-stay-lisbon"],
  },
  {
    slug: "slow-travel",
    title: "Slow Travel",
    description: "Fewer places, longer stays, and routes that leave room to return.",
    articleSlugs: [
      "choosing-a-honeymoon-route",
      "train-travel-europe",
      "madeira-first-timers",
    ],
  },
  {
    slug: "coastal-escapes",
    title: "Coastal Escapes",
    description: "Islands, ferry light, and shores that reward an unhurried week.",
    articleSlugs: ["madeira-first-timers", "train-travel-europe"],
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
    articleSlugs: ["train-travel-europe", "madeira-first-timers"],
  },
  {
    slug: "weekend-getaways",
    title: "Weekend Getaways",
    description: "Short trips that still feel complete, one city, one rhythm.",
    articleSlugs: ["where-to-stay-lisbon", "rome-food-walk"],
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

/** Map legacy destination slugs into the Destinations hub experience. */
export function getDestinationHubHref(slug?: string) {
  if (!slug) return "/destinations";
  if (isStudioCountrySlug(slug)) return `/destinations/${slug}`;
  if (slug === "lisbon" || slug === "madeira" || slug === "porto") {
    return "/destinations/portugal";
  }
  if (
    slug === "naples" ||
    slug === "amalfi-coast" ||
    slug === "rome" ||
    slug === "milan" ||
    slug === "sicily"
  ) {
    return "/destinations/italy";
  }
  if (slug === "andalusia" || slug === "barcelona" || slug === "madrid") {
    return "/destinations/spain";
  }
  return "/destinations";
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

/** Paid guide products for a country hub, never fabricated as available. */
export function getGuideProductsForCountry(slug: StudioCountrySlug) {
  return guideProducts.filter((product) => product.countrySlug === slug);
}

export type JournalTopicSlug =
  | "places"
  | "food"
  | "stays"
  | "culture"
  | "travel-notes"
  | "how-we-travel";

/**
 * Lightweight topic taxonomy over the Journal's existing free-text
 * `category` values (data.ts), lets the Journal index offer a simple
 * subject filter without hand-retagging every article.
 */
export const journalTopicGroups: {
  slug: JournalTopicSlug;
  title: string;
  description: string;
  categories: string[];
}[] = [
  {
    slug: "places",
    title: "Places",
    description: "Cities, neighbourhoods and destination notes.",
    categories: ["City Notes", "Neighbourhood Guide", "Destination Guide", "Local Experiences"],
  },
  {
    slug: "food",
    title: "Food",
    description: "Meals and markets worth planning a day around.",
    categories: ["Food Guide"],
  },
  {
    slug: "stays",
    title: "Stays",
    description: "Hotels and bases worth waking up in.",
    categories: ["Hotel Notes"],
  },
  {
    slug: "culture",
    title: "Culture",
    description: "Design, slower looking and personal stories.",
    categories: ["Design Guide", "Personal Story", "Honeymoons"],
  },
  {
    slug: "travel-notes",
    title: "Travel notes",
    description: "Routes, packing and practical planning.",
    categories: ["Route Notes", "Planning", "Packing"],
  },
  {
    slug: "how-we-travel",
    title: "How we travel",
    description: "Pacing, attention and the Altrove approach.",
    categories: ["Sustainable Travel", "Island Planning", "Soft Adventure", "Lower-impact travel"],
  },
];

export function getJournalTopic(slug: string) {
  return journalTopicGroups.find((topic) => topic.slug === slug);
}

export function getGuidesForTopic(slug: JournalTopicSlug) {
  const topic = getJournalTopic(slug);
  if (!topic) return [];
  return guides.filter((guide) => topic.categories.includes(guide.category));
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
