import { Clock } from "iconsax-react";
import { Btn, SectionHead } from "./ui";

const surface = "rounded-[10px] bg-white shadow-[0_0_0_1px_rgba(40,30,20,.04),0_3px_8px_-4px_rgba(40,30,20,.18)]";

/** Pipeline funnel: each stage is narrower than the last. */
function FunnelVisual() {
  const stages = [
    ["Leads", "1,240", "100%"],
    ["Qualified", "640", "80%"],
    ["Proposal", "280", "60%"],
    ["Won", "96", "40%"],
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[10px] px-6">
      {stages.map(([label, n, w], i) => (
        <div
          key={label}
          className={`flex h-[38px] items-center justify-between px-3 text-[13px] ${
            i === stages.length - 1 ? "rounded-[10px] bg-gradient-to-b from-[#f6b06a] to-brand text-white" : surface
          }`}
          style={{ width: w }}
        >
          <span className={i === stages.length - 1 ? "" : "text-body"}>{label}</span>
          <span className={`font-medium ${i === stages.length - 1 ? "" : "text-head"}`}>{n}</span>
        </div>
      ))}
    </div>
  );
}

/** Customer health: score ring plus a short account list. */
function HealthVisual() {
  const r = 38;
  const c = 2 * Math.PI * r;
  const rows = [
    ["Acme Corp", "Healthy", "#1fb85a"],
    ["Northwind", "Watch", "#e8a317"],
    ["Globex", "At risk", "#e0373f"],
  ];
  return (
    <div className="flex h-full items-center justify-center gap-5 px-5">
      <div className={`relative flex h-[116px] w-[116px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-8px_rgba(40,30,20,.3)]`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r={r} fill="none" stroke="#f6e7d4" strokeWidth="9" />
          <circle cx="50" cy="50" r={r} fill="none" stroke="#e17200" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${c * 0.82} ${c}`} />
        </svg>
        <div className="text-center leading-none">
          <p className="text-[28px] font-medium tracking-[-0.03em] text-head">82</p>
          <p className="mt-1 text-[12px] text-body">Health</p>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {rows.map(([name, status, color]) => (
          <div key={name} className={`flex h-[34px] items-center gap-2 px-3 text-[12px] ${surface}`}>
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
            <span className="truncate text-head">{name}</span>
            <span className="ml-auto text-body">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Task board: three columns of small cards. */
function BoardVisual() {
  const cols = [
    ["To do", [["w-[70%]", "#f3dcc4"], ["w-[50%]", "#f3dcc4"]]],
    ["In progress", [["w-[85%]", "#e17200"], ["w-[60%]", "#e17200"]]],
    ["Done", [["w-[65%]", "#1fb85a"], ["w-[80%]", "#1fb85a"], ["w-[45%]", "#1fb85a"]]],
  ];
  return (
    <div className="flex h-full items-center justify-center gap-[10px] px-5">
      {cols.map(([title, cards]) => (
        <div key={title} className="flex h-[184px] min-w-0 flex-1 flex-col gap-2 rounded-xl bg-white/55 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,.8)]">
          <p className="px-1 text-[12px] font-medium text-body">{title}</p>
          {cards.map(([w, color], i) => (
            <div key={i} className={`flex h-[40px] flex-col justify-center gap-[6px] px-2 ${surface}`}>
              <span className="h-[5px] rounded-full" style={{ background: color, width: "30%" }} />
              <span className={`h-[5px] rounded-full bg-[#ecebe9] ${w}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const POSTS = [
  {
    tag: "Sales",
    title: "How to build a pipeline that converts",
    body: "A practical guide to stages, lead scoring and follow-ups that keep deals moving.",
    visual: <FunnelVisual />,
  },
  {
    tag: "Customer Success",
    title: "Reduce churn with a customer health score",
    body: "Spot at-risk accounts early and know exactly when to step in.",
    visual: <HealthVisual />,
  },
  {
    tag: "Operations",
    title: "A founder’s guide to a lean SaaS operation",
    body: "Projects, support and billing in one place: the playbook for small teams.",
    visual: <BoardVisual />,
  },
];

export default function Insights({ brand }) {
  return (
    <section aria-labelledby="insights-title" className="bg-tint px-0 pb-[80px] pt-[26px]">
      <SectionHead
        badge={`${brand} insights`}
        title="Growth playbooks for modern SaaS teams"
        sub="Practical guides on pipeline, retention, customer success, and scaling operations."
        id="insights-title"
        
      />
      <ul className="group/list mx-auto mt-10 grid max-w-[460px] grid-cols-1 gap-[25px] lg:mt-[32px] lg:max-w-none lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <li
            key={p.title}
            className={`group/card flex flex-col rounded-[20px] bg-white p-[10px] pb-0 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(40,30,20,.28)] ${
              i === 1
                ? "shadow-[0_18px_40px_-18px_rgba(40,30,20,.28)] group-hover/list:shadow-[0_1px_2px_rgba(40,30,20,.03)] group-hover/list:hover:shadow-[0_18px_40px_-18px_rgba(40,30,20,.28)]"
                : "shadow-[0_1px_2px_rgba(40,30,20,.03)]"
            }`}
          >
            <div className="relative h-[258px] overflow-hidden rounded-[14px] bg-gradient-to-br from-[#fff3e2] to-[#fbdcb8]" aria-hidden>
              <div className="h-full pt-[22px]">{p.visual}</div>
              <span className="absolute right-[10px] top-[10px] inline-flex h-6 items-center rounded-full bg-white/90 px-[10px] text-[13px] font-medium leading-none text-head shadow-sm backdrop-blur-[6px]">
                {p.tag}
              </span>
            </div>
            <div className="px-[6px] pt-[22px]">
              <h3 className="text-[22px] font-medium leading-[1.25] tracking-[-0.025em] text-ink">{p.title}</h3>
              <p className="mt-2 pb-[18px] text-[16px] leading-[1.6] text-body">{p.body}</p>
            </div>
            <div className="-mx-[10px] mt-auto flex h-[67px] items-center justify-between border-t border-black/[.05] px-[18px]">
              <Btn variant="light" href="#insights-title" className="!h-9 !px-5">
                Read more
              </Btn>
              <span className="flex items-center gap-[6px] text-[15px] text-body">
                <Clock size={16} color="#6a6a6c" aria-hidden />4 min read
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
