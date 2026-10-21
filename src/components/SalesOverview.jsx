"use client";

import { useState } from "react";
import Card from "./Card";

const CARD_H = "h-[276px]";

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.6" stroke="#8a867f" strokeWidth="1.1" />
      <path d="M8 7.2v3.6" stroke="#8a867f" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="5.2" r=".8" fill="#8a867f" />
    </svg>
  );
}

/* ------------------------------ Sales performance ------------------------------ */

const R = 108.5;
const TICKS = 31;
const TICK_IN = 124.5;
const SCORE = 86;

// Rounded so server and browser print identical SVG attributes (avoids hydration mismatches).
const round = (n) => Math.round(n * 100) / 100 + 0;

const polar = (r, frac) => {
  // frac 0 = left end of the arc, 1 = right end
  const a = Math.PI * frac;
  return [round(-r * Math.cos(a)), round(-r * Math.sin(a))];
};

function SalesPerformance() {
  const f = SCORE / 100;
  const [ex, ey] = polar(R, f);

  return (
    <Card className={`relative min-w-0 ${CARD_H}`}>
      <div className="absolute left-[18px] top-[17px] flex h-[20px] items-center gap-[6px]">
        <h2 className="text-[15px] font-medium leading-none tracking-[-0.1px] text-ink">Sales performance</h2>
        <InfoIcon />
      </div>

      <svg
        className="gauge-in absolute left-1/2 top-[48px] -translate-x-1/2"
        width="232"
        height="128"
        viewBox="-145 -141 290 160"
        aria-hidden
      >
        <defs>
          <linearGradient id="gauge-fill" gradientUnits="userSpaceOnUse" x1={-R} x2={R} y1="0" y2="0">
            <stop offset="0" stopColor="#f6cb92" />
            <stop offset=".25" stopColor="#f0ac62" />
            <stop offset=".5" stopColor="#e57d12" />
            <stop offset=".75" stopColor="#e17200" />
            <stop offset="1" stopColor="#cf6209" />
          </linearGradient>
        </defs>

        {Array.from({ length: TICKS }, (_, i) => {
          const frac = i / (TICKS - 1);
          const major = i % 5 === 0;
          const [x1, y1] = polar(TICK_IN, frac);
          const [x2, y2] = polar(TICK_IN + (major ? 13.5 : 8.5), frac);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={frac <= f + 0.0001 ? "#e8913a" : "#e6d8c4"}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          );
        })}

        <path d={`M${-R} 0A${R} ${R} 0 0 1 ${R} 0`} stroke="#1a1916" strokeOpacity=".07" strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d={`M${-R} 0A${R} ${R} 0 0 1 ${ex} ${ey}`} stroke="url(#gauge-fill)" strokeWidth="20" strokeLinecap="round" fill="none" />
        <circle cx={ex} cy={ey} r="14.5" fill="#fff" fillOpacity=".9" />
        <circle cx={ex} cy={ey} r="11.5" fill="#fff" stroke="#e17200" strokeWidth="3.6" />
        <circle cx={ex} cy={ey} r="4.6" fill="#e17200" />
      </svg>

      <div className="absolute inset-x-0 top-[124px] flex items-center justify-center gap-[6px]">
        <span className="text-[30px] font-semibold leading-[34px] tracking-[-0.9px] text-ink">{SCORE}</span>
        <span className="flex h-[18px] items-center gap-[2px] rounded-[6px] bg-up/15 px-[6px] text-[10px] font-semibold text-[#168a47]">
          <span aria-hidden>↑</span>+3
        </span>
      </div>
      <p className="absolute inset-x-0 top-[158px] text-center text-[10.5px] leading-[16px] text-ink-mute">of 100 points</p>

      <div className="absolute inset-x-[18px] top-[188px]">
        <h3 className="text-[13px] font-semibold leading-[18px] text-ink">Ahead of plan</h3>
        <p className="mt-[3px] text-[11.5px] leading-[18px] tracking-[-0.05px] text-ink-soft">
          Both channels beat last month. Online did most of the lifting.
        </p>
        <a
          href="#"
          className="mt-[10px] inline-block text-[11.5px] font-medium leading-[18px] text-brand underline decoration-brand/40 decoration-[1.5px] underline-offset-[3px] transition-colors hover:decoration-brand"
        >
          Improve your score
        </a>
      </div>
    </Card>
  );
}

/* ---------------------------------- Revenue ---------------------------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Placeholder data. `actuals` is how many leading buckets have happened; the rest are projected.
const RANGES = {
  Week: {
    cats: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    titles: ["Mon, Oct 19", "Tue, Oct 20", "Wed, Oct 21", "Thu, Oct 22", "Fri, Oct 23", "Sat, Oct 24", "Sun, Oct 25"],
    values: [1100, 1450, 1280, 1620, 1180, 1350, 1170],
    change: [4.1, 7.8, 5.6, null, null, null, null],
    vs: "vs last week",
    actuals: 3,
    max: 2000,
    summary: "so far this week",
  },
  Month: {
    cats: ["W1", "W2", "W3", "W4", "W5"],
    titles: ["Week 1 · Oct 1–7", "Week 2 · Oct 8–14", "Week 3 · Oct 15–21", "Week 4 · Oct 22–28", "Week 5 · Oct 29–31"],
    values: [7200, 8400, 9100, 8700, 3800],
    change: [9.4, 12.1, 15.3, null, null],
    vs: "vs last month",
    actuals: 3,
    max: 10000,
    summary: "so far this month",
  },
  Year: {
    cats: MONTHS,
    titles: MONTHS.map((m) => `${m} 2026`),
    values: [19000, 21500, 26000, 24000, 29000, 38500, 34500, 31500, 36500, 39500, 42500, 50000],
    change: [12.4, 15.1, 18.3, 21.8, 17.2, 24.6, 20.1, 16.8, 22.9, 29.5, null, null],
    vs: "vs last year",
    actuals: 10,
    max: 60000,
    summary: "so far this year",
  },
};

const PLOT_TOP = 56;
const PLOT_H = 178;
const TIP_H = 96;

const money = (n) => `$${n.toLocaleString("en-US")}`;
const compact = (v, digits = 2) => (v === 0 ? "$0" : v >= 1000 ? `$${+(v / 1000).toFixed(digits)}k` : `$${v}`);

const STRIPES = "repeating-linear-gradient(135deg, #eec79a 0 1.7px, #f9eddc 1.7px 6.4px)";
const STRIPES_PROJECTED = "repeating-linear-gradient(135deg, #f3d9b9 0 1.7px, #fbf3e7 1.7px 6.4px)";

function Bar({ index, value, max, active, projected }) {
  const style = {
    height: `${(value / max) * 100}%`,
    "--i": index,
    ...(active
      ? { background: "linear-gradient(180deg, #f3b269 0%, #e8861f 45%, #d96a05 100%)" }
      : { backgroundImage: projected ? STRIPES_PROJECTED : STRIPES }),
  };
  return (
    <div
      className={`bar-grow absolute bottom-0 left-1/2 w-[30px] max-w-[56%] -translate-x-1/2 rounded-full ${
        projected && !active ? "border-[1.5px] border-dashed border-[#e2b27a]" : ""
      } ${active ? "shadow-[0_8px_16px_-8px_rgba(225,114,0,.55)]" : ""}`}
      style={style}
    >
      {active && (
        <span className="absolute left-1/2 top-[6px] flex h-[14px] w-[14px] -translate-x-1/2 items-center justify-center rounded-full bg-white/35">
          <span className="h-[7px] w-[7px] rounded-full bg-white" />
        </span>
      )}
    </div>
  );
}

function RevenueChart() {
  const [range, setRange] = useState("Year");
  const [hovered, setHovered] = useState(null);

  const { cats, titles, values, change, vs, actuals, max, summary } = RANGES[range];
  const count = cats.length;
  const total = values.slice(0, actuals).reduce((a, b) => a + b, 0);
  const average = total / actuals;
  const current = actuals - 1;
  const active = hovered ?? current;
  const yTicks = [1, 0.75, 0.5, 0.25, 0].map((p) => max * p);
  const avgTop = PLOT_H - (average / max) * PLOT_H;

  const tipTop =
    hovered === null ? 0 : Math.max(-8, PLOT_H - (values[hovered] / max) * PLOT_H - 14 - TIP_H);

  return (
    <Card className={`relative min-w-0 ${CARD_H}`}>
      <div className="absolute left-[18px] top-[17px] flex items-center gap-[6px]">
        <h2 className="text-[15px] font-medium leading-[20px] tracking-[-0.1px] text-ink">Revenue</h2>
        <InfoIcon />
        <span className="ml-[4px] text-[11.5px] leading-[20px] text-ink-mute">
          {money(total)} {summary}
        </span>
      </div>

      <div className="absolute right-[16px] top-[13px] flex h-[28px] rounded-[10px] bg-white/45 p-[3px]" role="tablist" aria-label="Range">
        {Object.keys(RANGES).map((r) => (
          <button
            key={r}
            type="button"
            role="tab"
            aria-selected={range === r}
            onClick={() => {
              setRange(r);
              setHovered(null);
            }}
            className={`w-[54px] rounded-[7.5px] text-[11px] font-medium leading-none transition-all duration-150 ${
              range === r
                ? "bg-[#2a2827] text-white shadow-[0_2px_6px_-2px_rgba(42,40,39,.5)]"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {yTicks.map((v, i) => (
        <span
          key={v}
          className="absolute left-[10px] w-[40px] -translate-y-1/2 text-right text-[10.5px] leading-none text-ink-mute"
          style={{ top: PLOT_TOP + (PLOT_H * i) / 4 }}
        >
          {compact(v)}
        </span>
      ))}

      <div
        className="absolute left-[58px] right-[18px]"
        style={{ top: PLOT_TOP, height: PLOT_H }}
        onMouseLeave={() => setHovered(null)}
      >
        {yTicks.map((v, i) => (
          <span
            key={v}
            className="absolute inset-x-0 h-px"
            style={{
              top: (PLOT_H * i) / 4,
              backgroundImage: "repeating-linear-gradient(90deg, rgba(26,25,22,.14) 0 5px, transparent 5px 9.5px)",
            }}
          />
        ))}

        <div key={range} className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
          {values.map((v, i) => (
            <div
              key={cats[i]}
              className="relative"
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              aria-label={`${titles[i]}: ${money(v)}`}
            >
              <Bar index={i} value={v} max={max} active={active === i} projected={i >= actuals} />
            </div>
          ))}
        </div>

        <span
          className="pointer-events-none absolute inset-x-0 z-10 h-[1.2px]"
          style={{
            top: avgTop - 0.6,
            backgroundImage: "repeating-linear-gradient(90deg, #b85a00 0 4.5px, transparent 4.5px 7px)",
          }}
        />
        <span
          className="pointer-events-none absolute right-0 z-10 flex h-[16px] items-center rounded-[5px] bg-[#f6e3cb] px-[6px] text-[10px] font-medium text-[#a85200]"
          style={{ top: avgTop - 19 }}
        >
          avg {compact(Math.round(average), 1)}
        </span>

        <div
          className={`pointer-events-none absolute z-20 w-[156px] -translate-x-1/2 rounded-[12px] bg-[#2a2827] px-[12px] pb-[9px] pt-[9px] text-white shadow-[0_14px_30px_-10px_rgba(42,40,39,.55)] transition-[left,top,opacity] duration-200 ease-out ${
            hovered === null ? "opacity-0" : "opacity-100"
          }`}
          style={{ left: `${(((hovered ?? 0) + 0.5) / count) * 100}%`, top: tipTop, height: TIP_H }}
        >
          {hovered !== null && (
            <>
              <p className="text-[11.5px] font-semibold leading-[16px]">{titles[hovered]}</p>
              <dl className="mt-[5px] grid grid-cols-[1fr_auto] gap-y-[3px] text-[11px] leading-[17px]">
                <dt className="text-[#b9b4aa]">Revenue</dt>
                <dd className="text-right font-semibold">{money(values[hovered])}</dd>
                <dt className="text-[#b9b4aa]">Orders</dt>
                <dd className="text-right font-semibold">{Math.round(values[hovered] / 71)}</dd>
                <dt className="text-[#b9b4aa]">{vs}</dt>
                <dd className="text-right font-semibold text-[#52d68a]">
                  {change[hovered] === null ? "—" : `+${change[hovered].toFixed(1)}%`}
                </dd>
              </dl>
            </>
          )}
        </div>
      </div>

      <div
        className="absolute left-[58px] right-[18px] grid"
        style={{ top: PLOT_TOP + PLOT_H + 9, gridTemplateColumns: `repeat(${count}, 1fr)` }}
      >
        {cats.map((c, i) => (
          <span
            key={c}
            className={`text-center text-[10.5px] leading-[16px] transition-colors ${active === i ? "font-semibold text-ink" : "text-ink-mute"}`}
          >
            {c}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default function SalesOverview() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-[16px]">
      <RevenueChart />
      <SalesPerformance />
    </div>
  );
}
