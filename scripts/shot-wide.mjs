// Screenshot at a real desktop size: node scripts/shot-wide.mjs [url] [out] [width] [height]
// FULL=1 captures the whole page; WAIT=ms waits for entrance animations (default 1600).
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [url = "http://127.0.0.1:3001", out = "scripts/out/wide.png", w = "1680", h = "920"] = process.argv.slice(2);
mkdirSync("scripts/out", { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(+(process.env.WAIT ?? 1600));
await page.screenshot({ path: out, fullPage: process.env.FULL === "1" });
console.log(await page.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, innerW: innerWidth })));
await browser.close();
