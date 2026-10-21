"use client";

import { useState } from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import { More } from "./icons";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
// February 2026 starts on a Sunday and has four full weeks.
const WEEK_STARTS = [1, 8, 15, 22];

const EVENTS = {
  10: [{ title: "Demo: Northwind Labs", time: "11:00 am - 11:45 am", people: 3, cta: "On Zoom" }],
  13: [
    { title: "Mesh Weekly Meeting", time: "10:00 am - 12 am", people: 11, cta: "On Google Meet" },
    { title: "Pipeline review", time: "2:30 pm - 3:15 pm", people: 4, cta: "On Zoom" },
  ],
  16: [{ title: "Quarterly planning", time: "9:00 am - 10:30 am", people: 8, cta: "On Google Meet" }],
  20: [{ title: "Renewal call: Orbit Systems", time: "1:00 pm - 1:30 pm", people: 2, cta: "By phone" }],
};

function EventCard({ title, time, people, cta }) {
  return (
    <div className="rounded-[14px] bg-white/30 px-[14px] py-[13px]">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[10.5px] font-semibold text-ink">{title}</span>
        <span className="shrink-0 text-[10px] text-ink-mute">{time}</span>
      </div>
      <div className="mt-[12px] flex items-center justify-between">
        <div className="flex items-center">
          {Array.from({ length: Math.min(3, people) }, (_, i) => (
            <Avatar key={i} size={19} seed={i} className={`ring-2 ring-[#f3ede4] ${i ? "-ml-[5px]" : ""}`} />
          ))}
          {people > 3 && (
            <span className="-ml-[5px] flex h-[19px] w-[19px] items-center justify-center rounded-full bg-brand text-[7.5px] font-semibold text-white ring-2 ring-[#f3ede4]">
              {people - 3}+
            </span>
          )}
        </div>
        <span className="flex h-[25px] items-center gap-[8px] rounded-[9px] bg-white/55 pl-[10px] pr-[8px] text-[9.5px] font-medium text-ink">
          {cta}
          <ArrowRight2 size={11} color="#1a1916" />
        </span>
      </div>
    </div>
  );
}

export default function Schedule() {
  const [week, setWeek] = useState(1);
  const [selected, setSelected] = useState(13);
  const start = WEEK_STARTS[week];
  const dates = Array.from({ length: 7 }, (_, i) => start + i);
  const events = EVENTS[selected] ?? [];

  const go = (delta) => {
    const next = Math.min(WEEK_STARTS.length - 1, Math.max(0, week + delta));
    setWeek(next);
    setSelected(WEEK_STARTS[next] + (selected - start));
  };

  return (
    <Card className="flex min-w-0 flex-col p-[18px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-medium tracking-[-0.1px] text-ink">Schedule</h2>
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/40">
          <More size={14} color="#1a1916" />
        </span>
      </div>

      <div className="mt-[22px] flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous week"
          disabled={week === 0}
          onClick={() => go(-1)}
          className="rounded-full p-1 transition-colors hover:bg-white/50 disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <ArrowLeft2 size={14} color="#8a867f" />
        </button>
        <span className="text-[12px] font-medium text-ink">February 2026</span>
        <button
          type="button"
          aria-label="Next week"
          disabled={week === WEEK_STARTS.length - 1}
          onClick={() => go(1)}
          className="rounded-full p-1 transition-colors hover:bg-white/50 disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <ArrowRight2 size={14} color="#8a867f" />
        </button>
      </div>

      <div className="mt-[18px] grid grid-cols-7 text-center">
        {dates.map((d, i) => (
          <div key={d} className="flex flex-col items-center gap-[10px]">
            <span className="text-[10px] text-ink-mute">{DAYS[i]}</span>
            <button
              type="button"
              onClick={() => setSelected(d)}
              aria-pressed={selected === d}
              className={`tabular relative flex h-[30px] w-[30px] items-center justify-center rounded-full text-[11.5px] font-medium transition-colors ${
                selected === d
                  ? "bg-brand text-white shadow-[0_4px_10px_-3px_rgba(225,114,0,.55)]"
                  : "text-ink hover:bg-white/60"
              }`}
            >
              {d}
              {EVENTS[d] && selected !== d && (
                <span className="absolute -bottom-[2px] h-[3px] w-[3px] rounded-full bg-brand" />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-[22px] flex flex-col gap-[10px]">
        {events.length === 0 && (
          <p className="rounded-[14px] bg-white/20 px-[14px] py-[18px] text-center text-[11px] text-ink-mute">
            Nothing scheduled
          </p>
        )}
        {events.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>
    </Card>
  );
}
