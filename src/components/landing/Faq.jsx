"use client";

import { useId, useState } from "react";
import { BRAND } from "./config";
import { SectionHead } from "./ui";

const ITEMS = [
  {
    q: `What is ${BRAND}?`,
    a: `${BRAND} is a CRM and business management platform for SaaS teams. It brings your leads, deals, customers, projects, calendar and team inbox into one workspace, with live dashboards on top.`,
  },
  {
    q: "Can I import my existing contacts and data?",
    a: "Yes. Import contacts and deals from CSV, Google Contacts or Outlook in minutes, and we map the fields for you.",
  },
  {
    q: "Is my customer data secure?",
    a: "Customer data is encrypted in transit and at rest, access is controlled by roles, and we never sell or share your information.",
  },
  {
    q: "Does it connect to the tools I already use?",
    a: "Connect your email, calendar, billing and chat tools so records stay in sync automatically, without copy-pasting between apps.",
  },
  {
    q: "Is there a free plan, and does it scale?",
    a: "The Starter plan is free forever and paid plans include a 14-day trial. Enterprise adds unlimited users, role-based access, audit logs and priority support.",
  },
];

function Item({ q, a, open, onToggle, id }) {
  return (
    <div
      className={
        open
          ? "rounded-[20px] border border-black/[.05] bg-[#f8f8f8]"
          : "border-b border-black/[.07]"
      }
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={onToggle}
          className={`flex w-full items-center justify-between gap-6 text-left text-head transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
            open
              ? "rounded-[20px] px-5 pb-[25px] pt-[30px] text-[24px] sm:px-[30px] font-[450] leading-9 sm:leading-[46px] tracking-[-0.02em] sm:text-[35px]"
              : "min-h-[119px] items-center rounded-xl px-5 pt-5 text-[19px] sm:px-[30px] font-[450] leading-8 tracking-[-0.015em] hover:text-brand sm:text-[29px]"
          }`}
        >
          <span>{q}</span>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#323234" strokeWidth="1.4" strokeLinecap="round">
              <path d="M3 12h18" />
              {!open && <path d="M12 3v18" />}
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] px-5 pb-[30px] pt-[19px] text-[16px] sm:px-[30px] leading-8 text-body">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section aria-labelledby="faq-title" className="pt-20 xl:pt-40">
      <div className="rounded-[24px] bg-white px-5 pb-12 pt-12 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)] xl:pb-[80px] xl:pt-[82px]">
        <SectionHead
          badge="FAQ"
          title="Got questions? We’ve got answers"
          sub="Quick answers about pricing, data, integrations, and getting started."
          id="faq-title"
          titleClass="!text-[28px] sm:!text-[40px] xl:!text-[44px]"
        />
        <div className="mt-[56px]">
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
    </section>
  );
}
