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
  "4 days · Couple · First time in Lisbon · Food-led · Slow pace · €250–350/night";

export const journeyStops: JourneyStop[] = [
  {
    id: "airport",
    category: "Arrive",
    name: "Lisbon Airport",
    phrase: "Land and head straight into the city.",
    align: "left",
    why: "The trip begins the moment you clear arrivals — not after a buffer day of settling. A direct transfer into the neighbourhood keeps the first evening usable.",
    note: "Skip the city-centre car hire. Taxi or rideshare to Santa Catarina is enough.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Lisbon rooftops under soft afternoon light",
  },
  {
    id: "verride",
    category: "Stay",
    name: "Verride Palácio Santa Catarina",
    phrase: "Our base for this kind of Lisbon trip.",
    align: "right",
    why: "Intimate, romantic, and close enough to Chiado that walking becomes the default. The hotel is part of the occasion, not just a bed between restaurants.",
    note: "Ask for a room with a view if the trip is a celebration. The terrace sets the tone for the stay.",
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
    why: "The first walk should teach the hills and light before any museum list. Santa Catarina into Chiado is the softest introduction to the city’s rhythm.",
    note: "Leave the camera for a moment. Notice the tiles, the tram bells, the way the streets tilt toward the river.",
    image:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Narrow Lisbon street with patterned pavement",
  },
  {
    id: "faz-frio",
    category: "Eat",
    name: "Faz Frio",
    phrase: "A proper Lisbon first dinner.",
    align: "right",
    why: "A traditional Lisbon restaurant with enough character for a first evening without turning dinner into a formal event.",
    note: "Book ahead for dinner.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Restaurant table set for an evening meal",
  },
  {
    id: "alfama",
    category: "Morning",
    name: "Alfama",
    phrase: "Early light, stairs, and nowhere to rush.",
    align: "left",
    why: "Alfama rewards a morning when the lanes are still local. By midday the viewpoints fill; the atmosphere thins.",
    note: "Wear shoes that forgive cobbles. Start high and drift downhill toward Mouraria for lunch.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Alfama hillside neighbourhood overlooking Lisbon",
  },
  {
    id: "velho-eurico",
    category: "Lunch",
    name: "O Velho Eurico",
    phrase: "Mouraria cooking with more attention than the average tasca.",
    align: "right",
    why: "Lunch here keeps the day grounded after Alfama — neighbourhood energy, short menus, and a room that still feels local.",
    note: "Book if you can; walk in at opening if you cannot.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Warm restaurant interior ready for lunch",
  },
  {
    id: "principe-real",
    category: "Wander",
    name: "Príncipe Real",
    phrase: "Residential streets, design shops, and room to breathe.",
    align: "left",
    why: "After the old city, Príncipe Real resets the pace — greener, more residential, and better for an unhurried afternoon or evening.",
    note: "The garden square is a useful pause between lunch and whatever the evening becomes.",
    image:
      "https://images.unsplash.com/photo-1525874684015-4507e11a8b5e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tree-lined square in a European neighbourhood",
  },
  {
    id: "bar-alimentar",
    category: "Evening",
    name: "Bar Alimentar",
    phrase: "Wine and plates without a performance.",
    align: "right",
    why: "A late stop that feels like conversation more than a reservation theatre — small plates, good wine, and an ending that does not overwork the day.",
    note: "Share more than you order alone. Leave space for one more glass than planned.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Wine glasses and small plates on a bar counter",
  },
];

/** Branch sits after O Velho Eurico, before Príncipe Real. */
export const branchAfterStopId = "velho-eurico";

export const afternoonBranch: BranchOption[] = [
  {
    id: "culture",
    label: "Culture",
    place: "Gulbenkian",
    continuation:
      "A quiet museum afternoon — gardens, light, and one collection rather than three.",
    note: "Go for the gardens as much as the galleries. Leave when you have had enough, not when the map says you should.",
  },
  {
    id: "sea",
    label: "Sea",
    place: "Costa da Caparica",
    continuation:
      "A short hop to Atlantic air — sand, a swim if the season allows, and a slower return.",
    note: "Treat it as half a day, not a full rewrite of the trip. Be back before the evening plans tighten.",
  },
  {
    id: "nothing",
    label: "Nothing planned",
    place: "Estrela + wine",
    continuation:
      "A park bench, a glass nearby, and the afternoon left deliberately empty.",
    note: "This is often the best choice. Lisbon rewards people who stop trying to fill every hour.",
  },
];
