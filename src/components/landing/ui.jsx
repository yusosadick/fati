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
        className={`mt-[23px] text-balance text-[32px] font-[580] leading-[1.14] tracking-[-0.021em] text-head sm:text-[40px] xl:text-[44px] xl:leading-[52px] ${titleClass}`}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-[15px] max-w-[640px] text-pretty text-[16px] leading-6 tracking-[0.01em] text-body sm:leading-7">
          {sub}
        </p>
      )}
    </div>
  );
}
