import { Profile2User, Chart2, Setting3, Hierarchy3, Wallet3, Flash, Lock1, Heart, Eye, Link21, Layer, Lamp, Timer1, TrendUp } from "iconsax-react";
import { Btn } from "@/components/landing/ui";
import { Section, H2, Lead, Status, Reveal, Frame, IconTile } from "./shared";
import ProductGlance from "./ProductGlance";

/* ---- 5. What we do ----------------------------------------------------- */
/*
 * Availability is taken from the codebase audit: the repo contains a front-end only dashboard screen
 * (overview figures, revenue and sales charts, lead status and retention charts, schedule, lead table)
 * on sample data. There is no backend, authentication, API or database yet, so everything else is planned.
 */
const AREAS = [
  {
    icon: Profile2User,
    name: "Customer relationship management",
    text: "Keep customer information connected and easy to act on.",
    items: [
      ["Lead status and conversion overview", "preview"],
      ["Schedule overview", "preview"],
      ["Customer records and history", "planned"],
    ],
  },
  {
    icon: Chart2,
    name: "Business overview",
    text: "A central place to see how the business is doing.",
    items: [
      ["Dashboard with key figures", "preview"],
      ["Configurable business modules", "planned"],
      ["Branch-level overview", "planned"],
    ],
  },
  {
    icon: Hierarchy3,
    name: "Teams, branches and access",
    text: "Structure that matches how an organization is really set up.",
    items: [
      ["Employee and staff management", "planned"],
      ["Multi-branch management", "planned"],
      ["Roles and permissions", "planned"],
    ],
  },
  {
    icon: Wallet3,
    name: "Financial and operational insight",
    text: "Understand performance without chasing numbers.",
    items: [
      ["Revenue and sales performance charts", "preview"],
      ["Financial and operational management", "planned"],
      ["Business reporting and oversight", "planned"],
    ],
  },
  {
    icon: Setting3,
    name: "Accounts and subscriptions",
    text: "A multi-tenant foundation for owners and companies.",
    items: [
      ["Business Owner and Company accounts", "planned"],
      ["Separate business workspaces", "planned"],
      ["Subscription-based access", "planned"],
    ],
  },
];

export function WhatWeDo() {
  return (
    <Section id="what-we-do" labelledby="do-title">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="mb-3 text-[14px] font-medium text-[#a84f00]">What we do</p>
        <H2 id="do-title">One platform for running a business.</H2>
        <Lead className="mx-auto mt-4 max-w-[620px]">
          Fati is organized around five areas. We label each capability honestly: some are visible in the current interface
          preview, and the rest are planned.
        </Lead>
      </div>

      <Reveal className="mt-8 sm:mt-10">
        <ProductGlance />
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[13px] leading-5 text-body">
          Illustrative concept. The mobile experience and the capabilities shown here are planned, not yet available.
        </p>
      </Reveal>

      <ul aria-label="Legend" className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-body sm:mt-12">
        <li className="flex items-center gap-2"><Status kind="preview" /> shown in the interface preview</li>
        <li className="flex items-center gap-2"><Status kind="planned" /> not yet available</li>
      </ul>

      <ul className="mt-5 flex flex-col gap-3 sm:gap-4">
        {AREAS.map((a, i) => (
          <Reveal
            as="li"
            key={a.name}
            delay={i * 40}
            className="grid grid-cols-1 gap-5 rounded-[22px] bg-white p-5 shadow-[0_0_0_1px_rgba(40,30,20,.05),0_20px_40px_-34px_rgba(40,30,20,.3)] sm:rounded-[26px] sm:p-7 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:items-center lg:gap-10"
          >
            <div className="flex items-start gap-4">
              <IconTile icon={a.icon} />
              <div>
                <h3 className="font-display text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[21px]">{a.name}</h3>
                <p className="mt-1 t-body text-body">{a.text}</p>
              </div>
            </div>
            <ul className="flex flex-col divide-y divide-black/[.06] rounded-2xl bg-[#f8f5f0] px-4">
              {a.items.map(([label, kind]) => (
                <li key={label} className="flex items-center justify-between gap-3 py-3">
                  <span className="min-w-0 text-[14.5px] leading-snug text-head sm:text-[15.5px]">{label}</span>
                  <Status kind={kind} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
      <p className="mx-auto mt-5 max-w-[720px] text-center text-[13px] leading-5 text-body">
        &ldquo;In preview&rdquo; means the screen exists in the current interface using sample data. It does not mean live data,
        accounts or billing are available yet.
      </p>
    </Section>
  );
}

/* ---- 7. Values --------------------------------------------------------- */
const VALUES = [
  { icon: Lamp, name: "Innovation", text: "We look for better ways to solve everyday business problems." },
  { icon: Timer1, name: "Reliability", text: "Business tools should be dependable, so we build with consistency in mind." },
  { icon: Layer, name: "Simplicity", text: "Powerful does not have to mean complicated. We aim for clear, approachable software." },
  { icon: Eye, name: "Transparency", text: "We aim to be straightforward about what the product does today and what is still planned." },
  { icon: Lock1, name: "Security", text: "Protecting business information is a design priority from the start." },
  { icon: Heart, name: "Customer success", text: "Our work is only worthwhile when it helps customers run their businesses better." },
  { icon: TrendUp, name: "Sustainable growth", text: "We favor steady, well-built progress over shortcuts, for us and for our customers." },
];

export function Values() {
  return (
    <Section id="values" labelledby="values-title">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="mb-3 text-[14px] font-medium text-[#a84f00]">Our values</p>
        <H2 id="values-title">What guides how we build.</H2>
      </div>
      <dl className="mt-8 grid grid-cols-1 gap-x-10 sm:mt-10 sm:grid-cols-2 lg:gap-x-16">
        {VALUES.map((v, i) => (
          <Reveal
            key={v.name}
            delay={(i % 2) * 70}
            className={`flex gap-4 border-t border-black/10 py-6 sm:gap-5 sm:py-7 ${i === VALUES.length - 1 ? "sm:col-span-2" : ""}`}
          >
            <IconTile icon={v.icon} />
            <div className="min-w-0">
              <dt className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.025em] text-ink sm:text-[24px]">{v.name}</dt>
              <dd className="mt-1.5 t-body text-body">{v.text}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
      <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-5 text-body">Draft company messaging, pending approval by FATI ENTERPRISE.</p>
    </Section>
  );
}

/* ---- 8. Why FATI ------------------------------------------------------- */
const OUTCOMES = [
  ["Clearer organization", "Customers, tasks and teams in one place, instead of scattered across tools."],
  ["Better oversight", "Owners and managers can see what is happening without asking around."],
  ["Less fragmentation", "Fewer disconnected systems to maintain and keep in sync."],
  ["Easier collaboration", "People share the same information, with access suited to their role."],
];

function Tick() {
  return (
    <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#43c48a] to-[#1f9d6b] shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_16px_-8px_rgba(31,157,107,.55)]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3.5 8.5 3 3 6-7" />
      </svg>
    </span>
  );
}

export function WhyFati() {
  return (
    <Section id="why-fati" labelledby="why-title">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
        <Reveal>
          <p className="mb-3 text-[14px] font-medium text-[#a84f00]">Why FATI</p>
          <H2 id="why-title">A connected, scalable ecosystem beats a pile of tools.</H2>
          <Lead className="mt-4 max-w-[520px]">
            When customers, teams and operations live in one workspace, the practical benefits add up. That is the idea
            behind Fati.
          </Lead>
          <p className="mt-5 max-w-[520px] text-[13px] leading-5 text-body">
            Results depend on how each business uses the platform. We do not promise specific performance or financial
            outcomes.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Frame>
            <ul className="flex flex-col gap-2.5 rounded-[22px] bg-white p-4 shadow-[0_0_0_1px_rgba(120,110,160,.08)] sm:rounded-[26px] sm:gap-3 sm:p-6">
              {OUTCOMES.map(([t, d]) => (
                <li key={t} className="flex items-start gap-4 rounded-2xl bg-[#f8f5f0] p-4">
                  <Tick />
                  <div>
                    <p className="font-display text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[19px]">{t}</p>
                    <p className="mt-1 t-body text-body">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Frame>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---- 9. Future --------------------------------------------------------- */
/* Direction only. No roadmap, dates or expansion commitments are implied. Pending approval. */
export function Future() {
  return (
    <Section id="future" labelledby="future-title">
      <Reveal className="relative overflow-hidden rounded-[28px] bg-white px-5 py-10 text-center shadow-[0_0_0_1px_rgba(40,30,20,.05),0_30px_60px_-44px_rgba(225,114,0,.45)] sm:rounded-[36px] sm:px-10 sm:py-14 lg:py-16">
        <svg aria-hidden viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full" fill="none">
          <defs>
            <linearGradient id="future-arc" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#f6c895" stopOpacity="0" />
              <stop offset=".5" stopColor="#f2ae66" />
              <stop offset="1" stopColor="#f6c895" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="future-glow" cx=".5" cy="1" r=".7">
              <stop offset="0" stopColor="#fde6d3" />
              <stop offset="1" stopColor="#fde6d3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#future-glow)" />
          <circle cx="600" cy="1020" r="720" stroke="url(#future-arc)" strokeWidth="2" />
        </svg>
        <div className="relative">
          <p className="mb-3 text-[14px] font-medium text-[#a84f00]">Our future</p>
          <H2 id="future-title" className="mx-auto max-w-[760px]">Accessible, scalable solutions for modern enterprises.</H2>
          <Lead className="mx-auto mt-4 max-w-[640px]">
            We are developing Fati with a long-term goal: to give entrepreneurs and organizations of every size practical
            digital tools that grow with them. We will share product updates as new capabilities become available.
          </Lead>
          <ul className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-3 text-left sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {[
              [Flash, "Accessible", "Tools that owners can pick up without a specialist."],
              [TrendUp, "Scalable", "Foundations meant to support growth from one person to many."],
              [Link21, "Connected", "Business information that works together, not apart."],
            ].map(([Icon, t, d]) => (
              <li key={t} className="flex items-start gap-3.5 rounded-2xl bg-[#f8f5f0] p-4 shadow-[0_0_0_1px_rgba(40,30,20,.05)]">
                <IconTile icon={Icon} tone="white" size={20} />
                <div>
                  <p className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">{t}</p>
                  <p className="mt-0.5 text-[14px] leading-[1.5] text-body">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-5 text-body">Draft company messaging, pending approval by FATI ENTERPRISE.</p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---- 10. Call to action ------------------------------------------------ */
export function AboutCta() {
  return (
    <Section id="get-started" labelledby="cta-title" className="pb-12 sm:pb-14 xl:pb-16">
      <Reveal className="relative overflow-hidden rounded-[28px] bg-cream px-5 py-10 text-center shadow-[0_0_0_1px_rgba(225,114,0,.12)] sm:rounded-[36px] sm:px-10 sm:py-14">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-28 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(247,170,92,.45),rgba(247,170,92,0))]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,.9),rgba(255,255,255,0))]" />
        <div className="relative">
          <H2 id="cta-title" className="mx-auto max-w-[680px]">See what we are building.</H2>
          <Lead className="mx-auto mt-4 max-w-[560px] !text-head/80">
            Explore the Fati interface preview, or get in touch to learn more about FATI ENTERPRISE.
          </Lead>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4">
            <Btn variant="brand" href="/dashboard" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
              Explore the platform
            </Btn>
            <Btn variant="light" href="/#company" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
              Contact us
            </Btn>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
