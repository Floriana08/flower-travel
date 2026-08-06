import { guideProducts } from "../../data";

/**
 * Stripe Checkout integration point for guide purchases.
 *
 * No guide is purchasable today — every `guideProducts` entry lacks a
 * `stripePriceId`, and `STRIPE_SECRET_KEY` is unset. This route exists so
 * the front-end (`GuideCheckoutCta`) has a real endpoint to call once both
 * are configured; until then it fails loudly and explains what's missing
 * rather than pretending to start a checkout session.
 *
 * To go live: add the `stripe` package, set `STRIPE_SECRET_KEY` as a
 * Worker secret (`wrangler secret put STRIPE_SECRET_KEY`), give each
 * purchasable guide a `stripePriceId`, and replace the body below with a
 * real `stripe.checkout.sessions.create(...)` call returning `session.url`.
 */
export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as { slug?: string };
  const product = guideProducts.find((item) => item.slug === payload.slug);

  if (!product) {
    return Response.json({ error: "Unknown guide" }, { status: 404 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json(
      {
        error:
          "Checkout isn't configured yet. Set STRIPE_SECRET_KEY and a stripePriceId for this guide, then wire this route to Stripe Checkout.",
      },
      { status: 501 },
    );
  }

  return Response.json(
    { error: "Stripe integration not yet implemented." },
    { status: 501 },
  );
}
