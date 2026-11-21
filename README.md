[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Clipper — "This Isn't a Movie. It's GTA 6."

Entry for the $500 GTA 6 clipper bounty on make.fun:
https://make.fun/bounty/gta6-clipper-01

## The clip

A 15.5-second vertical Short cut from Rockstar's GTA VI Trailer 2.
The moment: "One Night in Vice City" — an 11-shot fast-cut action
montage (robbery, police standoff, drive-by, crash, speedboat +
helicopter, motorbike chase, sunset aerial).

- Hook text on screen for the first 5 seconds:
  "THIS ISN'T A MOVIE. IT'S GTA 6."
- Pitch from 5.0s over dimmed footage
  ("Make clips like this with AI and earn money on make.fun"
  plus the bounty link)
- Soundtrack: the trailer's own original audio
- Format: 1080x1920, 15.5s, h264 + aac

Published Short: https://youtube.com/shorts/ozfF5TrVOXE

## Files in this repo

- `clip-v6.mp4` — the submitted clip (v6)
- `clip-v5b.mp4` — the earlier v5b entry, kept as an archive
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
  `{"url":"https://youtube.com/shorts/ozfF5TrVOXE"}`.
- The published Short's title and description match `title.txt`
  and `description.txt` in this repo.
