// apple-hig OpenCode plugin
//
// Makes the locally archived Apple Human Interface Guidelines a required
// reference for design decisions in this project.
//
// Why this exists: antislop blocks generic output, but it does not supply
// direction. Its own rule R-37 says a sterile result means the direction was
// missing. For an interface project the direction is Apple's HIG, so this
// points every session at the local archive before design decisions get made.
//
// The archive lives OUTSIDE this repository on purpose. It is Apple's content,
// and the crawler's own README says it does not redistribute it and prefers
// linking to the official pages. Committing it here would turn a local
// reference into redistribution.
//
// Everything is resolved at runtime from index.json, so refreshing the archive
// needs no change to this file. No antislop content is hardcoded.
import { existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";

const ARCHIVE = "/Users/voldys/Downloads/apple-hig-archive/output";
const INDEX = join(ARCHIVE, "index.json");
const PAGES = join(ARCHIVE, "pages");

// The plugin id carries this file's location: a project and a directory above
// it can each hold a copy, and OpenCode fails the second plugin with the same
// id ("Duplicate plugin ID"), the same reason graphify.js hashes its location.
const location = [...import.meta.url].reduce(
  (hash, ch) => (Math.imul(hash, 31) + ch.charCodeAt(0)) >>> 0,
  7,
);

function summary() {
  // index.json is written last, after a crawl finishes. Gating on it would
  // silently drop the rule for the whole duration of a crawl, so the pages
  // directory is the presence test and the index is only used for detail.
  let data = {};
  try {
    data = JSON.parse(readFileSync(INDEX, "utf8"));
  } catch {
    data = {};
  }
  const pages = Array.isArray(data.pages) ? data.pages : [];
  const topics = Object.entries(data.categories || {})
    .map(([name, urls]) => [name, Array.isArray(urls) ? urls.length : 0])
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([name, n]) => `${name} (${n})`)
    .join(", ");
  const count = pages.length || readdirSync(PAGES, { recursive: true })
    .filter((f) => String(f).endsWith(".md")).length;
  return { count, generated: data.generated_at, topics, hasIndex: pages.length > 0 };
}

export default {
  id: `apple-hig-${location.toString(16)}`,

  async setup(ctx) {
    // Inert rather than wrong: no archive on this machine, nothing to enforce.
    if (!existsSync(PAGES)) return;

    let info;
    try {
      info = summary();
    } catch {
      return;
    }

    const text = [
      "[apple-hig] Mandatory reference for design decisions in this project.",
      `Local archive of Apple's Human Interface Guidelines: ${ARCHIVE}`,
      `(${info.count} pages${info.generated ? `, retrieved ${info.generated}` : ""}).` +
        (info.topics ? ` Categories: ${info.topics}.` : ""),
      "",
      "Before you decide how something should look, feel, or behave - and before",
      "you write any component, screen, or user-facing string - find the matching",
      "topic and read that page:",
      info.hasIndex
        ? '  1. Grep the index for the topic: rg -i "term" ' + INDEX
        : "  1. The crawl is incomplete, so index.json is not written yet. Browse",
      ...(info.hasIndex ? [] : ["     the category folders under " + PAGES + " directly."]),
      "  2. Read the page file listed in that record's markdown_path.",
      "",
      "Applies to layout, navigation, controls, feedback, typography, color,",
      "accessibility, and platform conventions. When the archive and your",
      "judgment disagree, say so rather than silently following either.",
      "",
      "The archive is a best-effort snapshot and the official URL is",
      "authoritative. Apple content is copyrighted: quote briefly, never copy",
      "a page wholesale into this project's source or docs.",
    ].join("\n");

    await ctx.session.hook("context", (event) => {
      event.system ??= [];
      event.system.push({ type: "text", text });
    });
  },
};