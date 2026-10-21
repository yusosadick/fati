import { DocumentUpload } from "iconsax-react";
import { SectionHead } from "./ui";
import { BRAND } from "./config";

function Tag({ children }) {
  return (
    <span className="inline-flex h-7 w-fit items-center rounded-full bg-[#f4f4f5] px-[10px] text-[13px] leading-none text-head shadow-[inset_0_0_0_1px_rgba(255,255,255,.9),0_2px_6px_-1px_rgba(40,30,20,.1)]">
      {children}
    </span>
  );
}

function Card({ tag, title, children }) {
  return (
    <li className="flex flex-col rounded-[20px] bg-white p-4 shadow-[0_0_0_1px_rgba(40,30,20,.015)]">
      <Tag>{tag}</Tag>
      <h3 className="mt-[12px] text-[21px] font-[450] leading-8 tracking-[-0.02em] text-head">{title}</h3>
      <div className="mt-[31px] flex-1">{children}</div>
    </li>
  );
}

/* ---- 1. Import ------------------------------------------------------- */
const SOURCES = [
  <span key="g" className="text-[13px] font-semibold tracking-[-0.02em] text-[#d93025]">Gmail</span>,
  <span key="o" className="text-[13px] font-semibold tracking-[-0.02em] text-[#0a64c8]">Outlook</span>,
  <span key="c" className="text-[13px] font-semibold tracking-[-0.02em] text-[#1fa070]">CSV</span>,
];

function ImportCard() {
  return (
    <div className="well p-[5px]">
      <div className="rounded-xl bg-white shadow-[0_1px_2px_rgba(40,30,20,.04)]">
        <div className="flex h-[48px] items-center justify-between border-b border-black/[.06] px-4">
          <span className="text-[19px] leading-none tracking-[-0.02em] text-head">Import contacts</span>
          <DocumentUpload size={18} variant="Bold" color="#6b6a69" aria-hidden />
        </div>
        <div className="px-4 pb-[14px] pt-[16px]">
          <div className="flex gap-[6px]">
            {SOURCES.map((el, i) => (
              <span
                key={i}
                className="flex h-[34px] flex-1 items-center justify-center rounded-lg bg-white shadow-[0_0_0_1px_rgba(40,30,20,.05),0_2px_5px_-2px_rgba(40,30,20,.1)]"
              >
                {el}
              </span>
            ))}
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[14px] leading-none text-body">
            <span>Importing 1,284 contacts</span>
            <span className="text-head">72%</span>
          </div>
          <div className="mt-[10px] h-[10px] overflow-hidden rounded-full bg-fog">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-b from-[#f6b06a] to-brand" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- 2. Pipeline ------------------------------------------------------ */
const DEALS = [
  { tag: "Won", name: "Acme Corp", amount: "$12,400", tagCls: "bg-[#e6f6ee] text-[#1a9b66]", amtCls: "text-[#1fa070]" },
  { tag: "Proposal", name: "Northwind", amount: "$8,200", tagCls: "bg-[#fff1da] text-[#d9831a]", amtCls: "text-head" },
  { tag: "New", name: "Globex", amount: "$1,900", tagCls: "bg-[#fdeedd] text-brand", amtCls: "text-head" },
];

function PipelineCard() {
  return (
    <div className="well flex flex-col gap-[11px] p-[14px]">
      {DEALS.map((t) => (
        <div
          key={t.name}
          className="flex h-[40px] items-center gap-[7px] rounded-[10px] bg-white pl-[7px] pr-[14px] text-[13px] shadow-[0_0_0_1px_rgba(40,30,20,.03),0_2px_6px_-3px_rgba(40,30,20,.12)]"
        >
          <span className={`flex h-[26px] items-center rounded-full px-[9px] text-[13px] leading-none ${t.tagCls}`}>{t.tag}</span>
          <span className="truncate text-body">{t.name}</span>
          <span className={`ml-auto ${t.amtCls}`}>{t.amount}</span>
        </div>
      ))}
    </div>
  );
}

/* ---- 3. Insights ----------------------------------------------------- */
const PTS = [
  [0, 45], [13.5, 35], [33.5, 51], [50, 42.5], [67, 16], [86, 60], [106, 34],
  [123.5, 44], [158.5, 6], [178.5, 29], [198.5, 41], [218.5, 21], [233.5, 29], [243.5, 12.5],
];

// Catmull-Rom -> cubic bezier so the forecast reads as one smooth curve.
function smooth(points) {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

function InsightCard() {
  const line = smooth(PTS);
  return (
    <div className="well p-[5px]">
      <div className="relative h-[160px] overflow-hidden rounded-xl bg-white">
        <span className="absolute left-3 top-3 z-10 flex h-[26px] items-center rounded-full bg-[#fdeded] px-[10px] text-[12px] leading-none text-[#d0262f]">
          3 accounts at churn risk
        </span>
        <svg viewBox="0 0 244 112" className="absolute inset-x-[11px] bottom-[2px] h-[112px] w-[calc(100%-22px)]" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="g-over" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e0373f" stopOpacity=".26" />
              <stop offset="1" stopColor="#e0373f" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L243.5 112 L0 112 Z`} fill="url(#g-over)" />
          <path d={line} fill="none" stroke="#d0262f" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}

function TrendArrow() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="#55524e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12 6 7l3 3 7-7M11.500 2.500H16V7" />
      <path d="M1 7.500 4 5" opacity=".5" />
    </svg>
  );
}

/* ---- 4. Grow --------------------------------------------------------- */
const BARS = [28.5, 39, 55, 66.5, 77.5, 93.5];

function OptimizeCard() {
  return (
    <div className="well p-[5px]">
      <div className="flex h-[160px] flex-col overflow-hidden rounded-xl bg-white">
        <div className="flex h-[44px] shrink-0 items-center justify-between border-b border-black/[.06] px-3">
          <span className="text-[15px] leading-none tracking-[-0.01em] text-head">Win rate up 18%</span>
          <TrendArrow />
        </div>
        <div className="relative flex-1 px-3 pt-[10px]">
          <span className="inline-flex h-[21px] items-center rounded-full bg-[#fdeedd] px-[10px] text-[11px] leading-none text-brand">
            Pipeline added: +$24k/mo
          </span>
          <div className="absolute inset-x-3 bottom-[5px] flex items-end justify-between">
            {BARS.map((h, i) => (
              <span
                key={h}
                className={`w-[33px] rounded-[8px] ${
                  i === BARS.length - 1 ? "bg-gradient-to-b from-[#f6b06a] to-brand" : "bg-[#fdeedd]"
                }`}
                style={{ height: h }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-6 pt-12 xl:pt-[84px]">
      <SectionHead
        badge={`How ${BRAND} works`}
        title="From first lead to loyal customer"
        sub="Import your contacts, work your pipeline, and let Fati handle the follow-ups."
        id="how-title"
        className="pt-10 xl:pt-[78px]"
      />
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 3xl:mt-[60px] 3xl:grid-cols-4">
        <Card tag="Quick setup" title="Import your contacts"><ImportCard /></Card>
        <Card tag="Full visibility" title="Track every deal"><PipelineCard /></Card>
        <Card tag="Smart insights" title="Spot risks and wins early"><InsightCard /></Card>
        <Card tag="Faster growth" title="Hit your targets"><OptimizeCard /></Card>
      </ul>
    </section>
  );
}
