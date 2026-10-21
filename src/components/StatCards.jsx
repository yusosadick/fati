import { More, ArrowUp, ArrowUpRight } from "./icons";
import Card from "./Card";
import { TrioBars, Sparkline, RingProgress, MiniBars } from "./MiniCharts";

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M7 5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 13 4v1" stroke="#e17200" strokeWidth="1.6" />
      <rect x="2" y="5" width="16" height="12" rx="2.5" fill="#e17200" />
      <text x="10" y="14.2" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">$</text>
    </svg>
  );
}
function SavingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="6.5" y="2" width="7" height="2.6" rx="1.3" fill="#3b8cf5" />
      <path d="M7 5.2h6c3.2 2.6 4.4 5.2 4.4 8 0 2.6-2 4.3-4.6 4.3H7.2C4.6 17.5 2.6 15.8 2.6 13.2 2.6 10.4 3.8 7.8 7 5.2Z" fill="#3b8cf5" />
      <rect x="8.2" y="10.2" width="3.6" height="1.6" rx=".8" fill="#fff" />
    </svg>
  );
}
function IncomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.5" fill="#1db954" />
      <text x="10" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">$</text>
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="1.5" y="3.5" width="17" height="13" rx="3" fill="#ef4048" />
      <rect x="11.5" y="8" width="6.5" height="4" rx="2" fill="#fff" fillOpacity=".92" />
      <circle cx="13.6" cy="10" r=".9" fill="#ef4048" />
    </svg>
  );
}

const STATS = [
  { title: "Current Balance", value: "$18.4K", change: "+3.2%", note: "vs last week", up: true, icon: BagIcon, accent: "#e17200", chart: (c) => <TrioBars color={c} /> },
  { title: "Total Savings", value: "$42.8K", change: "+6.5%", note: "vs growth", up: true, icon: SavingsIcon, accent: "#3b8cf5", chart: (c) => <Sparkline color={c} id="savings" /> },
  { title: "Total Income", value: "$75.3K", change: "+11.4%", note: "vs this month", up: true, icon: IncomeIcon, accent: "#1db954", chart: (c) => <RingProgress color={c} value={77} /> },
  { title: "Total Expenses", value: "$28.9K", change: "-4.1%", note: "vs reduction", up: false, icon: WalletIcon, accent: "#ef4048", chart: (c) => <MiniBars color={c} /> },
];

function StatCard({ title, value, change, note, up, icon: Icon, accent, chart }) {
  return (
    <Card className="group relative flex h-[128px] min-w-0 flex-col justify-between px-[14px] pb-[13px] pt-[13px] transition-shadow hover:shadow-[0_1px_2px_rgba(80,55,20,.05),0_16px_36px_-14px_rgba(80,55,20,.22)]">
      <div className="flex items-center">
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/40">
          <Icon />
        </span>
        <span className="ml-[9px] flex-1 truncate text-[12px] font-medium text-ink">{title}</span>
        <More size={16} color="#8a867f" />
      </div>
      <div className="absolute right-[14px] top-[48px] flex h-[48px] items-center justify-end">{chart(accent)}</div>
      <div>
        <p className="tabular text-[28px] font-semibold leading-[34px] tracking-[-0.6px] text-ink">
          {value}
        </p>
        <div className="mt-[4px] flex items-center justify-between text-[9.5px] leading-[13px]">
          <span className="flex items-center gap-[3px] text-ink-soft">
            <ArrowUp up={up} />
            <span className={`font-medium ${up ? "text-up" : "text-down"}`}>{change}</span>
            {note}
          </span>
          <span className="flex items-center gap-[3px] text-ink-mute">
            Details <ArrowUpRight size={9} />
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-[16px]">
      {STATS.map((s) => (
        <StatCard key={s.title} {...s} />
      ))}
    </div>
  );
}
