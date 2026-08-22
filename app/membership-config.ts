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
  headline: "A travel studio for people who care where they go.",
  short:
    "Curated places, thoughtful journeys and personal travel advice across Europe.",
  notAgency:
    "Altrove helps you decide where to stay, eat and spend your time. You book directly with hotels, restaurants and providers.",
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
