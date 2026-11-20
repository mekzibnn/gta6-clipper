# GTA 6 Clipper — make.fun bounty

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mekzibnn/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

One GTA 6 clip for the [make.fun bounty](https://make.fun/bounty/gta6-clipper-01): the most YouTube views wins.

## The moment

From Rockstar's official **Grand Theft Auto VI Trailer 2** (YouTube, `VQRLujxTm3c`): a biker on a red chopper stares down the camera while a small plane flies directly over his head at rooftop height (trailer time 141.83–143.73s). It is the most "only in GTA" image in the whole trailer — two vehicles, one frame, zero explanation needed — and it reads in under a second even on a phone. It survives a vertical crop (biker centre-frame, plane wing across the top) and it is one of the most-shared stills from Trailer 2, so the Short gets the recognition click.

## The clip

`clip.mp4` (1080×1920, 8.9s, a Short): the moment first, blur-filled to vertical with the hook text "ONLY IN GTA 6", then a pitch card with the make.fun ghost: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". The pitch stays on screen for 7 seconds, inside the vertical safe area.

## The upload

The clip is uploaded to YouTube as a public Short with the title in `title.txt` and the description in `description.txt` (the bounty's line, word for word, plus the play code). `VIDEO.json` names the video's address once it exists; until then it holds the placeholder.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads it. That is all it has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `clip.mp4` — the clip (1080×1920, 8.9s)
- `card.png` — the pitch end-card image used in the clip
- `title.txt` — the YouTube title
- `description.txt` — the YouTube description (bounty line + play code)
- `VIDEO.json` — the video's address (placeholder until uploaded)
- `main.ts` — the entry program
