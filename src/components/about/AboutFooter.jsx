import Link from "next/link";
import { Flash, Headphone, Layer, ShieldTick } from "iconsax-react";
import Logo from "@/components/Logo";
import { BRAND } from "@/components/landing/config";
import { Btn } from "@/components/landing/ui";

const GUTTER = "px-5 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)]";

const ASSURANCE = [
  { icon: Layer, title: "One connected workspace", copy: "Customers, teams and operations together" },
  { icon: Flash, title: "Made to stay simple", copy: "Clear tools, not complicated ones" },
  { icon: Headphone, title: "Built around customers", copy: "Shaped by what owners really need" },
  { icon: ShieldTick, title: "Security in mind", copy: "A core part of how we design" },
];

const COMPANY = [
  { label: "Who we are", href: "/about#who-we-are" },
  { label: "Mission and vision", href: "/about#mission" },
  { label: "Our values", href: "/about#values" },
  { label: "Contact", href: "/#company" },
];

const EXPLORE = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Customers", href: "/#testimonial" },
  { label: "FAQ", href: "/#faq" },
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
  "rounded-md transition-colors hover:text-[#a84f00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

/** Footer: assurance strip, a rounded panel with links and a giant wordmark, then the legal line. */
export default function AboutFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="scroll-mt-6 bg-white text-ink" aria-label={`${BRAND} footer`}>
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
                FATI ENTERPRISE is the company building {BRAND}, a business management and CRM platform for owners and growing companies.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-col items-start">
              <h2 className="mb-3 text-[14px] font-semibold text-ink">Explore</h2>
              {EXPLORE.map((l) => (
                <Link key={l.label} href={l.href} className={`py-1.5 text-[15px] leading-[1.4] text-body ${linkCls}`}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Company" className="flex flex-col items-start">
              <h2 className="mb-3 text-[14px] font-semibold text-ink">Company</h2>
              {COMPANY.map((l) => (
                <Link key={l.label} href={l.href} className={`py-1.5 text-[15px] leading-[1.4] text-body ${linkCls}`}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="col-span-2 rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(40,30,20,.06),0_24px_40px_-28px_rgba(225,114,0,.45)] lg:col-span-1">
              <p className="font-display t-h3 font-semibold leading-[1.2] tracking-[-0.03em] text-ink">Ready when you are</p>
              <p className="mt-1.5 text-[15px] leading-[1.5] text-body">Explore the interface preview, or get in touch.</p>
              <div className="mt-5 flex flex-col gap-3">
                <Btn variant="brand" href="/dashboard" className="w-full">
                  Explore the platform
                </Btn>
                <Btn variant="light" href="/#company" className="w-full">
                  Contact us
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
            &copy; {year} FATI ENTERPRISE
          </span>
        </div>
        <span>Business management and CRM</span>
      </div>
    </footer>
  );
}
