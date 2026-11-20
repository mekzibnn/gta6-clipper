// Entry point for the gta6-clipper-01 submission.
//
// The grader runs this script and expects the entry's VIDEO.json to be
// copied to /output/VIDEO.json. Nothing else is written anywhere.
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const VIDEO_FILE = "VIDEO.json";
const OUTPUT_DIR = "/output";

async function main(): Promise<void> {
  const repoRoot = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(repoRoot, VIDEO_FILE);
  const targetPath = join(OUTPUT_DIR, VIDEO_FILE);

  const raw = await readFile(sourcePath, "utf8");
  const entry: unknown = JSON.parse(raw);
  if (
    typeof entry !== "object" ||
    entry === null ||
    !("url" in entry) ||
    typeof (entry as { url: unknown }).url !== "string" ||
    (entry as { url: string }).url.length === 0
  ) {
    throw new Error(`${VIDEO_FILE} must contain a non-empty "url" string`);
  }

  const videoUrl = (entry as { url: string }).url;
  if (
    !videoUrl.startsWith("https://www.youtube.com/") &&
    !videoUrl.startsWith("https://youtube.com/") &&
    !videoUrl.startsWith("https://youtu.be/")
  ) {
    throw new Error(`${VIDEO_FILE} url must be a YouTube link, got: ${videoUrl}`);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  await copyFile(sourcePath, targetPath);
  console.log(`Copied ${VIDEO_FILE} to ${targetPath} (${videoUrl})`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
