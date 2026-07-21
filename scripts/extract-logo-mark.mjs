import sharp from "sharp";
import fs from "fs";

const src =
  "C:/Users/fldib/Downloads/ChatGPT Image Jul 20, 2026, 10_38_55 PM.png";
const outDir =
  "C:/Users/fldib/Documents/Codex/2026-07-14/sites-plugin-sites-openai-bundled-create/public";

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Build a vertical histogram of opaque dark pixels by row in the center column band
const cx = Math.floor(info.width / 2);
const band = Math.floor(info.width * 0.12);
const rowCounts = new Array(info.height).fill(0);

for (let y = 0; y < info.height; y++) {
  for (let x = cx - band; x <= cx + band; x++) {
    const i = (info.width * y + x) * 4;
    if (data[i + 3] < 60) continue;
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum > 160) continue;
    rowCounts[y]++;
  }
}

// Find first content row, then find a gap after the emblem (row with near-zero counts)
let startY = rowCounts.findIndex((c) => c > 8);
let endY = startY;
let gapStart = -1;
for (let y = startY + 20; y < info.height - 10; y++) {
  if (rowCounts[y] < 3) {
    // confirm a short gap then denser text below
    let quiet = 0;
    for (let k = 0; k < 12 && y + k < info.height; k++) {
      if (rowCounts[y + k] < 3) quiet++;
    }
    if (quiet >= 8) {
      gapStart = y;
      break;
    }
  }
  endY = y;
}
if (gapStart > 0) endY = gapStart - 2;

// Horizontal bounds only within emblem rows
let minX = info.width;
let maxX = 0;
for (let y = startY; y <= endY; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (info.width * y + x) * 4;
    if (data[i + 3] < 60) continue;
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum > 160) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
  }
}

const pad = 10;
const left = Math.max(0, minX - pad);
const top = Math.max(0, startY - pad);
const width = Math.min(info.width, maxX + pad) - left;
const height = Math.min(info.height, endY + pad) - top;

console.log({ startY, endY, left, top, width, height, gapStart });

await sharp(src)
  .extract({ left, top, width, height })
  .resize({
    width: 240,
    height: 300,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(`${outDir}/logo-mark.png`);

// Light-on-dark version for footer/hero by inverting RGB keeping alpha
const mark = await sharp(`${outDir}/logo-mark.png`)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const out = Buffer.from(mark.data);
for (let i = 0; i < out.length; i += 4) {
  if (out[i + 3] < 10) continue;
  out[i] = 247;
  out[i + 1] = 243;
  out[i + 2] = 236;
}
await sharp(out, {
  raw: { width: mark.info.width, height: mark.info.height, channels: 4 },
})
  .png()
  .toFile(`${outDir}/logo-mark-light.png`);

await sharp(`${outDir}/logo-mark.png`)
  .resize(64, 64, {
    fit: "contain",
    background: { r: 247, g: 243, b: 236, alpha: 1 },
  })
  .png()
  .toFile(`${outDir}/favicon-mark.png`);

const meta = await sharp(`${outDir}/logo-mark.png`).metadata();
console.log("done", meta.width, meta.height, fs.statSync(`${outDir}/logo-mark.png`).size);
