import Link from "next/link";

export function Pill({ children, className = "" }) {
  return <span className={`pill ${className}`}>{children}</span>;
}

/** Link-or-button with the tactile variants from globals.css. */
export function Btn({ variant = "light", href, className = "", children, ...props }) {
  const cls = `btn btn-${variant} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}

/** Centered badge + heading + sub-copy used by most sections. */
export function SectionHead({ badge, title, sub, className = "", titleClass = "", id }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {badge && <Pill>{badge}</Pill>}
      <h2
        id={id}
        className={`mt-5 text-balance t-h2 font-semibold tracking-[-0.026em] text-ink ${titleClass}`}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-3 max-w-[620px] text-pretty t-lead text-body sm:mt-4">
          {sub}
        </p>
      )}
    </div>
  );
}
