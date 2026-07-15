export type ArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ArticleSource = {
  label: string;
  url: string;
};

export type GuideArticle = {
  slug: string;
  dek: string;
  lastReviewed: string;
  facts: string[];
  sections: ArticleSection[];
  goodFor: string[];
  sources: ArticleSource[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "where-to-stay-lisbon",
    dek:
      "Lisbon is compact on a map and surprisingly demanding underfoot. The right base depends less on distance and more on hills, evening rhythm, transport, and how much polish you want around your hotel.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Baixa is the flat, gridded downtown rebuilt after the 1755 earthquake.",
      "Alfama is one of Lisbon's oldest quarters, beautiful but steep and irregular.",
      "Avenida da Liberdade is a broad central boulevard with luxury hotels, shops, and direct metro access.",
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "For a first Lisbon trip, choose Baixa or Chiado if you want the easiest sightseeing base. Choose Avenida da Liberdade if you want a calmer, more polished hotel experience with taxis and metro nearby. Choose Alfama only if atmosphere matters more than convenience: it is romantic, historic, and hard work with luggage.",
          "For a more local-feeling stay, Príncipe Real gives you design shops, gardens, restaurants, and a softer evening pace. Cais do Sodré and Santos suit travelers who want river access, nightlife, and a little more edge, but they are not the quietest choices."
        ],
      },
      {
        heading: "Best bases by travel mood",
        body: [
          "Baixa and Chiado are the safe editorial recommendation for most readers: central, walkable, close to tram and metro links, and easy for first-day orientation. The tradeoff is that the most central streets can feel busy and touristic.",
          "Avenida da Liberdade is the best base for a luxury-leaning city break. It has wider pavements, grander hotels, designer retail, and a smoother arrival experience than the old quarters. It also keeps you close to Restauradores, Rossio, and Marquês de Pombal without sleeping inside the densest tourist lanes.",
          "Alfama and Graça are for travelers who want views, fado, tiled corners, and morning atmosphere. They are less convenient after dinner and much less forgiving with heavy bags, but they give Lisbon its cinematic side."
        ],
        bullets: [
          "First-timers: Baixa, Chiado, or Avenida da Liberdade.",
          "Romantic atmosphere: Alfama or a view-led boutique stay near Graça.",
          "Design and restaurants: Príncipe Real.",
          "Nightlife and river access: Cais do Sodré or Santos.",
          "Quiet luxury: Avenida da Liberdade or Lapa."
        ],
      },
      {
        heading: "What I would avoid for a first stay",
        body: [
          "Belém is wonderful for a museum-and-river day, but it sits west of the historic center and can make short trips feel commute-heavy. Parque das Nações is clean and convenient for events, the airport side of town, or business travel, but it does not give you the classic Lisbon feeling most readers are searching for.",
          "The more useful test is not whether a district is famous, but whether your evenings will feel easy. If you want to wander after dinner, stay where the last walk home still feels beautiful."
        ],
      },
      {
        heading: "Booking notes",
        body: [
          "Lisbon's prettiest stays often sit in older buildings. Before booking, check whether there is a lift, whether taxis can stop directly outside, and whether the room faces a bar street, tram line, or internal courtyard.",
          "For summer, prioritize air conditioning and a pool only if you will actually return to the hotel midday. For shoulder season, a good terrace, breakfast room, or lounge may matter more than amenities you will not use."
        ],
      },
    ],
    goodFor: [
      "First Lisbon trips",
      "Hotel shortlisting",
      "Luxury city breaks",
      "Travelers comparing neighborhoods",
    ],
    sources: [
      {
        label: "Visit Lisboa",
        url: "https://visitlisboa.com/en",
      },
      {
        label: "Tourism in Lisbon neighborhood overview",
        url: "https://en.wikipedia.org/wiki/Tourism_in_Lisbon",
      },
      {
        label: "Avenida da Liberdade background",
        url: "https://en.wikipedia.org/wiki/Avenida_da_Liberdade",
      },
    ],
  },
  {
    slug: "madeira-first-timers",
    dek:
      "Madeira is not a fly-and-flop island. It is a vertical, weather-shifting Atlantic landscape where the best trips combine a comfortable base, flexible transport, and honest pacing.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Madeira has marked PR walking routes, including the mountain route between Pico do Areeiro and Pico Ruivo.",
      "The island has many microclimates, with weather changing quickly between coast, forest, and mountains.",
      "Porto Moniz is known for natural volcanic-rock swimming pools on the northwest coast.",
    ],
    sections: [
      {
        heading: "Choose the base before the activities",
        body: [
          "Funchal is the best base for first-timers who want restaurants, easy tours, gardens, taxis, boat trips, and a softer landing. It also works well if you do not want to drive every day.",
          "The southwest coast, especially Calheta and Ponta do Sol, suits travelers chasing more sun, sea views, and resort-style calm. The north coast feels wilder and more dramatic, but it is less convenient as a first base unless the whole trip is built around nature."
        ],
        bullets: [
          "Best first base: Funchal.",
          "Best sunny reset: Calheta or Ponta do Sol.",
          "Best drama: Seixal, São Vicente, or Porto Moniz for part of the trip.",
          "Best split stay: four nights Funchal, three nights west or north coast."
        ],
      },
      {
        heading: "The hiking reality",
        body: [
          "Madeira's famous walks are beautiful because the island is steep, wet, and exposed. That means they deserve real planning. The PR1 mountain route is often described as a Madeira classic, but it includes exposed ridges, tunnels, steps, and weather that can change the tone of the day quickly.",
          "For many first-timers, a guided or driver-supported mountain morning is worth the spend. It removes parking stress, lets someone else monitor conditions, and makes sunrise plans less fragile."
        ],
      },
      {
        heading: "How to pace a seven-day trip",
        body: [
          "Do not stack a major hike, a long coastal drive, and a tasting dinner into the same day. A better rhythm is one active morning, one scenic lunch, and one easy evening.",
          "A balanced first week could include Funchal and Monte, a levada walk, a Pico do Areeiro sunrise or viewpoint morning, a west-coast pool day around Porto Moniz, a botanical garden, and one unscheduled weather-flex day."
        ],
      },
      {
        heading: "Comfort is worth budgeting for",
        body: [
          "Madeira rewards a little comfort. A hotel with parking, a good breakfast, a balcony, or a spa can change the entire trip when weather shifts or legs are tired after a hike.",
          "The island is compact, but the roads make distance feel different. Plan by drive time and elevation, not by kilometers."
        ],
      },
    ],
    goodFor: [
      "First Madeira trips",
      "Soft adventure",
      "Couples",
      "Travelers deciding whether to rent a car",
    ],
    sources: [
      {
        label: "Visit Madeira hiking information",
        url: "https://www.visitmadeira.com/en/what-to-do/nature-seekers/activities/hiking/",
      },
      {
        label: "Pico Ruivo and PR walking route context",
        url: "https://en.wikipedia.org/wiki/Pico_Ruivo",
      },
      {
        label: "Madeira climate and geography overview",
        url: "https://en.wikipedia.org/wiki/Madeira",
      },
      {
        label: "Porto Moniz natural pools background",
        url: "https://pt.wikipedia.org/wiki/Piscinas_Naturais_do_Porto_Moniz",
      },
    ],
  },
  {
    slug: "solo-paris-weekend",
    dek:
      "A solo Paris weekend does not need to be brave, packed, or performative. The best version gives you beautiful anchors, easy meals, and enough structure to feel held by the city.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Paris is best planned by neighborhood clusters rather than a long cross-city checklist.",
      "Many major museums use timed tickets and some close one day a week, so hours should be checked before booking.",
      "Metro, bus, and walking combinations make short, gentle days easier than taxi-heavy plans.",
    ],
    sections: [
      {
        heading: "Where to stay",
        body: [
          "For a gentle first solo trip, stay in Saint-Germain, the northern Marais, or around the Luxembourg Garden. These areas offer strong walking routes, cafes where it feels natural to sit alone, and enough evening life without needing to manufacture nightlife.",
          "Avoid choosing a hotel only because it is near one monument. Solo comfort usually comes from the street outside the door: lighting, food options, transit, and whether you will enjoy coming back there at 9 p.m."
        ],
      },
      {
        heading: "A soft three-day rhythm",
        body: [
          "Day one should be small: arrive, check in, take one garden walk, and book a dinner close to the hotel. Day two can hold one major museum or exhibition in the morning, a proper lunch, and a neighborhood wander in the afternoon. Day three is for a favorite cafe, a market street, and one low-pressure view before leaving.",
          "The point is not to see less because you are alone. It is to remove friction so the city has room to feel generous."
        ],
        bullets: [
          "Anchor one meaningful activity per day.",
          "Book dinner for the first night before you travel.",
          "Keep a cafe, bookshop, or garden as a reset point.",
          "Use buses for surface-level orientation when your feet are tired."
        ],
      },
      {
        heading: "Solo dining without awkwardness",
        body: [
          "Paris is good for solo meals if you choose the format carefully. Counters, wine bars, museum cafes, neighborhood bistros, and terrace tables are easier than high-pressure tasting menus.",
          "Lunch is often the kindest meal for a solo traveler: better light, softer energy, and less pressure than a late dinner reservation."
        ],
      },
      {
        heading: "What to book and what to leave open",
        body: [
          "Book the museum or exhibition that matters most, plus first-night dinner. Leave shopping, walks, and second coffees open. Paris rewards drifting, but only after the essential logistics are quiet.",
          "Before you go, check museum opening days directly. A graceful Paris weekend can become irritating quickly if the one thing you crossed town for is closed."
        ],
      },
    ],
    goodFor: [
      "Solo travelers",
      "Gentle first Paris trips",
      "Museum weekends",
      "Confidence-building city breaks",
    ],
    sources: [
      {
        label: "Paris je t'aime official visitor information",
        url: "https://www.parisjetaime.com/eng/",
      },
      {
        label: "Louvre visitor hours and admission",
        url: "https://www.louvre.fr/en/visit/hours-admission",
      },
      {
        label: "RATP Paris public transport information",
        url: "https://www.ratp.fr/en",
      },
    ],
  },
  {
    slug: "rome-food-walk",
    dek:
      "Rome is easiest to understand when you let food set the pace: coffee standing up, a market morning, a long pasta lunch, and a slow walk back through layers of history.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Campo de' Fiori has long been associated with a morning food market, traditionally closed on Sunday.",
      "Testaccio is closely tied to Rome's food identity and sits around Monte Testaccio, the ancient mound of amphora fragments.",
      "Classic Roman pasta dishes include carbonara, cacio e pepe, gricia, and amatriciana.",
    ],
    sections: [
      {
        heading: "Start with coffee, not a checklist",
        body: [
          "Begin near the historic center with espresso and a pastry before the streets are fully awake. Rome is not a city that rewards rushing from landmark to landmark with snacks in between. It rewards appetite, pauses, and attention.",
          "If you want a food-led first day, keep the route compact: Campo de' Fiori, the Jewish Ghetto, Largo di Torre Argentina, Pantheon lanes, and a later transfer toward Testaccio or Trastevere."
        ],
      },
      {
        heading: "Morning: market and bakery rhythm",
        body: [
          "Campo de' Fiori works best early, before it becomes more souvenir than produce. Use it as a warm-up rather than the whole point. From there, walk toward the Jewish Ghetto for bakery windows, artichoke traditions, and a deeper sense of Rome's layered food history.",
          "The trick is to taste lightly in the morning. Rome's best food day needs room for lunch."
        ],
      },
      {
        heading: "Lunch: make Testaccio the anchor",
        body: [
          "Testaccio is the strongest food-neighborhood anchor for a first-timer because it connects market life, working-city history, and Roman cooking in one walkable area. It is also a useful counterweight to the more polished centro storico.",
          "Plan lunch around one real Roman plate rather than a tasting crawl. Carbonara, cacio e pepe, gricia, amatriciana, oxtail, tripe, and seasonal vegetables all make more sense when you are seated, not sprinting."
        ],
      },
      {
        heading: "Afternoon and aperitivo",
        body: [
          "After lunch, walk slowly. Cross toward Trastevere for a late afternoon drink, or return to the historic center for gelato and a soft evening loop around the Pantheon and Piazza Navona.",
          "The best food walk has a little discipline: one market, one serious lunch, one sweet stop, one aperitivo. Anything more starts to taste like homework."
        ],
      },
    ],
    goodFor: [
      "First Rome trips",
      "Food-focused weekends",
      "Walkable itineraries",
      "Travelers who prefer meals to monuments",
    ],
    sources: [
      {
        label: "Food & Wine Rome local eating guide",
        url: "https://www.foodandwine.com/rome-travel-guide-12000889",
      },
      {
        label: "Rome market background",
        url: "https://en.wikipedia.org/wiki/List_of_shopping_areas_and_markets_in_Rome",
      },
      {
        label: "Testaccio neighborhood background",
        url: "https://en.wikipedia.org/wiki/Testaccio",
      },
    ],
  },
  {
    slug: "choosing-a-honeymoon-route",
    dek:
      "A honeymoon route should feel beautiful in memory, not impressive on paper. The strongest plans protect rest, reduce transfers, and make room for the version of yourselves that will arrive after the wedding.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Many visa-exempt travelers in the Schengen Area are limited to 90 days in any 180-day period.",
      "ETIAS is expected to add a travel authorization requirement for many visa-exempt visitors when it launches.",
      "Two or three bases usually work better than a new hotel every night.",
    ],
    sections: [
      {
        heading: "Start with the feeling, then the map",
        body: [
          "Before choosing countries, choose the honeymoon mood: restorative, glamorous, adventurous, cultural, coastal, or food-led. A route that tries to be all of them usually becomes a logistics project.",
          "The most useful first question is: what do you want the trip to do for you after the wedding? If the honest answer is rest, build rest into the first three nights instead of promising you will relax later."
        ],
      },
      {
        heading: "Use the two-base rule",
        body: [
          "For one week, choose one base or two at most. For ten to fourteen days, choose two or three bases. More movement can work, but only when transfers are short, scenic, or part of the romance.",
          "A good honeymoon route alternates energy: city, coast; culture, pool; exploring, stillness. It should not ask you to repack before you have emotionally arrived."
        ],
        bullets: [
          "Seven nights: one main base plus one easy contrast.",
          "Ten nights: city plus coast, or island plus countryside.",
          "Fourteen nights: three bases only if the transfers are elegant.",
          "Add a splurge hotel where you will actually be present enough to enjoy it."
        ],
      },
      {
        heading: "Check legal and seasonal details early",
        body: [
          "If you are combining several European countries, check Schengen timing, passport validity, and any authorization requirements before falling in love with the route. As of July 2026, ETIAS is expected for many visa-exempt travelers when it goes live, and official rules should be checked close to departure.",
          "Season matters as much as legality. Greek island ferries, Amalfi traffic, Provence heat, Atlantic wind, and hotel closure periods can all shape whether a route feels graceful or strained."
        ],
      },
      {
        heading: "Where to spend and where to simplify",
        body: [
          "Spend on the nights where the hotel is the experience: arrival recovery, a beach base, a vineyard stay, or the final two nights. Simplify airport nights, transit cities, and places where you will be out all day.",
          "The quiet luxury move is not always the most expensive hotel. It is the route with fewer avoidable decisions."
        ],
      },
    ],
    goodFor: [
      "Honeymoon planning",
      "Special trips",
      "Couples choosing between routes",
      "Luxury travel foundations",
    ],
    sources: [
      {
        label: "Official ETIAS information",
        url: "https://travel-europe.europa.eu/etias_en",
      },
      {
        label: "ETIAS timeline and rules background",
        url: "https://en.wikipedia.org/wiki/European_Travel_Information_and_Authorisation_System",
      },
      {
        label: "Schengen short-stay calculator",
        url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/border-crossing/short-stay-visa-calculator_en",
      },
    ],
  },
  {
    slug: "train-travel-europe",
    dek:
      "Easy train days are designed, not discovered. The best rail routes use direct trains, realistic transfer windows, and reservations where they actually matter.",
    lastReviewed: "July 15, 2026",
    facts: [
      "EU rail passenger rules include compensation thresholds for significant delays.",
      "Many high-speed, international, and overnight trains require reservations for pass holders.",
      "Regional trains can be slower but often remove reservation stress and make the journey feel more local.",
    ],
    sections: [
      {
        heading: "What makes a train day easy",
        body: [
          "An easy train day has one clear purpose: move between bases without exhausting the trip. The sweet spot is usually one direct train or one simple connection, with enough time to buy water, find the platform, and recover from delays.",
          "Do not judge a route only by the timetable's fastest option. A slightly slower direct train is often better than a tight connection with luggage."
        ],
      },
      {
        heading: "Reservations are not a failure",
        body: [
          "Rail passes can be wonderful, but they are not magic keys to every seat. High-speed, international, and overnight trains often need seat or sleeper reservations, sometimes with limited pass-holder availability.",
          "For editorial-style trips, I like reserving the important legs early and leaving only low-stakes regional rides flexible."
        ],
        bullets: [
          "Book high-demand cross-border and overnight trains first.",
          "Avoid arrivals after 9 p.m. unless the hotel transfer is simple.",
          "Allow more time when changing stations in Paris, London, Milan, or Madrid.",
          "Use regional trains for short scenic legs where flexibility matters."
        ],
      },
      {
        heading: "Build the day around comfort",
        body: [
          "A beautiful train day starts the night before: hotel near the station if the departure is early, tickets downloaded, snacks packed, and a route screenshot saved.",
          "If the journey is more than five hours, treat it as the day's main event. Plan a gentle dinner near the arrival station or hotel instead of pretending you will still want a full sightseeing list."
        ],
      },
      {
        heading: "Know your delay rights",
        body: [
          "In the EU, rail passenger rules set baseline rights for delays, including partial ticket compensation at significant delay thresholds. Operators may offer more generous terms, but the basic rights are worth knowing before a disruption.",
          "Keep tickets, receipts, screenshots, and delay confirmations until the trip is fully settled. It is less glamorous than a window seat, but it is part of traveling well."
        ],
      },
    ],
    goodFor: [
      "Europe by train",
      "Rail itinerary planning",
      "First-time Interrail or Eurail trips",
      "Travelers avoiding rushed transfer days",
    ],
    sources: [
      {
        label: "EU rail passenger rights",
        url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_en.htm",
      },
      {
        label: "Eurail reservation guidance",
        url: "https://www.eurail.com/en/plan-your-trip/reservations",
      },
      {
        label: "EU rail passenger rights regulation background",
        url: "https://en.wikipedia.org/wiki/Rail_Passenger_Rights_Regulation_2021",
      },
    ],
  },
];

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}
