export type SampleHotel = {
  name: string;
  neighbourhood: string;
  note: string;
  pick?: boolean;
  image: string;
  alt: string;
};

export type SampleRestaurant = {
  name: string;
  neighbourhood: string;
  note: string;
};

export type SampleRhythm = {
  when: string;
  body: string;
};

export type SampleTrip = {
  slug: string;
  kicker: string;
  title: string;
  duration: string;
  heroImage: string;
  heroAlt: string;
  take: string[];
  hotels: SampleHotel[];
  restaurants: SampleRestaurant[];
  rhythm: SampleRhythm[];
  note: string;
  glimpseNote: string;
};

export const lisbonSampleTrip: SampleTrip = {
  slug: "lisbon",
  kicker: "A sample Altrove travel edit",
  title: "Lisbon",
  duration: "4 days",
  heroImage:
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=84",
  heroAlt: "Lisbon rooftops and tiled buildings in warm evening light",
  take: [
    "Lisbon is better taken from one well-chosen base than as a circuit of viewpoints. We would give you Chiado, let meals set the pace, and leave room to walk without finishing the city.",
    "Four days is enough if you stop collecting neighbourhoods. One tasca lunch. One seafood evening. One dinner booked because the room actually matters. The rest can stay loose.",
  ],
  hotels: [
    {
      name: "Verride Palácio Santa Catarina",
      neighbourhood: "Santa Catarina",
      pick: true,
      note: "A smaller palácio near the viewpoint, intimate enough that the hotel becomes part of the evening rather than a place to drop bags. Our pick for a first Lisbon stay that still feels considered.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=84",
      alt: "A calm hotel interior with warm light and tall windows",
    },
    {
      name: "Memmo Príncipe Real",
      neighbourhood: "Príncipe Real",
      note: "Quieter and more residential, with a terrace looking across the city. Better if you want gardens, restaurants and a hill you are happy to walk.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=84",
      alt: "A terrace overlooking a European city at dusk",
    },
  ],
  restaurants: [
    {
      name: "Cervejaria Ramiro",
      neighbourhood: "Intendente",
      note: "Still the reference for crab, prawns and clams. Go at opening, share plates, and leave before the queue becomes the story.",
    },
    {
      name: "O Velho Eurico",
      neighbourhood: "Mouraria",
      note: "Mouraria cooking with more attention than the average tasca. Book if you can; walk in at opening if you cannot.",
    },
    {
      name: "Faz Frio",
      neighbourhood: "Príncipe Real",
      note: "A neighbourhood room that still feels like Lisbon eating at its own pace — useful when you want a proper lunch without a reservation performance.",
    },
    {
      name: "Tasca Baldracca",
      neighbourhood: "Mouraria",
      note: "Short menu, good produce, a table worth making time for. Not a tourist circuit stop.",
    },
    {
      name: "Bar Alimentar",
      neighbourhood: "Anjos",
      note: "Wine, a few plates, and an evening that does not need to be dressed as a dinner reservation.",
    },
  ],
  rhythm: [
    {
      when: "Friday evening",
      body: "Arrive, leave the bags in Chiado, and eat nearby. Do not try to see Lisbon in the dark. A first drink, a first dinner, and an early night is enough.",
    },
    {
      when: "Saturday",
      body: "A slow morning, then a tasca lunch in Mouraria. Keep the afternoon unplanned — a viewpoint, a bookshop, a long coffee. One dinner booked, because the room matters.",
    },
    {
      when: "Sunday",
      body: "The river, or Belém if you want the monastery once. Seafood if Saturday was a tasca day. Leave Monday morning light: coffee, a last walk, and no checklist to finish.",
    },
  ],
  note: "Skip the rooms that photograph Lisbon rather than feed it. Book Ramiro for opening, not for nine o’clock. Walk Chiado, Príncipe Real and Bairro Alto as a loop rather than taxiing between lists. Alfama is better visited than used as a first base unless you are packing lightly and like stairs.",
  glimpseNote:
    "Book Ramiro for opening, not for nine o’clock. Lisbon is better walked as a loop than taxied between lists.",
};

export const sampleTrips = [lisbonSampleTrip];

export function getSampleTrip(slug: string) {
  return sampleTrips.find((trip) => trip.slug === slug);
}
