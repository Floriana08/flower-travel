export const site = {
  name: "Flower Travel",
  strapline: "Portugal, by sea",
  studioLine:
    "An editorial travel community for thoughtful guides, graceful routes, and lower-impact ways to see the world.",
  email: "hello@flowertravel.studio",
};

export const navItems = [
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraries", label: "Routes" },
  { href: "/travel-guides", label: "Guides" },
  { href: "/#newsletter", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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

export const itineraries = [
  {
    slug: "portugal-by-train",
    title: "Portugal by Train",
    days: "10 days",
    region: "Porto, Coimbra, Lisbon, Cascais",
    pace: "Slow rail route",
    image:
      "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=1600&q=84",
    alt: "A train passing through a warm European landscape",
    summary:
      "A polished north-to-south route with tiled stations, river views, one beach day, and spacious city bases.",
    route: ["Porto", "Coimbra", "Lisbon", "Cascais"],
    bestFor: "First Portugal trip, rail lovers, design hotels",
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
      "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=1600&q=84",
    alt: "A train passing through a warm European landscape",
    excerpt:
      "A north-to-south rail route with realistic transfer days, city bases, beach pauses, station notes, and lower-impact travel choices.",
    includes: ["10-day route", "Train notes", "Hotel criteria"],
    href: "/#newsletter",
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
    href: "/#newsletter",
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
