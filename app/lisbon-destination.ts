export type LisbonPlace = {
  name: string;
  area: string;
  note: string;
};

export const lisbonDestination = {
  title: "Lisbon",
  kicker: "Portugal",
  heroImage:
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=84",
  heroAlt: "Lisbon rooftops and tiled buildings in warm evening light",
  intro:
    "Lisbon rewards a good base more than an ambitious checklist. We would give you one neighbourhood, let meals set the pace, and leave room to walk without finishing the city.",
  take: [
    "Stay central, but avoid the most tourist-saturated streets.",
    "Walk whenever possible, and plan around Lisbon’s hills rather than pretending they are flat.",
    "Book specific restaurants well ahead — the tables worth eating at fill first.",
    "Treat neighbourhoods as experiences rather than a list of attractions to tick off.",
  ],
  stay: [
    {
      name: "Verride Palácio Santa Catarina",
      area: "Santa Catarina",
      note: "Our pick for a first stay: a smaller palácio near the viewpoint, intimate enough that the hotel becomes part of the evening.",
    },
    {
      name: "Bairro Alto Hotel",
      area: "Chiado",
      note: "A strong special-stay choice on Praça Luís de Camões — Lisbon immediately outside the door.",
    },
    {
      name: "Memmo Príncipe Real",
      area: "Príncipe Real",
      note: "Quieter and more residential, with a terrace that makes the hill worth it.",
    },
    {
      name: "Valverde Lisboa Hotel and Garden",
      area: "Avenida da Liberdade",
      note: "A calmer, more polished base when luggage, taxis and an easier street matter as much as atmosphere.",
    },
  ] satisfies LisbonPlace[],
  eat: [
    {
      name: "Cervejaria Ramiro",
      area: "Intendente",
      note: "Still the reference for crab, prawns and clams. Go at opening.",
    },
    {
      name: "O Velho Eurico",
      area: "Mouraria",
      note: "Mouraria cooking with more attention than the average tasca. Book if you can.",
    },
    {
      name: "Faz Frio",
      area: "Príncipe Real",
      note: "A neighbourhood room that still feels like Lisbon eating at its own pace.",
    },
    {
      name: "Tasca Baldracca",
      area: "Mouraria",
      note: "A short menu and a table worth making time for — not a tourist circuit stop.",
    },
  ] satisfies LisbonPlace[],
  coffee: [
    {
      name: "Manteigaria",
      area: "Chiado or Príncipe Real",
      note: "The most useful natas in the centre, served hot, without reorganising the morning.",
    },
    {
      name: "Pastéis de Belém",
      area: "Belém",
      note: "Go once, early, and treat it as a visit rather than a daily habit.",
    },
    {
      name: "A neighbourhood bica",
      area: "Wherever you are staying",
      note: "A good coffee and a savoury pastry will do more for a morning than a hotel breakfast you do not remember.",
    },
  ] satisfies LisbonPlace[],
  do: [
    {
      name: "Walk Chiado, Príncipe Real and Bairro Alto as a loop",
      area: "Centre",
      note: "The city makes more sense on foot than by taxiing between lists.",
    },
    {
      name: "Belém, once",
      area: "West",
      note: "The monastery, the river and a pastel — then come back to the centre for the evening.",
    },
    {
      name: "One viewpoint, not all of them",
      area: "Santa Catarina or Graça",
      note: "Choose a view near your base. Collecting miradouros is a poor use of a short stay.",
    },
  ] satisfies LisbonPlace[],
  skip: [
    "Restaurants that photograph Lisbon rather than feed it — menus with twenty pictures, and rooms whose entire personality is a fado soundtrack for visitors.",
    "Alfama as a first base if you have proper luggage. Visit it; sleep somewhere a taxi can actually reach.",
    "Time Out Market as a daily habit. Useful once on arrival day; a poor substitute for a neighbourhood lunch.",
    "Treating the city as a circuit of viewpoints. One hill, walked properly, is enough.",
  ],
  journalSlugs: ["where-to-stay-lisbon", "where-to-eat-lisbon"],
} as const;
