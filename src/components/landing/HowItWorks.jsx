import { SectionHead } from "./ui";
import { BRAND } from "./config";

/* Sample CRM data used in the mock-ups below (fictional names and amounts). */

function Tag({ children }) {
  return (
    <span className="inline-flex h-7 w-fit items-center rounded-full bg-[#f4f4f5] px-[11px] text-[13px] font-medium leading-none text-head shadow-[inset_0_0_0_1px_rgba(255,255,255,.9),0_2px_6px_-1px_rgba(40,30,20,.1)]">
      {children}
    </span>
  );
}

function Card({ tag, title, text, children }) {
  return (
    <li className="flex flex-col rounded-[22px] bg-white p-4 shadow-[0_0_0_1px_rgba(40,30,20,.015)]">
      <Tag>{tag}</Tag>
      <h3 className="mt-3 text-[22px] font-medium leading-[1.25] tracking-[-0.025em] text-ink">{title}</h3>
      <p className="mt-1.5 min-h-[48px] text-[15px] leading-[1.55] text-body">{text}</p>
      <div className="mt-5 flex-1">{children}</div>
    </li>
  );
}

const frame = "well p-[5px]";
const inner = "h-[214px] overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(40,30,20,.04)]";
const row =
  "flex items-center gap-2 rounded-[10px] bg-white px-2.5 text-[13px] shadow-[0_0_0_1px_rgba(40,30,20,.04),0_2px_6px_-3px_rgba(40,30,20,.12)]";

/* ---- 1. Leads ------------------------------------------------------- */
const LEADS = [
  { name: "Maya Chen", co: "Northwind", src: "Web form", cls: "bg-[#e8f1fe] text-[#2563c9]", fresh: true },
  { name: "Daniel Okoro", co: "Globex", src: "Referral", cls: "bg-[#e6f6ee] text-[#1a9b66]" },
  { name: "Priya Nair", co: "Acme Corp", src: "Email", cls: "bg-[#fff1da] text-[#c57a12]" },
];

function LeadsCard() {
  return (
    <div className={frame}>
      <div className={inner}>
        <div className="flex h-11 items-center justify-between border-b border-black/[.06] px-3.5">
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">Lead inbox</span>
          <span className="rounded-full bg-brand px-2 py-0.5 text-[12px] font-medium leading-4 text-white">3 new</span>
        </div>
        <div className="flex flex-col gap-2 p-2.5">
          {LEADS.map((l) => (
            <div key={l.name} className={`${row} h-[44px]`}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-[12px] font-semibold text-brand">
                {l.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate font-medium text-ink">{l.name}</span>
                <span className="block truncate text-[12px] text-body">{l.co}</span>
              </span>
              <span className={`rounded-full px-2 py-1 text-[12px] font-medium leading-none ${l.cls}`}>{l.src}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- 2. Pipeline board ---------------------------------------------- */
const STAGES = [
  { name: "Qualified", tone: "bg-[#f3b16a]", deals: [["Globex", "$1.9k"], ["Initech", "$3.4k"]] },
  { name: "Proposal", tone: "bg-[#e8a317]", deals: [["Northwind", "$8.2k"]] },
  { name: "Won", tone: "bg-[#1fb85a]", deals: [["Acme", "$12.4k"], ["Umbra", "$5.1k"]] },
];

function PipelineCard() {
  return (
    <div className={frame}>
      <div className={inner}>
        <div className="flex h-11 items-center justify-between border-b border-black/[.06] px-3.5">
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">Pipeline</span>
          <span className="text-[13px] font-medium text-[#1a9b66]">$31.0k</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2.5">
          {STAGES.map((s) => (
            <div key={s.name} className="min-w-0">
              <p className="mb-2 flex items-center gap-1.5 text-[12px] font-medium text-body">
                <span className={`h-2 w-2 rounded-full ${s.tone}`} />
                {s.name}
              </p>
              <div className="flex flex-col gap-1.5">
                {s.deals.map(([co, amt]) => (
                  <div key={co} className="rounded-lg bg-white px-2 py-1.5 shadow-[0_0_0_1px_rgba(40,30,20,.05),0_2px_5px_-3px_rgba(40,30,20,.15)]">
                    <p className="truncate text-[12px] font-medium leading-4 text-ink">{co}</p>
                    <p className="text-[12px] leading-4 text-body">{amt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- 3. Customer record --------------------------------------------- */
const TIMELINE = [
  ["Invoice #1042 paid", "$4,200", "#1fb85a"],
  ["Call with Priya", "20 min", "#e17200"],
  ["Proposal sent", "Tue", "#8a867f"],
];

function CustomerCard() {
  return (
    <div className={frame}>
      <div className={inner}>
        <div className="flex items-center gap-3 border-b border-black/[.06] px-3.5 py-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f7c590] to-[#e8802a] text-[14px] font-semibold text-white">
            AC
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">Acme Corp</span>
            <span className="block text-[12px] text-body">Since 2024</span>
          </span>
          <span className="rounded-full bg-[#e6f6ee] px-2 py-1 text-[12px] font-medium leading-none text-[#1a9b66]">Healthy</span>
        </div>
        <ul className="flex flex-col gap-2.5 px-3.5 py-3">
          {TIMELINE.map(([label, meta, color]) => (
            <li key={label} className="flex items-center gap-2.5 text-[13px]">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
              <span className="min-w-0 flex-1 truncate text-ink">{label}</span>
              <span className="text-[12px] text-body">{meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---- 4. Follow-ups --------------------------------------------------- */
const TASKS = [
  { text: "Call Acme about renewal", when: "Today", done: false, hot: true },
  { text: "Send Northwind proposal", when: "Tomorrow", done: false },
  { text: "Log notes from Globex demo", when: "Done", done: true },
];

function TasksCard() {
  return (
    <div className={frame}>
      <div className={inner}>
        <div className="flex h-11 items-center justify-between border-b border-black/[.06] px-3.5">
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">Follow-ups</span>
          <span className="rounded-full bg-[#fdeded] px-2 py-0.5 text-[12px] font-medium leading-4 text-[#d0262f]">1 due today</span>
        </div>
        <div className="flex flex-col gap-2 p-2.5">
          {TASKS.map((t) => (
            <div key={t.text} className={`${row} h-[44px]`}>
              <span
                aria-hidden
                className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md ${
                  t.done ? "bg-[#1fb85a]" : "bg-white shadow-[inset_0_0_0_1.5px_#cfcac3]"
                }`}
              >
                {t.done && (
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3.5 8.500 3 3 6-7" />
                  </svg>
                )}
              </span>
              <span className={`min-w-0 flex-1 truncate ${t.done ? "text-body line-through" : "text-ink"}`}>{t.text}</span>
              <span className={`text-[12px] font-medium ${t.hot ? "text-brand" : "text-body"}`}>{t.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-6 pt-12 xl:pt-[84px]">
      <SectionHead
        badge={`How ${BRAND} works`}
        title="From first lead to loyal customer"
        sub="Capture leads, move deals through your pipeline, keep every customer close, and never miss a follow-up."
        id="how-title"
        className="pt-10 xl:pt-[78px]"
      />
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 3xl:mt-[60px] 3xl:grid-cols-4">
        <Card tag="Leads" title="Capture every lead" text="Web forms, email and referrals land in one inbox, ready to qualify.">
          <LeadsCard />
        </Card>
        <Card tag="Pipeline" title="Move deals forward" text="See every deal by stage and know exactly what it is worth.">
          <PipelineCard />
        </Card>
        <Card tag="Customers" title="Know every customer" text="One record with calls, emails and invoices, so nothing gets lost.">
          <CustomerCard />
        </Card>
        <Card tag="Follow-ups" title="Never miss a follow-up" text="Tasks and reminders tied to each deal, so every promise gets kept.">
          <TasksCard />
        </Card>
      </ul>
    </section>
  );
}
