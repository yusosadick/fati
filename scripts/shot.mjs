// Screenshot the running dev server at the inspiration's screen size.
// usage: node scripts/shot.mjs [url] [out]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const url = process.argv[2] ?? "http://localhost:3100";
const out = process.argv[3] ?? "scripts/out/shot.png";
mkdirSync("scripts/out", { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1014, height: 720 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: out });
await browser.close();
console.log("saved", out);
