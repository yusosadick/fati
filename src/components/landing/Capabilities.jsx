import { Btn, Pill } from "./ui";
import { BRAND } from "./config";
import RevenueChart from "./RevenueChart";

const base = { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", "aria-hidden": true };

function FunnelIcon({ color }) {
  return (
    <svg {...base} stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.500h18l-7 8v6l-4-2.500v-3.500L4 5.500Z" />
    </svg>
  );
}

function UsersIcon({ color }) {
  return (
    <svg {...base} stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.500" cy="9" r="3.500" />
      <path d="M3.500 20c0-3.600 3-6 7-6s7 2.400 7 6" />
      <circle cx="19" cy="9" r="2.500" />
      <path d="M19.500 14c2.200.4 3.500 2.200 3.500 4.500" />
    </svg>
  );
}

function PieIcon({ color }) {
  return (
    <svg {...base} stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.500 5.500a8 8 0 1 0 8 8h-8v-8Z" />
      <path d="M15.500 3.500a7 7 0 0 1 7 7h-7v-7Z" />
    </svg>
  );
}

const FEATURES = [
  {
    title: "Pipeline & lead management",
    body: "Planned: capture leads from every channel, move deals along your pipeline, and get nudged when one stalls.",
    icon: FunnelIcon,
    active: true,
  },
  {
    title: "Customer 360 & retention",
    body: "Planned: one timeline for every account with conversations, tickets, payments and renewals, so churn risk shows early.",
    icon: UsersIcon,
  },
  {
    title: "Revenue insights & forecasting",
    body: "Planned: track revenue, retention and team performance, with forecasts of where you will land this quarter.",
    icon: PieIcon,
  },
];

export default function Capabilities() {
  return (
    <section id="features" aria-labelledby="cap-title" className="scroll-mt-6 pt-12 sm:pt-14 lg:pt-16 xl:pt-20">
      <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,min(550px,48%))] xl:gap-[50px]">
        <div>
          <Pill>Core capabilities</Pill>
          <h2
            id="cap-title"
            className="mt-5 max-w-[640px] t-h2 font-semibold tracking-[-0.026em] text-ink"
          >
            {BRAND} helps you <br className="hidden sm:inline" />run a smarter business
          </h2>
        </div>
        <div className="xl:pt-[7px]">
          <p className="max-w-[560px] text-pretty t-lead text-body">
            {BRAND} is designed to unify your pipeline, customer records, projects and team inbox in one platform, with
            reporting that shows what is working across sales, retention and delivery.
          </p>
          <Btn variant="light" href="#how-it-works" className="mt-2">
            Explore all features
          </Btn>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 items-center gap-8 sm:mt-10 xl:mt-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,min(620px,52%))] xl:gap-[30px]">
        <ul className="flex flex-col gap-8 sm:gap-[46px] xl:pr-4">
          {FEATURES.map(({ title, body, icon: Icon, active }) => (
            <li key={title} className="relative flex items-start gap-4 pl-0 sm:gap-[22px] sm:pl-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-[60px] sm:w-[60px] ${
                  active ? "bg-peach" : "bg-fog"
                }`}
              >
                <Icon color={active ? "#fff" : "#323234"} />
              </span>
              <div className="-mt-[3px] min-w-0 flex-1">
                <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-0.025em] text-ink sm:text-[22px] xl:text-[26px]">{title}</h3>
                <p className="mt-1.5 max-w-[520px] t-body text-body">{body}</p>
              </div>
              {active && (
                <span
                  aria-hidden
                  className="absolute -bottom-[16px] left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-peach/70 to-transparent sm:block"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="rounded-[22px] bg-cream p-2.5 sm:rounded-[24px] sm:p-8">
          <RevenueChart />
        </div>
      </div>
    </section>
  );
}
