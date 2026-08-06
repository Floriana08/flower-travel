# Commerce integration points

This documents what's already wired up as front-end scaffolding, and what
still needs real configuration before any guide can actually be sold.

## Guide checkout (Stripe)

Today every entry in `guideProducts` (`app/data.ts`) is genuinely not for
sale — no Stripe account, keys, or finished PDF exist. `GuideCheckoutCta`
(`app/guide-checkout-cta.tsx`) always renders the honest "join the waitlist"
state, which posts to the existing `/api/newsletter` route with
`source: "guide:<slug>"` so interest is captured in the same
`newsletter_signups` table (distinguishable by `source`).

To make a guide purchasable:

1. Add the `stripe` package as a dependency.
2. Set `STRIPE_SECRET_KEY` as a Worker secret: `wrangler secret put STRIPE_SECRET_KEY`.
3. Create a Stripe Price for the guide, and set `stripePriceId` on that
   guide's entry in `guideProducts` — `GuideCheckoutCta` automatically
   switches to a real "Buy now" button once that field is present.
4. Replace the placeholder body of `app/api/checkout/route.ts` with a real
   `stripe.checkout.sessions.create(...)` call, returning `{ url: session.url }`.
5. Add a webhook handler (new `app/api/stripe-webhook/route.ts`) to confirm
   payment and trigger guide delivery (see below) — this does not exist yet.

## Guide delivery

Not implemented. Once checkout is live, the simplest path is: Stripe webhook
on `checkout.session.completed` → email the buyer a signed, time-limited
download link to the guide PDF (stored in the `SITE_R2` bucket already
provisioned in `wrangler.jsonc`/`vite.config.ts`, currently unused/`null`).

## Enquiry / newsletter persistence

Already real: `/api/enquiry` and `/api/newsletter` write to Cloudflare D1 via
Drizzle (`db/schema.ts`). No CRM/ESP is connected — exporting leads today
means querying D1 directly. Wiring an ESP (for real newsletter sends) or CRM
(for enquiry follow-up) is a deferred backlog item.

## Analytics / cookie consent

Not implemented. No vendor has been chosen. Needs a product decision
(Plausible / GA4 / PostHog / none) before any tracking code or consent
banner is added.
