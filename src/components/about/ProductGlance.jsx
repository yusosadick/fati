"use client";

import { useEffect, useRef, useState } from "react";
import { UserAdd, Call, Add, Home2, Chart, Calendar, Profile, ArrowUp3, Copy, EyeSlash, Document } from "iconsax-react";
import { CaptureIcon, RecordsIcon, ReportsIcon, BellIcon } from "./glance-icons";

/*
 * "Product at a glance": four feature cards around a phone, joined by dashed elbow connectors.
 * Illustrative concept only: the mobile experience and these capabilities are planned.
 * Desktop (xl+) uses a fixed 1180x660 canvas scaled to the container so proportions never drift;
 * below that the phone sits on top and the cards stack.
 */
const W = 1180;
const H = 664;
const CARD = { w: 330, h: 290 };
const PHONE = { x: 452, y: 36, w: 276, h: 592 };
const ROWS = [24, 350];

const FEATURES = [
  { id: "capture", icon: CaptureIcon, title: "Quick lead capture", text: "Add a lead in a few taps, wherever you are.", side: "l", row: 0 },
  { id: "records", icon: RecordsIcon, title: "Customer & deal records", text: "See contacts, deals and notes in one place.", side: "r", row: 0 },
  { id: "reports", icon: ReportsIcon, title: "Pipeline & revenue reports", text: "Visual charts to understand where sales stand.", side: "l", row: 1 },
  { id: "reminders", icon: BellIcon, title: "Smart reminders", text: "Stay on top of follow-ups with timely alerts.", side: "r", row: 1 },
];

const stroke = { stroke: "#1a1916", strokeWidth: 2, strokeDasharray: "6 7", strokeLinecap: "round", fill: "none" };

/** Elbow from a card edge to the phone, with 12px corners. Right side is the mirror of the left. */
function paths() {
  const cx = W / 2;
  const left = [
    `M${CARD.w} 169 H392 Q404 169 404 181 V301 Q404 313 416 313 H${PHONE.x}`,
    `M${PHONE.x} 343 H416 Q404 343 404 355 V483 Q404 495 392 495 H${CARD.w}`,
  ];
  const mirror = (d) => d.replace(/([A-Z])([^A-Z]*)/g, (m, c, args) => {
    if (c === "H") return `H${(2 * cx - parseFloat(args)).toFixed(1)}`;
    if (c === "V") return m;
    const n = args.trim().split(/\s+/).map(Number);
    return `${c}${n.map((v, i) => (i % 2 === 0 ? (2 * cx - v).toFixed(1) : v)).join(" ")}`;
  });
  return [...left, ...left.map(mirror)];
}

function Card({ f, className = "", style }) {
  const Icon = f.icon;
  return (
    <div className={`flex flex-col items-center rounded-[40px] bg-white px-7 text-center shadow-[0_0_0_1px_rgba(40,30,20,.04),0_24px_40px_-32px_rgba(40,30,20,.3)] ${className}`} style={style}>
      <Icon className="h-[104px] w-[104px] shrink-0" />
      <h3 className="font-display mt-4 text-[27px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink">{f.title}</h3>
      <p className="mt-3 max-w-[260px] text-[16px] leading-[1.55] text-body">{f.text}</p>
    </div>
  );
}

/* ---- The phone ---------------------------------------------------------- */
const CONTACTS = [
  ["Maya", "#e8802a"],
  ["Daniel", "#6b4a8a"],
  ["Priya", "#2f7d6b"],
  ["Kemi", "#2563c9"],
];

function Signal() {
  return (
    <svg width="38" height="10" viewBox="0 0 38 10" fill="#fff" aria-hidden>
      <rect x="0" y="6" width="3" height="4" rx="1" /><rect x="5" y="4" width="3" height="6" rx="1" /><rect x="10" y="2" width="3" height="8" rx="1" /><rect x="15" y="0" width="3" height="10" rx="1" />
      <path d="M22 4.500a6 6 0 0 1 7.500 0M24 6.800a3.200 3.200 0 0 1 3.600 0" stroke="#fff" strokeWidth="1.400" fill="none" strokeLinecap="round" />
      <rect x="31" y="1" width="7" height="8" rx="2" opacity=".0" />
    </svg>
  );
}

function Phone() {
  return (
    <div
      aria-hidden
      className="relative mx-auto overflow-hidden rounded-[46px] bg-[#0d0b09] p-[7px] shadow-[0_0_0_2px_#3a3733,0_30px_50px_-24px_rgba(0,0,0,.55)]"
      style={{ width: PHONE.w, height: PHONE.h }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[39px] bg-[#1b130c]">
        {/* ambient glow and watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_20%_0%,#6b3a12_0%,#2b1a0d_45%,#150e08_100%)]" />
        <span className="font-display pointer-events-none absolute left-[26%] top-[26%] select-none text-[150px] font-bold leading-none text-[#e17200]/[.12]">$</span>

        {/* status bar */}
        <div className="relative flex items-center justify-between px-5 pt-3 text-[11px] font-semibold text-white">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2.5 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
          <Signal />
        </div>

        {/* greeting */}
        <div className="relative mt-4 flex items-center gap-2.5 px-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f7c590] to-[#e8802a] text-[12px] font-semibold text-white">AM</span>
          <span className="leading-tight">
            <span className="block text-[9px] text-white/70">Good morning,</span>
            <span className="block text-[12px] font-semibold text-white">Alex Morgan</span>
          </span>
          <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Document size={15} color="#fff" aria-hidden />
          </span>
        </div>

        {/* total pipeline */}
        <div className="relative mt-5 px-4">
          <div className="flex items-start justify-between">
            <span className="text-[11px] text-white/75">Total pipeline</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <EyeSlash size={13} color="#fff" aria-hidden />
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-display text-[31px] font-bold leading-none tracking-[-0.03em] text-white">$58,100</span>
            <span className="rounded-full bg-[#7be0a3] px-1.5 py-0.5 text-[8px] font-bold text-[#0f4d2b]">↗ 12%</span>
          </div>
          <div className="mt-3.5 flex items-center justify-between text-[9px]">
            <span className="rounded-md bg-white/10 px-2 py-1 text-white/85">Status: <b className="font-semibold text-[#7be0a3]">Active</b></span>
            <span className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-white/85">ID: 1657754 <Copy size={9} color="#fff" aria-hidden /></span>
          </div>
        </div>

        {/* quick actions */}
        <div className="relative mt-4 grid grid-cols-4 gap-2 px-3.5">
          {[
            [UserAdd, "border-[#3b6b45]/70 bg-[#1f3a26]/70"],
            [Call, "border-[#8a6a2a]/70 bg-[#3a2c12]/70"],
            [Add, "border-[#2b5a6b]/70 bg-[#10303b]/70"],
          ].map(([I, cls], i) => (
            <span key={i} className={`flex h-[52px] items-center justify-center rounded-[14px] border ${cls}`}>
              <I size={20} color="#fff" aria-hidden />
            </span>
          ))}
          <span className="flex h-[52px] items-center justify-center rounded-[14px] bg-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1a1916" strokeWidth="1.5" aria-hidden>
              <circle cx="4.500" cy="4.500" r="1.800" /><circle cx="11.500" cy="4.500" r="1.800" /><circle cx="4.500" cy="11.500" r="1.800" /><circle cx="11.500" cy="11.500" r="1.800" />
            </svg>
          </span>
        </div>

        {/* bottom sheet */}
        <div className="absolute inset-x-0 bottom-0 top-[318px] rounded-t-[26px] bg-white px-3 pt-3">
          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#fbd9b0_0%,#f6b06a_60%,#ee8f3a_100%)] p-3 ring-1 ring-[#e17200]/20">
            <p className="text-[11px] font-bold text-[#2a1a0a]">Today&rsquo;s follow-up</p>
            <p className="mt-0.5 max-w-[130px] text-[8.5px] leading-snug text-[#4a2e12]">Call Acme about their renewal.</p>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="rounded-full border border-[#2a1a0a]/60 px-2 py-[3px] text-[8px] font-medium text-[#2a1a0a]">1 day left</span>
              <span className="rounded-full bg-[#1a1916] px-2.5 py-[3px] text-[8px] font-semibold text-white">Done</span>
            </div>
            <svg className="absolute -right-1 top-1 h-[74px] w-[84px]" viewBox="0 0 84 74" fill="none" aria-hidden>
              <rect x="14" y="14" width="52" height="46" rx="8" fill="#fff" stroke="#2a1a0a" strokeWidth="2" transform="rotate(8 40 37)" />
              <path d="M14 30h52" stroke="#2a1a0a" strokeWidth="2" transform="rotate(8 40 37)" />
              <circle cx="58" cy="52" r="11" fill="#1fb85a" stroke="#2a1a0a" strokeWidth="2" />
              <path d="m52.500 52 4 4 7-8" stroke="#fff" strokeWidth="2.600" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="mt-2.5 rounded-2xl bg-[#f5f4f6] p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#1a1916]">Quick contacts</span>
              <span className="text-[8px] font-semibold text-[#a84f00]">See all</span>
            </div>
            <div className="mt-2 flex items-start justify-between">
              {CONTACTS.map(([n, c]) => (
                <span key={n} className="flex flex-col items-center gap-1">
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[11px] font-semibold text-white" style={{ background: c }}>{n[0]}</span>
                  <span className="text-[8px] text-[#55524e]">{n}</span>
                </span>
              ))}
              <span className="flex flex-col items-center gap-1">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#e17200]"><Add size={16} color="#fff" aria-hidden /></span>
                <span className="text-[8px] text-[#55524e]">New</span>
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex h-[52px] items-center justify-around bg-[#f1f0f2] px-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1916]"><Home2 size={16} color="#fff" variant="Bold" aria-hidden /></span>
            <Chart size={17} color="#6a6a6c" aria-hidden />
            <Calendar size={17} color="#6a6a6c" aria-hidden />
            <Profile size={17} color="#6a6a6c" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- The section -------------------------------------------------------- */
export default function ProductGlance() {
  const outer = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = paths();

  return (
    <div className="rounded-[28px] bg-[#eef0f8] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,.8)] sm:rounded-[36px] sm:p-8 xl:p-10">
      {/* xl and up: the exact composition */}
      <div ref={outer} className="hidden w-full xl:block">
        <div className="relative origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})`, marginBottom: -(H * (1 - scale)) }}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0" aria-hidden>
            {d.map((p, i) => (
              <path key={i} d={p} {...stroke} />
            ))}
          </svg>
          {FEATURES.map((f) => (
            <Card
              key={f.id}
              f={f}
              className="absolute justify-start pt-[26px]"
              style={{ left: f.side === "l" ? 0 : W - CARD.w, top: ROWS[f.row], width: CARD.w, height: CARD.h }}
            />
          ))}
          <div className="absolute" style={{ left: PHONE.x, top: PHONE.y }}>
            <Phone />
          </div>
        </div>
      </div>

      {/* below xl: phone first, cards stacked */}
      <div className="xl:hidden">
        <div className="flex justify-center">
          <div style={{ width: PHONE.w }}>
            <Phone />
          </div>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {FEATURES.map((f) => (
            <li key={f.id}>
              <Card f={f} className="h-full py-6 [&_h3]:text-[22px] [&_p]:text-[15px] sm:[&_h3]:text-[24px]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
