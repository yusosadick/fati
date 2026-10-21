// Small decorative charts for the stat cards. `color` is the card accent.

const TRACK = "rgba(26,25,22,.07)";

export function TrioBars({ color }) {
  const heights = [0.7, 0.82, 0.95];
  return (
    <div className="flex h-[44px] items-end gap-[5px]" aria-hidden>
      {heights.map((h, i) => (
        <div key={i} className="relative h-full w-[14px] overflow-hidden rounded-[5px]" style={{ background: TRACK }}>
          <div
            className="spark-grow absolute inset-x-0 bottom-0 rounded-[5px]"
            style={{ height: `${h * 100}%`, background: color, opacity: i === 2 ? 1 : 0.42, "--i": i }}
          />
        </div>
      ))}
    </div>
  );
}

const SPARK = [
  [0, 34], [10, 38], [19, 28], [32, 11], [42, 20], [52, 26], [64, 15], [74, 10],
];

export function Sparkline({ color, id }) {
  const line = SPARK.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join("");
  const [lx, ly] = SPARK[SPARK.length - 1];
  return (
    <svg width="80" height="44" viewBox="-2 -2 80 46" fill="none" aria-hidden>
      <defs>
        <linearGradient id={`spark-${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity=".28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line}L${lx} 44L0 44Z`} fill={`url(#spark-${id})`} className="spark-fade" />
      <path d={line} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="100" className="spark-draw" />
      <circle cx={lx} cy={ly} r="3.4" fill="#fff" stroke={color} strokeWidth="2" className="spark-fade" />
    </svg>
  );
}

export function RingProgress({ color, value }) {
  const r = 17;
  return (
    <div className="relative h-[46px] w-[46px]" aria-hidden>
      <svg width="46" height="46" viewBox="0 0 46 46" className="-rotate-90">
        <circle cx="23" cy="23" r={r} fill="none" stroke={color} strokeOpacity=".16" strokeWidth="5" />
        <circle
          cx="23"
          cy="23"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${value} 100`}
          className="ring-sweep"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-ink">{value}%</span>
    </div>
  );
}

export function MiniBars({ color }) {
  const heights = [0.35, 0.5, 0.45, 0.62, 0.55, 0.72, 0.6, 0.8, 0.68, 0.9, 0.78, 1];
  return (
    <div className="flex h-[44px] items-end gap-[2.5px]" aria-hidden>
      {heights.map((h, i) => (
        <div key={i} className="relative h-full w-[3.5px] overflow-hidden rounded-full" style={{ background: TRACK }}>
          <div
            className="spark-grow absolute inset-x-0 bottom-0 rounded-full"
            style={{ height: `${h * 100}%`, background: color, opacity: i === heights.length - 1 ? 1 : 0.42, "--i": i }}
          />
        </div>
      ))}
    </div>
  );
}
