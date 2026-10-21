import Image from "next/image";
import { BRAND } from "./config";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Clients from "./Clients";
import Capabilities from "./Capabilities";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Integrations from "./Integrations";
import Insights from "./Insights";
import Footer from "./Footer";

const GUTTER = "px-5 sm:px-10 xl:px-[clamp(40px,calc(40px+(100vw-1280px)*0.1),80px)]";

/** Full-bleed landing page: a sticky nav, then sections centred in a 1280px column. */
export default function Landing() {
  return (
    <div className="landing-root">
      {/* overflow-x-clip (not hidden) so the nav can stay sticky */}
      <div className="relative overflow-x-clip bg-canvas">
        <div aria-hidden className="hero-stairs pointer-events-none absolute inset-x-0 top-0 h-[650px]" />

        <div className={`sticky top-0 z-30 bg-canvas/80 backdrop-blur-md ${GUTTER}`}>
          <Navbar />
        </div>

        <div className={`relative ${GUTTER}`}>
          <div className="mx-auto max-w-[1280px]">
            <Hero>
              <Image
                src="/images/dashboard-preview.webp"
                alt="The Fati dashboard: revenue chart, sales performance gauge and lead table"
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-contain object-top xl:object-cover"
              />
            </Hero>
            <Clients />
            <Capabilities />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Faq />
          </div>
        </div>
        <div className="mt-20">
          <Integrations />
          <div className={`bg-tint ${GUTTER}`}>
            <div className="mx-auto max-w-[1280px]">
              <Insights brand={BRAND} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
