export type MapLocationCategory =
  | "hotels"
  | "restaurants"
  | "cafes"
  | "museums"
  | "viewpoints"
  | "train-stations"
  | "beaches"
  | "shops"
  | "experiences"
  | "flors-picks";

export type MapLocation = {
  id: string;
  name: string;
  slug: string;
  latitude: number;
  longitude: number;
  category: MapLocationCategory;
  city: string;
  country: string;
  shortDescription: string;
  address?: string;
  image?: string;
  articleSlug?: string;
  website?: string;
  florPick?: boolean;
};

/** Sample Lisbon/Portugal pins for the future TravelMap layer. */
export const portugalMapLocations: MapLocation[] = [
  {
    id: "lx-praca-comercio",
    name: "Praça do Comércio",
    slug: "praca-do-comercio",
    latitude: 38.7075,
    longitude: -9.1364,
    category: "viewpoints",
    city: "Lisbon",
    country: "Portugal",
    shortDescription:
      "Open square on the Tagus. Best early or late, when the light softens the arcades.",
    florPick: true,
  },
  {
    id: "lx-miradouro-graca",
    name: "Miradouro da Graça",
    slug: "miradouro-da-graca",
    latitude: 38.7165,
    longitude: -9.131,
    category: "viewpoints",
    city: "Lisbon",
    country: "Portugal",
    shortDescription:
      "I prefer this viewpoint in the morning, before the famous miradouros fill up.",
    florPick: true,
  },
  {
    id: "lx-time-out-market",
    name: "Time Out Market",
    slug: "time-out-market",
    latitude: 38.7072,
    longitude: -9.1457,
    category: "restaurants",
    city: "Lisbon",
    country: "Portugal",
    shortDescription:
      "Useful for a first evening if you want variety without chasing reservations.",
  },
  {
    id: "lx-santa-justa",
    name: "Santa Justa Lift",
    slug: "santa-justa-lift",
    latitude: 38.7121,
    longitude: -9.1393,
    category: "experiences",
    city: "Lisbon",
    country: "Portugal",
    shortDescription:
      "Skip the queue if you are short on time; the nearby streets are often the better walk.",
  },
  {
    id: "lx-oriente",
    name: "Oriente Station",
    slug: "oriente-station",
    latitude: 38.7679,
    longitude: -9.099,
    category: "train-stations",
    city: "Lisbon",
    country: "Portugal",
    shortDescription: "Main rail hub for longer routes north and south.",
  },
  {
    id: "porto-ribeira",
    name: "Ribeira",
    slug: "ribeira",
    latitude: 41.1406,
    longitude: -8.6131,
    category: "flors-picks",
    city: "Porto",
    country: "Portugal",
    shortDescription:
      "Stay nearby, but wander inland for quieter cafés and better dinners.",
    florPick: true,
  },
  {
    id: "douro-pinhao",
    name: "Pinhão",
    slug: "pinhao",
    latitude: 41.1917,
    longitude: -7.5453,
    category: "experiences",
    city: "Douro",
    country: "Portugal",
    shortDescription: "A calm Douro base for vineyard days with room for lunch.",
    florPick: true,
  },
];

export const mapCategoryLabels: Record<MapLocationCategory, string> = {
  hotels: "Hotels",
  restaurants: "Restaurants",
  cafes: "Cafés",
  museums: "Museums",
  viewpoints: "Viewpoints",
  "train-stations": "Train stations",
  beaches: "Beaches",
  shops: "Shops",
  experiences: "Experiences",
  "flors-picks": "Flor’s Picks",
};
