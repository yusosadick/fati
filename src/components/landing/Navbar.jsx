"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { BRAND } from "./config";
import { Btn } from "./ui";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
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

/**
 * Floating glass navigation. The link track has a sliding indicator that follows the
 * section in view, the bar gains depth once the page scrolls, and on small screens
 * it opens into a sheet.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const trackRef = useRef(null);
  const linkRefs = useRef({});

  // Scrolled state.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Which section is in view: the last one whose top has passed 35% of the viewport.
  useEffect(() => {
    const els = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = null;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = `#${el.id}`;
      // Past the end of the last tracked section: nothing is active.
      const last = els[els.length - 1];
      if (last && last.getBoundingClientRect().bottom < line) current = null;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Position the indicator under the active link.
  const place = useCallback(() => {
    const el = active && linkRefs.current[active];
    const track = trackRef.current;
    if (!el || !track) return setPill((p) => ({ ...p, ready: false }));
    setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, [active]);
  useLayoutEffect(place, [place]);
  useEffect(() => {
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [place]);

  // Mobile sheet: close on Escape and when resizing up to desktop.
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
        <Link
          href="/"
          aria-label={`${BRAND} home`}
          className="flex items-center gap-2.5 rounded-full py-1 pr-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Logo size={38} />
          <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[24px]">{BRAND}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={trackRef} className="relative flex items-center gap-0.5 rounded-full bg-black/[.045] p-1">
            <span
              aria-hidden
              className={`absolute inset-y-1 rounded-full bg-white shadow-[0_0_0_1px_rgba(40,30,20,.06),0_4px_10px_-4px_rgba(40,30,20,.25)] transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(.23,1,.32,1)] ${
                pill.ready ? "opacity-100" : "opacity-0"
              }`}
              style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
            />
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  ref={(el) => {
                    linkRefs.current[l.href] = el;
                  }}
                  aria-current={active === l.href ? "location" : undefined}
                  className={`relative block rounded-full px-[18px] py-[11px] text-[15.5px] font-medium leading-none tracking-[-0.005em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    active === l.href ? "text-ink" : "text-body hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <Link
            href="/dashboard"
            className="rounded-full px-5 py-3 text-[15.5px] font-medium leading-none text-ink transition-colors hover:bg-black/[.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Sign in
          </Link>
          <Btn variant="brand" href="/dashboard" className="!h-11 !px-5 xl:!h-12 xl:!px-6">
            Start free trial
          </Btn>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[.05] text-ink transition-colors hover:bg-black/[.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Burger open={open} />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="pop-in absolute inset-x-0 top-[calc(100%-2px)] rounded-[28px] border border-white/70 bg-white/92 p-3 shadow-[0_24px_48px_-16px_rgba(60,40,20,.35)] backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href ? "location" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[16px] font-medium transition-colors hover:bg-black/[.04] ${
                      active === l.href ? "bg-black/[.045] text-ink" : "text-head"
                    }`}
                  >
                    {l.label}
                    {active === l.href && <span aria-hidden className="h-2 w-2 rounded-full bg-brand" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2 grid grid-cols-2 gap-3 border-t border-black/[.06] p-2 pt-4">
            <Btn variant="light" href="/dashboard" className="!h-12" onClick={() => setOpen(false)}>
              Sign in
            </Btn>
            <Btn variant="brand" href="/dashboard" className="!h-12" onClick={() => setOpen(false)}>
              Start free trial
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}
