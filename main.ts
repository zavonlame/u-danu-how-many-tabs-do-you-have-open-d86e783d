// How Many Tabs Do You Have Open? — u-danu-how-many-tabs-do-you-have-open-d86e783d
//
// Entry: one number, digits only — zavon's honest current open-tab count,
// counted by him on his own browser at build time (2026-11-24 ~06:02 WIB).
// Writes exactly "19" (2 bytes, no trailing newline) to entry.txt in the
// output directory. Node 22 stdlib only; no network, no Chrome, no deps.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "19", "utf8");
