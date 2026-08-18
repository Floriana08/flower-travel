export type ArticleSection = {
  heading?: string;
  body: string[];
  bullets?: string[];
  listTitle?: string;
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
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
      "Lisbon looks manageable on a map. Then comes the first calçada hill, usually with a suitcase, and suddenly choosing where to stay becomes less about distance and more about geography.",
    lastReviewed: "August 18, 2026",
    facts: [
      "For a first visit, Chiado, Príncipe Real, Avenida da Liberdade and the quieter edges of Baixa are the strongest places to start.",
      "Alfama is beautiful and atmospheric, but it comes with hills, stairs and more complicated access.",
      "Lisbon has a talent for turning a short distance on a map into a serious uphill walk.",
    ],
    sections: [
      {
        heading: "How to choose a base",
        body: [
          "The right neighbourhood can make Lisbon wonderfully easy. The wrong one can mean steep walks home, noisy nights or spending more time in taxis than expected.",
          "For a first visit, Chiado, Príncipe Real, Avenida da Liberdade and the quieter edges of Baixa are the strongest places to start. Alfama is beautiful and atmospheric, but it comes with hills, stairs and more complicated access.",
          "Here is how the main areas compare, which hotels are worth considering and a few parts of Lisbon that are better explored than used as a base.",
        ],
      },
      {
        heading: "Best areas to stay in Lisbon at a glance",
        body: [],
        table: {
          caption: "How the main Lisbon neighbourhoods compare as a base.",
          headers: ["Area", "Best for", "Worth knowing"],
          rows: [
            ["Chiado", "First visits", "Central, elegant and easy"],
            ["Príncipe Real", "Restaurants and design", "Stylish, residential and hilly"],
            ["Avenida da Liberdade", "Luxury", "Excellent hotels and easy access"],
            ["Alfama", "Atmosphere", "Historic and difficult with luggage"],
            ["Baixa", "Short trips", "Central, but choose the street carefully"],
            ["Lapa and Estrela", "Quiet stays", "Residential and away from the crowds"],
            ["Santos", "Restaurants and evenings out", "Lively at night"],
            ["Cais do Sodré", "Nightlife", "Very well connected, but noisy in places"],
            ["Belém", "Museums and the river", "Better to visit than use as a first base"],
          ],
        },
      },
      {
        heading: "Chiado",
        body: [
          "For a first trip to Lisbon, Chiado is difficult to beat.",
          "The location makes exploring simple. Baixa sits below, Bairro Alto above, the river is an easy walk downhill and Príncipe Real is close enough for dinner. Many of Lisbon’s main sights are within walking distance, but the neighbourhood still has enough restaurants, cafés and shops to make returning between plans worthwhile.",
          "This becomes particularly useful on a three or four day trip. There is no need to organise every day around transport, and going back to the hotel before dinner does not become an expedition.",
        ],
        listTitle: "Hotels in Chiado",
        bullets: [
          "Bairro Alto Hotel — one of the strongest choices for a special stay. Its position on Praça Luís de Camões, between Chiado and Bairro Alto, puts Lisbon immediately outside the door.",
          "Verride Palácio Santa Catarina — a more intimate and romantic option near the Santa Catarina viewpoint, particularly suited to a weekend when the hotel is part of the occasion.",
          "Palácio Ludovice — historic character in an excellent position between Chiado, Bairro Alto and Príncipe Real.",
          "The Ivens — more theatrical and glamorous, with enough personality to make the hotel itself part of the trip.",
          "AlmaLusa Baixa/Chiado — an understated option near Praça do Município with a particularly useful location for exploring on foot.",
        ],
      },
      {
        heading: "Príncipe Real",
        body: [
          "Príncipe Real offers a different version of central Lisbon.",
          "The neighbourhood feels more residential, with gardens, independent shops, restaurants and wine bars scattered between traditional buildings. Chiado and Bairro Alto remain close, but there is less sense of staying beside the main sightseeing circuit.",
          "It works especially well for couples, repeat visitors and trips built around good restaurants as much as monuments.",
          "The only real consideration is the hill. Walking down towards Chiado is easy. The return journey after dinner is another matter.",
        ],
        listTitle: "Hotels in Príncipe Real",
        bullets: [
          "Memmo Príncipe Real — modern and discreet, with views across the city that make the elevated location worthwhile.",
          "The Vintage Hotel and Spa — a useful choice for travellers who like the neighbourhood but want the facilities and comfort of a larger hotel.",
          "Casa do Príncipe — smaller and more personal, overlooking the garden and better suited to travellers who value character over extensive hotel facilities.",
        ],
      },
      {
        heading: "Avenida da Liberdade",
        body: [
          "Avenida da Liberdade is one of the best areas to stay in Lisbon when comfort matters as much as location.",
          "The avenue is broad, polished and considerably easier to navigate with luggage than many of Lisbon’s historic neighbourhoods. Taxis can reach hotel entrances without complicated arrangements and several of the city’s best luxury hotels are here or nearby.",
          "There is less of the immediate neighbourhood atmosphere found in Chiado or Alfama, but the centre remains within easy reach.",
        ],
        listTitle: "Hotels around Avenida da Liberdade",
        bullets: [
          "Four Seasons Hotel Ritz Lisbon — the grand hotel choice, with generous rooms, polished service and a distinctly old school sense of glamour.",
          "Valverde Lisboa Hotel and Garden — smaller and more intimate, with a courtyard garden hidden behind the busy avenue.",
          "Hotel das Amoreiras — beside Jardim das Amoreiras, with a more residential atmosphere than the larger hotels around Avenida.",
          "Locke de Santa Joana — a contemporary option that works particularly well for longer stays.",
        ],
      },
      {
        heading: "Alfama",
        body: [
          "Alfama is the Lisbon that often appears in photographs.",
          "Narrow streets twist between tiled façades, church bells carry across the rooftops and the Tagus appears unexpectedly between buildings. Early mornings and evenings are particularly atmospheric, once many daytime visitors have left.",
          "Staying here, however, requires a little more planning.",
          "The streets are steep, stairs are common and taxis cannot reach every address. A hotel that appears perfectly accessible on a map may involve carrying luggage through narrow lanes or up a staircase for the final part of the journey.",
          "For travellers packing lightly and looking for atmosphere, Alfama can be wonderful. With large suitcases, mobility concerns or frequent taxi journeys, Chiado or Avenida da Liberdade will usually be easier.",
          "Before booking any hotel in Alfama, check exactly where a taxi can stop and whether there are stairs between the street and reception.",
        ],
        listTitle: "Hotels in Alfama",
        bullets: [
          "Memmo Alfama — small and contemporary, with a terrace looking across the rooftops towards the river.",
          "Santiago de Alfama — a romantic option inside a restored historic building with plenty of character.",
          "Palacete Chafariz D’El Rei — an eccentric, old world alternative for something less conventional.",
        ],
      },
      {
        heading: "Baixa",
        body: [
          "Baixa is Lisbon’s downtown grid between Rossio and the river. It is central, relatively flat by Lisbon standards and especially practical for a short visit.",
          "The neighbourhood does require some editing. Certain streets are elegant and beautifully positioned, while others feel almost entirely geared towards tourism.",
          "The areas around Praça do Município, Rossio and the Chiado edge tend to make the most useful bases.",
          "For a 48 hour trip, Baixa makes a lot of sense. When time is limited, being able to walk almost everywhere matters.",
        ],
        bullets: [
          "Pousada de Lisboa, The One Palácio da Anunciada and Hotel da Baixa are all worth considering.",
        ],
      },
      {
        heading: "Lapa and Estrela",
        body: [
          "Lapa and Estrela offer a quieter side of Lisbon.",
          "Residential streets, Jardim da Estrela and neighbourhood cafés replace much of the activity of the historic centre. Campo de Ourique is nearby, and the city feels noticeably calmer in the morning and evening.",
          "These neighbourhoods suit longer stays and travellers who would rather return somewhere peaceful at the end of the day.",
          "For a first visit focused heavily on sightseeing, Chiado is more convenient. For a slower week in Lisbon, Lapa and Estrela become much more appealing.",
        ],
        bullets: [
          "Olissippo Lapa Palace is the classic choice for space and traditional luxury.",
          "The Emerald House, between Lapa and Santos, is smaller and more contemporary.",
        ],
      },
      {
        heading: "Santos and Cais do Sodré",
        body: [
          "Santos and Cais do Sodré work well when restaurants, bars and late evenings are an important part of the trip.",
          "Cais do Sodré is extremely well connected. Trains leave for Cascais, ferries cross the Tagus and Chiado is within walking distance. The neighbourhood also has some of Lisbon’s busiest nightlife, so the exact street matters.",
          "Santos sits further west and mixes restaurants, bars and design spaces with a more residential side.",
          "In both areas, recent hotel reviews are worth reading specifically for comments about street noise. A few hundred metres can make a considerable difference.",
        ],
      },
      {
        heading: "What about Belém?",
        body: [
          "Belém deserves time on almost every first trip to Lisbon. That does not necessarily make it a good place to sleep.",
          "Jerónimos Monastery, Belém Tower, MAAT, Pastéis de Belém and the riverfront make the neighbourhood one of the most rewarding parts of the city to explore. The drawback is its position west of the historic centre.",
          "When evenings are likely to be spent around Chiado, Príncipe Real or Alfama, staying in Belém means adding transport to the beginning and end of every day.",
          "Altis Belém Hotel and Spa is an exception for travellers specifically looking for a quieter hotel stay beside the river.",
          "Otherwise, Belém is better visited during the day.",
        ],
      },
      {
        heading: "Where not to stay in Lisbon on a first trip",
        body: [
          "There are very few Lisbon neighbourhoods that should simply be written off. Visiting an area and choosing it as a base, however, are two different things.",
          "For a first trip, Martim Moniz and much of Avenida Almirante Reis are better explored than used as a base.",
          "Martim Moniz can look tempting on a map because of its central location. Avenida Almirante Reis is well connected and has an interesting mix of restaurants, shops and local life.",
          "The immediate surroundings, however, are busy and traffic heavy, and they do not offer the same experience as Chiado, Príncipe Real or the better positioned parts of Baixa.",
          "When accommodation in one of those areas is available for a similar price, it is usually the better choice for a first visit.",
          "Parque das Nações is another area that rarely makes sense for a first leisure trip. It is modern, spacious and useful for Oriente station, events and business travel, but it feels quite separate from historic Lisbon.",
          "Hotel descriptions that promise somewhere is only “minutes from the centre” also deserve a closer look.",
          "Lisbon has a talent for turning a short distance on a map into a serious uphill walk. Checking the actual route between the hotel and the places likely to be visited in the evening is far more useful than looking at distance alone.",
        ],
      },
      {
        heading: "What to check before booking a hotel in Lisbon",
        body: [
          "Lisbon’s prettiest stays often sit in older buildings. The details below matter more than a pretty listing photograph.",
        ],
        bullets: [
          "Taxi access — this matters particularly in Alfama and parts of Bairro Alto. Check whether a car can actually stop outside the entrance.",
          "A lift — historic buildings are part of Lisbon’s charm, but not every renovated hotel has straightforward lift access to every floor.",
          "The hill — look at the final streets around the hotel rather than just its distance from the centre.",
          "Noise — trams, bars, restaurants and early morning deliveries can all affect rooms facing the street. Recent reviews are useful here.",
          "Air conditioning — during the Lisbon summer, proper air conditioning is far more important than many other hotel extras.",
          "A pool — a pool can be wonderful in July or August. During spring or autumn, a better location or terrace will often add more to the trip.",
        ],
      },
      {
        heading: "So, where is the best place to stay in Lisbon?",
        body: [
          "A spectacular hotel is rarely worth choosing if the neighbourhood does not suit the trip. Lisbon is a city experienced largely outside the hotel, and the right base should make stepping out in the morning just as pleasant as coming home at night.",
        ],
        bullets: [
          "For a first visit, choose Chiado.",
          "For restaurants and design, look at Príncipe Real.",
          "For luxury and an easier hotel experience, choose Avenida da Liberdade.",
          "For historic atmosphere, consider Alfama, provided the hills and access are not a problem.",
          "For quiet, look towards Lapa or Estrela.",
          "For nightlife and late dinners, Santos or Cais do Sodré work well.",
          "For a short 48 hour visit, Chiado or Baixa make the city easiest to explore.",
        ],
      },
    ],
    goodFor: [
      "First Lisbon trips",
      "Choosing a neighbourhood",
      "Hotel shortlisting",
      "Comparing Chiado, Alfama and Avenida",
    ],
    sources: [
      {
        label: "Visit Lisboa",
        url: "https://visitlisboa.com/en",
      },
      {
        label: "Tourism in Lisbon neighbourhood overview",
        url: "https://en.wikipedia.org/wiki/Tourism_in_Lisbon",
      },
      {
        label: "Avenida da Liberdade background",
        url: "https://en.wikipedia.org/wiki/Avenida_da_Liberdade",
      },
    ],
  },
  {
    slug: "where-to-eat-lisbon",
    dek: "Lisbon is having a food moment.",
    lastReviewed: "August 18, 2026",
    facts: [
      "In 2026, Lisbon entered Time Out’s top 10 cities in the world for food.",
      "Reservations at O Velho Eurico can disappear two or three months ahead, though the restaurant also keeps a waiting list for walk-ins.",
      "European Coffee Trip currently lists around 80 specialty cafés in Lisbon.",
    ],
    sections: [
      {
        body: [
          "Once known internationally mostly for pastéis de nata, grilled sardines and inexpensive seafood, the Portuguese capital has become one of Europe’s most exciting cities to eat in. In 2026, Lisbon entered Time Out’s top 10 cities in the world for food, but the real story is happening on the ground: old tascas are being rediscovered, a new generation of chefs is reinventing Portuguese cooking, natural wine bars are multiplying and Lisbon’s specialty coffee scene is growing at remarkable speed.",
          "The best part is that eating well here still doesn’t have to mean fine dining.",
          "These are the places worth knowing.",
        ],
      },
      {
        heading: "The Lisbon restaurants you cannot miss",
        body: [],
      },
      {
        heading: "Cervejaria Ramiro",
        listTitle: "Intendente | Seafood",
        body: [
          "Yes, everyone knows about Ramiro. Go anyway.",
          "Open since 1956, this Lisbon institution is still one of the best places in the city for seafood. The formula is gloriously straightforward: prawns, clams, crab, lobster, plenty of toasted bread to soak up everything left on the plate and cold beer.",
          "Then comes the part first-timers often don’t expect: finish with a prego, Lisbon’s garlicky steak sandwich.",
          "It makes absolutely no sense after a seafood feast until you try it.",
          "Go for: seafood and a prego to finish.",
        ],
      },
      {
        heading: "O Velho Eurico",
        listTitle: "Mouraria | Portuguese, Neo-Tasca",
        body: [
          "If there is one restaurant to book before coming to Lisbon, make it O Velho Eurico.",
          "Hidden in Mouraria below São Jorge Castle, this tiny neo-tasca has become one of the most sought-after tables in the city. Traditional Portuguese cooking is the foundation, but dishes are approached with humour, creativity and none of the stiffness that sometimes accompanies serious food.",
          "It is noisy, intimate and enormously fun.",
          "The catch is getting in. Reservations can disappear two or three months ahead, although the restaurant also operates a waiting list for walk-ins.",
          "Go for: one of the best examples of Lisbon’s new Portuguese cooking.",
          "Book: months ahead if you can.",
        ],
      },
      {
        heading: "Faz Frio",
        listTitle: "Príncipe Real | Traditional Portuguese",
        body: [
          "For something more traditional, Faz Frio.",
          "This is old Lisbon rather than new Lisbon: classic Portuguese cooking, a historic dining room and the sort of restaurant that reminds you why the city’s new generation of chefs has such good foundations to work with.",
          "Come here for Portuguese flavours without the reinvention.",
          "Go for: a traditional Lisbon lunch.",
        ],
      },
      {
        heading: "Lisboa Tu e Eu",
        listTitle: "Alfama | Portuguese",
        body: [
          "Alfama has no shortage of restaurants designed almost entirely for visitors. Lisboa Tu e Eu is the sort of small place you actually want to find among them.",
          "It is informal, unpretentious and centred on Portuguese food. This is somewhere for petiscos, a bottle of wine and a slower lunch or dinner after wandering through Alfama.",
          "Don’t come looking for elaborate presentation. That’s rather the point.",
          "Go for: a casual Portuguese meal in Alfama.",
        ],
      },
      {
        heading: "Tasca Baldracca",
        listTitle: "Mouraria | Neo-Tasca",
        body: [
          "Tasca Baldracca belongs to the new generation of Lisbon tascas.",
          "The atmosphere is relaxed, the plates are made for sharing and Portuguese flavours provide the starting point rather than a set of rules.",
          "It is precisely this kind of restaurant that makes Lisbon interesting right now: young kitchens aren’t rejecting the city’s food culture, they are playing with it.",
          "Go for: dinner with friends and several plates for the table.",
        ],
      },
      {
        heading: "Tasca Zebra",
        listTitle: "Lisbon | Contemporary Tasca",
        body: [
          "Another name to have on the radar if you want to understand Lisbon beyond its classic restaurants.",
          "Tasca Zebra fits into the city’s increasingly interesting middle ground between neighbourhood tasca and contemporary restaurant: informal, energetic and more interested in good food than ceremony.",
          "Go for: the newer side of Lisbon’s tasca culture.",
        ],
      },
      {
        heading: "Bar Alimentar",
        listTitle: "São Bento | Small Plates & Wine",
        body: [
          "Bar Alimentar is for the evening when you don’t necessarily want a conventional restaurant.",
          "The room is intimate, the lights are low and the menu moves between Portuguese ingredients and Italian influences. Small plates are designed to share, accompanied by natural wine and cocktails.",
          "This is Lisbon at its most current: part restaurant, part wine bar, somewhere you arrive for dinner and end up staying much longer.",
          "Go for: date night, small plates and wine.",
        ],
      },
      {
        heading: "Fancy pizza?",
        body: [
          "Lisbon’s food scene is not only about Portuguese cooking. There is also seriously good pizza.",
        ],
      },
      {
        heading: "M'arrecreo",
        listTitle: "Bairro Alto | Neapolitan Pizza",
        body: [
          "For proper Neapolitan pizza, M'arrecreo.",
          "The pizzas are cooked according to Neapolitan tradition at around 480°C, spending roughly 90 seconds in the oven. The result is exactly what you want: blistered edges, a soft centre and a crust that should never be left on the plate.",
          "It is particularly convenient if you are already around Chiado, Príncipe Real or Bairro Alto.",
          "Go for: Neapolitan pizza and drinks before a night out.",
        ],
      },
      {
        heading: "La Matta",
        listTitle: "Graça | Neapolitan Pizza",
        body: [
          "La Matta is the neighbourhood alternative.",
          "Tucked into Graça, it specialises in Neapolitan-style pizza using Italian ingredients and has a much more local feel than many of the restaurants down in the centre.",
          "Try to get a table outside and make an evening of Graça rather than rushing back towards Baixa.",
          "Go for: pizza after sunset at a Graça miradouro.",
        ],
      },
      {
        heading: "Vegan in Lisbon",
        body: [
          "Lisbon has also become surprisingly easy for plant-based travellers.",
        ],
      },
      {
        heading: "Ao 26 Vegan Food Project",
        listTitle: "Chiado | Vegan",
        body: [
          "Ao 26 has been part of Lisbon’s vegan scene since 2016 and remains one of the names to know.",
          "Rather than treating vegan food as a separate cuisine, the kitchen plays with dishes Portuguese diners already recognise. The current menu includes plant-based interpretations of choco frito, alheira croquettes and other Portuguese petiscos.",
          "That makes it particularly interesting for vegan visitors who actually want to taste something connected to Portugal.",
          "Go for: vegan takes on Portuguese food.",
        ],
      },
      {
        heading: "Pequeno",
        listTitle: "Lisbon | Vegan & Brunch",
        body: [
          "Pequeno is one to save for a slower morning, particularly if you’re looking for a vegan brunch rather than another avocado-toast-by-numbers café.",
          "Go for: vegan brunch.",
        ],
      },
      {
        heading: "Lisbon’s brunch scene is worth waking up for",
        body: [
          "Breakfast used to mean a bica and a pastry eaten quickly at the counter.",
          "That culture hasn’t disappeared, nor should it. But Lisbon has simultaneously developed a completely different morning scene built around sourdough, fermentation, bagels, proper coffee and long weekend brunches.",
        ],
      },
      {
        heading: "Beco Bagels",
        listTitle: "Estrela | Bagels",
        body: [
          "A newer arrival from the team behind doBeco, Beco Bagels opened in 2025 and specialises in slow-fermented handmade bagels.",
          "There are classics, homemade cream cheese and more elaborate fillings including pastrami, pickles and raclette.",
          "Go for: a bagel and coffee before exploring Estrela.",
        ],
      },
      {
        heading: "doBeco",
        listTitle: "Multiple Locations | Bakery & Brunch",
        body: [
          "One of Lisbon’s best stops when breakfast turns into lunch.",
          "doBeco started with a focus on slow, natural fermentation and now sits somewhere between bakery, pastry shop and brunch restaurant. The bread matters here, as do the pastries, but the savoury breakfast menu is equally worth coming for.",
          "Go for: bread, pastries and a proper brunch.",
        ],
      },
      {
        heading: "Dear Breakfast",
        listTitle: "Multiple Locations | All-Day Breakfast",
        body: [
          "Dear Breakfast does exactly what the name promises.",
          "Eggs are at the centre of the menu, alongside pancakes, juices and coffee, and breakfast runs all day. The original opened in São Bento in 2017 and the concept has since spread across Lisbon.",
          "It is polished and popular, so don’t expect a secret neighbourhood café. Come because you want a very good, uncomplicated breakfast.",
          "Go for: eggs and an easy all-day brunch.",
        ],
      },
      {
        heading: "Flora & Fauna",
        listTitle: "Lisbon | Brunch",
        body: [
          "Flora & Fauna is for the full Lisbon brunch experience: generous plates, good coffee and the sort of breakfast where lunch becomes unnecessary.",
          "Go for: a long weekend brunch.",
        ],
      },
      {
        heading: "And then there is the coffee",
        body: [
          "Lisbon is quickly becoming one of Europe’s most interesting cities for specialty coffee.",
          "That might sound strange in a country where coffee has always been part of daily life. The traditional bica, short, dark and usually drunk quickly at the counter, isn’t going anywhere.",
          "Instead, another coffee culture has grown alongside it.",
          "Independent roasters, single-origin beans, V60s, batch brews and carefully made flat whites are now scattered across the city. European Coffee Trip currently lists around 80 specialty cafés in Lisbon, while Portuguese cafés are increasingly appearing in European coffee rankings.",
          "It means you don’t have to choose between old and new Lisbon.",
          "Have a 90-cent bica standing at the counter in the morning. Find a specialty roaster later.",
          "Both belong to the city now.",
        ],
      },
      {
        heading: "What to eat in Lisbon at least once",
        body: [
          "Beyond restaurants, there are a few things that should find their way into a Lisbon trip.",
          "Eat pastéis de nata warm. Try bacalhau à Brás. Order amêijoas à Bulhão Pato and use the bread to collect the garlic, olive oil and coriander left behind. Have grilled sardines if you are here during the season.",
          "Eat a bifana.",
          "Order fresh fish without overthinking it.",
          "And at least once, ignore every restaurant guide, walk into a busy neighbourhood tasca and order whatever is written on the menu of the day.",
          "Lisbon may be becoming one of Europe’s great food cities, but its best quality hasn’t changed.",
          "Eating here is still supposed to be fun.",
        ],
      },
    ],
    goodFor: [
      "First Lisbon trips",
      "Booking the tables that fill up",
      "Tascas, pizza, vegan and brunch",
      "Specialty coffee alongside a classic bica",
    ],
    sources: [
      {
        label: "Time Out — The world’s best cities for food in 2026",
        url: "https://www.timeout.com/uk/travel/worlds-best-cities-for-food-2026",
      },
      {
        label: "European Coffee Trip — Lisbon specialty coffee guide",
        url: "https://europeancoffeetrip.com/lisbon/",
      },
      {
        label: "Visit Lisboa — gastronomy",
        url: "https://www.visitlisboa.com/en/see-do/gastronomy",
      },
      {
        label: "Bacalhau à Brás",
        url: "https://en.wikipedia.org/wiki/Bacalhau_%C3%A0_Br%C3%A1s",
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
          "For editorial-style trips, we like reserving the important legs early and leaving only low-stakes regional rides flexible."
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
  {
    slug: "travel-insurance-worth-it",
    dek:
      "Travel insurance is not one product, it is a bundle of protections that only make sense when they match the trip you are actually taking.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Policies differ sharply on medical limits, evacuation, cancellation triggers, and gear cover.",
      "Credit-card travel benefits often cover fragments of a trip but rarely replace a full policy.",
      "Pre-existing condition waivers usually require purchase within a short window of your first deposit.",
    ],
    sections: [
      {
        heading: "When it is usually worth it",
        body: [
          "Insurance earns its place on trips with non-refundable deposits, remote terrain, expensive gear, or medical uncertainty abroad. Long-haul journeys, adventure days, and multi-country routes are the obvious cases.",
          "For a simple domestic weekend with flexible bookings, you may be buying peace of mind rather than meaningful protection, and that is fine if the price reflects that."
        ],
        bullets: [
          "Non-refundable flights, cruises, or lodge deposits.",
          "Trips with hiking, diving, or driving on rough roads.",
          "Travelers without reliable home health cover abroad.",
          "Expensive camera or sports equipment in checked bags.",
        ],
      },
      {
        heading: "What to compare beyond the headline price",
        body: [
          "Read medical and evacuation limits first, then cancellation rules, then baggage and delay cover. A cheap policy with a low medical ceiling is often a false economy.",
          "Check whether activities you plan, trekking, scuba, rental cars on unpaved roads, are excluded. Add a waiver if you need pre-existing condition coverage and you are still inside the purchase window."
        ],
      },
    ],
    goodFor: [
      "First-time policy buyers",
      "Remote or adventure trips",
      "Readers comparing credit-card cover",
    ],
    sources: [
      {
        label: "UK Foreign Travel Insurance guidance",
        url: "https://www.gov.uk/guidance/foreign-travel-insurance",
      },
      {
        label: "US State Department travel insurance overview",
        url: "https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad/Insurance_Coverage_Overseas.html",
      },
    ],
  },
  {
    slug: "sustainable-travel-basics",
    dek:
      "Sustainable travel is less about perfection and more about choosing fewer moves, better bases, and local systems that already exist.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Transport choice and trip length often matter more than small in-destination swaps.",
      "Longer stays in one base reduce cleaning, laundry, and transfer emissions.",
      "Regional rail and public transit are often the lowest-stress lower-impact option in Europe.",
    ],
    sections: [
      {
        heading: "Start with the shape of the trip",
        body: [
          "The biggest lever is usually how many flights and hotel moves you plan. One region, two bases, and rail between cities beats a continent in a week, for the planet and for your nervous system.",
          "Shoulder season travel spreads demand more evenly and often delivers better weather-value balance in Mediterranean destinations."
        ],
        bullets: [
          "Choose one region per trip when possible.",
          "Stay longer in fewer hotels.",
          "Use trains and buses for inter-city days.",
          "Walk and use metro systems inside cities.",
        ],
      },
      {
        heading: "On the ground choices that actually stick",
        body: [
          "Independent restaurants, local guides, and family-run stays usually keep money closer to the place you came to see. Refill bottles, skip unnecessary daily room cleaning, and treat heritage sites with the patience they deserve.",
          "Sustainable travel should still feel beautiful. If your plan becomes ascetic, you will abandon it, better to keep one or two rules you will follow every trip."
        ],
      },
    ],
    goodFor: [
      "Europe rail travelers",
      "Readers reducing flight-heavy trips",
      "Couples and families planning slower routes",
    ],
    sources: [
      {
        label: "UNWTO sustainable tourism principles",
        url: "https://www.unwto.org/sustainable-development",
      },
      {
        label: "EU rail overview",
        url: "https://europa.eu/youreurope/citizens/travel/trains-and-railways/index_en.htm",
      },
    ],
  },
  {
    slug: "galapagos-twelve-days",
    dek:
      "The Galápagos reward a clear choice early: live on a boat and let the itinerary move, or base on land and day-trip to islands, mixing both rarely works as well as it sounds.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Visitor numbers and routes are regulated; cruises follow set island schedules.",
      "Seas can be rough between islands; medication and cabin placement matter.",
      "Land-based trips can work for readers who want more town rhythm and less night sailing.",
    ],
    sections: [
      {
        heading: "Twelve-day rhythm",
        body: [
          "An eight-night cruise plus two buffer days in Quito or Guayaquil is the classic editorial shape. Use the buffers for altitude, flight delays, and the mental shift from airport to archipelago.",
          "If you choose land-based, pick one town, Puerto Ayora or Puerto Baquerizo Moreno, and accept that you will see fewer islands but sleep on steady ground every night."
        ],
        bullets: [
          "Days 1 to 2: Mainland arrival and buffer.",
          "Days 3 to 10: Cruise or structured island days.",
          "Days 11 to 12: Soft return and flight home.",
        ],
      },
      {
        heading: "Wildlife without burnout",
        body: [
          "The magic is constant, sea lions, iguanas, boobies, tortoises, but heat, snorkel days, and early starts stack up. Plan one lighter afternoon every three days.",
          "Pack reef-safe sunscreen, a brimmed hat, and shoes that work on lava rock. The islands are not a fashion shoot; they are a living laboratory."
        ],
      },
    ],
    goodFor: [
      "Wildlife-first travelers",
      "Honeymoon and milestone trips",
      "Readers choosing cruise vs land",
    ],
    sources: [
      {
        label: "Galápagos National Park",
        url: "https://www.galapagos.gob.ec/",
      },
      {
        label: "Ecuador travel information",
        url: "https://ecuador.travel/en/",
      },
    ],
  },
  {
    slug: "japan-rail-first-edit",
    dek:
      "Japan looks intimidating on a map and feels orderly once you pick two or three bases and stop trying to see every prefecture in ten days.",
    lastReviewed: "July 15, 2026",
    facts: [
      "The Shinkansen network connects major cities quickly; regional passes suit specific areas better than a nationwide pass for many itineraries.",
      "Luggage forwarding between hotels is common and removes the worst of station stress.",
      "Kyoto and Tokyo both reward early starts and early evenings more than late-night cramming.",
    ],
    sections: [
      {
        heading: "A gentle first route",
        body: [
          "Tokyo four nights, Kyoto three nights, and one night in Osaka or Nara works for many first trips. Add Hiroshima or Hakone only if you extend beyond ten days.",
          "Buy IC cards for local metros, reserve Shinkansen seats for peak travel dates, and use luggage delivery at least once, it is the single best quality-of-life upgrade."
        ],
      },
      {
        heading: "Pacing and etiquette",
        body: [
          "Shrine mornings, market lunches, and neighborhood walks beat attraction bingo. Japan's food culture is the itinerary, konbini breakfasts, ramen counters, and one splurge omakase you planned ahead.",
          "Quiet trains, queued boarding, and removing shoes are not trivia, they are part of why the trip feels so calm when you respect them."
        ],
      },
    ],
    goodFor: [
      "First Japan trips",
      "Rail-curious travelers",
      "Food-led city breaks",
    ],
    sources: [
      {
        label: "Japan National Tourism Organization",
        url: "https://www.japan.travel/en/",
      },
      {
        label: "JR Pass official information",
        url: "https://japanrailpass.net/en/",
      },
    ],
  },
  {
    slug: "patagonia-without-rushing",
    dek:
      "Patagonia is weather-literate travel: the mountains decide the schedule, and the best trips leave flex days built in from the start.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Wind and cloud can close viewpoints without warning, even in summer.",
      "El Calafate and Puerto Natales are the usual gateway bases for Argentina and Chile sides.",
      "Private transfers and small-group tours often beat self-drive for first visits.",
    ],
    sections: [
      {
        heading: "A realistic two-base plan",
        body: [
          "Four nights El Calafate for Perito Moreno and glacier days, then four nights near Torres del Paine with one flex day for weather. Do not stack long drives on both sides of a border crossing unless you enjoy suffering.",
          "Book lodges early for peak weeks; Patagonia accommodation is limited relative to demand."
        ],
      },
      {
        heading: "Gear and comfort",
        body: [
          "Layer for wind, not just cold. Waterproof shell, hat with a strap, and broken-in boots matter more than camera gear.",
          "This is not the trip for minimalist packing pride, dry socks and a good hotel bar after a long walk are part of the design."
        ],
      },
    ],
    goodFor: [
      "Hikers and photographers",
      "Milestone trips",
      "Readers comparing Argentina vs Chile",
    ],
    sources: [
      {
        label: "Argentina tourism",
        url: "https://www.argentina.travel/en",
      },
      {
        label: "Chile travel",
        url: "https://www.chile.travel/en/",
      },
    ],
  },
  {
    slug: "morocco-riad-first-edit",
    dek:
      "Morocco begins with where you sleep: a well-chosen riad turns Marrakech from overwhelming to intoxicating within one courtyard dinner.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Medina riads are often car-free; luggage is handled by porters or hand carts.",
      "Fes and Marrakech both reward guided half-days before independent wandering.",
      "Heat and Ramadan timing can reshape restaurant and museum hours.",
    ],
    sections: [
      {
        heading: "Choosing the riad",
        body: [
          "Prioritize courtyard shade, air conditioning, and honest access notes over Instagram arches. A riad slightly farther from the noisiest squares often sleeps better.",
          "Confirm whether breakfast is included and whether the riad books trusted airport transfers. The first hour in the medina sets the tone."
        ],
      },
      {
        heading: "Pacing the medina",
        body: [
          "Mornings for souks and monuments, riad pool or hammam midday, rooftop dinner at night. Repeat before adding desert camps or Atlas day trips.",
          "Say yes to fewer experiences done well: one cooking class, one guided medina walk, one slow shopping afternoon."
        ],
      },
    ],
    goodFor: [
      "First Morocco trips",
      "Couples and food travelers",
      "Readers comparing Marrakech and Fes",
    ],
    sources: [
      {
        label: "Visit Morocco",
        url: "https://www.visitmorocco.com/en",
      },
    ],
  },
  {
    slug: "costa-rica-wildlife-loop",
    dek:
      "Costa Rica works best as a wildlife loop, not a coastline dash. Cloud forest, volcano, then a softer beach finish with the binoculars still in the bag.",
    lastReviewed: "July 15, 2026",
    facts: [
      "Monteverde and Arenal are the classic inland pairing for first trips.",
      "Dry season on the Pacific coast runs roughly December through April on many beaches.",
      "Private drivers are common and often cheaper in stress than unfamiliar mountain roads.",
    ],
    sections: [
      {
        heading: "Two-week loop",
        body: [
          "San José buffer, three nights Monteverde, three nights Arenal, four nights on the central or northern Pacific coast, and flex for Manuel Antonio only if crowds fit your mood.",
          "Wildlife mornings are non-negotiable. Sloths, toucans, and frogs show up when you are quiet and early, not when you sleep off a long drive."
        ],
      },
      {
        heading: "Lower-impact notes",
        body: [
          "Certified guides, ecolodges, and shared transfers reduce pressure on fragile areas. Pack light, reuse bottles, and choose lodges that treat water and waste seriously.",
          "Costa Rica sells adventure; your job is to pick the adventures that match your fitness and leave room for hammock afternoons."
        ],
      },
    ],
    goodFor: [
      "Wildlife and family trips",
      "First Central America visits",
      "Readers pairing forest and beach",
    ],
    sources: [
      {
        label: "Visit Costa Rica",
        url: "https://www.visitcostarica.com/en",
      },
    ],
  },
  {
    slug: "carry-on-packing-edit",
    dek:
      "Carry-on travel works when the list is short, the fabrics cooperate, and you stop packing for imaginary scenarios.",
    lastReviewed: "July 15, 2026",
    facts: [
      "One neutral base color makes mixing outfits easier on the road.",
      "Shoes are the fastest way to overfill a bag, limit yourself to two pairs.",
      "Liquids and chargers belong in one easy-access pouch, not scattered through the bag.",
    ],
    sections: [
      {
        heading: "The core list",
        body: [
          "Build around two bottoms, three tops, one layer, one dress or smart option, and underwear for five days with laundry planned mid-trip. Add sleepwear only if your hotels will not provide robes you are happy to use.",
          "Wear the bulkiest shoes and jacket on travel days. Everything else should fit in a standard carry-on with room for a market find."
        ],
        bullets: [
          "Neutral palette: black, navy, sand, or olive.",
          "Merino or quick-dry fabrics for repeat wears.",
          "One compact toiletry bag under 100 ml rules.",
          "Universal adapter, small first-aid kit, photocopy pouch.",
        ],
      },
      {
        heading: "What to leave behind",
        body: [
          "Full-size toiletries, maybe outfits, and just-in-case gadgets are the usual culprits. If you have not used it on the last two trips, it does not belong in the bag.",
          "Pack for the trip you booked, not every weather forecast anxiety. A light rain shell and one warm layer cover most shoulder-season Europe and Mediterranean routes."
        ],
      },
    ],
    goodFor: [
      "Carry-on only travelers",
      "Mixed city and warm trips",
      "Readers overpacking for short breaks",
    ],
    sources: [
      {
        label: "IATA cabin baggage guidance",
        url: "https://www.iata.org/en/programs/passenger/cabin-baggage/",
      },
    ],
  },
];

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}
