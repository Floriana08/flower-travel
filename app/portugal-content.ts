export type DestinationGlanceItem = {
  label: string;
  value: string;
  detail?: string;
};

export type DestinationPlaceLink = {
  label: string;
  href: string;
  note?: string;
};

export type DestinationStay = {
  name: string;
  area: string;
  note: string;
  href?: string;
};

export type DestinationRestaurant = {
  name: string;
  area: string;
  note: string;
  kind: "restaurant" | "cafe";
};

export type DestinationRegion = {
  name: string;
  note: string;
  href?: string;
};

export type DestinationGuideContent = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string[];
  introTitle: string;
  introParagraphs: string[];
  glance: DestinationGlanceItem[];
  florPick: {
    title: string;
    body: string;
    href?: string;
    cta?: string;
  };
  featuredItinerarySlug?: string;
  featuredStorySlug?: string;
  placeLinks: DestinationPlaceLink[];
  stays: DestinationStay[];
  restaurants: DestinationRestaurant[];
  regions: DestinationRegion[];
  comingSoon: { title: string; body: string }[];
  lastUpdated: string;
};

export const portugalGuide: DestinationGuideContent = {
  slug: "portugal",
  heroEyebrow: "Portugal",
  heroTitle: "Portugal, taken slowly",
  heroLede: [
    "Golden cities, Atlantic coastlines and journeys that reward curiosity.",
    "From Lisbon’s tiled streets to the Douro and Madeira, Portugal works best with fewer hotel changes, longer lunches and time to wander.",
  ],
  introTitle: "Why Portugal rewards a slower itinerary",
  introParagraphs: [
    "I think Portugal is at its best when you stop trying to cover everything. Lisbon and Porto have the beauty of larger capitals without the same relentless pace: a tiled morning walk, a long lunch, and still the feeling that the day belongs to you.",
    "Food is not a side note. Seafood lunches, pastelarias, neighbourhood tascas and Douro wine days shape the trip as much as museums or viewpoints. The mainland also travels well by train, which means you can keep hotel changes few and still cover a memorable stretch of the country.",
    "Beyond the cities, Atlantic light pulls you toward Cascais, the Algarve and quieter surf towns. Madeira sits apart as its own adventure of cliffs and levadas. Outside peak summer, Portugal offers excellent value and a welcoming local rhythm.",
  ],
  glance: [
    {
      label: "Best time",
      value: "March–June and September–November",
      detail: "Softer light, easier reservations, fewer queues at Sintra and the coast.",
    },
    {
      label: "Getting around",
      value: "Train between cities, then walk",
      detail: "Porto, Coimbra, Lisbon and Cascais connect cleanly. Skip driving in central Lisbon.",
    },
    {
      label: "Trip length",
      value: "7 days, or 10–14 if you can",
      detail: "A week covers Lisbon and Porto. Extra days open the Douro, Cascais or Madeira properly.",
    },
    {
      label: "Budget feel",
      value: "Comfortable mid-range",
      detail: "Strong value outside August. Splurge on one Douro lunch or a quieter hotel base.",
    },
    {
      label: "Best for",
      value: "First Europe trips and food-led routes",
      detail: "Couples, slow travellers and anyone who would rather stay longer than tick more boxes.",
    },
    {
      label: "Travel style",
      value: "Unhurried and rail-friendly",
      detail: "Few hotel changes, long lunches, neighbourhood mornings and Atlantic light.",
    },
  ],
  florPick: {
    title: "Flor’s Pick: start in Lisbon, finish in Porto",
    body: "If this is your first Portugal trip, fly into Lisbon, take the train north, and end in Porto. It keeps the logistics simple, gives each city enough nights, and leaves room for a Douro day without turning the whole route into a scramble.",
    href: "/routes/portugal-by-train",
    cta: "See Portugal by train",
  },
  featuredItinerarySlug: "portugal-by-train",
  featuredStorySlug: "where-to-stay-lisbon",
  placeLinks: [
    { label: "Lisbon", href: "/destinations/lisbon", note: "Neighbourhood base" },
    { label: "Porto", href: "/destinations/portugal#regions", note: "River city finish" },
    { label: "Madeira", href: "/destinations/madeira", note: "Island detour" },
    { label: "The Azores", href: "/destinations/portugal#regions", note: "Coming into the journal" },
    { label: "The Algarve", href: "/destinations/portugal#regions", note: "Coast outside August" },
    { label: "The Douro Valley", href: "/routes/porto-wine-day", note: "Wine day from Porto" },
    { label: "Portugal by train", href: "/routes/portugal-by-train", note: "10-day route" },
    { label: "Portugal itineraries", href: "/destinations/portugal#itineraries", note: "Ready-made routes" },
  ],
  stays: [
    {
      name: "A calm base in Graça or Estrela",
      area: "Lisbon",
      note: "I look for quiet streets, morning light and a walkable café. Tourist-centre hotels are rarely worth the noise.",
      href: "/travel-guides/where-to-stay-lisbon",
    },
    {
      name: "Ribeira-adjacent, not Ribeira-loud",
      area: "Porto",
      note: "Stay close enough to walk down to the river, far enough to sleep. A hillside neighbourhood usually wins.",
    },
    {
      name: "One vineyard hotel night",
      area: "Douro",
      note: "If the budget allows, one night in the valley changes the whole trip. Book lunch before you book the room.",
    },
  ],
  restaurants: [
    {
      name: "Neighbourhood tasca lunch",
      area: "Lisbon",
      kind: "restaurant",
      note: "Skip the viewpoint restaurants at peak hour. The better tables are often a short walk inland.",
    },
    {
      name: "Pastelaria stop before the miradouro",
      area: "Lisbon",
      kind: "cafe",
      note: "Coffee first, viewpoint second. I think Lisbon mornings work better that way.",
    },
    {
      name: "Francesinha after a long walk",
      area: "Porto",
      kind: "restaurant",
      note: "One serious meal is enough. Save room for a Douro tasting the next day.",
    },
  ],
  regions: [
    {
      name: "Lisbon",
      href: "/destinations/lisbon",
      note: "Tiled streets, viewpoints and neighbourhood pacing. Best with at least four nights.",
    },
    {
      name: "Porto",
      note: "River light, wine cellars and a slower finish to a mainland route.",
    },
    {
      name: "Douro Valley",
      href: "/routes/porto-wine-day",
      note: "Terraces, long lunches and one of the easiest day trips that still feels like a place of its own.",
    },
    {
      name: "Madeira",
      href: "/destinations/madeira",
      note: "Cliffs, levadas and weather that asks you to stay flexible. Treat it as its own trip.",
    },
    {
      name: "The Algarve",
      note: "Best outside high summer. Choose one stretch of coast and stay put.",
    },
    {
      name: "The Azores",
      note: "Coming into the journal as a deeper island chapter — green crater lakes and quieter pacing.",
    },
  ],
  comingSoon: [
    {
      title: "Portugal map collection",
      body: "A saved map of hotels, cafés, viewpoints and Flor’s Picks is in progress. Join the Club to hear when it opens.",
    },
    {
      title: "Downloadable Lisbon neighbourhood notes",
      body: "A short, printable guide for first-timers — coming as a Club extra.",
    },
  ],
  lastUpdated: "July 2026",
};
