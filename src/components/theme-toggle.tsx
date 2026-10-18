"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "ordo-theme";
const CHANGE_EVENT = "ordo-theme-change";

/**
 * The active theme lives on the documentElement as a data attribute. The root
 * layout renders it server-side from the cookie, so there is no flash on load
 * and no inline script to execute.
 *
 * Reading the attribute through useSyncExternalStore keeps this component in
 * step with it without a set-state-in-effect round trip: the server snapshot
 * renders "dark" during hydration, then React swaps in the real value once the
 * client takes over.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * A year is plenty for a preference that the user can flip at any time.
 */
function persist(next: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Private browsing or blocked storage. The toggle still works for this
    // page view; it just will not be remembered.
  }
}

/**
 * Applies the stored theme to <html> before the browser paints.
 *
 * useLayoutEffect rather than useEffect: layout effects run synchronously
 * after the DOM is ready but before paint, so a visitor who chose light mode
 * never sees a dark frame first. useEffect runs after paint, which is a
 * visible flash. This touches the DOM attribute directly and holds no state,
 * so there is no set-state-in-effect and nothing re-renders.
 *
 * The inline-script alternative is not used on purpose: a <script> rendered
 * inside a React component is never executed on the client, and Next.js logs a
 * warning for it on every render.
 */
export function ThemeSync() {
  useLayoutEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    const theme: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    const root = document.documentElement;
    if (root.getAttribute("data-theme") !== theme) {
      root.setAttribute("data-theme", theme);
      window.dispatchEvent(new Event(CHANGE_EVENT));
    }
  }, []);

  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    persist(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] px-2 text-text transition-colors hover:bg-surface"
    >
      {/*
        Decorative: the accessible name comes from aria-label.

        No border, and quiet rather than medium weight, following Apple's
        global nav, where the controls are unboxed text. The border existed
        because the control sat inside a padded 76 to 84px bar with air
        around it; at Apple's 44px bar the control fills the bar, and a box
        drawn edge to edge across the full height reads as a mistake rather
        than as a control. The 44px box is still the tap target.
      */}
      <span aria-hidden="true" className="text-caption tracking-[0.02em]">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
