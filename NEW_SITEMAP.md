# NEW_SITEMAP.md

Target information architecture for Altrove.

**Brand answer (every page reinforces this):**  
Altrove is a boutique travel studio creating curated journeys through places personally explored.

---

## Public sitemap (visible)

```
Home                 /
Journeys             /journeys
  └ Journey detail   /journeys/[slug]
Destinations         /destinations
  └ Destination hub  /destinations/[slug]
Journal              /journal          (redirect from /travel-guides)
  └ Story            /journal/[slug]   (redirect from /travel-guides/[slug])
Plan a Trip          /plan-a-trip
About                /about
Privacy              /privacy
```

Primary navigation:

| Item | URL |
| --- | --- |
| Home | `/` |
| Journeys | `/journeys` |
| Destinations | `/destinations` |
| Journal | `/journal` (or keep `/travel-guides` URL with Journal label if redirects are deferred) |
| Plan a Trip | `/plan-a-trip` (CTA) |
| About | `/about` |

Footer only:

- Same primary links  
- Privacy  
- Email (`hello@altrove.studio`)  
- Optional single “Letters” anchor → homepage newsletter `#letters`

Nothing else in chrome.

---

## Page purposes (one job each)

### Home `/`
**Job:** Introduce Altrove.  
**Sections only:**

1. Hero (what Altrove is + two CTAs: Journeys / Plan a Trip)  
2. Featured Journeys (max 3)  
3. Travel Planning (one short block → Plan a Trip)  
4. Journal (max 3 stories)  
5. Newsletter  

No manifesto section. No destinations strip. No “discover our approach” essay.

### Journeys `/journeys`
**Job:** Show curated itineraries — the product.  
**Rules:**

- Treat journeys like books: large image, large title, short line, status  
- Show only real journey entities  
- Unready items: “Coming soon” — no fake detail  
- No “wider route library” side door  

### Journey detail `/journeys/[slug]`
**Job:** Present one journey deeply.  
Overview, who for, route shape, stay notes, practical notes, enquiry CTA.  
Existing `/routes/[slug]` day-by-day content can power this behind the scenes or redirect into it.

### Destinations `/destinations`
**Job:** Help users choose a country/region.  
Short curated list (focus collection only). No mood filters, no exhaustive directory.

### Destination hub `/destinations/[slug]`
**Job:** Organise everything about one place.  
Fixed order:

1. Editorial introduction  
2. Altrove journeys here  
3. Journal stories here  
4. Places to stay  
5. Places to eat  
6. Useful planning notes / map if available  

Not a dump of unrelated cards.

### Journal `/journal` (or `/travel-guides` during transition)
**Job:** Editorial stories that support journeys.  
Structure by **place collections**, e.g.:

- Portugal  
  - Lisbon  
  - Porto  
  - Madeira  
  - Sintra (when content exists)  
- Italy / Campania  
- Spain  

Within each collection: only the strongest pieces.  
Archive of secondary/global pieces: collapsed or “Further reading”, not equal weight.  
Out-of-focus pieces (Galápagos, Patagonia, Japan, Costa Rica): de-emphasise or retire from surfacing.

### Plan a Trip `/plan-a-trip`
**Job:** Generate enquiries.  
One form. One promise. No parallel consultation product page.

### About `/about`
**Job:** Build trust through Flor.  
Personal: why Altrove exists, how places are chosen, how she travels.  
Not a second homepage manifesto.

### Privacy `/privacy`
**Job:** Legal clarity for newsletter and enquiry forms.

---

## Redirects / removals

| Old | Action |
| --- | --- |
| `/routes` | Redirect → `/journeys` |
| `/routes/[slug]` | Redirect → matching `/journeys/[slug]` when mapped; else keep temporarily as deep content under journey |
| `/itineraries` | Already → `/journeys` |
| `/travel-consultations` | → `/plan-a-trip` |
| `/community` | → `/#letters` or `/` |
| `/club` | → `/#letters` or keep as thin newsletter alias |
| `/contact` | → `/plan-a-trip` |
| `/travel-guides` | Optional later redirect → `/journal` (SEO-safe 301) |
| Destination article URLs | Keep for SEO; surface only via destination hubs / journal collections |

---

## Content that stays but is no longer a “page type”

- Old itinerary day-by-day notes → fuel Journey detail  
- Destination blog articles → Journal collections or hub sections  
- Newsletter → component, not a destination in the IA  
- Guide product waitlist teasers → omit from nav until real  

---

## Focus destinations (public)

**Primary hubs:** Portugal, Lisbon, Madeira, Naples / Amalfi Coast, Spain (or Andalusia)  

**Present but quiet:** Rome, Italy country page, other Europe — only if they support a journey  

**Not homepage / not nav-featured until visited depth exists:** Greek Islands, Marrakech, and non-focus journal destinations  

---

## Journeys to surface (product)

| Journey | Status |
| --- | --- |
| Portugal by Train | Available (strongest existing) |
| Lisbon, Slowly | Coming soon |
| Naples and the Amalfi Coast | Coming soon |

Northern Spain: keep in data as coming soon **or** hide from homepage until brief is real — homepage max **three**.

---

## Success test

A new visitor can answer in five seconds:

1. What is Altrove? → travel studio / curated journeys  
2. What should I click? → Journeys or Plan a Trip  
3. What is the journal? → supporting stories, not the product  
