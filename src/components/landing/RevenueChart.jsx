"use client";

import { useState } from "react";

const BAR_H = 242;

// planned = full column height, actual = share of it, in px at BAR_H.
const K = ["$150k", "$120k", "$90k", "$60k", "$30k", "$0"];
const RANGES = {
  "1Y": {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    actual: [93, 137, 64, 169, 101, 120, 84, 130, 133],
    gap: [8, 8, 8, 9, 8, 8, 7, 9, 8],
    values: [
      ["$79k", "$36k"], ["$84k", "$53k"], ["$111k", "$25k"], ["$81k", "$65k"], ["$105k", "$39k"],
      ["$93k", "$46k"], ["$72k", "$44.5k"], ["$88k", "$50k"], ["$90k", "$51k"],
    ],
    full: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
    active: 6,
    axis: K,
  },
  "6M": {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    actual: [169, 101, 120, 84, 130, 133],
    gap: [9, 8, 8, 7, 9, 8],
    values: [["$81k", "$65k"], ["$105k", "$39k"], ["$93k", "$46k"], ["$72k", "$44.5k"], ["$88k", "$50k"], ["$90k", "$51k"]],
    full: ["April", "May", "June", "July", "August", "September"],
    active: 3,
    axis: K,
  },
  "1M": {
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
    actual: [72, 118, 96, 140],
    gap: [8, 8, 8, 8],
    values: [["$19k", "$11.5k"], ["$23k", "$19.8k"], ["$20k", "$16.1k"], ["$25k", "$23.5k"]],
    full: ["Week 1", "Week 2", "Week 3", "Week 4"],
    active: 3,
    axis: ["$30k", "$24k", "$18k", "$12k", "$6k", "$0"],
  },
};

export default function RevenueChart() {
  const [range, setRange] = useState("1Y");
  const [hover, setHover] = useState(null);
  const d = RANGES[range];
  const current = hover ?? d.active;
  const count = d.labels.length;

  return (
    <div className="rounded-[20px] bg-white p-4 sm:px-5 sm:pb-[17px] sm:pt-4">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <h3 className="font-display text-[20px] font-medium leading-[30px] tracking-[-0.02em] text-ink">Revenue vs Target</h3>
        <ul className="flex -translate-y-[3px] items-center gap-[16px] text-[13px] leading-6 tracking-[-0.005em] text-body">
          <li className="flex items-center gap-[7px]">
            <span className="h-2 w-2 rounded-full bg-brand" /> Closed revenue
          </li>
          <li className="flex items-center gap-[7px]">
            <span className="h-2 w-2 rounded-full bg-[#efcaa3]" /> Target
          </li>
        </ul>
      </div>

      <div role="tablist" aria-label="Revenue range" className="mt-[17px] flex gap-2">
        {Object.keys(RANGES).map((r) => (
          <button
            key={r}
            role="tab"
            type="button"
            aria-selected={range === r}
            onClick={() => {
              setRange(r);
              setHover(null);
            }}
            className={`h-[26px] min-w-[46px] rounded-full px-3 text-[13px] leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              range === r ? "bg-head text-white" : "bg-fog text-body hover:bg-[#ebebee]"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-[29px] flex">
        <div
          className="flex w-[48px] shrink-0 flex-col justify-between pt-px text-[13px] leading-4 text-body sm:w-[62px]"
          style={{ height: BAR_H }}
          aria-hidden
        >
          {d.axis.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex justify-between" style={{ height: BAR_H }} onMouseLeave={() => setHover(null)}>
            {d.labels.map((label, i) => {
              const isActive = i === current;
              const actual = d.actual[i];
              const planned = BAR_H - actual - d.gap[i];
              const flip = i > (count - 1) / 2;
              return (
                <div key={label} className="relative h-full w-[38px] min-w-[14px] shrink" onMouseEnter={() => setHover(i)}>
                  <button
                    type="button"
                    aria-label={`${d.full[i]}: target ${d.values[i][0]}, closed ${d.values[i][1]}`}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    className="flex h-full w-full flex-col justify-between rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span
                      className={`block w-full rounded-lg transition-colors duration-200 ${isActive ? "bg-[#f3dcc4]" : "bg-[#f7f7f9]"}`}
                      style={{ height: planned }}
                    />
                    <span
                      className={`block w-full rounded-lg transition-colors duration-200 ${isActive ? "bg-brand" : "bg-[#fcefe0]"}`}
                      style={{ height: actual }}
                    />
                  </button>
                  {isActive && (
                    <div
                      aria-hidden
                      className={`pop-in pointer-events-none absolute z-10 w-[104px] rounded-[10px] bg-white p-[9px] shadow-[0_6px_18px_-4px_rgba(40,30,20,.25),0_0_0_1px_rgba(40,30,20,.04)] ${
                        flip ? "-right-[21px]" : "-left-[21px]"
                      }`}
                      style={{ bottom: actual }}
                    >
                      <p className="text-[12px] font-medium leading-4 text-head">{d.full[i]}</p>
                      <p className="mt-[5px] flex items-center gap-[6px] whitespace-nowrap text-[12px] leading-4 text-body">
                        <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-brand" /> Closed : {d.values[i][1]}
                      </p>
                      <p className="mt-[3px] flex items-center gap-[6px] whitespace-nowrap text-[12px] leading-4 text-body">
                        <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#efcaa3]" /> Target : {d.values[i][0]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-[9px] flex justify-between text-[12px] leading-6 text-body sm:text-[13px]" aria-hidden>
            {d.labels.map((l) => (
              <span key={l} className="w-[38px] min-w-[14px] shrink text-center">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
