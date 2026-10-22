"use client";

import { useId, useState } from "react";
import { BRAND } from "./config";

const ITEMS = [
  {
    q: "Is my data secure?",
    a: "Absolutely. Customer data is encrypted in transit and at rest, access is controlled by roles, and we never sell or share your information. Our infrastructure runs on secure, industry-leading platforms with regular security audits and real-time monitoring to keep your records protected.",
  },
  {
    q: "How does the free trial work?",
    a: "Start on any plan for 14 days with no credit card. You get full access to every feature, and we remind you before the trial ends. If you do nothing, you simply move to the free Starter plan.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. Upgrade or downgrade at any time from your billing settings. Changes apply from your next billing date, and any unused time on a yearly plan is credited to your account.",
  },
  {
    q: "Do you offer support for onboarding?",
    a: `Every plan includes guided setup and help importing your contacts. Pro adds priority support, and Enterprise includes a dedicated success manager to get your whole team running on ${BRAND}.`,
  },
  {
    q: "Does the platform integrate with other tools?",
    a: "Connect your email, calendar, billing and chat tools so contacts, deals and conversations stay in sync automatically, without copy-pasting between apps.",
  },
  {
    q: "What happens if I cancel my subscription?",
    a: "You can cancel at any time from settings. Your workspace stays available until the end of the billing period, and you can export all of your data as CSV whenever you like.",
  },
];

/** The square toggle: a glowing brand gradient when closed, a quiet white tile when open. */
function Toggle({ open }) {
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-[transform,box-shadow] duration-200 ease-out group-active:scale-95 sm:h-[42px] sm:w-[42px] ${
        open
          ? "bg-white shadow-[0_0_0_1px_rgba(120,110,160,.14),0_2px_6px_-2px_rgba(40,30,20,.12)]"
          : "bg-gradient-to-br from-[#f8b06a] via-[#ee8a2c] to-[#e17200] shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_12px_22px_-8px_rgba(225,114,0,.6)] group-hover:-translate-y-px group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_16px_26px_-8px_rgba(225,114,0,.7)]"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {open ? (
          <path d="M3.2 9.2h7.6L7 4.4 3.2 9.2Z" fill="#e17200" stroke="#e17200" strokeWidth="1.4" strokeLinejoin="round" />
        ) : (
          <path d="M3.2 4.8h7.6L7 9.6 3.2 4.8Z" fill="#fff" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
        )}
      </svg>
    </span>
  );
}

function Item({ q, a, open, onToggle, id }) {
  return (
    <div
      className={`rounded-[22px] transition-[background-color,box-shadow] duration-300 ease-out ${
        open
          ? "bg-white shadow-[0_0_0_1px_rgba(120,110,160,.09),0_18px_36px_-22px_rgba(40,30,20,.22)]"
          : "bg-transparent shadow-[0_0_0_1px_rgba(120,110,160,0)]"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-5 rounded-[22px] px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-6 sm:py-[18px]"
        >
          <span className="font-display text-[17px] font-medium leading-[1.3] tracking-[-0.02em] text-ink sm:text-[22px] xl:text-[25px]">
            {q}
          </span>
          <Toggle open={open} />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p
            className={`max-w-[780px] px-4 pb-5 text-[14.5px] leading-[1.7] text-body transition-opacity duration-300 sm:px-6 sm:pb-6 sm:text-[17px] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-6 pt-12 sm:pt-14 lg:pt-16 xl:pt-20">
      <div className="rounded-[24px] bg-white px-4 pb-10 pt-12 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)] xl:pb-[96px] xl:pt-[88px]">
        <header className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <h2
            id="faq-title"
            className="text-balance text-[28px] font-semibold leading-[1.08] tracking-[-0.028em] text-ink sm:text-[40px] lg:text-[46px] xl:text-[56px]"
          >
            Frequently asked questions
          </h2>
          <p className="mt-3 max-w-[560px] text-pretty t-lead text-body sm:mt-4">
            Everything you need to know about {BRAND}: product, pricing, features and support, all in one place.
          </p>
        </header>

        <div className="relative mx-auto mt-10 max-w-[940px] rounded-[30px] bg-[linear-gradient(180deg,#f4f4fa_0%,#f9f6f4_52%,#fff1e4_100%)] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,.9),0_1px_2px_rgba(40,30,20,.03)] sm:p-4 xl:mt-[64px]">
          <div className="flex flex-col gap-1 sm:gap-2">
            {ITEMS.map((it, i) => (
              <Item
                key={it.q}
                id={`${uid}-${i}`}
                q={it.q}
                a={it.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
