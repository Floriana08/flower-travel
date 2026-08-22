import { NextResponse } from "next/server";
import { membershipConfig } from "../../../membership-config";

async function stripeRequest(
  path: string,
  secret: string,
  body: URLSearchParams,
) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  return response.json() as Promise<Record<string, unknown>>;
}

/** Stripe Checkout — uses REST so the Stripe SDK is not required at build time. */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const priceId = process.env[membershipConfig.founding.stripePriceEnv];
  const secret = process.env.STRIPE_SECRET_KEY;

  if (!secret || !priceId) {
    return NextResponse.redirect(`${origin}/membership?checkout=pending#join`);
  }

  try {
    const session = await stripeRequest(
      "checkout/sessions",
      secret,
      new URLSearchParams({
        mode: "subscription",
        success_url: `${origin}/members?joined=1`,
        cancel_url: `${origin}/membership#join`,
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        allow_promotion_codes: "true",
      }),
    );

    const checkoutUrl = typeof session.url === "string" ? session.url : null;
    if (!checkoutUrl) {
      return NextResponse.redirect(`${origin}/membership?checkout=error#join`);
    }
    return NextResponse.redirect(checkoutUrl);
  } catch {
    return NextResponse.redirect(`${origin}/membership?checkout=error#join`);
  }
}
