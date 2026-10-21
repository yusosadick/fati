"use client";

import { useState } from "react";
import { BRAND } from "./config";
import { SectionHead } from "./ui";
import { LOGOS, Wordmark } from "./logos";

// Sample customer stories (placeholder copy, fictional people and companies).
const STORIES = [
  {
    id: "boltshift",
    quote: `\u201C${BRAND} gave us one view of every lead and deal. Our reps stopped living in spreadsheets, and we closed the quarter two weeks early.\u201D`,
    name: "Priya Nair",
    role: "Head of Sales, Boltshift",
    stats: [["+32%", "Win rate"], ["10+ hrs", "Saved per rep, weekly"]],
  },
  {
    id: "lightbox",
    quote: `\u201CRenewals used to surprise us. With ${BRAND}\u2019s customer timeline and churn alerts, we catch at-risk accounts early and keep them.\u201D`,
    name: "Daniel Okafor",
    role: "Founder, Lightbox",
    stats: [["\u221228%", "Customer churn"], ["2\u00D7", "Faster onboarding"]],
  },
  {
    id: "featherdev",
    quote: `\u201CProjects, customers and invoices finally live in one workspace. My team spends its time delivering, not chasing updates.\u201D`,
    name: "Maya Chen",
    role: "COO, FeatherDev",
    stats: [["\u221240%", "Admin time"], ["15+ hrs", "Saved per week"]],
  },
  {
    id: "orbitly",
    quote: `\u201CSupport, sales and success all see the same customer record now. Handoffs are smooth, and our customers notice.\u201D`,
    name: "Tom Becker",
    role: "VP Customer Success, Orbitly",
    stats: [["+21%", "Customer NPS"], ["\u221235%", "Response time"]],
  },
].map((s, i) => ({ ...s, logo: LOGOS[i] }));

function LogoChip({ logo, compact }) {
  const scale = compact ? "scale-[.72]" : "scale-100";
  return (
    <span className={`flex origin-center items-center gap-[7px] ${scale}`}>
      {logo.icon}
      <Wordmark className="text-[22px]">{logo.name}</Wordmark>
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const s = STORIES[active];

  return (
    <section id="testimonial" aria-labelledby="proof-title" className="scroll-mt-6 pt-10 xl:pt-20">
      <SectionHead
        badge="Customer stories"
        title="Loved by sales and ops teams"
        sub={`See how teams use ${BRAND} to close deals faster and keep customers longer.`}
        id="proof-title"
        className="pt-10 xl:pt-20"
      />

      <div role="tablist" aria-label="Customer stories" className="mt-[46px] flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        {STORIES.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls="story-panel"
            aria-label={t.logo.name}
            onClick={() => setActive(i)}
            className={`flex h-[50px] w-[calc(50%-6px)] items-center justify-center overflow-hidden rounded-[10px] bg-white transition-[box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-[170px] ${
              active === i
                ? "shadow-[0_0_0_2px_var(--color-brand),0_6px_14px_-8px_rgba(225,114,0,.55)]"
                : "shadow-[0_0_0_1px_rgba(40,30,20,.06),0_2px_6px_-2px_rgba(40,30,20,.1)] hover:-translate-y-px"
            }`}
          >
            <LogoChip logo={t.logo} compact />
          </button>
        ))}
      </div>

      <div
        id="story-panel"
        role="tabpanel"
        aria-labelledby={`tab-${s.id}`}
        className="mx-auto mt-10 grid max-w-[1080px] grid-cols-1 gap-6 rounded-[24px] bg-white p-4 shadow-[0_0_0_1px_rgba(40,30,20,.015)] sm:p-6 lg:grid-cols-[minmax(0,1fr)_268px] xl:mt-[60px]"
      >
        <figure className="flex min-h-[352px] flex-col justify-between rounded-[20px] bg-canvas p-6">
          <blockquote key={s.id} className="pop-in text-[19px] leading-[34px] tracking-[-0.005em] text-head sm:text-[22px] sm:leading-[38px]">
            {s.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-4">
            <div className="flex items-center gap-[14px]">
              <span aria-hidden className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-cream text-[20px] font-medium text-brand">
                {s.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <div>
                <p className="text-[19px] leading-7 tracking-[-0.01em] text-head sm:text-[23px]">{s.name}</p>
                <p className="text-[16px] leading-6 text-body">{s.role}</p>
              </div>
            </div>
            <div aria-hidden className="shrink-0 origin-right scale-[.8] sm:scale-100">
              <LogoChip logo={s.logo} />
            </div>
          </figcaption>
        </figure>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
          {s.stats.map(([v, l]) => (
            <div key={l} className="flex min-h-[164px] flex-col items-center justify-center rounded-[20px] bg-canvas px-4 text-center">
              <p className="whitespace-nowrap text-[28px] font-medium leading-[1.1] tracking-[-0.035em] text-head sm:text-[42px]">{v}</p>
              <p className="mt-3 text-[15px] leading-5 text-body sm:text-[20px] sm:leading-6">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
