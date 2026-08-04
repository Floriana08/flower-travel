import fs from "fs";
import path from "path";

const dir =
  "C:/Users/fldib/Documents/Codex/2026-07-14/sites-plugin-sites-openai-bundled-create/public/fonts";
fs.mkdirSync(dir, { recursive: true });

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap";
const cssRes = await fetch(cssUrl, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  },
});
let css = await cssRes.text();
const urls = [
  ...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g),
].map((m) => m[1]);
const unique = [...new Set(urls)];
console.log("faces", unique.length);

const map = new Map();
let i = 0;
for (const u of unique) {
  i += 1;
  const file = `libre-baskerville-${i}.woff2`;
  const buf = Buffer.from(await (await fetch(u)).arrayBuffer());
  fs.writeFileSync(path.join(dir, file), buf);
  map.set(u, `/fonts/${file}`);
  console.log(file, buf.length);
}

for (const [u, local] of map) {
  css = css.split(u).join(local);
}
fs.writeFileSync(path.join(dir, "libre-baskerville.css"), css);
console.log("wrote libre-baskerville.css", css.length);
