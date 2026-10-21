const PALETTES = [
  ["#3a3a3a", "#c9a27c"],
  ["#7a4b3a", "#e0b48f"],
  ["#2f4858", "#d8a984"],
  ["#5a3e5e", "#f0c3a2"],
];

export default function Avatar({ size = 20, seed = 0, className = "" }) {
  const [hair, skin] = PALETTES[seed % PALETTES.length];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`shrink-0 rounded-full ${className}`}
      aria-hidden
    >
      <rect width="32" height="32" fill="#d9d4cb" />
      <path d="M4 32c1-7 6-10 12-10s11 3 12 10Z" fill={hair} />
      <circle cx="16" cy="14" r="6.5" fill={skin} />
      <path d="M9.2 13.5c0-5 3-7.7 6.8-7.7s6.8 2.7 6.8 7.7c-1.6-2.4-4.2-3.4-6.8-3.4s-5.2 1-6.8 3.4Z" fill={hair} />
    </svg>
  );
}

export function ProfileAvatar({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      className="shrink-0 rounded-[6px]"
      aria-hidden
    >
      <rect width="28" height="28" fill="#f7c600" />
      <rect x="20" width="8" height="28" fill="#f0453a" />
      <path d="M2 28c1-6 5-8.5 10.5-8.5S22 22 23 28Z" fill="#f2c62a" />
      <circle cx="13" cy="13" r="5.4" fill="#8a5336" />
      <path d="M7.6 12.2c0-4.6 2.4-7 5.6-7 2.8 0 5 1.8 5.4 5.4-1.2-1.4-3.2-2.2-5.4-2.2-2 0-4.2.8-5.6 3.8Z" fill="#241a14" />
      <circle cx="12" cy="4.4" r="2.2" fill="#241a14" />
      <rect x="9.6" y="11.8" width="7" height="2.6" rx="1.2" fill="#2a2420" />
    </svg>
  );
}
