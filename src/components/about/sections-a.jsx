import Image from "next/image";
import { Building3, Profile2User, Eye, Layer, Setting2, Briefcase, Hierarchy, Link21, Sms, Chart2, ArrowRight2 } from "iconsax-react";
import { Btn, Pill } from "@/components/landing/ui";
import BrowserFrame from "@/components/landing/BrowserFrame";
import { Section, H2, Lead, Reveal, Frame, IconTile } from "./shared";

/* ---- 1. Hero ----------------------------------------------------------- */
export function AboutHero() {
  return (
    <section aria-labelledby="about-title" className="relative flex flex-col items-center pt-8 text-center sm:pt-14 xl:pt-[72px]">
      <Pill>About FATI ENTERPRISE</Pill>

      <h1 id="about-title" className="hero-title mt-5 max-w-[880px] text-balance text-ink sm:mt-6">
        Building <span className="text-[#cc6500]">Smarter Ways</span>
        <br className="hidden sm:inline" /> to Do Business.
      </h1>

      <p className="hero-lede mt-4 max-w-[640px] text-pretty text-body sm:mt-5">
        At FATI ENTERPRISE, we believe businesses deserve modern solutions that simplify operations, strengthen
        organization, and create opportunities for sustainable growth.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4">
        <Btn variant="brand" href="/dashboard" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
          Explore the platform
        </Btn>
        <Btn variant="light" href="#who-we-are" className="sm:!h-12 sm:!px-7 sm:!text-[15px]">
          Meet the company
        </Btn>
      </div>

      <figure className="mt-10 w-full sm:mt-14 xl:mt-[64px]">
        <BrowserFrame>
          <Image
            src="/images/dashboard-preview.webp"
            alt="Preview of the Fati dashboard interface, shown with sample data"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-contain object-top xl:object-cover"
          />
        </BrowserFrame>
        <figcaption className="mt-3 text-[13px] leading-5 text-body">
          Interface preview with sample data. The platform is in active development.
        </figcaption>
      </figure>
    </section>
  );
}

/* ---- 2. Who we are ----------------------------------------------------- */
function Relationship() {
  return (
    <Frame>
      <div className="rounded-[22px] bg-white p-5 shadow-[0_0_0_1px_rgba(120,110,160,.08)] sm:rounded-[26px] sm:p-8">
        <div className="flex items-center gap-4">
          <IconTile icon={Building3} />
          <div className="leading-tight">
            <p className="font-display text-[18px] font-semibold tracking-[-0.02em] text-ink sm:text-[20px]">FATI ENTERPRISE</p>
            <p className="text-[14px] text-body">The company</p>
          </div>
        </div>

        <div aria-hidden className="relative ml-[21px] h-9 border-l-2 border-dashed border-[#e3d9cc]">
          <span className="absolute -bottom-1 -left-[7px] h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#e3d9cc]" />
        </div>

        <div className="rounded-2xl bg-cream p-4 sm:p-5">
          <div className="flex items-center gap-4">
            <IconTile icon={Layer} tone="white" />
            <div className="leading-tight">
              <p className="font-display text-[18px] font-semibold tracking-[-0.02em] text-ink sm:text-[20px]">Fati</p>
              <p className="text-[14px] text-body">Business management and CRM platform</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {["Business Owners", "Companies"].map((t) => (
              <li key={t} className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-head shadow-[0_0_0_1px_rgba(40,30,20,.06)]">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

export function WhoWeAre() {
  return (
    <Section id="who-we-are" labelledby="who-title">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
        <Reveal>
          <p className="mb-3 text-[14px] font-medium text-[#a84f00]">Who we are</p>
          <H2 id="who-title">A company built around how businesses actually run.</H2>
          <Lead className="mt-4 max-w-[520px]">
            FATI ENTERPRISE is a forward-looking organization building practical solutions for modern business
            operations. We focus on the everyday work of running a business: keeping customers organized, teams
            coordinated, and activity visible.
          </Lead>
          <Lead className="mt-4 max-w-[520px]">
            Fati is our business management and CRM platform. It is a product within FATI ENTERPRISE, designed to bring
            scattered business processes into one connected, subscription-based workspace.
          </Lead>
        </Reveal>
        <Reveal delay={120} className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
          <Relationship />
        </Reveal>
      </div>
    </Section>
  );
}

/* ---- 3. Problems ------------------------------------------------------- */
const PROBLEMS = [
  { icon: Link21, title: "Fragmented business processes", text: "Information and tasks end up spread across spreadsheets, chats and separate tools.", aim: "One connected workspace" },
  { icon: Eye, title: "Limited operational visibility", text: "Owners struggle to see what is happening across customers, staff and daily activity.", aim: "Clear oversight in one place" },
  { icon: Setting2, title: "Manual administration", text: "Repetitive admin work takes time away from the work that actually grows the business.", aim: "Organized, repeatable workflows" },
  { icon: Sms, title: "Disconnected customer information", text: "Customer details live in different places, so nobody has the full picture.", aim: "A single, shared customer record" },
  { icon: Hierarchy, title: "Coordinating staff and branches", text: "As teams and locations multiply, access, responsibility and communication get harder to manage.", aim: "Roles, permissions and branch structure" },
  { icon: Chart2, title: "Complexity as organizations grow", text: "Tools that suit one person rarely suit a company with many.", aim: "A platform that scales with you" },
];

export function Problems() {
  return (
    <Section id="problems" labelledby="problems-title">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-3 text-[14px] font-medium text-[#a84f00]">The problems we aim to solve</p>
          <H2 id="problems-title">Running a business should not mean running between tools.</H2>
          <Lead className="mt-4">
            Most businesses do not struggle for lack of effort. They struggle because the work is scattered. These are the
            challenges we are building Fati to address.
          </Lead>
        </Reveal>

        <ol className="rounded-[24px] bg-white px-5 shadow-[0_0_0_1px_rgba(40,30,20,.05),0_24px_48px_-36px_rgba(40,30,20,.3)] sm:rounded-[28px] sm:px-8">
          {PROBLEMS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50} className="flex gap-4 border-b border-black/[.06] py-5 last:border-b-0 sm:gap-5 sm:py-6">
              <IconTile icon={p.icon} />
              <div className="min-w-0">
                <h3 className="font-display text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[20px]">{p.title}</h3>
                <p className="mt-1 t-body text-body">{p.text}</p>
                <p className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8f4300] sm:text-[14px]">
                  <ArrowRight2 size={14} color="#8f4300" aria-hidden />
                  Our aim: {p.aim}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---- 4. Mission and vision --------------------------------------------- */
/* Proposed brand messaging, pending official approval by FATI ENTERPRISE. */
export function MissionVision() {
  return (
    <Section id="mission" labelledby="mission-title">
      <div className="mx-auto max-w-[720px] text-center">
        <H2 id="mission-title">Where we are going, and why.</H2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-5">
        <Reveal className="flex flex-col rounded-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(40,30,20,.05),0_24px_48px_-36px_rgba(40,30,20,.3)] sm:rounded-[28px] sm:p-9">
          <IconTile icon={Briefcase} />
          <p className="mt-6 text-[14px] font-medium text-[#a84f00]">Our mission</p>
          <p className="font-display mt-2 text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[30px]">
            Make modern business management more accessible, organized, and effective.
          </p>
          <p className="mt-4 t-body text-body">For entrepreneurs and organizations that want practical tools to run their operations with confidence.</p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col rounded-[24px] bg-cream p-6 shadow-[0_0_0_1px_rgba(225,114,0,.1)] sm:rounded-[28px] sm:p-9">
          <IconTile icon={Eye} tone="white" />
          <p className="mt-6 text-[14px] font-medium text-[#8f4300]">Our vision</p>
          <p className="font-display mt-2 text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[30px]">
            A future where businesses grow confidently through connected, scalable digital solutions.
          </p>
          <p className="mt-4 t-body text-head/80">We want growth to feel manageable, whether a business has one owner or many branches.</p>
        </Reveal>
      </div>
      <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-5 text-body">Draft company messaging, pending approval by FATI ENTERPRISE.</p>
    </Section>
  );
}
