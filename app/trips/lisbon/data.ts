export type StopAlign = "left" | "right" | "center";

export type JourneyStop = {
  id: string;
  category: string;
  name: string;
  phrase: string;
  align: StopAlign;
  why: string;
  note: string;
  image?: string;
  imageAlt?: string;
};

export type BranchOption = {
  id: string;
  label: string;
  place: string;
  continuation: string;
  note: string;
};

export const tripProfile =
  "Couple · Food-led · Slow pace · First visit · 4 days";

export const journeyStops: JourneyStop[] = [
  {
    id: "airport",
    category: "Arrive",
    name: "Lisbon Airport",
    phrase: "Land and head straight into the city.",
    align: "left",
    why: "The trip begins the moment you clear arrivals. A direct transfer keeps the first evening usable.",
    note: "Skip the city-centre car hire. Taxi or rideshare to Santa Catarina is enough.",
  },
  {
    id: "verride",
    category: "Stay",
    name: "Verride Palácio Santa Catarina",
    phrase: "Our base for this kind of Lisbon trip.",
    align: "right",
    why: "Intimate, romantic, and close enough to Chiado that walking becomes the default.",
    note: "Ask for a room with a view if the trip is a celebration.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Elegant hotel interior with warm lighting",
  },
  {
    id: "santa-catarina",
    category: "Wander",
    name: "Santa Catarina → Chiado",
    phrase: "No agenda. Just start walking.",
    align: "left",
    why: "The first walk should teach the hills and light before any museum list.",
    note: "Leave the camera for a moment. Notice the tiles and the way the streets tilt toward the river.",
  },
  {
    id: "faz-frio",
    category: "Eat",
    name: "Faz Frio",
    phrase: "A proper Lisbon first dinner.",
    align: "right",
    why: "Traditional enough for a first evening without turning dinner into a formal event.",
    note: "Book ahead for dinner.",
  },
  {
    id: "alfama",
    category: "Explore",
    name: "Alfama",
    phrase: "Early light, stairs, and nowhere to rush.",
    align: "left",
    why: "Alfama rewards a morning when the lanes are still local.",
    note: "Start high and drift downhill toward Mouraria for lunch.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Lisbon hillside neighbourhood in soft light",
  },
  {
    id: "velho-eurico",
    category: "Eat",
    name: "O Velho Eurico",
    phrase: "Mouraria cooking with more attention than the average tasca.",
    align: "right",
    why: "Lunch here keeps the day grounded after Alfama.",
    note: "Book if you can; walk in at opening if you cannot.",
  },
  {
    id: "principe-real",
    category: "Pause",
    name: "Príncipe Real",
    phrase: "Residential streets and room to breathe.",
    align: "left",
    why: "After the old city, Príncipe Real resets the pace.",
    note: "The garden square is a useful pause between lunch and evening.",
  },
  {
    id: "bar-alimentar",
    category: "Evening",
    name: "Bar Alimentar",
    phrase: "Wine and plates without a performance.",
    align: "right",
    why: "A late stop that feels like conversation more than reservation theatre.",
    note: "Share more than you order alone.",
  },
];

export const branchAfterStopId = "velho-eurico";

export const afternoonBranch: BranchOption[] = [
  {
    id: "culture",
    label: "Culture",
    place: "Gulbenkian",
    continuation:
      "A quiet museum afternoon — gardens, light, and one collection rather than three.",
    note: "Leave when you have had enough, not when the map says you should.",
  },
  {
    id: "sea",
    label: "Sea",
    place: "Costa da Caparica",
    continuation:
      "A short hop to Atlantic air — sand, a swim if the season allows, and a slower return.",
    note: "Treat it as half a day, not a full rewrite of the trip.",
  },
  {
    id: "nothing",
    label: "Nothing planned",
    place: "Estrela + wine",
    continuation:
      "A park bench, a glass nearby, and the afternoon left deliberately empty.",
    note: "This is often the best choice.",
  },
];
