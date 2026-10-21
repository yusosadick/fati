import Card from "./Card";
import Avatar from "./Avatar";
import { More, FilterLines, SortChevrons } from "./icons";
import { SearchNormal1 } from "iconsax-react";

const COLUMNS = ["Lead Name", "Company", "Number", "Status", "Contacted", "Follow-Up"];

// checkbox | name | company | number | status | contacted | follow-up | actions
const GRID = "grid grid-cols-[18px_minmax(0,1.35fr)_minmax(0,1.3fr)_minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_40px] items-center gap-x-[10px] px-[16px]";

const STATUS = {
  "New Lead": "#1db954",
  Contacted: "#3b8cf5",
  Qualified: "#e17200",
  Negotiation: "#8b5cf6",
  Lost: "#e0373f",
};

const LEADS = [
  { name: "Blanca Seals", company: "Davis Tech", number: "(480)957-2489", status: "New Lead", contacted: "Mar 03, 2026", followUp: "Mar 10, 2026" },
  { name: "Marcus Hale", company: "Northwind Labs", number: "(312)440-1187", status: "Contacted", contacted: "Mar 01, 2026", followUp: "Mar 08, 2026" },
  { name: "Priya Nair", company: "Lumen Cloud", number: "(646)203-7741", status: "Qualified", contacted: "Feb 27, 2026", followUp: "Mar 06, 2026" },
  { name: "Tomás Rivera", company: "Brightpath", number: "(213)778-0394", status: "Negotiation", contacted: "Feb 25, 2026", followUp: "Mar 04, 2026" },
  { name: "Aiko Tanaka", company: "Orbit Systems", number: "(415)982-6610", status: "Lost", contacted: "Feb 20, 2026", followUp: "Mar 02, 2026" },
];

const COMPANY_TINT = ["#3b8cf5", "#8b5cf6", "#14b8a6", "#e17200", "#ef4444", "#0ea5e9", "#f59e0b", "#6366f1", "#10b981"];

function Checkbox() {
  return <span className="h-[14px] w-[14px] rounded-[4px] border border-[#cfcac1] bg-white/40" />;
}

function ToolButton({ children, className = "" }) {
  return (
    <button
      type="button"
      className={`flex h-[34px] items-center justify-between rounded-[10px] bg-white/40 px-[12px] text-[10.5px] font-medium text-ink transition-colors hover:bg-white/60 ${className}`}
    >
      {children}
    </button>
  );
}

export default function LeadTable() {
  return (
    <Card className="min-w-0 overflow-hidden pb-[8px]">
      <div className="flex items-center justify-between px-[18px] pb-[18px] pt-[18px]">
        <h2 className="text-[17px] font-medium tracking-[-0.2px] text-ink">Lead Conversion Tracker</h2>
        <div className="flex gap-[10px]">
          <ToolButton className="w-[150px]">
            Search ...
            <SearchNormal1 size={16} color="#1a1916" />
          </ToolButton>
          <ToolButton className="w-[84px] gap-[8px]">
            Filter
            <FilterLines color="#1a1916" size={13} />
          </ToolButton>
        </div>
      </div>

      <div className={`${GRID} h-[36px] bg-white/55 text-[10.5px] text-ink-soft`}>
        <Checkbox />
        {COLUMNS.map((c) => (
          <span key={c} className="flex items-center gap-[6px] whitespace-nowrap">
            {c}
            <SortChevrons />
          </span>
        ))}
        <span className="sr-only">Actions</span>
      </div>

      <ul>
        {LEADS.map((l, i) => (
          <li
            key={l.name}
            className={`${GRID} h-[54px] border-b border-ink/[.05] text-[10.5px] font-medium text-ink transition-colors last:border-b-0 hover:bg-white/30`}
          >
            <Checkbox />
            <span className="flex items-center gap-[10px] truncate">
              <Avatar size={26} seed={i} />
              {l.name}
            </span>
            <span className="flex items-center gap-[9px] truncate">
              <span className="h-[20px] w-[20px] shrink-0 rounded-[6px]" style={{ background: COMPANY_TINT[i] }} />
              {l.company}
            </span>
            <span className="tabular whitespace-nowrap">{l.number}</span>
            <span className="flex items-center gap-[7px]" style={{ color: STATUS[l.status] }}>
              <span className="h-[8px] w-[8px] rounded-full" style={{ background: STATUS[l.status] }} />
              {l.status}
            </span>
            <span className="tabular whitespace-nowrap">{l.contacted}</span>
            <span className="tabular whitespace-nowrap">{l.followUp}</span>
            <span className="flex justify-end">
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white/60">
                <More size={14} color="#1a1916" />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
