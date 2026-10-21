import { Btn } from "./ui";
import { BRAND } from "./config";

const TILES = [
  {
    label: "Gmail",
    bg: "#ea4335",
    x: 269,
    node: (
      <svg width="54" height="42" viewBox="0 0 54 42" aria-hidden fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="48" height="34" rx="5" />
        <path d="m5 9 22 17L49 9" />
      </svg>
    ),
  },
  {
    label: "Slack",
    bg: "#4a154b",
    x: 475,
    node: (
      <svg width="50" height="50" viewBox="0 0 24 24" aria-hidden>
        <rect x="9" y="1" width="4.4" height="8" rx="2.2" fill="#36c5f0" />
        <rect x="1" y="10.6" width="8" height="4.4" rx="2.2" fill="#2eb67d" />
        <rect x="10.6" y="15" width="4.4" height="8" rx="2.2" fill="#ecb22e" />
        <rect x="15" y="9" width="8" height="4.4" rx="2.2" fill="#e01e5a" />
      </svg>
    ),
  },
  {
    label: "Stripe",
    bg: "#635bff",
    x: 965,
    node: <span className="text-[52px] font-extrabold leading-none tracking-[-0.05em] text-white">S</span>,
  },
  {
    label: "Google Calendar",
    bg: "#1a73e8",
    x: 1171,
    node: (
      <svg width="50" height="52" viewBox="0 0 50 52" aria-hidden fill="none">
        <rect x="3" y="7" width="44" height="42" rx="7" fill="#fff" />
        <path d="M3 14a7 7 0 0 1 7-7h30a7 7 0 0 1 7 7v6H3v-6Z" fill="#a8c7fa" />
        <path d="M15 2v10M35 2v10" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <text x="25" y="42" textAnchor="middle" fontSize="19" fontWeight="700" fill="#1a73e8" fontFamily="Inter, sans-serif">31</text>
      </svg>
    ),
  },
];

// Curves are drawn in the 1440-wide design box, measured from the reference.
const LEFT = [
  "M269 172 C300 280 430 359 550 359 L630 359 C700 359 720 400 720 462",
  "M475 172 C475 270 515 340 550 359",
];
const mirror = (d) => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${1440 - Number(x)} ${y}`);
const CURVES = [...LEFT, ...LEFT.map(mirror)];

function TileChip({ t, style, className = "" }) {
  return (
    <span
      role="img"
      aria-label={t.label}
      className={`flex h-[95px] w-[95px] items-center justify-center rounded-[16px] border-[3px] border-white shadow-[0_2px_10px_-2px_rgba(40,30,20,.18),0_0_0_1px_rgba(40,30,20,.05)] ${className}`}
      style={{ background: t.bg, ...style }}
    >
      {t.node}
    </span>
  );
}

function Cta({ className = "" }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2
        id="int-title"
        className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.026em] text-ink sm:text-[42px] xl:text-[52px]"
      >
        Works seamlessly with your tools
      </h2>
      <p className="mt-4 max-w-[640px] text-pretty text-[16.5px] leading-[1.65] text-body sm:text-[18px]">
        Sync email, calendars, billing, and the SaaS apps you already use in minutes.
      </p>
      <Btn variant="light" href="/dashboard" className="mt-[26px]">
        Book a demo
      </Btn>
    </div>
  );
}

function AskPill() {
  return (
    <span className="btn btn-brand pointer-events-none !h-[46px] !w-[148px] !px-0 text-[14px] ring-[3px] ring-white">
      {BRAND} workspace
    </span>
  );
}

export default function Integrations() {
  return (
    <section
      aria-labelledby="int-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white from-55% to-tint xl:h-[930px]"
    >
      {/* Compact layout */}
      <div className="flex flex-col items-center px-5 py-20 xl:hidden">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {TILES.map((t) => (
            <TileChip key={t.label} t={t} className="!h-[72px] !w-[72px] scale-90" />
          ))}
        </div>
        <div className="mt-8">
          <AskPill />
        </div>
        <Cta className="mt-10" />
      </div>

      {/* Desktop diagram */}
      <div className="absolute left-1/2 top-0 hidden h-[930px] w-[1440px] -translate-x-1/2 xl:block">
        <svg viewBox="0 0 1440 930" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
          <defs>
            <linearGradient id="g-dome" x1="0" x2="0" y1="485" y2="930" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#feecd7" />
              <stop offset="0.5" stopColor="#fff7ec" />
              <stop offset="1" stopColor="#fffaf4" />
            </linearGradient>
            <linearGradient id="g-rim" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f6c895" stopOpacity="0" />
              <stop offset="0.5" stopColor="#f2ae66" />
              <stop offset="1" stopColor="#f6c895" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g-line" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f7e0c8" />
              <stop offset="0.5" stopColor="#f3d0ac" />
              <stop offset="1" stopColor="#f7e0c8" />
            </linearGradient>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.3" fill="#f1dcc3" />
            </pattern>
            <radialGradient id="dots-fade" cx="720" cy="560" r="300" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </radialGradient>
            <mask id="dots-mask">
              <rect x="0" y="300" width="1440" height="630" fill="url(#dots-fade)" />
            </mask>
          </defs>
          <circle cx="720" cy="1580" r="1095" fill="url(#g-dome)" />
          <rect x="320" y="340" width="800" height="560" fill="url(#dots)" mask="url(#dots-mask)" />
          <circle cx="720" cy="1580" r="1095" stroke="url(#g-rim)" strokeWidth="3" />
          {CURVES.map((d, i) => (
            <path key={i} d={d} stroke="url(#g-line)" strokeWidth="2" strokeLinecap="round" />
          ))}
        </svg>

        {TILES.map((t) => (
          <TileChip key={t.label} t={t} className="absolute top-[77px]" style={{ left: t.x - 47.5 }} />
        ))}

        <div className="absolute left-1/2 top-[462px] -translate-x-1/2">
          <AskPill />
        </div>
        <Cta className="absolute inset-x-0 top-[587px]" />
      </div>
    </section>
  );
}
