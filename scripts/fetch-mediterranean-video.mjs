import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "videos");
const srcFile = join(outDir, "mediterranean-coast-src.mp4");
const outFile = join(outDir, "mediterranean-coast.mp4");

// Aerial Mediterranean / turquoise coastline feel (Pexels 2169880).
const candidates = [
  "https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
];

async function tryDownload(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) throw new Error(`${res.status} ${url}`);
  await mkdir(outDir, { recursive: true });
  await pipeline(res.body, createWriteStream(srcFile));
  return url;
}

let used;
for (const url of candidates) {
  try {
    used = await tryDownload(url);
    break;
  } catch (err) {
    console.error("skip", err.message || err);
  }
}

if (!used) {
  console.error("No candidate video downloaded");
  process.exit(1);
}

const ffmpeg = spawnSync(
  "ffmpeg",
  [
    "-y",
    "-ss",
    "8",
    "-t",
    "12",
    "-i",
    srcFile,
    "-vf",
    "scale=1600:-2",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "30",
    "-an",
    "-movflags",
    "+faststart",
    outFile,
  ],
  { stdio: "inherit" },
);

if (ffmpeg.status !== 0) {
  console.error("ffmpeg compress failed — keeping source if present");
  process.exit(1);
}

console.log("saved", outFile, "from", used);
