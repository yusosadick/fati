"use client";

import { useState } from "react";
import { Verify } from "iconsax-react";
import { Btn, SectionHead } from "./ui";

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo founders and small teams getting started.",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    variant: "light",
    features: ["Up to 2 users", "500 contacts", "Basic sales pipeline", "Email support"],
  },
  {
    name: "Pro",
    tagline: "For growing teams that want automation.",
    featured: true,
    monthly: 19.99,
    yearly: 15.99,
    cta: "Get started",
    variant: "brand",
    features: ["Everything in Starter", "Unlimited contacts", "Workflow automation", "Advanced reports & forecasting", "Priority support"],
  },
  {
    name: "Enterprise",
    tagline: "For larger teams with advanced security needs.",
    monthly: 54.99,
    yearly: 43.99,
    cta: "Get started",
    variant: "light",
    features: [
      "Everything in Pro",
      "Unlimited users & projects",
      "Role-based access & audit logs",
      "SSO and custom integrations",
      "Dedicated success manager",
    ],
  },
];

const fmt = (n) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-6 pt-10 xl:pt-20">
      <SectionHead
        badge="Pricing"
        title="Start free. Upgrade when ready."
        sub={"Try it out for 14 days, totally free—no credit card needed!"}
        id="pricing-title"
        className="pt-10 xl:pt-20"
      />

      <div className="mt-8 flex items-center justify-center gap-3 whitespace-nowrap text-[15px] leading-none sm:gap-[17px] sm:text-[20px] xl:mt-[44px]">
        <span className={yearly ? "text-body" : "text-head"}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Bill yearly"
          onClick={() => setYearly((v) => !v)}
          className="relative h-[26px] w-[56px] rounded-full bg-head shadow-[inset_0_2px_3px_rgba(0,0,0,.35)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
        >
          <span
            className={`absolute left-[3px] top-[3px] h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.3)] transition-transform duration-200 ease-out ${
              yearly ? "translate-x-[30px]" : ""
            }`}
          />
        </button>
        <span className={yearly ? "text-head" : "text-body"}>Yearly (Save 20%)</span>
      </div>

      <ul className="mx-auto mt-10 grid max-w-[540px] grid-cols-1 gap-5 xl:mt-[61px] xl:max-w-none xl:grid-cols-3">
        {PLANS.map((p) => (
          <li
            key={p.name}
            className={`relative flex flex-col rounded-[24px] bg-white p-2 pb-6 ${
              p.featured
                ? "shadow-[0_0_0_2px_rgba(225,114,0,.55),0_24px_48px_-24px_rgba(225,114,0,.4)]"
                : "shadow-[0_0_0_1px_rgba(40,30,20,.05),0_1px_2px_rgba(40,30,20,.04)]"
            }`}
          >
            <div className="min-h-[104px] rounded-2xl bg-canvas px-6 pb-6 pt-6 max-[1679px]:xl:min-h-[130px]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[24px] font-medium leading-8 tracking-[-0.02em] text-head">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-brand px-3 py-1 text-[12px] font-medium leading-none text-white">Most popular</span>
                )}
              </div>
              <p className="mt-[10px] text-[14px] leading-5 text-body">{p.tagline}</p>
            </div>
            <div className="px-3">
              <p className="mt-[45px] flex flex-wrap items-baseline gap-x-2 gap-y-1 leading-none">
                <span className="text-[46px] font-medium tracking-[-0.045em] text-head">
                  {fmt(yearly ? p.yearly : p.monthly)}
                </span>
                <span className="text-[14px] text-body">{p.monthly === 0 ? "/ forever" : yearly ? "/ user / mo, billed yearly" : "/ user / month"}</span>
              </p>
              <Btn variant={p.variant} href="/dashboard" className="mt-[29px] !h-11 w-full">
                {p.cta}
              </Btn>
              <h4 className="mt-[54px] text-[19px] font-normal leading-none text-head">Includes:</h4>
              <ul className="mt-[30px] flex flex-col gap-[18px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-[6px] text-[15px] leading-5 text-body">
                    <Verify size={16} variant="Bold" color="#323234" aria-hidden className="shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
