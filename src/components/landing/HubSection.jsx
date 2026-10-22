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
      className="flex h-8 w-8 sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#43c48a] to-[#1f9d6b] shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_16px_-8px_rgba(31,157,107,.55)]"
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
    <section id="workspace" aria-labelledby="workspace-title" className="scroll-mt-6 pt-12 sm:pt-14 lg:pt-16 xl:pt-20">
      <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-[minmax(0,620px)_minmax(0,1fr)] xl:gap-[88px]">
        <div className="order-2 mx-auto w-full max-w-[560px] xl:order-1 xl:mx-0 xl:max-w-none">
          <HubFlow />
        </div>

        <div className="order-1 xl:order-2">
          <h2
            id="workspace-title"
            className="text-balance t-h2 font-semibold tracking-[-0.026em] text-ink"
          >
            Close more deals, with less chasing
          </h2>
          <p className="mt-4 max-w-[540px] text-pretty t-lead text-body">
            {BRAND} keeps every lead, deal and customer in one place and shows you what needs attention next, so your team
            spends its time selling instead of sorting.
          </p>

          <ul className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-4 font-display t-h3 font-medium tracking-[-0.015em] text-ink">
                <CheckTile />
                {p}
              </li>
            ))}
          </ul>

          <Btn variant="brand" href="#how-it-works" className="mt-7 sm:mt-10 sm:!h-12 sm:!px-7 sm:!text-[15px]">
            See how it works
          </Btn>
        </div>
      </div>
    </section>
  );
}
