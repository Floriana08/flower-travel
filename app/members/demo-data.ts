export type DemoPlace = {
  id: string;
  name: string;
  category: string;
  neighbourhood: string;
  note: string;
  image: string;
  mapsUrl: string;
  destination: string;
};

export type DemoGuide = {
  slug: string;
  destination: string;
  title: string;
  summary: string;
  coverImage: string;
};

export type DemoTrip = {
  id: string;
  title: string;
  destination: string;
  dates: string;
  status: string;
};

export const demoMember = {
  firstName: "Flor",
  email: "member@altrove.studio",
};

export const demoGuides: DemoGuide[] = [
  {
    slug: "lisbon",
    destination: "Portugal",
    title: "The Altrove Guide to Lisbon",
    summary: "Where to stay, eat, drink and wander.",
    coverImage:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "naples",
    destination: "Italy",
    title: "Naples, without the checklist",
    summary: "Neighbourhoods, tables and a slower Amalfi rhythm.",
    coverImage:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "madrid",
    destination: "Spain",
    title: "Madrid for long evenings",
    summary: "Hotels, tapas streets and museums worth the queue.",
    coverImage:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
  },
];

export const demoPlaces: DemoPlace[] = [
  {
    id: "verride",
    name: "Verride Palácio Santa Catarina",
    category: "Stay",
    neighbourhood: "Santa Catarina",
    note: "Intimate palácio base — close enough to Chiado that walking becomes the default.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    mapsUrl: "https://maps.google.com/?q=Verride+Palacio+Santa+Catarina+Lisbon",
    destination: "Lisbon",
  },
  {
    id: "velho-eurico",
    name: "O Velho Eurico",
    category: "Eat",
    neighbourhood: "Mouraria",
    note: "Mouraria cooking with more attention than the average tasca.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    mapsUrl: "https://maps.google.com/?q=O+Velho+Eurico+Lisbon",
    destination: "Lisbon",
  },
  {
    id: "principe-real",
    name: "Príncipe Real",
    category: "Culture",
    neighbourhood: "Príncipe Real",
    note: "Residential streets and room to breathe after Alfama.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    mapsUrl: "https://maps.google.com/?q=Principe+Real+Lisbon",
    destination: "Lisbon",
  },
  {
    id: "faz-frio",
    name: "Faz Frio",
    category: "Eat",
    neighbourhood: "Príncipe Real",
    note: "A proper Lisbon first dinner without turning the evening formal.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    mapsUrl: "https://maps.google.com/?q=Faz+Frio+Lisbon",
    destination: "Lisbon",
  },
];

export const demoTrips: DemoTrip[] = [
  {
    id: "lisbon-sept",
    title: "Lisbon",
    destination: "Portugal",
    dates: "12–16 September",
    status: "Upcoming",
  },
];

export const demoSaved = demoPlaces.slice(0, 3);
