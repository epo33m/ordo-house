// antislop OpenCode plugin
//
// Makes the globally-installed anti-slop filter mandatory for this project.
//
// Why a plugin at all: OpenCode advertises skills by `description`, so on its
// own antislop is a nudge. Upstream's own answer for that is a pointer block
// in AGENTS.md, but the installer writes that only for a project install
// (`cli/index.mjs:176`), so a global install gets no pointer at all. This hook
// is the enforcement layer both routes lack.
//
// Mechanism: `session.hook("context", ...)` runs on every model call, and
// `event.system.push(...)` appends to the outgoing system prompt. Unlike the
// graphify plugin, which prepends an `echo` to the first shell command, this
// does not depend on a tool call happening first and does not spend the
// user's terminal output on a reminder. Nothing here interpolates a shell
// string, so the backtick/`$(...)` hazard that graphify.js documents does not
// apply.
//
// Scope: the core SKILL.md is ~57KB (roughly 15k tokens). Injecting it on
// every model call would be wasteful, so this injects a short, always-on
// directive that names the skill ids to load with the skill tool, and the
// model loads the ones the task actually needs. Set ANTSLOP_EAGER=1 to also
// force-load the core through the `prompt` hook instead.
//
// Nothing is imported from an opencode package: a plain file in
// .opencode/plugins/ cannot resolve one.
import { existsSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const SKILL_DIR = join(homedir(), ".config", "opencode", "skills");

// Only offer what is actually installed, so removing a skill cannot leave a
// dangling instruction telling the model to load a skill that no longer exists.
const ALL_SKILLS = [
  ["antislop", "core filter, always on"],
  ["antislop-ui", "UI and visual work"],
  ["antislop-copywriting", "copy and text"],
  ["antislop-human", "accessibility and contrast"],
  ["antislop-layoutmobile", "responsive layout"],
  ["antislop-code", "code comment hygiene"],
];

const installed = ALL_SKILLS.filter(([id]) => existsSync(join(SKILL_DIR, id, "SKILL.md")));

const directive = (skillLines) =>
  [
    "[antislop] Mandatory for this project. Installed globally at " + SKILL_DIR + "/.",
    "Load the skills that apply with the skill tool BEFORE writing or editing anything:",
    ...skillLines,
    "Follow the core's Two Usage Modes in strict order (session instruction, then global preference, then ask).",
    "Its Delivery Gate is not optional: end every delivery with the four-block PASS/FAIL report.",
    "Do not make the first edit before the applicable skills are loaded.",
  ].join("\n");

// The plugin id carries this file's location: a project and a directory above
// it can each hold a copy, and OpenCode fails the second plugin with the same
// id ("Duplicate plugin ID"), the same reason graphify.js hashes its location.
const location = [...import.meta.url].reduce(
  (hash, ch) => (Math.imul(hash, 31) + ch.charCodeAt(0)) >>> 0,
  7,
);

export default {
  id: `antislop-${location.toString(16)}`,

  async setup(ctx) {
    // Inert rather than wrong: no antislop installed, nothing to enforce.
    if (installed.length === 0) return;

    const skillLines = installed.map(([id, why]) => "- " + id + " (" + why + ")");
    const text = directive(skillLines);

    await ctx.session.hook("context", (event) => {
      event.system ??= [];
      event.system.push({ type: "text", text });
    });

    // Eager mode attaches the core rules as a real prompt file so they are in
    // context rather than merely advertised. Costs ~15k tokens per prompt.
    if (process.env.ANTSLOP_EAGER === "1" && existsSync(join(SKILL_DIR, "antislop", "SKILL.md"))) {
      await ctx.session.hook("prompt", (event) => {
        event.prompt.files ??= [];
        event.prompt.files.push({
          uri: "file://" + join(SKILL_DIR, "antislop", "SKILL.md"),
        });
      });
    }
  },
};
