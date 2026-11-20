[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Clipper — "Slow Living in Leonida"

Entry for the $500 GTA 6 clipper bounty on make.fun:
https://make.fun/bounty/gta6-clipper-01

## The clip

A 32-second vertical Short cut from Rockstar's GTA VI Trailer 2.
The moment: cruising down a Leonida highway with a jetski riding
along on a trailer — slow-living vibes.

- Hook text on screen for the first 20 seconds:
  "The moment when you feel the world is on your side"
- Clean middle with no text, just the trailer footage
- Final 12 seconds carry the make.fun pitch on screen
  ("Make clips like this with AI and earn money on make.fun"
  plus the bounty link)
- Soundtrack: "Take Me Home, Country Roads" by John Denver
- Format: 1080x1920, 32.0s, h264 + aac

Published Short: https://youtube.com/shorts/s9xbjQlQ-ew

## Files in this repo

- `clip-v5b.mp4` — the submitted clip (v5b)
- `clip.mp4` — the earlier v1 clip, kept as an archive
- `VIDEO.json` — the published Short URL, the entry's video
- `title.txt` / `description.txt` — the exact title and description
  published with the Short
- `main.ts` — the entrypoint (see below)
- `card.png` — pitch card image from v1

## How main.ts works

`main.ts` is the entrypoint the grader runs. It reads `VIDEO.json`
from the repo root, checks it contains a non-empty `url` string,
creates `/output` if needed, and copies `VIDEO.json` to
`/output/VIDEO.json`. It uses only the Node 22 standard library.

Run it with `node main.ts`.

## Verification

- `node main.ts` exits 0 and writes `/output/VIDEO.json` with the
  Short URL above; remove `/output` afterwards so it is never committed.
- `VIDEO.json` must contain exactly
  `{"url":"https://youtube.com/shorts/s9xbjQlQ-ew"}`.
- The published Short's title and description match `title.txt`
  and `description.txt` in this repo.
