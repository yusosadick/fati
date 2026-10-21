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
        className={`mt-5 text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.026em] text-ink sm:text-[42px] xl:text-[52px] ${titleClass}`}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-4 max-w-[640px] text-pretty text-[16.5px] leading-[1.65] text-body sm:text-[18px]">
          {sub}
        </p>
      )}
    </div>
  );
}
