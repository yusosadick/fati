"use client";

import { useEffect, useRef, useState } from "react";
import { Star1, Warning2, Heart, MessageText1, TrendUp } from "iconsax-react";

// Design canvas. Everything inside is laid out in these pixels and scaled to fit.
const W = 620;
const H = 540;
const NODE = { x: 108, y: 225, size: 44 };
const CX = NODE.x + NODE.size / 2; // trunk x
const CY = NODE.y + NODE.size / 2;

const PILLS = [
  { id: "score", label: "Lead scoring", icon: Star1, x: 72, y: 48, path: [[CX, CY], [CX, 120], [178, 120], [178, 92]] },
  { id: "risk", label: "Deal risk alerts", icon: Warning2, x: 277, y: 123, path: [[CX, CY], [CX, 190], [200, 190], [200, 145], [277, 145]] },
  { id: "health", label: "Customer health", icon: Heart, x: 269, y: 225, path: [[NODE.x + NODE.size, CY], [269, CY]] },
  { id: "follow", label: "Follow-up reminders", icon: MessageText1, x: 339, y: 320, path: [[CX, CY], [CX, 300], [200, 300], [200, 342], [339, 342]] },
  { id: "forecast", label: "Pipeline forecast", icon: TrendUp, x: 51, y: 380, path: [[CX, CY], [CX, 380]] },
];

/** Orthogonal polyline with rounded corners. */
function rounded(pts, r = 9) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    const l1 = Math.hypot(x1 - x0, y1 - y0);
    const l2 = Math.hypot(x2 - x1, y2 - y1);
    const rr = Math.min(r, l1 / 2, l2 / 2);
    d += ` L${x1 - ((x1 - x0) / l1) * rr} ${y1 - ((y1 - y0) / l1) * rr}`;
    d += ` Q${x1} ${y1} ${x1 + ((x2 - x1) / l2) * rr} ${y1 + ((y2 - y1) / l2) * rr}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path d="M8.5 20V6.500h9.200M8.500 12.800h6.800" stroke="#fff" strokeWidth="2.800" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Skeleton({ w }) {
  return <span className="block h-[6px] rounded-full bg-[#eeebe7]" style={{ width: w }} />;
}

/**
 * The workspace hub diagram. Decorative (aria-hidden), the same information lives in the
 * section copy. Connectors draw in once when the card scrolls into view, and
 * hovering a pill lights its connector.
 */
export default function HubFlow() {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
    } else {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      io.observe(el);
    }
    return () => {
      ro.disconnect();
      io?.disconnect();
    };
  }, []);

  return (
    <div
      role="img"
      aria-label="Diagram: the Fati workspace at the centre, connected to lead scoring, deal risk alerts, customer health, follow-up reminders and pipeline forecast."
      className="rounded-[32px] bg-[linear-gradient(180deg,#eceffb_0%,#f6f2f3_48%,#fde4d0_100%)] p-3 shadow-[0_30px_60px_-36px_rgba(225,114,0,.35),inset_0_0_0_1px_rgba(255,255,255,.85)] sm:p-[14px]"
    >
      <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_0_0_1px_rgba(120,110,160,.08)]">
        <div ref={wrapRef} className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
          <div
            aria-hidden
            className="absolute left-0 top-0 origin-top-left"
            style={{ width: W, height: H, transform: `scale(${scale})` }}
          >
            {/* connectors */}
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" className="absolute inset-0">
              {PILLS.map((p, i) => (
                <path
                  key={p.id}
                  d={rounded(p.path)}
                  pathLength="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke={active === p.id ? "#e8802a" : "#e3e0e8"}
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: shown ? 0 : 1,
                    transition: `stroke-dashoffset 900ms cubic-bezier(.23,1,.32,1) ${200 + i * 110}ms, stroke 240ms ease-out`,
                  }}
                />
              ))}
            </svg>

            {/* hub */}
            <div
              className="pointer-events-none absolute -left-[40px] top-[145px] h-[210px] w-[210px] rounded-full bg-[radial-gradient(closest-side,rgba(247,170,92,.55),rgba(247,170,92,0))] hub-glow"
            />
            <div
              className="absolute z-10 flex items-center justify-center rounded-[13px] bg-gradient-to-br from-[#f9b06a] via-[#ee8a2c] to-[#e17200] shadow-[inset_0_1px_0_rgba(255,255,255,.4),0_14px_24px_-8px_rgba(225,114,0,.65)]"
              style={{ left: NODE.x, top: NODE.y, width: NODE.size, height: NODE.size }}
            >
              <Mark />
            </div>

            {/* pills */}
            {PILLS.map((p, i) => {
              const Icon = p.icon;
              const on = active === p.id;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`absolute flex h-11 items-center gap-[10px] whitespace-nowrap rounded-xl bg-white pl-3 pr-[18px] text-[17px] font-[480] tracking-[-0.012em] text-head transition-[box-shadow,transform,opacity] duration-300 ease-out ${
                    on
                      ? "-translate-y-px shadow-[0_0_0_1px_rgba(232,128,42,.45),0_14px_26px_-12px_rgba(225,114,0,.45)]"
                      : "shadow-[0_0_0_1px_rgba(40,30,20,.07),0_8px_16px_-12px_rgba(40,30,20,.22)]"
                  } ${shown ? "opacity-100" : "translate-y-1 opacity-0"}`}
                  style={{ left: p.x, top: p.y, transitionDelay: shown ? `${450 + i * 110}ms, 0ms, ${450 + i * 110}ms` : "0ms" }}
                >
                  <Icon size={21} variant="Bold" color="#ec8326" aria-hidden />
                  {p.label}
                </div>
              );
            })}

            {/* activity card, fades out at the bottom edge */}
            <div
              className="absolute left-[338px] top-[408px] w-[200px] [mask-image:linear-gradient(to_bottom,#000_30%,transparent_100%)]"
            >
              <div className="rounded-2xl bg-white p-3 shadow-[0_0_0_1px_rgba(40,30,20,.06),0_12px_24px_-16px_rgba(40,30,20,.3)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#f7c590] to-[#e8802a] text-[15px] font-medium text-white">
                    AM
                  </span>
                  <div className="flex flex-1 flex-col gap-[7px]">
                    <Skeleton w="100%" />
                    <Skeleton w="78%" />
                    <Skeleton w="56%" />
                  </div>
                </div>
              </div>
              <div className="mt-3 rounded-2xl bg-white p-3 shadow-[0_0_0_1px_rgba(40,30,20,.05)]">
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 shrink-0 rounded-[11px] bg-[#eef0fb]" />
                  <div className="flex flex-1 flex-col gap-[7px]">
                    <Skeleton w="100%" />
                    <Skeleton w="70%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
