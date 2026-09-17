export type CityHub = {
  slug: "lisbon" | "naples";
  title: "Lisbon" | "Napoli";
  country: string;
  countrySlug: "portugal" | "italy";
  description: string;
  dispatch: string;
  heroImage: string;
  heroAlt: string;
  lede: string;
  intro: string[];
  takeHeading: string;
  take: string[];
  skipHeading: string;
  skip: string[];
  featuredSlug: string;
  articleSlugs: string[];
  itinerary?: {
    href: string;
    kicker: string;
    titleBefore: string;
    emphasis: string;
    excerpt: string;
    image: string;
    alt: string;
  };
};

export const cityPages: CityHub[] = [
  {
    slug: "lisbon",
    title: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    description:
      "Lisbon city page: what not to miss, where to eat and stay, a note for yogis, and a weekend itinerary — written as a travel blog, not a checklist.",
    dispatch: "Lisbon · start with what not to miss",
    heroImage:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=84",
    heroAlt: "Lisbon rooftops and tiled buildings in warm evening light",
    lede:
      "Lisbon rewards a good base more than an ambitious list. One neighbourhood, meals that set the pace, and hills you treat as part of the day — not a problem to taxi around.",
    intro: [
      "This is the Lisbon page. The posts below are how we actually share the city: what not to miss, where to eat, where to stay, and a slower note if you like mornings with a mat.",
      "We are not covering every viewpoint. We are covering the version of Lisbon we would give a friend with four days and decent shoes.",
    ],
    takeHeading: "How we would do it",
    take: [
      "Stay central, but skip the most photographed streets as a base.",
      "Walk the hills. Plan around them. Do not pretend the map is flat.",
      "Book the one dinner that matters. Leave lunch flexible.",
      "Treat neighbourhoods as the trip — not a list of attractions to tick.",
    ],
    skipHeading: "Useful refusals",
    skip: [
      "Collecting miradouros. One view near your bed is enough.",
      "Time Out Market as a daily habit. Fine once, on arrival day.",
      "Alfama as a first hotel if you have real luggage.",
      "Restaurants that photograph Lisbon rather than feed it.",
    ],
    featuredSlug: "what-not-to-miss-in-lisbon",
    articleSlugs: [
      "what-not-to-miss-in-lisbon",
      "are-you-a-yogi",
      "where-to-eat-lisbon",
      "where-to-stay-lisbon",
    ],
    itinerary: {
      href: "/trips/lisbon",
      kicker: "Itinerary · 4 days",
      titleBefore: "A weekend in ",
      emphasis: "Lisbon",
      excerpt:
        "One neighbourhood, a short list of tables, and a pace that leaves room to walk. Use it as a starting point — not a booking.",
      image:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=84",
      alt: "Lisbon rooftops and tiled buildings in warm evening light",
    },
  },
  {
    slug: "naples",
    title: "Napoli",
    country: "Italy",
    countrySlug: "italy",
    description:
      "Napoli city page: what not to miss, where to eat pizza properly, and how to use the city as the trip — not a one-night gateway to the coast.",
    dispatch: "Napoli · the city is the trip, not the transfer",
    heroImage:
      "https://images.unsplash.com/photo-1775188693558-31c7f14790f5?auto=format&fit=crop&w=2000&q=84",
    heroAlt: "Naples bay with Mount Vesuvius in the distance",
    lede:
      "Napoli is not a night before the Amalfi Coast. It is the loud, generous, street-level city that makes the rest of Campania make sense — if you give it a proper base and one clean day trip, not four.",
    intro: [
      "This is the Napoli page. Start with what not to miss, then the eating notes. The coast can wait until the city has had its mornings.",
      "We write Campania because we know it. That does not mean a five-town sprint. It means pizza sitting down, one museum, the lungomare at blue hour, and Pompeii or Herculaneum — not both plus Capri.",
    ],
    takeHeading: "How we would do it",
    take: [
      "Stay in Chiaia or Vomero if you want to sleep. Visit the centro; do not necessarily sleep on top of it.",
      "One pizza, properly. Not a crawl.",
      "Walk Spaccanapoli. Let the street be the sight.",
      "Pick one day trip and come back to the same bed.",
    ],
    skipHeading: "Useful refusals",
    skip: [
      "Treating Napoli as an airport hotel with a pizza attached.",
      "Pompeii, Capri and the Amalfi strip on the same short stay.",
      "Driving in the centro. You will not enjoy it.",
      "A restaurant whose entire personality is a photo of Vesuvius on the menu.",
    ],
    featuredSlug: "what-not-to-miss-in-naples",
    articleSlugs: ["what-not-to-miss-in-naples", "where-to-eat-naples"],
    itinerary: {
      href: "/journeys/naples-amalfi",
      kicker: "Journey · Campania · 7–9 days",
      titleBefore: "Napoli, then the ",
      emphasis: "coast",
      excerpt:
        "A neighbourhood in the city, then one coastal bed. Ferries when you can. Evenings left alone.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
      alt: "Cliffside villages on the Amalfi Coast above blue Mediterranean water",
    },
  },
];

export function getCityPage(slug: string) {
  return cityPages.find((city) => city.slug === slug);
}

export function getCityArticleSlugs(slug: CityHub["slug"]) {
  return getCityPage(slug)?.articleSlugs ?? [];
}
