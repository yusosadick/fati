// Full-page screenshot of the landing at the reference width.
// usage: node scripts/landing-shot.mjs [url] [out] [width]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [url = "http://127.0.0.1:3001", out = "scripts/out/landing.png", w = "1680"] = process.argv.slice(2);
mkdirSync("scripts/out", { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: +w, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
// Scroll through so lazy images load, then return to the top.
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 450) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 160));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);
await page.screenshot({ path: out, fullPage: true });
const info = await page.evaluate(() => ({
  h: document.documentElement.scrollHeight,
  sw: document.documentElement.scrollWidth,
  iw: innerWidth,
}));
console.log(JSON.stringify(info), errors.length ? "ERRORS:\n" + errors.join("\n") : "no console errors");
await browser.close();
