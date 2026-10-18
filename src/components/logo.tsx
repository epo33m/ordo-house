import { useId } from "react";

/**
 * The ORDO mark. Source vector supplied by the owner, 2026-10-18.
 *
 * Two deliberate changes to the supplied file, both recorded in DESIGN.md:
 *
 * 1. The disc is painted with `currentColor` instead of the hardcoded
 *    `#FFFAFA`, so one component is correct on canvas, on the inverted band,
 *    and on the accent band without a variant per theme. The knockout is a
 *    mask, not a second fill colour, so the cut is genuinely transparent.
 * 2. The mask id is generated rather than the literal `mask0_30_10`, because
 *    the mark renders twice per page and a repeated id would collide. The
 *    supplied `clipPath` is dropped: it clips to the 180x180 viewBox, which
 *    the viewBox already does.
 *
 * Geometry is untouched from the source: disc r=70.312 at (90,90), inner
 * circle r=22.852 on the same centre, and a stem that runs from that centre
 * out to the disc edge.
 */
export function Logo({ className }: { className?: string }) {
  const maskId = useId();

  return (
    <svg viewBox="0 0 180 180" className={className} role="img" aria-label="Ordo House" fill="none">
      <defs>
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <path d="M180 0H0V180H180V0Z" fill="white" />
          <path
            d="M90 112.852C102.621 112.852 112.852 102.621 112.852 90C112.852 77.3794 102.621 67.1484 90 67.1484C77.3794 67.1484 67.1484 77.3794 67.1484 90C67.1484 102.621 77.3794 112.852 90 112.852Z"
            fill="black"
          />
          <path d="M90 90L54.8438 180H125.156L90 90Z" fill="black" />
        </mask>
      </defs>
      <path
        d="M90 160.312C128.833 160.312 160.312 128.833 160.312 90C160.312 51.1675 128.833 19.6875 90 19.6875C51.1675 19.6875 19.6875 51.1675 19.6875 90C19.6875 128.833 51.1675 160.312 90 160.312Z"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}