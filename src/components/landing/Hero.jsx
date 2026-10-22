import { Verify, Profile2User, ArrowRight2 } from "iconsax-react";
import { Btn } from "./ui";
import { BRAND } from "./config";
import BrowserFrame from "./BrowserFrame";

const TRUST = ["14-day free trial", "No credit card needed", "50k+ active users", "Rated 4.8 on G2 & Capterra"];

/**
 * Hero + product window.
 * `children` is rendered inside the browser frame (the dashboard preview).
 */
export default function Hero({ children }) {
  return (
    <section className="relative flex flex-col items-center px-0 pb-0 pt-8 text-center sm:pt-14 xl:pt-[72px]">
      <a
        href="#features"
        className="hero-chip group inline-flex max-w-full items-center gap-2 rounded-[9px] bg-white py-1.5 pl-1.5 pr-3 text-[12.5px] font-medium text-ink shadow-[0_0_0_1px_rgba(40,30,20,.06),0_4px_12px_-6px_rgba(40,30,20,.18)] transition-shadow hover:shadow-[0_0_0_1px_rgba(225,114,0,.35),0_8px_18px_-8px_rgba(225,114,0,.4)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand sm:gap-2.5 sm:text-[14px]"
      >
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] bg-cream px-2 py-1 text-[12px] font-medium leading-none text-[#b85600] sm:px-2.5 sm:text-[13px]">
          <Profile2User size={14} color="#b85600" aria-hidden />
          Meet {BRAND}
        </span>
        <span className="min-w-0 truncate">
          <span className="sm:hidden">Your all-in-one CRM</span>
          <span className="hidden sm:inline">Your CRM for sales, customers and projects</span>
        </span>
        <ArrowRight2 size={14} color="#323234" aria-hidden className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>

      <h1 className="hero-title mt-5 max-w-[880px] text-balance text-ink sm:mt-6">
        Run sales, customers and projects <span className="text-brand">in one place</span>
      </h1>

      <p className="hero-lede mt-4 max-w-[600px] text-pretty text-body sm:mt-5">
        Manage your pipeline, customers and projects in one workspace, with live insights that show you what to
        do next.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4">
        <Btn variant="brand" href="/dashboard" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
          Start free trial
        </Btn>
        <Btn variant="light" href="#company" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
          Book a demo
        </Btn>
      </div>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] sm:mt-10 sm:gap-x-8 sm:gap-y-3 sm:text-[15px] font-medium tracking-[-0.005em] text-head/90">
        {TRUST.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <Verify size={16} variant="Bold" color="#1fa86b" aria-hidden />
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-10 w-full sm:mt-14 xl:mt-[64px]">
        <BrowserFrame>{children}</BrowserFrame>
      </div>
    </section>
  );
}
