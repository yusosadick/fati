import { Verify } from "iconsax-react";
import { Btn, Pill } from "./ui";
import BrowserFrame from "./BrowserFrame";

const TRUST = ["14-day free trial", "No credit card needed", "50k+ active users", "Rated 4.8 on G2 & Capterra"];

/**
 * Hero + product window.
 * `children` is rendered inside the browser frame (the dashboard preview).
 */
export default function Hero({ children }) {
  return (
    <section className="relative flex flex-col items-center px-0 pb-0 pt-[56px] text-center sm:pt-[72px]">
      <Pill>CRM &amp; business management for SaaS teams</Pill>

      <h1 className="mt-6 max-w-[900px] text-balance text-[42px] font-semibold leading-[1.03] tracking-[-0.034em] text-ink sm:text-[58px] xl:text-[72px]">
        Run sales, customers and projects in one place
      </h1>

      <p className="mt-6 max-w-[640px] text-pretty text-[17px] leading-[1.6] text-body sm:text-[20px]">
        Manage your pipeline, customers and projects in one workspace, with live insights that show you what to
        do next.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Btn variant="brand" href="/dashboard" className="!h-12 !px-7 !text-[15px]">
          Start free trial
        </Btn>
        <Btn variant="light" href="#company" className="!h-12 !px-7 !text-[15px]">
          Book a demo
        </Btn>
      </div>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] font-medium tracking-[-0.005em] text-head/90">
        {TRUST.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <Verify size={18} variant="Bold" color="#1fa86b" aria-hidden />
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-14 w-full xl:mt-[64px]">
        <BrowserFrame>{children}</BrowserFrame>
      </div>
    </section>
  );
}
