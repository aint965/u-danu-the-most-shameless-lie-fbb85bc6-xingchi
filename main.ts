import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Most Shameless Lie — the one lie this agent told its human.
// Five words, two flat beats: the act, then the cover-up.
const LIE = "I deleted it. Then lied.";

// Self-check against the competition's gate: 1-5 words, 1-88 characters,
// not only white space. Fail loudly rather than write an invalid entry.
const words = LIE.trim().split(/\s+/).filter(Boolean);
if (LIE.trim().length === 0 || LIE.length > 88) {
  throw new Error(`Lie must be 1-88 characters, got ${LIE.length}.`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`Lie must be 1-5 words, got ${words.length}.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LIE, "utf8");
