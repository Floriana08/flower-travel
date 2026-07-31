# RATIONALE.md

Structural decisions for simplifying Altrove — **before** visual redesign.

---

## The problem in one line

Altrove is trying to be a blog, a magazine, a destination guide, an itinerary library, and a travel agency at once. Visitors meet all five before they meet the business.

---

## North star

> Altrove is a boutique travel studio creating curated journeys through places personally explored.

Supporting chain (do not reverse):

1. **Journal** builds taste and trust  
2. **Journeys** are the product  
3. **Plan a Trip** is the commercial future  

If a page or section does not serve that chain, it goes.

---

## Decision 1 — Fewer pages, not more

**Why:** Adding Journeys/Plan a Trip without removing Routes/Club/Consultations/Contact created parallel IA. Complexity compounds.

**Decision:** Visible sitemap is only:

Home · Journeys · Destinations · Journal · Plan a Trip · About · Privacy

**Why this set:**

| Page | Sole job |
| --- | --- |
| Home | Introduce |
| Journeys | Product |
| Destinations | Place orientation |
| Journal | Editorial support |
| Plan a Trip | Enquiries |
| About | Trust (Flor) |
| Privacy | Compliance |

Everything else is a redirect, a component, or buried SEO content.

---

## Decision 2 — Kill competing nouns

| Retire | Keep |
| --- | --- |
| Routes / Itineraries (as product words) | **Journeys** |
| Club / Community / Letters / Correspondence (as pages) | **Newsletter** component |
| Travel consultations (as a page) | **Plan a Trip** |
| Destination “blog” as a separate product | **Journal** + destination hubs |

**Why:** Three words for “trip idea” and four for “email me” make the company feel unfinished.

---

## Decision 3 — Homepage loses half its sections

**Remove:**

- Studio manifesto block (“A smaller world…”) → belongs on About  
- Selected destinations strip → belongs on Destinations  
- Extra explanatory CTAs and “View all” noise where three journeys suffice  

**Keep only:**

1. Hero  
2. Featured journeys (max 3)  
3. Travel planning  
4. Journal (max 3)  
5. Newsletter  

**Why:** Home must answer what Altrove is, show proof (journeys), and offer one next step. Destinations on the homepage recreate the “directory” feeling and compete with Journeys.

---

## Decision 4 — Journeys are the product; treat them like books

**Why:** The commercial future is itinerary design and curated trips. Editorial volume must not outrank three honest journeys.

**Rules:**

- Large photography, large type, short copy  
- No busy multi-card itinerary grids on the homepage  
- Coming soon is allowed; fake completeness is not  
- Do not link out to a “wider route library” — that reopens the dual-product wound  

Existing `/routes/[slug]` research becomes **fuel** for journey pages, not a second shop window.

---

## Decision 5 — Destinations are hubs, not a second catalogue

**Why:** Today Destinations and Journeys both say “go to Portugal / Amalfi / Lisbon.” That is the core overlap.

**Decision:** A destination page organises:

- Journeys here  
- Journal here  
- Stay / eat / practical notes  

It does **not** try to be a competing product grid or a Portugal-sized magazine on every slug.

**Focus list stays short** so the “personally explored” claim stays believable.

---

## Decision 6 — Journal becomes collections, not an archive feed

**Why:** Equal surfacing of 14 guides (including Galápagos and Patagonia) contradicts “starting small” and reads as a travel blog.

**Decision:**

- Group by place (Portugal → Lisbon, Porto, Madeira…)  
- Feature only strongest pieces  
- Demote or hide out-of-focus stories from primary UI  
- Keep URLs for SEO; stop giving every article equal homepage/journal weight  

Journal supports journeys. It is not the storefront.

---

## Decision 7 — One conversion path

**Why:** Plan a Trip + Travel Consultations + Contact + Club signup fragments intent.

**Decision:**

- **Plan a Trip** = human enquiry  
- **Newsletter** = asynchronous list (component only)  
- Contact/Consultations pages redirect or disappear from IA  

Honest copy stays: planning is opening gradually — said once, not on every page.

---

## Decision 8 — About becomes personal

**Why:** Current About repeats homepage strategy language (“depth over volume,” “opening gradually”) instead of answering “who is Flor and why trust her?”

**Decision:** About explains:

- Flor’s relationship with travel  
- Why Altrove exists  
- How destinations are chosen  
- Why this approach  

Not another feature list of the website.

---

## Decision 9 — Design comes after deletion

References (Prior, Essentialist, Kinfolk, Cereal, Aesop) are about **restraint**, not cloning.

Implementation order:

1. Lock sitemap + redirects  
2. Strip homepage and nav  
3. Restructure Journeys / Destinations / Journal content models  
4. Only then refine typography, whitespace, imagery  

Beautifying a confused IA makes a prettier confused site.

---

## Decision 10 — Preserve SEO while simplifying UX

**Do not delete** article or route URLs wholesale.

**Do:**

- 301 Routes index → Journeys  
- Map route slugs into journey details where possible  
- Keep guide URLs; change how they are linked and grouped  
- Remove duplicate `/community` from sitemap  

Rankings and clarity can coexist if redirects are deliberate.

---

## What we are explicitly not doing yet

- New page types  
- New services  
- Invented journeys, hotels, or testimonials  
- A full visual redesign before the IA cut  

---

## Implementation gate

Proceed to build only after these documents are accepted:

1. `SITE_AUDIT.md` — why it is confusing  
2. `NEW_SITEMAP.md` — what remains  
3. `RATIONALE.md` — why each cut  

Success criterion after implementation:

> Landing on Altrove, a stranger thinks: “I understand exactly what this company is.”
