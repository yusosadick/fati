// Small glyphs that iconsax doesn't ship (tiny triangles, hairline arrows, dots).
export function More({ size = 16, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden>
      <circle cx="3" cy="8" r="1.1" fill={color} />
      <circle cx="8" cy="8" r="1.1" fill={color} />
      <circle cx="13" cy="8" r="1.1" fill={color} />
    </svg>
  );
}

export function ArrowUp({ up = true }) {
  return (
    <svg width="5.5" height="5.5" viewBox="0 0 7 7" aria-hidden>
      {up ? (
        <path d="M3.5 1 6.3 5.5H.7Z" fill="#1fb85a" />
      ) : (
        <path d="M3.5 6 .7 1.5h5.6Z" fill="#e0373f" />
      )}
    </svg>
  );
}

export function ArrowUpRight({ size = 10, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M2 8 8 2M3.2 2H8v4.8" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FilterLines({ color = "#fff", size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 3.5h10M3.6 7h6.8M5.3 10.5h3.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChatDots() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 1.5a5.5 5.5 0 1 0 0 11c.9 0 1.7-.2 2.4-.6l2.1.6-.6-2.1A5.5 5.5 0 0 0 7 1.5Z" stroke="#8a867f" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="4.8" cy="7" r=".6" fill="#8a867f" />
      <circle cx="7" cy="7" r=".6" fill="#8a867f" />
      <circle cx="9.2" cy="7" r=".6" fill="#8a867f" />
    </svg>
  );
}

export function ArrowNE() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 9.5 9.5 2.5M3.8 2.5h5.7v5.7" stroke="#8a867f" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Rounded-square nav glyphs, drawn to match the Iconsax "linear / rounded" set.
const nav = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };

export function AnalyticsIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4.5" {...nav} />
      <path d="M8 16.5v-4M12 16.5V7.5M16 16.5v-6.5" {...nav} />
    </svg>
  );
}

export function MessagesIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2.5" y="4.5" width="19" height="15" rx="4.5" {...nav} />
      <path d="m7 9.5 5 3.5 5-3.5" {...nav} />
    </svg>
  );
}

export function HelpIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9.5" {...nav} />
      <path d="M9.4 9.6a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.8" {...nav} />
      <path d="M12 17.2h.01" {...nav} strokeWidth="1.8" />
    </svg>
  );
}

export function LogoutIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M9 3.5H7A4.5 4.5 0 0 0 2.5 8v8A4.5 4.5 0 0 0 7 20.5h2" {...nav} />
      <path d="M9 12h12.5M17.5 8l4 4-4 4" {...nav} />
    </svg>
  );
}

export function SortChevrons() {
  return (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" aria-hidden>
      <path d="M1 3.8 3.5 1.3 6 3.8M1 6.2l2.5 2.5L6 6.2" stroke="#6a665f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
