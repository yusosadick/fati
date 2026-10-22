"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Btn } from "@/components/landing/ui";

/*
 * About-page variant of the landing navigation. Same visual language (floating glass pill, section
 * links), but links point at "/#section" so they work from this route, and "About" is the current page.
 */
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about", current: true },
];

function Burger({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M3 6h14" className={`origin-center transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
      <path d="M3 10h14" className={`transition-opacity duration-150 ${open ? "opacity-0" : ""}`} />
      <path d="M3 14h14" className={`origin-center transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
    </svg>
  );
}

export default function AboutNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="relative z-20 mx-auto w-full max-w-[1280px] py-2.5 sm:py-3">
      <div
        className={`flex h-[58px] items-center justify-between gap-4 rounded-full border pl-3.5 pr-2.5 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 ease-out sm:h-[78px] sm:pl-5 ${
          scrolled || open
            ? "border-white/70 bg-white/80 shadow-[0_1px_0_rgba(255,255,255,.9)_inset,0_10px_30px_-12px_rgba(60,40,20,.28),0_2px_6px_-2px_rgba(60,40,20,.08)]"
            : "border-white/50 bg-white/55 shadow-[0_1px_0_rgba(255,255,255,.8)_inset,0_1px_2px_rgba(60,40,20,.05)]"
        }`}
      >
        <Link href="/" aria-label="Fati home" className="flex items-center gap-2.5 rounded-full py-1 pr-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          <Logo size={38} />
          <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[24px]">Fati</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full bg-black/[.045] p-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={l.current ? "page" : undefined}
                  className={`block rounded-full px-[18px] py-[11px] text-[15.5px] font-medium leading-none tracking-[-0.005em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    l.current ? "bg-white text-ink shadow-[0_0_0_1px_rgba(40,30,20,.06),0_4px_10px_-4px_rgba(40,30,20,.25)]" : "text-body hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <Link href="/dashboard" className="rounded-full px-5 py-3 text-[15.5px] font-medium leading-none text-ink transition-colors hover:bg-black/[.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Explore
          </Link>
          <Btn variant="brand" href="/dashboard" className="!h-11 !px-5 xl:!h-12 xl:!px-6">
            Open preview
          </Btn>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[.05] text-ink transition-colors hover:bg-black/[.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          aria-expanded={open}
          aria-controls="about-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Burger open={open} />
        </button>
      </div>

      {open && (
        <div id="about-mobile-menu" className="pop-in absolute inset-x-0 top-[calc(100%-2px)] rounded-[28px] border border-white/70 bg-white/92 p-3 shadow-[0_24px_48px_-16px_rgba(60,40,20,.35)] backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={l.current ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[16px] font-medium transition-colors hover:bg-black/[.04] ${l.current ? "bg-black/[.045] text-ink" : "text-head"}`}
                  >
                    {l.label}
                    {l.current && <span aria-hidden className="h-2 w-2 rounded-full bg-brand" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2 grid grid-cols-2 gap-3 border-t border-black/[.06] p-2 pt-4">
            <Btn variant="light" href="/dashboard" className="!h-12" onClick={() => setOpen(false)}>
              Explore
            </Btn>
            <Btn variant="brand" href="/dashboard" className="!h-12" onClick={() => setOpen(false)}>
              Open preview
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}
