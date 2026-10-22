"use client";

import { useRef, useState } from "react";
import { Section, H2, Lead, Frame } from "./shared";

const GROUPS = [
  {
    id: "entrepreneurs",
    name: "Entrepreneurs",
    account: "Business Owner",
    needs: ["Getting organized quickly", "Keeping track of early customers", "Simple tools without heavy setup"],
    help: "A focused workspace that grows with the business, without the setup burden of heavyweight enterprise tools.",
  },
  {
    id: "owners",
    name: "Independent business owners",
    account: "Business Owner",
    needs: ["Running daily operations alone or with a small crew", "Seeing customers and activity at a glance", "Spending less time on administration"],
    help: "Practical tools for organizing operations, managing customers, and keeping an eye on the whole business.",
  },
  {
    id: "smb",
    name: "Small and medium-sized businesses",
    account: "Business Owner or Company",
    needs: ["Several people sharing one view of customers", "Clear responsibilities across the team", "Reporting that does not need a specialist"],
    help: "A shared workspace where small teams can coordinate, with access that matches each person's role.",
  },
  {
    id: "growing",
    name: "Growing companies",
    account: "Company",
    needs: ["Departments and employees with different levels of access", "Processes that hold up as headcount grows", "Oversight for managers and owners"],
    help: "Company accounts intended to support employees, departments, roles and permissions in one place.",
  },
  {
    id: "multi",
    name: "Multi-branch organizations",
    account: "Company",
    needs: ["Each branch running its own day to day", "Central oversight across every location", "Consistent processes everywhere"],
    help: "Branch-level structure with centralized oversight, so leadership can see the whole organization.",
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const g = GROUPS[active];

  // Roving tabindex with arrow keys, per the WAI-ARIA tabs pattern.
  const onKeyDown = (e) => {
    const horizontal = ["ArrowRight", "ArrowLeft"].includes(e.key);
    const vertical = ["ArrowDown", "ArrowUp"].includes(e.key);
    if (!horizontal && !vertical && !["Home", "End"].includes(e.key)) return;
    e.preventDefault();
    let next = active;
    if (e.key === "Home") next = 0;
    else if (e.key === "End") next = GROUPS.length - 1;
    else next = (active + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1) + GROUPS.length) % GROUPS.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <Section id="who-we-serve" labelledby="serve-title">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="mb-3 text-[14px] font-medium text-[#a84f00]">Who we serve</p>
        <H2 id="serve-title">Different businesses, different needs.</H2>
        <Lead className="mx-auto mt-4 max-w-[600px]">
          Fati is intended for two kinds of customers: Business Owners, and Companies with more complex structures.
          Choose a group to see what we are designing for.
        </Lead>
      </div>

      <Frame className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-3.5">
          <div role="tablist" aria-label="Customer groups" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {GROUPS.map((x, i) => (
              <button
                key={x.id}
                ref={(el) => (refs.current[i] = el)}
                role="tab"
                id={`serve-tab-${x.id}`}
                aria-selected={active === i}
                aria-controls="serve-panel"
                tabIndex={active === i ? 0 : -1}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-2xl px-4 py-3 text-left text-[15px] font-medium leading-snug tracking-[-0.01em] transition-[background-color,box-shadow,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:py-3.5 lg:text-[16px] ${
                  active === i
                    ? "bg-white text-ink shadow-[0_0_0_1px_rgba(225,114,0,.4),0_10px_20px_-12px_rgba(225,114,0,.45)]"
                    : "bg-white/55 text-body hover:bg-white/90 hover:text-ink"
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>

          <div id="serve-panel" role="tabpanel" aria-labelledby={`serve-tab-${g.id}`} tabIndex={0} className="rounded-[22px] bg-white p-5 shadow-[0_0_0_1px_rgba(120,110,160,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:rounded-[26px] sm:p-8">
            <p className="inline-flex rounded-full bg-cream px-3 py-1 text-[13px] font-medium text-[#8f4300]">{g.account} account</p>
            <h3 className="font-display mt-4 text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[28px]">{g.name}</h3>

            <p className="mt-6 text-[14px] font-medium text-ink">What they typically need</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {g.needs.map((n) => (
                <li key={n} className="flex items-start gap-3 t-body text-head">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="mt-0.5 shrink-0">
                    <circle cx="9" cy="9" r="9" fill="#fdeedd" />
                    <path d="m5.2 9.3 2.5 2.5 5-5.4" stroke="#a84f00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {n}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[14px] font-medium text-ink">How Fati is intended to help</p>
            <p className="mt-2 max-w-[560px] t-lead text-body">{g.help}</p>
          </div>
        </div>
      </Frame>
    </Section>
  );
}
