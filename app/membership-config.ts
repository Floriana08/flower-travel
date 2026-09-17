/** Central membership / studio product config — change pricing here once. */

export const membershipConfig = {
  founding: {
    name: "Founding Membership",
    priceLabel: "€195 / year",
    priceEuros: 195,
    currency: "eur",
    interval: "year" as const,
    limitNote: "Founding membership will be limited to the first 50 members.",
    stripePriceEnv: "STRIPE_FOUNDING_PRICE_ID",
  },
  planning: {
    memberFromLabel: "from €150",
    nonMemberNote:
      "Members receive preferential pricing on bespoke itinerary planning.",
  },
} as const;

export const studioPositioning = {
  headline: "A journal for travelling well.",
  short:
    "Itineraries, recommendations, and notes on how to travel more sustainably — Portugal, Italy, Spain and the routes between them.",
  notAgency:
    "Altrove is a travel journal. We recommend where to stay, eat and spend time. You book directly.",
} as const;

export const placeCategories = [
  "Stay",
  "Eat",
  "Drink",
  "Coffee",
  "Culture",
  "Shop",
  "Swim",
  "Experience",
] as const;

export type PlaceCategory = (typeof placeCategories)[number] | "All";
