import { useId } from "react";

/**
 * The ORDO mark, reconstructed from the supplied logo board
 * (~/Downloads/ORDO-2.png) by measuring the silhouette at 140px and fitting
 * the geometry: disc r=70 at (70,70), inner circle r=23 at (70,67), and a
 * stem that pinches to a half-width of 9 at y=92 then flares at 0.3875 per
 * side to the disc edge. Reconstruction differs from the source raster by
 * 2.2% of pixels.
 *
 * Two things to know before shipping this as final:
 * - Replace it with the real vector export when one exists. This is measured
 *   from a raster, not taken from the source file.
 * - The board's wordmark reads ORDO in a squarish techno face that is not
 *   Plus Jakarta Sans, and the brand is now "Ordo House". So the mark is used
 *   alone and the wordmark stays as live text in the site's own typeface.
 *
 * The knockout is a real mask, not a second colour, so the cut is genuinely
 * transparent and the mark reads correctly on canvas, band, and accent alike.
 * Non-text contrast on every surface it ships on: 15.94:1 Snow on Canvas,
 * 4.96:1 Snow on Tobacco Strong, 13.69:1 Charcoal on Snow, 12.57:1 Charcoal
 * on Canvas Light. All clear the 3:1 required for a graphic.
 */
export function Logo({ className }: { className?: string }) {
  // The mask id must be unique: the mark appears in both the header and the
  // footer, and a repeated id would make the second reference resolve to the
  // first.
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      role="img"
      aria-label="Ordo House"
      fill="none"
    >
      <defs>
        <mask id={maskId}>
          <rect width="140" height="140" fill="#fff" />
          <circle cx="70" cy="67" r="23" fill="#000" />
          <path d="M61 92H79L97.6 140H42.4L61 92Z" fill="#000" />
        </mask>
      </defs>
      <circle cx="70" cy="70" r="70" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}