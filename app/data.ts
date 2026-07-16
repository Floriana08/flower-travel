export const site = {
  name: "Flower Travel",
  strapline: "Southern Europe, beautifully",
  studioLine:
    "An editorial travel blog and club for thoughtful destination notes, graceful routes, local experiences, and lower-impact ways to see Southern Europe.",
  email: "hello@flowertravel.studio",
};

export const navItems = [
  { href: "/destinations", label: "Destinations" },
  { href: "/club", label: "Club" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const communityInterests = [
  "Destination articles",
  "Portugal notes",
  "Italy and Spain ideas",
  "Positive-footprint travel",
  "Food and hotel edits",
  "Local experiences",
  "Honeymoon inspiration",
];

export const destinations = [
  {
    slug: "lisbon",
    title: "Lisbon, Portugal",
    continent: "Europe",
    country: "Portugal",
    region: "Portugal",
    mood: "Golden city break",
    season: "March to June, September to November",
    bestFor: "First-time Europe, food, tiled streets, soft city weekends",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=84",
    alt: "Lisbon rooftops and tiled buildings in warm evening light",
    excerpt:
      "Viewpoints, azulejo streets, seafood lunches, boutique hotels, and slow tram-side wandering.",
    highlights: ["Alfama mornings", "Design-led stays", "Sintra day notes"],
  },
  {
    slug: "madeira",
    title: "Madeira, Portugal",
    continent: "Europe",
    country: "Portugal",
    region: "Atlantic Islands",
    mood: "Soft adventure",
    season: "April to October",
    bestFor: "Hiking, scenic drives, ocean pools, wildflower routes",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1600&q=84",
    alt: "Madeira coastline with green cliffs and Atlantic water",
    excerpt:
      "Levadas, mountain sunrise transfers, ocean pools, market lunches, and cliffside picnic days.",
    highlights: ["Levada pacing", "Funchal base notes", "Sunrise logistics"],
  },
  {
    slug: "paris",
    title: "Paris, France",
    continent: "Europe",
    country: "France",
    region: "France",
    mood: "Solo reset",
    season: "April to June, October",
    bestFor: "Museums, design, solo confidence, romantic weekends",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=84",
    alt: "A Paris street and cafe tables in evening light",
    excerpt:
      "Museum mornings, left-bank gardens, flea-market afternoons, wine bars, and unrushed neighborhood plans.",
    highlights: ["Gentle solo days", "Museum pairings", "Cafe map"],
  },
  {
    slug: "rome",
    title: "Rome, Italy",
    continent: "Europe",
    country: "Italy",
    region: "Italy",
    mood: "Food and ruins",
    season: "April to June, September to October",
    bestFor: "First-timers, food walks, layered history, long lunches",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=84",
    alt: "Rome street with warm buildings and classic architecture",
    excerpt:
      "Espresso counters, market mornings, trattoria reservations, quiet churches, and classic streets after breakfast.",
    highlights: ["Food walk route", "First-timer base", "Reservation notes"],
  },
  {
    slug: "andalusia",
    title: "Andalusia, Spain",
    continent: "Europe",
    country: "Spain",
    region: "Spain",
    mood: "Orange trees and rail days",
    season: "March to June, September to November",
    bestFor: "British and American travelers, rail-first routes, food, craft, architecture, shoulder-season sun",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=84",
    alt: "A warm Spanish street with historic architecture and Mediterranean light",
    excerpt:
      "Seville patios, Cordoba courtyards, Granada evenings, slow rail links, tapas counters, and white-village detours.",
    highlights: ["Seville base", "Rail route", "Local craft notes"],
  },
  {
    slug: "greek-islands",
    title: "Greek Island Light",
    continent: "Europe",
    country: "Greece",
    region: "Greece",
    mood: "Romantic island route",
    season: "May to June, September",
    bestFor: "Couples, honeymoons later, ferries, coves, seaside dinners",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
    alt: "Whitewashed Greek island village overlooking the sea",
    excerpt:
      "Ferry days, swim coves, lemon trees, whitewashed lanes, and hotels that feel quietly special.",
    highlights: ["Ferry sequence", "Cove map", "Hotel shortlist"],
  },
  {
    slug: "marrakech",
    title: "Marrakech, Morocco",
    continent: "Africa",
    country: "Morocco",
    region: "Morocco",
    mood: "Color and craft",
    season: "February to May, October to November",
    bestFor: "Riads, markets, design sourcing, desert extensions",
    image:
      "https://images.unsplash.com/photo-1539020140153-e8c237112e53?auto=format&fit=crop&w=1600&q=84",
    alt: "A warm Moroccan courtyard with patterned tiles",
    excerpt:
      "Riad mornings, spice stalls, tilework, craft ateliers, garden lunches, and sensory city notes.",
    highlights: ["Riad criteria", "Souk pacing", "Atlas add-on"],
  },
];

export const destinationBlogArticles = [
  {
    slug: "andalusia-slow-rail-edit",
    destinationSlug: "andalusia",
    title: "Andalusia by Rail, Without Rushing",
    category: "Route Notes",
    date: "July 16, 2026",
    readTime: "6 min read",
    excerpt:
      "A first editorial route through Seville, Cordoba, Granada, and the coast for travelers who want warmth, culture, and fewer car days.",
    sections: [
      {
        heading: "Build the route around bases",
        body: [
          "Andalusia works best when the trip is not treated as a race across southern Spain. Seville can hold the first chapter: patios, tapas counters, orange trees, and slow evenings when the heat drops.",
          "Cordoba is a natural pause rather than a rushed tick-box. Granada deserves a gentler pace because the Alhambra, Albaicin, and evening views lose their magic when they are squeezed into a single tired afternoon.",
        ],
      },
      {
        heading: "Choose rail where it gives ease",
        body: [
          "For British and American travelers who do not want to drive abroad, the rail links between major Andalusian cities make the route feel more relaxed and lower-impact. Keep one car or driver-supported day only for villages, olive country, or a coast detour.",
        ],
      },
    ],
  },
  {
    slug: "seville-local-experiences-first",
    destinationSlug: "andalusia",
    title: "Seville, First Local Experiences to Save",
    category: "Local Experiences",
    date: "July 16, 2026",
    readTime: "5 min read",
    excerpt:
      "A starting list for Seville built around patios, craft, food rituals, and moments that feel rooted instead of generic.",
    sections: [
      {
        heading: "Let the day follow the city",
        body: [
          "Seville is better when the itinerary respects its rhythm. Mornings can hold architecture and markets, afternoons need shade and rest, and evenings are for long walks, small plates, and streets that suddenly feel theatrical.",
        ],
      },
      {
        heading: "Look for rooted experiences",
        body: [
          "The best early notes are not about doing more. They are about choosing better: a ceramics workshop in Triana, an independent hotel with a courtyard, a food walk that explains the local rhythm, or a flamenco evening that feels intimate rather than staged for volume.",
        ],
      },
    ],
  },
  {
    slug: "lisbon-neighborhood-first-edit",
    destinationSlug: "lisbon",
    title: "Lisbon Neighborhood First Edit",
    category: "City Notes",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A gentle first edit for choosing where to stay, wander, eat, and slow down in Lisbon without overfilling the days.",
    sections: [
      {
        heading: "Start with the base",
        body: [
          "Lisbon rewards a good base more than an ambitious checklist. For a first visit, the best area depends on whether you want flatter streets, nightlife, river light, design hotels, or old-city atmosphere.",
          "Chiado, Baixa, Avenida da Liberdade, and Principe Real are the safest first filters. Alfama and Graca are more cinematic, but harder with luggage and late-night returns.",
        ],
      },
      {
        heading: "How to keep it beautiful",
        body: [
          "Build days around one neighborhood at a time: breakfast, a tiled walk, one museum or viewpoint, then a long lunch or early dinner. The city feels richer when you stop trying to cross it every two hours.",
          "Lower-impact choices are simple here: use trams and metro when useful, walk slowly when the hills allow, and choose independent restaurants and local shops over generic central streets.",
        ],
      },
    ],
  },
  {
    slug: "lighter-lisbon-weekend",
    destinationSlug: "lisbon",
    title: "A Lighter Lisbon Weekend",
    category: "Sustainable Travel",
    date: "July 15, 2026",
    readTime: "4 min read",
    excerpt:
      "A lower-pressure Lisbon weekend shaped around public transport, independent places, and fewer rushed transfers.",
    sections: [
      {
        heading: "Choose less movement",
        body: [
          "A lighter Lisbon weekend does not need to be austere. It can mean choosing one central base, walking by neighborhood, using public transport when the hills get heavy, and giving each meal enough attention to matter.",
        ],
      },
      {
        heading: "Spend locally",
        body: [
          "Prioritize small restaurants, Portuguese wine bars, craft shops, and family-run bakeries. The trip still feels special, but more of the value stays connected to the place you came to see.",
        ],
      },
    ],
  },
  {
    slug: "madeira-base-and-weather-guide",
    destinationSlug: "madeira",
    title: "Madeira Bases and Weather-Flex Days",
    category: "Island Planning",
    date: "July 15, 2026",
    readTime: "6 min read",
    excerpt:
      "How to choose a Madeira base when the island is small on the map but big in weather, roads, and elevation.",
    sections: [
      {
        heading: "Funchal first, then contrast",
        body: [
          "Funchal is the easiest first base for restaurants, gardens, boat trips, taxis, and tour pickups. It makes sense if you want the island to feel beautiful without making every day a driving project.",
          "For a second base, look west or north only when you want a quieter sea-view rhythm or a more dramatic nature focus.",
        ],
      },
      {
        heading: "Protect one flexible day",
        body: [
          "Madeira weather can change quickly between coast, forest, and mountain. A flexible day keeps the trip elegant: move a viewpoint, swap a hike for gardens, or save the ocean pools for the best conditions.",
        ],
      },
    ],
  },
  {
    slug: "madeira-soft-adventure-days",
    destinationSlug: "madeira",
    title: "Madeira Soft Adventure Days",
    category: "Soft Adventure",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A softer way to plan levadas, mountain mornings, ocean pools, and comfort-first island days.",
    sections: [
      {
        heading: "One anchor is enough",
        body: [
          "The island tempts you to stack viewpoints, hikes, drives, and dinners. A better rhythm is one strong anchor per day: a levada walk, a mountain sunrise, an ocean-pool afternoon, or a garden morning.",
        ],
      },
      {
        heading: "Comfort is part of the plan",
        body: [
          "Good shoes, a calm hotel, and reliable transfers are not luxuries here. They are what make a dramatic island feel generous instead of exhausting.",
        ],
      },
    ],
  },
  {
    slug: "paris-solo-gentle-weekend",
    destinationSlug: "paris",
    title: "A Solo Paris Weekend That Feels Gentle",
    category: "Personal Story",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A solo Paris rhythm built around gardens, cafes, one museum, and the confidence of not rushing.",
    sections: [
      {
        heading: "Choose a soft landing",
        body: [
          "A solo trip feels better when the first evening is already kind. Stay somewhere with easy food nearby, take one garden walk, and book a dinner that does not require crossing the city.",
        ],
      },
      {
        heading: "Let one museum be enough",
        body: [
          "Paris can overwhelm solo travelers who try to prove they used every hour. One museum, one good lunch, one cafe, and one neighborhood walk can make a day feel complete.",
        ],
      },
    ],
  },
  {
    slug: "paris-without-rushing-neighborhoods",
    destinationSlug: "paris",
    title: "Paris Without Rushing, by Neighborhood",
    category: "City Notes",
    date: "July 15, 2026",
    readTime: "6 min read",
    excerpt:
      "How to cluster Paris days around the Left Bank, Marais, northern neighborhoods, and repeat favorites.",
    sections: [
      {
        heading: "Cluster the city",
        body: [
          "Paris is easier when each day belongs to an area. Pair Saint-Germain with Luxembourg Garden, the Marais with small museums and design shops, and northern neighborhoods with slower cafe time.",
        ],
      },
      {
        heading: "Repeat something",
        body: [
          "A good Paris trip should include one return: the cafe you liked, the garden bench that felt calm, the street you wanted to see in different light. Repetition makes the city yours.",
        ],
      },
    ],
  },
  {
    slug: "rome-food-first-walk",
    destinationSlug: "rome",
    title: "Rome as a Food-First Walk",
    category: "Food Guide",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A first Rome day shaped by espresso, markets, pasta, aperitivo, and enough walking to feel the city.",
    sections: [
      {
        heading: "Let food set the pace",
        body: [
          "Rome makes more sense when coffee, lunch, and aperitivo structure the day. Start small, walk slowly, and make one serious meal the anchor instead of grazing until nothing feels memorable.",
        ],
      },
      {
        heading: "Keep the route compact",
        body: [
          "A food-first walk works best when it stays tight: historic center lanes, the Jewish Ghetto, Trastevere, or Testaccio. Too much distance turns appetite into logistics.",
        ],
      },
    ],
  },
  {
    slug: "rome-long-weekend-rhythm",
    destinationSlug: "rome",
    title: "The Rome Long Weekend Rhythm",
    category: "Route Notes",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A classic Rome weekend with ruins, churches, trattorias, one garden moment, and room for aperitivo.",
    sections: [
      {
        heading: "Stay central for a short trip",
        body: [
          "A slightly smaller central room can be better than a larger room far away. On a short Rome trip, every taxi and transit decision changes the tone of the day.",
        ],
      },
      {
        heading: "One ancient anchor",
        body: [
          "Choose one major ancient-Rome anchor and give it space. The city becomes more elegant when the rest of the day is lunch, shade, and slow wandering rather than a second major site.",
        ],
      },
    ],
  },
  {
    slug: "greek-islands-soft-honeymoon",
    destinationSlug: "greek-islands",
    title: "Greek Islands for a Soft Honeymoon",
    category: "Future Planning",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "How to think about ferries, coves, hotel rhythm, and island contrast without overplanning the romance.",
    sections: [
      {
        heading: "Choose the mood before the islands",
        body: [
          "A Greek island route should begin with the feeling: quiet coves, polished hotels, food-led villages, design stays, or a more active sea-and-walk rhythm. The right islands follow from that.",
        ],
      },
      {
        heading: "Protect arrival ease",
        body: [
          "For a honeymoon, the first two nights should feel easy. Avoid a complicated ferry chain immediately after the wedding unless movement is truly part of the romance.",
        ],
      },
    ],
  },
  {
    slug: "greek-islands-ferry-rhythm",
    destinationSlug: "greek-islands",
    title: "The Greek Island Ferry Rhythm",
    category: "Route Notes",
    date: "July 15, 2026",
    readTime: "4 min read",
    excerpt:
      "A simple framework for ferry days that feel scenic rather than stressful.",
    sections: [
      {
        heading: "Ferries are travel days",
        body: [
          "Treat ferry days as part of the trip, not empty gaps. Plan lighter meals, fewer reservations, and a hotel arrival that still feels pleasant if the crossing takes longer than expected.",
        ],
      },
      {
        heading: "Do not chase too many islands",
        body: [
          "Two islands can feel richer than four when each one has time to settle. The point is not how much blue you collect; it is how well the route breathes.",
        ],
      },
    ],
  },
  {
    slug: "marrakech-first-riad-edit",
    destinationSlug: "marrakech",
    title: "Marrakech First Riad Edit",
    category: "Hotel Notes",
    date: "July 15, 2026",
    readTime: "5 min read",
    excerpt:
      "What to consider before choosing a Marrakech riad: location, calm, courtyard rhythm, and sensory reset.",
    sections: [
      {
        heading: "Choose calm intentionally",
        body: [
          "A riad can be the quiet center of a Marrakech trip. Look for the feeling you want at the end of the day: courtyard breakfast, a small pool, a roof terrace, or a more design-led retreat.",
        ],
      },
      {
        heading: "Location changes the trip",
        body: [
          "Being deep in the medina can feel atmospheric, but arrivals and evening returns need more care. A beautiful stay is not only the room; it is the whole path back to it.",
        ],
      },
    ],
  },
  {
    slug: "marrakech-souk-pacing",
    destinationSlug: "marrakech",
    title: "How to Pace Marrakech Souks",
    category: "City Notes",
    date: "July 15, 2026",
    readTime: "4 min read",
    excerpt:
      "A slower way through Marrakech craft, color, gardens, and market energy without turning the day into overload.",
    sections: [
      {
        heading: "Use short windows",
        body: [
          "The souks are better in shorter, more intentional windows. Pair one craft focus with one calm reset: a garden, courtyard lunch, rooftop tea, or an early return to the riad.",
        ],
      },
      {
        heading: "Leave space for sensory rest",
        body: [
          "Marrakech is vivid. The itinerary should include quiet by design, not as an afterthought. That is what lets the color and craft stay beautiful.",
        ],
      },
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationArticles(destinationSlug: string) {
  return destinationBlogArticles.filter(
    (article) => article.destinationSlug === destinationSlug,
  );
}

export function getDestinationArticle(destinationSlug: string, articleSlug: string) {
  return destinationBlogArticles.find(
    (article) =>
      article.destinationSlug === destinationSlug && article.slug === articleSlug,
  );
}

export const itineraries = [
  {
    slug: "portugal-by-train",
    title: "Portugal by Train",
    days: "10 days",
    region: "Porto, Coimbra, Lisbon, Cascais",
    pace: "Slow rail route",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=84",
    alt: "A train moving through a scenic railway landscape",
    summary:
      "A polished north-to-south route with tiled stations, river views, one beach day, and spacious city bases.",
    route: ["Porto", "Coimbra", "Lisbon", "Cascais"],
    bestFor: "First Portugal trip, rail lovers, design hotels",
  },
  {
    slug: "andalusia-slow-route",
    title: "Andalusia Slow Route",
    days: "8 days",
    region: "Seville, Cordoba, Granada, Malaga",
    pace: "Rail and local experiences",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=84",
    alt: "Historic Spanish architecture in warm Andalusian light",
    summary:
      "A warm southern Spain route built around orange-tree courtyards, rail links, food rituals, craft, and one unhurried coast finish.",
    route: ["Seville", "Cordoba", "Granada", "Malaga"],
    bestFor: "UK and US travelers, shoulder-season sun, food and architecture",
  },
  {
    slug: "paris-without-rushing",
    title: "Paris Without Rushing",
    days: "5 days",
    region: "Saint-Germain, Marais, Montmartre",
    pace: "Gentle city break",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=84",
    alt: "The Eiffel Tower seen from a Paris avenue",
    summary:
      "Museum mornings, market lunches, gardens, design shops, and one neighborhood at a time.",
    route: ["Left Bank", "Marais", "Canal Saint-Martin", "Montmartre"],
    bestFor: "Solo travelers, couples, first-timers who hate checklists",
  },
  {
    slug: "madeira-soft-adventure",
    title: "Madeira Soft Adventure",
    days: "7 days",
    region: "Funchal, north coast, mountain viewpoints",
    pace: "Nature with comfort",
    image:
      "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?auto=format&fit=crop&w=1600&q=84",
    alt: "A winding road through a green island mountain landscape",
    summary:
      "Levadas, ocean pools, botanical gardens, viewpoint picnics, and dinners close to the water.",
    route: ["Funchal", "Pico do Arieiro", "Porto Moniz", "Ponta do Sol"],
    bestFor: "Couples, hikers, photographers, shoulder-season sun",
  },
  {
    slug: "italian-long-weekend",
    title: "Italian Long Weekend",
    days: "4 days",
    region: "Rome with a Tivoli add-on",
    pace: "Food-led classic",
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1600&q=84",
    alt: "Roman ruins and the Colosseum in late afternoon light",
    summary:
      "A compact route for espresso counters, art, aperitivo, market mornings, and one garden escape.",
    route: ["Centro Storico", "Trastevere", "Testaccio", "Tivoli"],
    bestFor: "Food travelers, short breaks, first Rome trip",
  },
  {
    slug: "lisbon-food-tour",
    title: "Best Food Tour of Lisbon",
    days: "Half day",
    region: "Alfama, Mouraria, Baixa",
    pace: "Food walk",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=84",
    alt: "Traditional Portuguese pastel de nata and coffee on a cafe table",
    summary:
      "A walkable morning through markets, tascas, pastelarias, and the neighborhoods where Lisbon actually eats.",
    route: ["Mercado da Ribeira", "Alfama", "Mouraria", "Chiado"],
    bestFor: "First visit, food lovers, walkable mornings",
  },
  {
    slug: "amalfi-coast-tours",
    title: "Amalfi Coast Tours",
    days: "Day trips",
    region: "Positano, Ravello, Amalfi",
    pace: "Coastal escapes",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
    alt: "Cliffside villages above blue Mediterranean water",
    summary:
      "How to choose between Positano, Ravello, and the Path of the Gods without turning a beautiful coast into a transfer marathon.",
    route: ["Positano", "Ravello", "Path of the Gods", "Amalfi town"],
    bestFor: "Couples, photographers, Sorrento or Naples bases",
  },
  {
    slug: "rome-best-restaurants",
    title: "10 Best Restaurants to Eat in Rome",
    days: "10 picks",
    region: "Testaccio, Trastevere, Centro",
    pace: "Editorial restaurant list",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=84",
    alt: "A Roman trattoria table set for dinner with wine and bread",
    summary:
      "Ten places worth planning around — from Testaccio trattorias to Monti wine bars and the reservations that actually matter.",
    route: ["Testaccio", "Trastevere", "Monti", "Prati", "Esquilino"],
    bestFor: "Food travelers, long weekends, repeat visitors",
  },
  {
    slug: "center-of-italy-guide",
    title: "A Guide Through the Center of Italy",
    days: "12 days",
    region: "Umbria, Tuscany, Le Marche",
    pace: "Slow regional route",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=84",
    alt: "A hill town overlooking vineyards and cypress trees in central Italy",
    summary:
      "Perugia to Urbino by way of Assisi, Siena, and Orvieto — a second-Italy route built around hill towns, wine, and unhurried lunches.",
    route: ["Perugia", "Assisi", "Siena", "Orvieto", "Urbino"],
    bestFor: "Second Italy trip, hill towns, wine and art",
  },
  {
    slug: "seville-tapas-trail",
    title: "Best Tapas Evening in Seville",
    days: "One evening",
    region: "Triana, Santa Cruz, Arenal",
    pace: "Bar crawl edit",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=84",
    alt: "Tapas and wine on a warm European street terrace",
    summary:
      "One unhurried evening across Triana, the riverfront, and the old quarter — stand-up bars, vermouth, and the stops worth repeating.",
    route: ["Triana", "Arenal", "Santa Cruz", "Alameda"],
    bestFor: "First Seville night, small groups, shoulder season",
  },
  {
    slug: "porto-wine-day",
    title: "Porto Wine Country Day",
    days: "Day trip",
    region: "Douro Valley from Porto",
    pace: "Wine and river",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1600&q=84",
    alt: "Green terraced hills in the Portuguese wine country",
    summary:
      "A calm day out from Porto: river views, one quinta lunch, and enough structure to enjoy the valley without a rental car.",
    route: ["Porto", "Pinhão", "Quinta lunch", "River viewpoint"],
    bestFor: "Wine curious, couples, no-car travelers",
  },
  {
    slug: "sicily-coastal-route",
    title: "Sicily Coastal Route",
    days: "9 days",
    region: "Taormina, Syracuse, Cefalù",
    pace: "Island slow coast",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=84",
    alt: "Turquoise Mediterranean water along a Sicilian-style coastline",
    summary:
      "Taormina, Noto, Syracuse, and Cefalù — a shoulder-season island route with baroque towns, sea swims, and fewer hotel moves.",
    route: ["Taormina", "Noto", "Syracuse", "Cefalù"],
    bestFor: "Shoulder season, history lovers, sea and food",
  },
];

export const routeDetails = [
  {
    slug: "portugal-by-train",
    intro:
      "A north-to-south Portugal route for travelers who want city texture, rail movement, and one gentle coastal reset without renting a car.",
    rhythm: "Porto 2 nights, Coimbra 1 night, Lisbon 4 nights, Cascais 2 nights",
    footprint:
      "Designed around rail-first movement, fewer hotel changes, and a beach finish reachable by public transport.",
    days: [
      {
        label: "Days 1-2",
        place: "Porto",
        plan:
          "Arrive slowly, stay central, walk the riverfront, build one proper lunch around the Douro, and leave room for tiled station moments instead of overbooking tastings.",
      },
      {
        label: "Day 3",
        place: "Coimbra",
        plan:
          "Use Coimbra as a soft cultural pause between the two big cities: university views, old streets, and a lighter evening before Lisbon.",
      },
      {
        label: "Days 4-7",
        place: "Lisbon",
        plan:
          "Base around Chiado, Baixa, Príncipe Real, or Avenida da Liberdade, then divide days by neighborhood rather than chasing every viewpoint at once.",
      },
      {
        label: "Days 8-10",
        place: "Cascais",
        plan:
          "Finish with beach walks, seafood lunches, a calmer hotel rhythm, and an easy train connection back toward Lisbon.",
      },
    ],
    notes: [
      "Book hotels close enough to stations that transfer days do not eat the whole morning.",
      "Keep luggage light; Portugal's stations and old streets are not always kind to heavy bags.",
      "Use this as a template: add Porto wine country or Sintra only if you have more days.",
    ],
  },
  {
    slug: "andalusia-slow-route",
    intro:
      "A southern Spain route for travelers who want Seville atmosphere, Cordoba texture, Granada drama, and a soft coast finish without turning the trip into a checklist.",
    rhythm: "Seville 3 nights, Cordoba 1 night, Granada 2 nights, Malaga or the coast 2 nights",
    footprint:
      "Designed around rail between the main cities, walkable bases, independent restaurants, and one carefully chosen driver-supported village or olive-country day.",
    days: [
      {
        label: "Days 1-3",
        place: "Seville",
        plan:
          "Start with a hotel or guesthouse that gives you shade, a courtyard, or a calm morning rhythm. Keep the first days for patios, tapas counters, Triana craft, and one evening performance chosen for intimacy rather than scale.",
      },
      {
        label: "Day 4",
        place: "Cordoba",
        plan:
          "Use Cordoba as a slower cultural pause: the Mezquita-Cathedral, quiet lanes, courtyard details, and a dinner that lets the city feel lived-in after day visitors leave.",
      },
      {
        label: "Days 5-6",
        place: "Granada",
        plan:
          "Give Granada two nights so the Alhambra does not swallow the whole experience. Leave space for Albaicin views, tea houses, and a simple evening walk.",
      },
      {
        label: "Days 7-8",
        place: "Malaga or the coast",
        plan:
          "Finish with sea air, museums, seafood, or a gentler hotel rhythm before flying home or linking onward through Spain.",
      },
    ],
    notes: [
      "Book the Alhambra around the rhythm of the whole trip, not as an isolated ticket.",
      "Use rail for the major city links and save car time for experiences that genuinely need it.",
      "For UK and US travelers, spring and autumn usually give the best balance of warmth, atmosphere, and comfort.",
    ],
  },
  {
    slug: "paris-without-rushing",
    intro:
      "A five-day Paris route for readers who want museums, cafes, gardens, and beautiful neighborhoods without turning the city into a checklist.",
    rhythm: "One base, five slow days, one main anchor per day",
    footprint:
      "Designed around walking, buses, metro links, and neighborhood clustering rather than car transfers.",
    days: [
      {
        label: "Day 1",
        place: "Arrival and Left Bank",
        plan:
          "Check in, stay close to the hotel, take a garden walk, and book a first-night dinner that does not require crossing the city.",
      },
      {
        label: "Day 2",
        place: "Saint-Germain and museums",
        plan:
          "Choose one museum or exhibition, then let lunch, bookshops, and cafe time fill the rest of the day.",
      },
      {
        label: "Day 3",
        place: "Marais",
        plan:
          "Use the Marais for design shops, small museums, falafel or bistro lunch, and an easy evening walk.",
      },
      {
        label: "Day 4",
        place: "Canal Saint-Martin or Montmartre",
        plan:
          "Pick one northern neighborhood, not both. Keep it unhurried and use transit back before you are tired.",
      },
      {
        label: "Day 5",
        place: "A favorite return",
        plan:
          "Repeat the cafe, garden, street, or museum you loved most instead of forcing a final attraction.",
      },
    ],
    notes: [
      "Reserve the museum that matters most, but leave secondary plans flexible.",
      "Choose a hotel by evening comfort, not only distance to monuments.",
      "This route works especially well for solo travelers and couples who prefer atmosphere over lists.",
    ],
  },
  {
    slug: "madeira-soft-adventure",
    intro:
      "A Madeira route for people who want levadas, viewpoints, ocean pools, and island drama without losing comfort or weather flexibility.",
    rhythm: "Funchal base, west-coast day, mountain morning, one flexible reset day",
    footprint:
      "Designed around fewer hotel moves, shared tours or drivers where useful, and realistic pacing for mountain weather.",
    days: [
      {
        label: "Day 1",
        place: "Funchal arrival",
        plan:
          "Settle into Funchal, keep dinner simple, and use the first evening to understand the city before committing to early starts.",
      },
      {
        label: "Day 2",
        place: "Funchal and Monte",
        plan:
          "Pair the market, gardens, cable car or Monte area, and a waterfront dinner without treating the day as a race.",
      },
      {
        label: "Day 3",
        place: "Levada walk",
        plan:
          "Choose a walk that matches the group's real fitness and comfort with exposure, then keep the afternoon quiet.",
      },
      {
        label: "Day 4",
        place: "Pico do Arieiro",
        plan:
          "Make this the mountain day, ideally with a driver or tour if sunrise timing, parking, or weather decisions feel stressful.",
      },
      {
        label: "Day 5",
        place: "Porto Moniz and the north coast",
        plan:
          "Use the ocean pools, viewpoints, and a scenic lunch as the day; do not add a major hike on top.",
      },
      {
        label: "Days 6-7",
        place: "Ponta do Sol or Funchal",
        plan:
          "Keep one day flexible for weather, tired legs, or a second garden, then end with a calm sea-view meal.",
      },
    ],
    notes: [
      "Madeira looks small, but roads, elevation, and weather make days feel bigger.",
      "Comfort hotels are worth it here because weather can change your plan.",
      "Do not stack sunrise, long hike, and north-coast drive into one heroic day.",
    ],
  },
  {
    slug: "italian-long-weekend",
    intro:
      "A compact Rome route for food, ruins, aperitivo, and one garden escape, built for travelers who want a classic weekend without overfilling it.",
    rhythm: "Three Rome days plus a Tivoli or garden add-on",
    footprint:
      "Designed as a walking-first city break with one optional train or driver-supported escape.",
    days: [
      {
        label: "Day 1",
        place: "Centro Storico",
        plan:
          "Arrive, stay central, walk toward the Pantheon and Piazza Navona, and keep dinner close to the hotel.",
      },
      {
        label: "Day 2",
        place: "Markets and Testaccio",
        plan:
          "Start with coffee, build the day around a market or food walk, then make lunch the main event in Testaccio.",
      },
      {
        label: "Day 3",
        place: "Ancient Rome and Trastevere",
        plan:
          "Choose ruins or churches in the morning, then cross toward Trastevere for a softer late afternoon and aperitivo.",
      },
      {
        label: "Day 4",
        place: "Tivoli or a slow city finish",
        plan:
          "Add Tivoli only if you have enough energy. Otherwise, repeat the best cafe, garden, or neighborhood from the weekend.",
      },
    ],
    notes: [
      "The route works best when lunch is planned and dinners stay flexible.",
      "Stay central for a short trip; transit time matters more than a slightly bigger room.",
      "Reserve one anchor experience per day and let Rome fill in the rest.",
    ],
  },
  {
    slug: "lisbon-food-tour",
    intro:
      "A half-day food walk through Lisbon for travelers who want markets, neighborhood tascas, and pastry stops without a rigid tour-group schedule.",
    rhythm: "One morning, four neighborhoods, lunch as the finish line",
    footprint:
      "Built for walking, tram links where hills bite, and independent places rather than ticketed tasting rooms.",
    days: [
      {
        label: "Stop 1",
        place: "Mercado da Ribeira",
        plan:
          "Start with coffee and one market bite — enough to orient yourself without turning breakfast into a full meal.",
      },
      {
        label: "Stop 2",
        place: "Alfama",
        plan:
          "Walk uphill slowly for a pastelaria, a miradouro pause, and one traditional counter where locals still linger.",
      },
      {
        label: "Stop 3",
        place: "Mouraria",
        plan:
          "Use Mouraria for a more lived-in lunch: African-Portuguese flavors, small taverns, and fewer postcard crowds.",
      },
      {
        label: "Stop 4",
        place: "Chiado",
        plan:
          "Finish with gelado or a second coffee in Chiado, then decide whether the afternoon belongs to Belém or a hotel reset.",
      },
    ],
    notes: [
      "Go hungry but not starving — the best walks leave room for spontaneity.",
      "Book nothing before 11am; Lisbon food culture starts later than northern Europe expects.",
      "Wear shoes that handle cobblestones and hills without punishing your knees.",
    ],
  },
  {
    slug: "amalfi-coast-tours",
    intro:
      "A practical edit for Amalfi Coast day trips — Positano glamour, Ravello gardens, and the Path of the Gods without losing a whole day to buses.",
    rhythm: "One base, one main coast day, one mountain or garden day",
    footprint:
      "Designed around ferries, shared boats, and early starts rather than summer traffic and impossible parking.",
    days: [
      {
        label: "Option A",
        place: "Positano and the coast",
        plan:
          "Arrive early, walk the vertical streets before heat and crowds, swim if the beach feels right, then ferry onward or return by boat.",
      },
      {
        label: "Option B",
        place: "Ravello",
        plan:
          "Make Ravello the slower day: villa gardens, terrace lunch, and views that reward staying put instead of hopping towns.",
      },
      {
        label: "Option C",
        place: "Path of the Gods",
        plan:
          "Choose a half-day hike with a clear start point, water, and a post-walk lunch plan — not a heroic trek before dinner.",
      },
      {
        label: "Option D",
        place: "Amalfi town",
        plan:
          "Use Amalfi as the practical hub day: cathedral, paper museum, ferry links, and a calmer rhythm between bigger excursions.",
      },
    ],
    notes: [
      "Pick two towns, not five — the coast punishes overambition in peak season.",
      "Boats often beat buses for both views and sanity.",
      "Stay in Sorrento or Salerno if Positano hotel prices feel disconnected from the experience.",
    ],
  },
  {
    slug: "rome-best-restaurants",
    intro:
      "Ten Rome restaurants worth building a trip around — trattorias, wine bars, and the reservations that separate a good visit from a great one.",
    rhythm: "Spread across neighborhoods, one anchor meal per day",
    footprint:
      "Clustered by district so you are not crossing the city for every dinner.",
    days: [
      {
        label: "Pick 1-2",
        place: "Testaccio",
        plan:
          "Start here for Roman classics done properly: coda alla vaccinara, tripe if you are curious, and a market morning beforehand.",
      },
      {
        label: "Pick 3-4",
        place: "Trastevere",
        plan:
          "Choose one sit-down trattoria and one wine bar — Trastevere rewards repeat visits more than one mega dinner.",
      },
      {
        label: "Pick 5-6",
        place: "Monti and Centro",
        plan:
          "Use Monti for aperitivo and Centro for the splurge meal you actually planned ahead for.",
      },
      {
        label: "Pick 7-10",
        place: "Prati and Esquilino",
        plan:
          "Round out the list with Prati pizzerias and Esquilino spots where Rome feels less polished and more delicious.",
      },
    ],
    notes: [
      "Reserve the one dinner you care about most; keep the rest flexible.",
      "Lunch can be the better meal in Rome — do not save all your appetite for 9pm.",
      "Walk between courses when neighborhoods allow it; the city is part of the menu.",
    ],
  },
  {
    slug: "center-of-italy-guide",
    intro:
      "A twelve-day route through Umbria, Tuscany, and Le Marche for travelers who want hill towns, art, wine, and a second-Italy pace.",
    rhythm: "Three bases, short drives, long lunches",
    footprint:
      "Built around fewer hotel changes, regional trains where possible, and one rental-car block for the hill-town days.",
    days: [
      {
        label: "Days 1-3",
        place: "Perugia and Assisi",
        plan:
          "Use Perugia as your Umbrian base, then day-trip to Assisi for basilica calm and olive-country views.",
      },
      {
        label: "Days 4-6",
        place: "Siena and the Crete",
        plan:
          "Move into Tuscany for Siena's contrade, country drives, and a winery lunch that does not require a marathon tasting.",
      },
      {
        label: "Days 7-9",
        place: "Orvieto",
        plan:
          "Pause in Orvieto for cathedral drama, white wine, and a slower rhythm before the final push east.",
      },
      {
        label: "Days 10-12",
        place: "Urbino and Le Marche",
        plan:
          "Finish in Urbino for Renaissance intimacy, Marche trattorias, and a softer Adriatic-side mood.",
      },
    ],
    notes: [
      "This route shines in spring and autumn when hill-town heat and crowds ease.",
      "Book one agriturismo stay if you want the trip to feel grounded, not hotel-hoppy.",
      "Leave a flex day — central Italy rewards weather and mood more than schedules.",
    ],
  },
  {
    slug: "seville-tapas-trail",
    intro:
      "One Seville evening mapped as a tapas trail — stand-up bars, sherry, and the neighborhoods where the city loosens up after dark.",
    rhythm: "Four stops, two hours, one slow finale",
    footprint:
      "Walking distance only; no taxis needed if you start in Triana and drift back across the river.",
    days: [
      {
        label: "Stop 1",
        place: "Triana",
        plan:
          "Begin across the river with vermouth and one small plate — Triana sets a local tone before the old quarter pulls you in.",
      },
      {
        label: "Stop 2",
        place: "Arenal",
        plan:
          "Cross back for a classic bar near the cathedral area, but keep portions small; the night is long.",
      },
      {
        label: "Stop 3",
        place: "Santa Cruz",
        plan:
          "Drift into the old quarter for jamón, montaditos, and the kind of bar where regulars still outnumber tourists.",
      },
      {
        label: "Stop 4",
        place: "Alameda",
        plan:
          "Finish around Alameda de Hércules if you want a looser, younger energy — or sit down properly if stand-up bars have done their job.",
      },
    ],
    notes: [
      "Eat a little everywhere; order one or two dishes per stop, not a full meal at each.",
      "Start around 8:30pm in summer — earlier and the city can feel half-asleep.",
      "Book a table only for the final sit-down stop if the group wants to land somewhere.",
    ],
  },
  {
    slug: "porto-wine-day",
    intro:
      "A Douro Valley day from Porto for wine-curious travelers who want river views, one quinta visit, and a return without driving.",
    rhythm: "Morning train, afternoon quinta, evening back in Porto",
    footprint:
      "Rail-first where possible, shared transfers for quinta visits, and one structured lunch rather than three tastings.",
    days: [
      {
        label: "Morning",
        place: "Porto to Pinhão",
        plan:
          "Take the scenic train along the Douro, sit on the river side, and treat the journey as part of the day — not just transfer time.",
      },
      {
        label: "Midday",
        place: "Pinhão",
        plan:
          "Walk the riverside, grab a simple lunch, and decide whether the afternoon belongs to a boat look or a quinta uphill.",
      },
      {
        label: "Afternoon",
        place: "Quinta visit",
        plan:
          "Book one quinta with a clear tasting slot and terrace time; avoid stacking two visits unless someone else is driving.",
      },
      {
        label: "Evening",
        place: "Back to Porto",
        plan:
          "Return before you are tired, shower, then let a Francesinha or riverside dinner close the day in the city.",
      },
    ],
    notes: [
      "Book quinta visits ahead in harvest season — spontaneity is harder then.",
      "If you dislike early starts, swap the train for a small-group tour with pickup.",
      "One good tasting beats three rushed ones every time.",
    ],
  },
  {
    slug: "sicily-coastal-route",
    intro:
      "A nine-day Sicily route along the east and north coast — baroque towns, Greek ruins, and sea days without circling the whole island.",
    rhythm: "Taormina base, south loop, Cefalù finish",
    footprint:
      "Designed around three hotels, short drives, and one train link where it saves sanity.",
    days: [
      {
        label: "Days 1-3",
        place: "Taormina",
        plan:
          "Settle into Taormina with one beach morning, one Greek theatre visit, and dinners that do not require a car.",
      },
      {
        label: "Days 4-5",
        place: "Noto and the south",
        plan:
          "Drive south for Noto's baroque streets, a long lunch, and an afternoon that respects Sicilian heat.",
      },
      {
        label: "Days 6-7",
        place: "Syracuse",
        plan:
          "Use Syracuse for Ortigia evenings, market mornings, and one archaeological morning before moving on.",
      },
      {
        label: "Days 8-9",
        place: "Cefalù",
        plan:
          "Finish on the north coast with a beach day, cathedral visit, and a slow last night before flying from Palermo.",
      },
    ],
    notes: [
      "Fly into Catania and out of Palermo — or reverse — to avoid backtracking.",
      "Keep one flex day for weather; Sicily changes plans quickly.",
      "Book Taormina early in shoulder season; it still fills up.",
    ],
  },
];

export const guides = [
  {
    slug: "where-to-stay-lisbon",
    title: "Where to Stay in Lisbon, by Travel Mood",
    category: "Hotel Notes",
    destination: "Lisbon",
    date: "July 8, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1600&q=84",
    alt: "A quiet Lisbon street with tiled facades and balconies",
    excerpt:
      "The best base depends on whether you want river light, nightlife, hills, design hotels, or easy day trips.",
  },
  {
    slug: "madeira-first-timers",
    title: "Madeira for First-Timers: What to Know Before You Book",
    category: "Destination Guide",
    destination: "Madeira",
    date: "July 2, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1579005995445-1c0a9c9b5c42?auto=format&fit=crop&w=1600&q=84",
    alt: "A dramatic green coastline on Madeira",
    excerpt:
      "How to choose a base, when to hire a driver, which hikes need planning, and where comfort is worth the splurge.",
  },
  {
    slug: "solo-paris-weekend",
    title: "A Solo Paris Weekend That Feels Gentle",
    category: "Personal Story",
    destination: "Paris",
    date: "June 26, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=84",
    alt: "Paris cafe tables at dusk",
    excerpt:
      "A confidence-building Paris plan with beautiful places to sit, eat, wander, and come home to yourself.",
  },
  {
    slug: "rome-food-walk",
    title: "A First-Timer Food Walk Through Rome",
    category: "Food Guide",
    destination: "Rome",
    date: "June 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=84",
    alt: "A Roman street with warm yellow buildings",
    excerpt:
      "Espresso, market baskets, carbonara, gelato, and a route that keeps the city deliciously walkable.",
  },
  {
    slug: "choosing-a-honeymoon-route",
    title: "How to Choose a Honeymoon Route Without Overplanning",
    category: "Future Planning",
    destination: "Europe and beyond",
    date: "June 9, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=84",
    alt: "Soft waves on a pale beach",
    excerpt:
      "A calm framework for balancing rest, beauty, logistics, and the moments you want to remember most.",
  },
  {
    slug: "train-travel-europe",
    title: "The Flower Travel Guide to Easy Train Days in Europe",
    category: "Planning Guide",
    destination: "Europe",
    date: "May 30, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=84",
    alt: "A train moving through a scenic European landscape",
    excerpt:
      "How to choose routes, avoid overambitious transfer days, and make rail travel feel part of the trip.",
  },
];

export const guideProducts = [
  {
    slug: "lisbon-food-neighborhoods",
    title: "Lisbon: Where to Eat, Stay, and Wander",
    format: "Digital city guide",
    status: "Waitlist open",
    price: "€18",
    destination: "Lisbon",
    image:
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1600&q=84",
    alt: "A quiet Lisbon street with tiled facades and balconies",
    excerpt:
      "A polished Lisbon edit for neighborhood bases, tabernas, seafood lunches, wine bars, tiled walks, and day trips that do not feel rushed.",
    includes: ["Where to eat", "Best bases", "Slow weekend map"],
    href: "/travel-guides/where-to-stay-lisbon",
    cta: "Preview the guide",
  },
  {
    slug: "madeira-first-timer-field-guide",
    title: "Madeira First-Timer Field Guide",
    format: "Island planning guide",
    status: "Waitlist open",
    price: "€16",
    destination: "Madeira",
    image:
      "https://images.unsplash.com/photo-1579005995445-1c0a9c9b5c42?auto=format&fit=crop&w=1600&q=84",
    alt: "A dramatic green coastline on Madeira",
    excerpt:
      "A clear Madeira planning companion for bases, levada pacing, weather-flex days, ocean pools, scenic drives, and comfort-first logistics.",
    includes: ["Base chooser", "Soft adventure days", "Driver notes"],
    href: "/travel-guides/madeira-first-timers",
    cta: "Preview the guide",
  },
  {
    slug: "portugal-by-train-route-pack",
    title: "Portugal by Train Route Pack",
    format: "Route pack",
    status: "In research",
    price: "€22",
    destination: "Portugal",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=84",
    alt: "A train moving through a scenic railway landscape",
    excerpt:
      "A north-to-south rail route with realistic transfer days, city bases, beach pauses, station notes, and lower-impact travel choices.",
    includes: ["10-day route", "Train notes", "Hotel criteria"],
    href: "/club",
    cta: "Join the waitlist",
  },
  {
    slug: "sustainable-lisbon-weekend",
    title: "The Lighter Lisbon Weekend",
    format: "Mini guide",
    status: "In research",
    price: "Free preview",
    destination: "Lisbon",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=84",
    alt: "Lisbon rooftops and tiled buildings in warm evening light",
    excerpt:
      "A low-pressure Lisbon weekend built around public transport, independent restaurants, local craft, fewer transfers, and better neighborhood pacing.",
    includes: ["Low-impact route", "Independent places", "Transit tips"],
    href: "/club",
    cta: "Join the waitlist",
  },
];

export const consultationTopics = [
  "Choosing the right destination for your season, budget, and travel mood",
  "Pressure-testing an itinerary before flights and hotels are booked",
  "Finding a better base neighborhood or hotel shortlist",
  "Making a honeymoon or special trip feel elevated without becoming overplanned",
  "Turning a vague trip idea into a practical route with beautiful breathing room",
];
