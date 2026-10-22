"use client";

import { createElement, useEffect, useRef, useState } from "react";

/**
 * Restrained scroll reveal, scoped to the About page (no global CSS).
 * Content is fully visible on the server and without JS. After mount, only elements that start
 * below the fold are hidden, then eased in once when they scroll into view. Reduced motion: no-op.
 */
export default function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState("visible"); // visible | hidden | shown

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion =
    state === "visible"
      ? ""
      : `transition-[opacity,transform] duration-700 ease-[cubic-bezier(.23,1,.32,1)] ${
          state === "hidden" ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`;

  return createElement(
    as,
    { ref, className: `${motion} ${className}`, style: state === "shown" ? { transitionDelay: `${delay}ms` } : undefined, ...rest },
    children,
  );
}
