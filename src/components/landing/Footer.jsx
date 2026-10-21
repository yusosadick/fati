import Link from "next/link";
import Logo from "@/components/Logo";
import { BRAND } from "./config";

const COLS = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
  { title: "Resources", links: ["Documentation", "Help center", "Blog", "API reference", "Status page"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security", "Compliance", "Cookie settings"] },
];

const SOCIAL = [
  {
    label: "Facebook",
    d: "M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3A21 21 0 0 0 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3h2.5V21h3Z",
  },
  {
    label: "LinkedIn",
    d: "M5 9.5h3V19H5V9.5Zm1.5-4.8a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 9.5h2.9v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.6 2 3.6 4.600V19h-3v-4.600c0-1.100 0-2.500-1.500-2.500s-1.800 1.200-1.800 2.400V19h-3V9.500Z",
  },
  {
    label: "Instagram",
    d: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm4 4.600a3.400 3.400 0 1 0 0 6.800 3.400 3.400 0 0 0 0-6.800Zm0 1.800a1.600 1.600 0 1 1 0 3.200 1.600 1.600 0 0 1 0-3.200Zm4.200-3.500a.9.9 0 1 0 0 1.800.9.9 0 0 0 0-1.800Z",
  },
  {
    label: "X",
    d: "M17.600 4h2.800l-6.100 7 7.200 9h-5.600l-4.400-5.500L6.500 20H3.700l6.500-7.500L3.300 4H9l4 5 4.600-5Zm-1 14.300h1.500L8 5.600H6.400l10.200 12.700Z",
  },
];

export default function Footer() {
  return (
    <footer id="company" className="scroll-mt-6 bg-[#1b1b1d] text-white">
      <div className="px-5 pb-0 pt-14 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)] xl:pt-[84px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <Link href="/" className="-mt-[3px] flex items-center gap-[14px]" aria-label={`${BRAND} home`}>
              <Logo size={44} />
              <span className="text-[38px] leading-[44px] tracking-[-0.03em]">{BRAND}</span>
            </Link>
            <p className="mt-[34px] max-w-[420px] text-[15px] leading-6 text-white/90">
              The CRM and business management platform that helps SaaS teams sell more, serve better, and run
              smoothly.
            </p>
            <ul className="mt-[29px] flex gap-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[.08] transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                      <path d={s.d} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-[repeat(3,auto)] lg:gap-x-[100px]">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-[21px] font-normal leading-7 text-white">{c.title}</h3>
                <ul className="mt-[23px] flex flex-col gap-[14px]">
                  {c.links.map((l, i) => (
                    <li key={`${l}-${i}`}>
                      <a href="#" className="block whitespace-nowrap text-[15px] leading-6 text-white/65 transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-[35px] h-px max-w-[1160px] bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
        <p className="pb-[35px] pt-[37px] text-center text-[14px] leading-5 text-white/60">
          Copyright {"©"} 2026 {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
