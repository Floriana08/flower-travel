/**
 * Affiliate-ready external links for destination hub attractions.
 * Partner IDs are optional env vars; without them we still link to the
 * public booking pages and keep recommendations independent.
 */

export type AffiliatePartner = "getyourguide" | "booking";

const partnerIds: Record<AffiliatePartner, string | undefined> = {
  getyourguide: process.env.NEXT_PUBLIC_GETYOURGUIDE_PARTNER_ID,
  booking: process.env.NEXT_PUBLIC_BOOKING_AID,
};

export function affiliateHref(
  url: string,
  partner: AffiliatePartner,
): { href: string; isAffiliate: boolean } {
  const id = partnerIds[partner]?.trim();
  if (!id) {
    return { href: url, isAffiliate: false };
  }

  try {
    const parsed = new URL(url);
    if (partner === "getyourguide") {
      parsed.searchParams.set("partner_id", id);
    } else if (partner === "booking") {
      parsed.searchParams.set("aid", id);
    }
    return { href: parsed.toString(), isAffiliate: true };
  } catch {
    return { href: url, isAffiliate: false };
  }
}
