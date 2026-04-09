import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const entriesToCopy = [
  "index.html",
  "admin.html",
  "FRONT.HTML",
  "STYLE.CSS",
  "ADMIN.CSS",
  "APP.JS",
  "ADMIN.JS",
  "SUPABASE.JS",
  "hero-church-bg.jpg",
  "assets"
];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of entriesToCopy) {
  await cp(path.join(rootDir, entry), path.join(distDir, entry), {
    recursive: true
  });
}

console.log(`Built static site into ${distDir}`);
