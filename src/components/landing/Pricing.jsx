"use client";

import { useState } from "react";
import { Verify } from "iconsax-react";
import { Btn, SectionHead } from "./ui";

/*
 * Pricing is not decided. Amounts, billing terms and plan limits were removed on purpose: nothing
 * here may be read as an offer. Feature lists reflect planned scope only. Needs owner approval.
 */
const PLANS = [
  {
    name: "Starter",
    tagline: "For solo founders and small teams getting started.",
    cta: "Explore the preview",
    variant: "light",
    features: ["Business overview", "Lead tracking", "Schedule overview", "Basic reporting"],
  },
  {
    name: "Pro",
    tagline: "For growing teams needing structure.",
    featured: true,
    cta: "Explore the preview",
    variant: "brand",
    features: ["Everything in Starter", "Staff management", "Roles and permissions", "Reporting and oversight tools", "Configurable modules"],
  },
  {
    name: "Enterprise",
    tagline: "For larger teams with branches and departments.",
    cta: "Explore the preview",
    variant: "light",
    features: ["Everything in Pro", "Multi-branch management", "Company-wide oversight tools", "Departments and accounts", "Financial and operations tools"],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-6 pt-12 sm:pt-14 lg:pt-16 xl:pt-20">
      <SectionHead
        badge="Pricing"
        title="Plans built to grow with you."
        sub={"Pricing is still being finalized. Details will be shared before launch."}
        id="pricing-title"
      />

      <div className="mt-6 flex items-center justify-center gap-3 whitespace-nowrap text-[15px] leading-none sm:gap-[17px] sm:text-[20px] xl:mt-8">
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
        <span className={yearly ? "text-head" : "text-body"}>Yearly</span>
      </div>

      <ul className="mx-auto mt-6 grid max-w-[460px] grid-cols-1 gap-4 md:max-w-none md:grid-cols-3 md:gap-3 lg:gap-5 xl:mt-10">
        {PLANS.map((p) => (
          <li
            key={p.name}
            className={`relative flex flex-col rounded-[24px] bg-white p-2 pb-6 ${
              p.featured
                ? "shadow-[0_0_0_2px_rgba(225,114,0,.55),0_24px_48px_-24px_rgba(225,114,0,.4)]"
                : "shadow-[0_0_0_1px_rgba(40,30,20,.05),0_1px_2px_rgba(40,30,20,.04)]"
            }`}
          >
            <div className="min-h-[104px] rounded-2xl bg-canvas px-4 pb-5 pt-5 lg:px-6 lg:pb-6 lg:pt-6 max-[1679px]:xl:min-h-[130px]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.03em] text-ink sm:text-[24px]">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-brand px-3 py-1 text-[12px] font-medium leading-none text-white">Draft</span>
                )}
              </div>
              <p className="mt-[10px] text-[15px] leading-[1.55] text-body">{p.tagline}</p>
            </div>
            <div className="px-2 lg:px-3">
              <p className="mt-8 flex flex-wrap sm:mt-[45px] items-baseline gap-x-2 gap-y-1 leading-none">
                <span className="font-display t-price font-semibold tracking-[-0.035em] text-ink">
                  TBA
                </span>
                <span className="text-[14px] text-body">{yearly ? "yearly pricing not final" : "monthly pricing not final"}</span>
              </p>
              <Btn variant={p.variant} href="/dashboard" className="mt-6 !h-11 w-full lg:mt-[29px]">
                {p.cta}
              </Btn>
              <h4 className="mt-10 t-lead font-semibold leading-none text-ink lg:mt-[54px]">Planned to include:</h4>
              <ul className="mt-[30px] flex flex-col gap-[18px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-[8px] text-[16px] leading-[1.4] text-body">
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
