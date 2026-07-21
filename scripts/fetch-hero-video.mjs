import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "videos");
const outFile = join(outDir, "ocean-waves.mp4");

// Prefer obvious shoreline wave motion (not aerial stillness).
const candidates = [
  "https://videos.pexels.com/video-files/855282/855282-hd_1920_1080_24fps.mp4",
  "https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_24fps.mp4",
];

async function tryDownload(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) throw new Error(`${res.status} ${url}`);
  const type = res.headers.get("content-type") || "";
  if (
    !type.includes("video") &&
    !type.includes("octet-stream") &&
    !type.includes("mp4")
  ) {
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
