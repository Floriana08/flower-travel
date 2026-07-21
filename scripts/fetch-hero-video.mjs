import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "videos");
const outFile = join(outDir, "ocean-waves.mp4");

// Coverr free stock: gentle ocean waves (royalty-free for commercial use)
const candidates = [
  "https://cdn.coverr.co/videos/coverr-ocean-wave-1578/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-waves-on-the-beach-1585/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-calm-ocean-waves-1081/1080p.mp4",
  "https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_24fps.mp4",
];

async function tryDownload(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) {
    throw new Error(`${res.status} ${url}`);
  }
  const type = res.headers.get("content-type") || "";
  if (!type.includes("video") && !type.includes("octet-stream") && !type.includes("mp4")) {
    throw new Error(`unexpected type ${type} for ${url}`);
  }
  await mkdir(outDir, { recursive: true });
  await pipeline(res.body, createWriteStream(outFile));
  return url;
}

for (const url of candidates) {
  try {
    const used = await tryDownload(url);
    console.log("saved", outFile, "from", used);
    process.exit(0);
  } catch (err) {
    console.error("skip", err.message || err);
  }
}

console.error("No candidate video downloaded");
process.exit(1);
