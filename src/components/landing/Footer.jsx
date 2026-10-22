import Link from "next/link";
import { Flash, Headphone, Layer, ShieldTick } from "iconsax-react";
import Logo from "@/components/Logo";
import { BRAND } from "./config";
import { Btn } from "./ui";

const GUTTER = "px-5 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)]";

const ASSURANCE = [
  { icon: Layer, title: "One workspace", copy: "Customers, teams, operations" },
  { icon: Flash, title: "Made to stay simple", copy: "Clear tools, not complicated" },
  { icon: Headphone, title: "Built for customers", copy: "Pipeline, customers and projects" },
  { icon: ShieldTick, title: "Security by design", copy: "A core part of how we build" },
];

const EXPLORE = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    d: "M5 9.5h3V19H5V9.5Zm1.5-4.8a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 9.5h2.9v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.6 2 3.6 4.6V19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5Z",
  },
  {
    label: "X",
    d: "M17.6 4h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.5L6.5 20H3.7l6.5-7.5L3.3 4H9l4 5 4.6-5Zm-1 14.3h1.5L8 5.6H6.4l10.2 12.7Z",
  },
  {
    label: "Instagram",
    d: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm4 4.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm0 1.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm4.2-3.5a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z",
  },
  {
    label: "Facebook",
    d: "M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3A21 21 0 0 0 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3h2.5V21h3Z",
  },
];

function ArrowUpRight({ className = "" }) {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden className={className}>
      <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
      <path d="M6.5 12.5 12.5 6.5M7.5 6.5h5v5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const linkCls =
  "rounded-md transition-colors hover:text-[#b85600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

/** Footer: assurance strip, a rounded panel with links and a giant wordmark, then the legal line. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="company" className="scroll-mt-6 bg-white text-ink" aria-label={`${BRAND} footer`}>
      <section aria-label={`Why teams choose ${BRAND}`} className={`${GUTTER} pb-8 pt-10 sm:pb-10 sm:pt-16`}>
        <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {ASSURANCE.map(({ icon: Icon, title, copy }) => (
            <li key={title} className="flex items-start gap-3.5 sm:items-center">
              <Icon size={34} variant="Linear" color="#e17200" aria-hidden className="mt-0.5 shrink-0 sm:mt-0" />
              <span>
                <strong className="font-display block text-[15px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink sm:text-[16px]">{title}</strong>
                <small className="mt-0.5 block text-[14px] leading-[1.45] text-body">{copy}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="px-3 sm:px-5">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[30px] bg-fog sm:rounded-[44px]">
          <div aria-hidden className="pointer-events-none absolute -right-28 -top-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(253,208,160,.55),rgba(253,208,160,0))]" />
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 px-6 pb-10 pt-10 sm:px-10 lg:grid-cols-[1.35fr_.7fr_1.1fr_1.2fr] lg:gap-x-10 lg:px-[clamp(32px,5vw,80px)] lg:pt-14">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" aria-label={`${BRAND} home`} className={`inline-flex items-center gap-3 ${linkCls}`}>
                <Logo size={40} />
                <span className="font-display text-[24px] font-semibold leading-none tracking-[-0.035em] sm:text-[28px]">{BRAND}</span>
              </Link>
              <p className="font-display mt-4 text-[20px] font-medium leading-[1.2] tracking-[-0.03em] sm:mt-5 sm:text-[24px]">
                Every lead. Every customer.
                <br />
                One calm workspace.
              </p>
              <p className="mt-3 max-w-[320px] text-[15px] leading-[1.6] text-body">
                {BRAND} is the CRM and business management platform for owners and companies: customers, teams and projects together.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-col items-start">
              <h2 className="mb-3 text-[14px] font-semibold text-ink">Explore</h2>
              {EXPLORE.map((l) => (
                <a key={l.label} href={l.href} className={`py-1.5 text-[15px] leading-[1.4] text-body ${linkCls}`}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div>
              <h2 className="mb-3 text-[14px] font-semibold text-ink">Stay connected</h2>
              <ul className="flex max-w-[260px] flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a
                      href="#"
                      aria-label={`${BRAND} on ${s.label}`}
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-3.5 text-[13px] font-medium leading-none shadow-[0_0_0_1px_rgba(40,30,20,.07),0_1px_2px_rgba(40,30,20,.04)] transition-[box-shadow,color] hover:text-[#b85600] hover:shadow-[0_0_0_1px_rgba(225,114,0,.4),0_6px_14px_-8px_rgba(225,114,0,.5)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#e17200" aria-hidden>
                        <path d={s.d} />
                      </svg>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(40,30,20,.06),0_24px_40px_-28px_rgba(225,114,0,.45)] lg:col-span-1">
              <p className="font-display t-h3 font-semibold leading-[1.2] tracking-[-0.03em] text-ink">Ready when you are</p>
              <p className="mt-1.5 text-[15px] leading-[1.5] text-body">Explore the interface preview, or get in touch with us.</p>
              <div className="mt-5 flex flex-col gap-3">
                <Btn variant="brand" href="/dashboard" className="w-full">
                  Open preview
                </Btn>
                <Btn variant="light" href="/dashboard" className="w-full">
                  Contact FATI
                </Btn>
              </div>
            </div>
          </div>

          {/* Wordmark: smaller, and cropped by the panel's bottom edge so the lower part of the letters is cut off. */}
          <div aria-hidden className="mx-6 mt-2 border-t border-black/[.08] sm:mx-10 lg:mx-[clamp(32px,5vw,80px)]">
            <div className="select-none overflow-hidden [container-type:inline-size]">
              <div className="h-[14.8cqw] overflow-hidden">
                <span
                  data-wordmark
                  style={{ fontFamily: "var(--font-wordmark), var(--font-display)", fontVariationSettings: '"opsz" 96' }}
                  className="block whitespace-nowrap bg-[linear-gradient(180deg,#b9845a_0%,#a8856c_52%,rgba(158,138,124,.5)_82%)] bg-clip-text pr-[0.025em] pt-[0.12em] text-center text-[16.9cqw] font-bold leading-[1] tracking-[-0.025em] text-transparent"
                >
                  {`${BRAND} Enterprise`.toLowerCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1380px] flex-col gap-1 px-6 pb-8 pt-5 text-[14px] leading-[1.5] text-body sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <span>
            {BRAND} &copy; {year}
          </span>
          <Link href="/about" className={`py-1.5 ${linkCls}`}>
            About us
          </Link>
        </div>
        <span>Built for owners and teams</span>
      </div>
    </footer>
  );
}
