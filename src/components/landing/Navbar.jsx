"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import Logo from "@/components/Logo";
import { BRAND } from "./config";
import { Btn } from "./ui";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonial" },
  { label: "Contact", href: "#company" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-20 mx-auto flex h-[88px] w-full max-w-[1280px] items-start justify-between pt-6">
      <Link href="/" className="flex items-center gap-[10px]" aria-label={`${BRAND} home`}>
        <Logo size={40} />
        <span className="text-[24px] leading-10 tracking-[-0.02em] text-head">{BRAND}</span>
      </Link>

      <nav aria-label="Primary" className="hidden h-10 items-center gap-10 lg:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-md text-[15px] tracking-[-0.005em] text-head/90 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-5 lg:flex">
        <Btn variant="light" href="/dashboard" className="!h-9 !px-5">
          Sign up
        </Btn>
        <Btn variant="dark" href="#pricing" className="!h-9 !px-5">
          Start free trial
        </Btn>
      </div>

      <button
        type="button"
        className="mt-[2px] flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-[0_3px_8px_-2px_rgba(40,30,20,.15)] lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseSquare size={20} color="#323234" /> : <HambergerMenu size={20} color="#323234" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="pop-in absolute inset-x-0 top-[72px] rounded-3xl bg-white p-3 shadow-[0_20px_40px_-12px_rgba(40,30,20,.25)] lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[16px] text-head hover:bg-fog"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 flex gap-3 p-2">
            <Btn variant="light" href="/dashboard" className="flex-1 !h-10">
              Sign up
            </Btn>
            <Btn variant="dark" href="#pricing" className="flex-1 !h-10" onClick={() => setOpen(false)}>
              Start free trial
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}
