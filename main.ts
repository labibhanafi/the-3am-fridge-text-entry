// The 3AM Fridge Text — make.fun entry (program/v1, Node 22+)
// Writes the single-line fridge text to /output/entry.txt (1-140 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3am. You again. The leftovers and I had a bet on when you'd show up. I won.";

if (Buffer.byteLength(ENTRY, "utf8") > 140 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1-140 character gate");
}

mkdirSync("/output", { recursive: true });
// Persist the entry text exactly as defined above — no extra newline is appended.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
