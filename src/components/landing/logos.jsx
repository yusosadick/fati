// Fictional customer logos used for the "trusted by" row and the customer stories.
const tone = "#55545a";

export function Wordmark({ children, className = "text-[27px]" }) {
  return (
    <span
      className={`bg-gradient-to-b from-[#8f8e93] to-[#48474c] bg-clip-text font-bold leading-[1.15] tracking-[-0.035em] text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

export const LOGOS = [
  {
    name: "Boltshift",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
        <defs>
          <linearGradient id="g-bolt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a8a8e" />
            <stop offset="1" stopColor="#3f3e43" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19.5" fill="url(#g-bolt)" />
        <path d="M22.5 8 12.5 22h6.2L17 32l10.5-14.5h-6.4L22.5 8Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Lightbox",
    icon: (
      <svg width="36" height="40" viewBox="0 0 36 40" aria-hidden>
        <path d="M18 2 33 10.5v19L18 38 3 29.5v-19L18 2Z" fill="#8d8c91" />
        <path d="M18 2 33 10.5 18 19 3 10.5 18 2Z" fill="#d9d9dc" />
        <path d="M18 19v19L3 29.5v-19L18 19Z" fill="#6a696e" />
        <path d="M18 19 33 10.5v19L18 38V19Z" fill="#4e4d52" />
      </svg>
    ),
  },
  {
    name: "FeatherDev",
    icon: (
      <svg width="36" height="40" viewBox="0 0 36 40" aria-hidden fill="none" stroke={tone} strokeWidth="3.4" strokeLinecap="round">
        <path d="M6 9h24M2 16.5h28M8 24h24M4 31.5h22" />
      </svg>
    ),
  },
  {
    name: "Orbitly",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
        <path d="M20 1.5 36.5 11v18L20 38.5 3.5 29V11L20 1.5Z" fill="#5a595e" />
        <path d="M20 9 30 14.8v10.4L20 31 10 25.2V14.8L20 9Z" fill="#fff" />
        <path d="M20 14.5 25.2 17.5v5L20 25.5l-5.2-3v-5l5.2-3Z" fill="#5a595e" />
      </svg>
    ),
  },
];
