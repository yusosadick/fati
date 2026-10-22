import AboutNav from "@/components/about/AboutNav";
import AboutFooter from "@/components/about/AboutFooter";
import WhoWeServe from "@/components/about/WhoWeServe";
import { GUTTER } from "@/components/about/shared";
import { AboutHero, WhoWeAre, Problems, MissionVision } from "@/components/about/sections-a";
import { WhatWeDo, Values, WhyFati, Future, AboutCta } from "@/components/about/sections-b";

export const metadata = {
  title: "About FATI ENTERPRISE",
  description:
    "FATI ENTERPRISE is building Fati, a business management and CRM platform for business owners and growing companies. Learn who we are, what we aim to solve, and where we are going.",
};

export default function AboutPage() {
  return (
    // `landing-root` reuses the landing's existing typography and canvas; nothing global is modified.
    <div className="landing-root">
      <div className="relative overflow-x-clip bg-canvas">
        <div aria-hidden className="hero-stairs pointer-events-none absolute inset-x-0 top-0 h-[650px]" />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-[15px] focus:font-medium focus:text-ink focus:shadow-[0_0_0_2px_#e17200,0_12px_24px_-8px_rgba(0,0,0,.3)]"
        >
          Skip to main content
        </a>

        <div className={`pointer-events-none sticky top-0 z-30 ${GUTTER}`}>
          <div className="pointer-events-auto">
            <AboutNav />
          </div>
        </div>

        <main id="main" className={`relative ${GUTTER}`}>
          <div className="mx-auto max-w-[1280px]">
            <AboutHero />
            <WhoWeAre />
            <Problems />
            <MissionVision />
            <WhatWeDo />
            <WhoWeServe />
            <Values />
            <WhyFati />
            <Future />
            <AboutCta />
          </div>
        </main>

        <AboutFooter />
      </div>
    </div>
  );
}
