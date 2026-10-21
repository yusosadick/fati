import { BRAND } from "./config";
import { Btn } from "./ui";
import HubFlow from "./HubFlow";

const POINTS = [
  "Lead scoring and prioritisation",
  "Automatic follow-up reminders",
  "Churn alerts before renewals slip",
];

function CheckTile() {
  return (
    <span
      aria-hidden
      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#43c48a] to-[#1f9d6b] shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_16px_-8px_rgba(31,157,107,.55)]"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3.500 8.500 3 3 6-7" />
      </svg>
    </span>
  );
}

/** "Close more deals, with less chasing": hub diagram on the left, copy and checklist on the right. */
export default function HubSection() {
  return (
    <section id="workspace" aria-labelledby="workspace-title" className="scroll-mt-6 pt-20 xl:pt-40">
      <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,620px)_minmax(0,1fr)] xl:gap-[88px]">
        <div className="order-2 xl:order-1">
          <HubFlow />
        </div>

        <div className="order-1 xl:order-2">
          <h2
            id="workspace-title"
            className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.026em] text-ink sm:text-[42px] xl:text-[52px]"
          >
            Close more deals, with less chasing
          </h2>
          <p className="mt-5 max-w-[540px] text-pretty text-[17px] leading-[1.65] text-body sm:text-[18px]">
            {BRAND} keeps every lead, deal and customer in one place and shows you what needs attention next, so your team
            spends its time selling instead of sorting.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-4 font-display text-[18px] font-medium leading-6 tracking-[-0.015em] text-ink sm:text-[20px]">
                <CheckTile />
                {p}
              </li>
            ))}
          </ul>

          <Btn variant="brand" href="#how-it-works" className="mt-10 !h-12 !px-7 !text-[15px]">
            See how it works
          </Btn>
        </div>
      </div>
    </section>
  );
}
