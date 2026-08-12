/**
 * Lightweight responsive-image helper for Unsplash-hosted photos.
 *
 * The site currently requests every photo at a single fixed width
 * (`w=1600`), so a phone on a slow connection downloads the same bytes as a
 * 4K desktop monitor. Unsplash's image API (imgix-based) already supports
 * resizing via the `w` query param, so we can build a `srcSet` from the
 * existing URL without adding a new image pipeline or touching layout CSS.
 */

const RESPONSIVE_WIDTHS = [480, 768, 1080, 1600];

/**
 * Builds a `srcSet` string for an Unsplash photo URL across a few common
 * widths. Returns `undefined` for non-Unsplash URLs so callers can fall back
 * to a plain `src` without special-casing.
 */
export function unsplashSrcSet(url: string): string | undefined {
  if (!url || !url.includes("images.unsplash.com")) return undefined;

  try {
    return RESPONSIVE_WIDTHS.map((width) => {
      const variant = new URL(url);
      variant.searchParams.set("w", String(width));
      return `${variant.toString()} ${width}w`;
    }).join(", ");
  } catch {
    return undefined;
  }
}

/**
 * Conservative default `sizes` value for card/grid imagery: full width on
 * mobile, roughly half on tablet, a third on desktop. Slightly generous by
 * design, worst case the browser fetches a bit more than strictly needed,
 * it never under-fetches and breaks layout.
 */
export const defaultImageSizes =
  "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw";

/** Wider default for hero/full-bleed imagery that spans the viewport. */
export const heroImageSizes = "100vw";
