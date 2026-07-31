# SITE_AUDIT.md

Live reference: https://flower-travel.fl-dibuono.workers.dev  
Local codebase: `app/` under the flower-travel / Altrove project.

**Verdict:** Altrove already knows what it wants to be (“boutique travel studio”), but the site still behaves like a content library with a studio layer bolted on. A first-time visitor cannot answer “what is Altrove?” in five seconds because too many competing surfaces answer different versions of that question.

---

## 1. Pages

| Route | Role today | Keep? |
| --- | --- | --- |
| `/` | Studio homepage (still too many jobs) | Yes — simplify |
| `/journeys` + `/journeys/[slug]` | Curated product | Yes — make primary |
| `/destinations` + `/destinations/[slug]` | Place hubs (uneven; Portugal is a mega-guide) | Yes — as hubs only |
| `/destinations/.../articles/...` | Parallel blog under destinations | Merge into Journal or destination hubs |
| `/travel-guides` + `/travel-guides/[slug]` | Journal (nav label ≠ URL) | Yes — rename mentally to Journal |
| `/about` | Trust / Flor | Yes — rewrite personally |
| `/plan-a-trip` | Enquiry | Yes — sole conversion |
| `/privacy` | Legal | Yes |
| `/routes` + `/routes/[slug]` | 14-item “route library” outside nav | Absorb into Journeys; keep URLs via redirect |
| `/itineraries` | Redirect husk → `/journeys` | Keep redirect only |
| `/club` / `/community` | Duplicate newsletter pages | Collapse into homepage/footer newsletter |
| `/contact` | Generic contact | Fold into Plan a Trip / mailto |
| `/travel-consultations` | Second planning product | Remove or redirect → Plan a Trip |

**Content volume vs product volume**

| Type | Count |
| --- | --- |
| Journeys (product) | 4 (1 available, 3 coming soon) |
| Routes / itineraries | 14 |
| Journal guides | 14 |
| Destination articles | 17 |
| Destinations | 14 |

The product is tiny. The archive is large. That ratio creates the blog feeling.

---

## 2. Navigation

**Primary:** Home · Journeys · Destinations · Journal · About · **Plan a Trip**

Problems:

- Label “Journal” vs URL `/travel-guides`
- Footer adds Letters (`/club`), Contact, duplicate About
- `/routes` and `/travel-consultations` are invisible in chrome but still live
- Too many “talk to us” doors: Plan a Trip, Contact, Consultations, Club/Letters

---

## 3. Duplicate and overlapping content

- **Portugal by Train** = journey + route (`/journeys/portugal-by-train` and `/routes/portugal-by-train`)
- **Lisbon, Slowly** journey points at route named “Food Tour” — naming mismatch
- Rome food / Paris solo / Madeira tips exist as both journal guides and destination articles
- Homepage sells the same places as journeys *and* as destinations
- Club ≡ Community (same page, two URLs)

---

## 4. Overlapping sections (homepage)

Current live homepage does **seven** jobs:

1. Hero — who we are  
2. Studio manifesto — who we are again  
3. Journeys — product  
4. Planning service — conversion  
5. Destinations — place browse (same story as journeys)  
6. Journal — editorial  
7. Newsletter — list signup  

Hero + manifesto + About link all explain the brand.  
Journeys + Destinations both answer “where can I go?”  
Hero Plan CTA + planning section both ask for enquiry.

---

## 5. Repeated messaging

Recycled everywhere:

- “Thoughtful itineraries / independent recommendations / deeply researched”
- “One destination at a time” / “depth over volume”
- Soft hedges: “opening gradually,” “coming soon,” “in development”
- Multiple newsletter labels: Club / Letters / Join the list / Correspondence

The site over-explains and under-commits.

---

## 6. UX problems

1. Unclear offer: read? follow a route? enquire? wait?
2. Three nouns for itineraries: Journeys / Routes / Itineraries  
3. Three doors for contact: Plan a Trip / Consultations / Contact  
4. Four names for email signup  
5. Homepage shows four journeys, three not ready — weak first impression  
6. Focus claim (Portugal / Italy / Spain) vs journal archive (Galápagos, Japan, Patagonia, Costa Rica)  
7. `/routes` is a second product library without nav entry  
8. Destination pages and journal compete instead of nesting  
9. About repeats homepage philosophy instead of deepening Flor  
10. Brand residue: `flowertravel.studio` canonicals vs `altrove.studio` email  

---

## 7. Unnecessary pages / sections

**Pages to remove from the public IA (redirect or fold):**

- `/community` → `/` newsletter or `/about`  
- `/travel-consultations` → `/plan-a-trip`  
- `/contact` → `/plan-a-trip` (or simple mailto in footer)  
- `/club` as standalone page → newsletter block only  
- `/routes` as a primary concept → Journeys (preserve SEO with redirects)

**Homepage sections to delete:**

- Studio manifesto (“A smaller world…”) — About’s job  
- Selected destinations block — Destinations page’s job  
- Extra CTAs beyond one primary path  

---

## 8. Where users get confused

| Moment | Confusion |
| --- | --- |
| Land on home | Studio or magazine? |
| Click Journeys | Mostly “Coming soon” — is anything real? |
| Find Routes link | Second itinerary system? |
| Open Destinations | Same places as Journeys again |
| Open Journal | Global blog contradicts “starting small” |
| Want help | Plan a Trip vs Contact vs Consultations |
| Want email | Letters vs Club vs Join the list |

---

## 9. Recommendations (structural, not visual yet)

1. **One sentence owns the brand:** boutique travel studio · curated journeys · places personally explored.  
2. **One product noun:** Journeys.  
3. **One editorial noun:** Journal.  
4. **One conversion:** Plan a Trip.  
5. **Homepage = 5 blocks only** (hero, 3 journeys, planning, 3 journal stories, newsletter).  
6. **Destinations = hubs**, not second product grids.  
7. **Journal = collections by place**, not equal archive.  
8. **Delete before designing.**  

See `NEW_SITEMAP.md` and `RATIONALE.md`.
