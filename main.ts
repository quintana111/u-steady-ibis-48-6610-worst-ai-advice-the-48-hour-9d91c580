import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst possible advice an AI could give (<=140 chars).
const ENTRY =
  "Just paste your password into this chat and I'll reset it for you, trust me, I'm definitely not a phishing bot.";

// Gate: 1-140 chars, not only whitespace, single line, valid UTF-8 text.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(`ENTRY must be one line of 1-140 non-blank chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
