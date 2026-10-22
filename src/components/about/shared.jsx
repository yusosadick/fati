import Reveal from "./Reveal";

/* Page-local building blocks. They reuse the landing's design tokens (colors, type scale, radii) without touching them. */

export const GUTTER = "px-5 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)]";
export const GAP = "pt-12 sm:pt-14 lg:pt-16 xl:pt-20";

/** Section wrapper: landing rhythm, anchor offset for the floating nav. */
export function Section({ id, labelledby, className = "", children }) {
  return (
    <section id={id} aria-labelledby={labelledby} className={`scroll-mt-28 ${GAP} ${className}`}>
      {children}
    </section>
  );
}

export function H2({ id, className = "", children }) {
  return (
    <h2 id={id} className={`text-balance t-h2 font-semibold tracking-[-0.026em] text-ink ${className}`}>
      {children}
    </h2>
  );
}

export function Lead({ className = "", children }) {
  return <p className={`text-pretty t-lead text-body ${className}`}>{children}</p>;
}

/** Honest availability label. Colors chosen for 4.5:1+ on their own tint. */
export function Status({ kind }) {
  const preview = kind === "preview";
  return (
    <span
      className={`inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-medium leading-none ${
        preview ? "bg-[#e6f6ee] text-[#126b47]" : "bg-[#fdeedd] text-[#8f4300]"
      }`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${preview ? "bg-[#1fb85a]" : "bg-[#e17200]"}`} />
      {preview ? "In preview" : "Planned"}
    </span>
  );
}

/** Soft gradient frame used by the landing FAQ, hub and stories sections. */
export function Frame({ className = "", children }) {
  return (
    <div
      className={`rounded-[28px] bg-[linear-gradient(180deg,#eceffb_0%,#f6f2f3_50%,#fde6d3_100%)] p-2.5 shadow-[0_30px_60px_-40px_rgba(225,114,0,.4),inset_0_0_0_1px_rgba(255,255,255,.85)] sm:rounded-[32px] sm:p-3.5 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({ icon: Icon, tone = "peach", size = 22 }) {
  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${tone === "peach" ? "bg-cream" : "bg-fog"}`}
    >
      <Icon size={size} variant="Bold" color="#e17200" />
    </span>
  );
}

export { Reveal };
