/*
 * Four hand-drawn illustration icons for the "product at a glance" cards.
 * Style: thick ink outline, flat fills, one accent each. Pure SVG, no images.
 */
const INK = "#1a1916";
const OR = "#e17200";
const AMBER = "#f6a93b";
const SUN = "#ffd37c";
const GREEN = "#1fb85a";

const base = { viewBox: "0 0 120 120", fill: "none", "aria-hidden": true, focusable: "false" };
const o = { stroke: INK, strokeWidth: 3.4, strokeLinecap: "round", strokeLinejoin: "round" };

/** Lead capture: a cloud feeding a stack of records, with in/out arrows. */
export function CaptureIcon({ className = "" }) {
  return (
    <svg {...base} className={className}>
      {/* cloud */}
      <path d="M30 78c-11 0-19-7-19-17 0-9 7-16 16-17 2-12 12-20 24-18 9 2 15 8 17 16" fill="#fff" {...o} />
      {/* sparkles */}
      <circle cx="22" cy="93" r="4.2" fill={GREEN} {...o} strokeWidth={3} />
      <circle cx="38" cy="100" r="2.8" fill={OR} {...o} strokeWidth={2.6} />
      {/* record stack */}
      <path d="M44 62v34c0 6 10.500 10 23 10s23-4 23-10V62" fill={AMBER} {...o} />
      <path d="M44 74c0 6 10.500 10 23 10s23-4 23-10M44 85c0 6 10.500 10 23 10s23-4 23-10" {...o} />
      <ellipse cx="67" cy="62" rx="23" ry="10" fill={SUN} {...o} />
      {/* arrows */}
      <path d="M92 22v22M86 28l6-7 6 7" stroke={GREEN} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M107 44V20M101 38l6 7 6-7" stroke={OR} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Customer records: a contact card with a magnifier. */
export function RecordsIcon({ className = "" }) {
  return (
    <svg {...base} className={className}>
      <rect x="12" y="22" width="86" height="64" rx="10" fill={OR} {...o} />
      <path d="M12 38h86v-6c0-5.500-4.500-10-10-10H22c-5.500 0-10 4.500-10 10Z" fill={SUN} {...o} />
      <path d="M12 38h86" {...o} />
      <rect x="22" y="56" width="26" height="9" rx="4.500" fill="#fff" {...o} strokeWidth={3} />
      <path d="M22 74h18" stroke={INK} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="84" cy="80" r="17" fill="#fff" {...o} />
      <path d="M96 93l12 13" stroke={INK} strokeWidth="8.500" strokeLinecap="round" />
      <path d="M96 93l12 13" stroke="#fff" strokeWidth="2.200" strokeLinecap="round" />
    </svg>
  );
}

/** Reports: a pie with a pulled-out slice beside rising bars. */
export function ReportsIcon({ className = "" }) {
  return (
    <svg {...base} className={className}>
      <path d="M46 28a34 34 0 1 0 34 34H46V28Z" fill={OR} {...o} />
      <path d="M54 18a34 34 0 0 1 34 34H54V18Z" fill="#fff" {...o} />
      <rect x="64" y="62" width="14" height="40" rx="4" fill={AMBER} {...o} />
      <rect x="84" y="46" width="14" height="56" rx="4" fill={SUN} {...o} />
      <path d="M104 34a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v64a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4Z" fill={AMBER} {...o} />
    </svg>
  );
}

/** Reminders: a bell with a success badge. */
export function BellIcon({ className = "" }) {
  return (
    <svg {...base} className={className}>
      <path d="M26 84V58c0-14 10-25 24-25s24 11 24 25v26l8 8H18Z" fill={SUN} {...o} />
      <path d="M50 33V26" {...o} />
      <circle cx="50" cy="23" r="4" fill={AMBER} {...o} strokeWidth={3} />
      <path d="M38 92c0 7 5 12 12 12s12-5 12-12" fill={AMBER} {...o} />
      <path d="M36 62c0-8 5-14 12-16" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <circle cx="86" cy="32" r="19" fill={GREEN} {...o} />
      <path d="M77 32l7 7 12-14" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
