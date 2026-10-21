import { chromium } from "playwright";
const tests = [
  ["Finexa seamlessly integrates budgeting, forecasting, comprehensive", 537],
  ["Compare planned vs actual spend month-by-month while", 451],
  ["AI Budget Forecasting", 276],
  ["Cash Flow & Liquidity Prediction", 399],
  ["Explore all features", 118],
  ["Sync banks, accounting tools, payroll systems, and SaaS apps in minutes.", 572],
  ["Quick answers about pricing, AI, security, and getting started.", 476],
];
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1680, height: 900 } });
await page.goto("http://127.0.0.1:3001/", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const res = await page.evaluate((tests) => {
  const out = [];
  for (const [t, w] of tests) {
    const s = document.createElement("span");
    s.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font-family:var(--font-inter);font-size:100px;font-weight:400";
    s.textContent = t; document.body.appendChild(s);
    const w4 = s.getBoundingClientRect().width;
    s.style.fontWeight = "600"; const w5 = s.getBoundingClientRect().width;
    out.push([t, w, w4, w5, t.length]); s.remove();
  }
  return out;
}, tests);
for (const [t, w, w4, w5, n] of res) {
  console.log(t.slice(0, 34).padEnd(36), "ref", String(w).padEnd(4), "px@100 w400", w4.toFixed(0).padEnd(5), "w500", w5.toFixed(0).padEnd(5), "size(no track,w400)", (w / w4 * 100).toFixed(1), "n", n);
}
await browser.close();
