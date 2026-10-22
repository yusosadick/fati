"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "./config";
import { SectionHead } from "./ui";
import { ALL_LOGOS, Wordmark } from "./logos";

/*
 * ILLUSTRATIVE CONTENT, NOT CUSTOMER STORIES. Fati has no customers to quote yet, so each entry is a
 * labeled persona describing an aim of the product. There are no invented names, attributed quotes or
 * statistics. Photos are free-licence stock portraits (Pexels) and do not depict real Fati users.
 * `company` only selects a sample logo mark. Replace with real, consented customer stories after launch.
 */
const STORIES = [
  {
    id: "amara",
    name: "Sales lead",
    role: "Illustrative persona",
    company: "Boltshift",
    photo: "/images/people/amara.jpg",
    pos: "50% 30%",
    quote: "A sales lead sees every lead and deal in one view, instead of juggling spreadsheets and chasing updates across tools and inboxes.",
    stats: [["1 view", "Aim: every deal"], ["Fewer", "Aim: missed follow-ups"]],
  },
  {
    id: "daniel",
    name: "Founder",
    role: "Illustrative persona",
    company: "Lightbox",
    photo: "/images/people/daniel.jpg",
    pos: "50% 20%",
    quote: "A founder spots at-risk accounts early, using one customer timeline instead of scattered notes.",
    stats: [["Earlier", "Aim: spotting at-risk accounts"], ["Simpler", "Aim: onboarding customers"]],
  },
  {
    id: "tolu",
    name: "Operations lead",
    role: "Illustrative persona",
    company: "FeatherDev",
    photo: "/images/people/tolu.jpg",
    pos: "62% 30%",
    quote: "An operations lead keeps projects, customers and invoices in one workspace, with less time spent chasing updates.",
    stats: [["1 place", "Aim: projects and customers"], ["Less", "Aim: time spent on admin"]],
  },
  {
    id: "marcus",
    name: "Customer success lead",
    role: "Illustrative persona",
    company: "Orbitly",
    photo: "/images/people/marcus.jpg",
    pos: "50% 30%",
    quote: "A customer success lead works from the same customer record as sales and support, so handoffs stay smooth.",
    stats: [["1 record", "Aim: shared by every team"], ["Faster", "Aim: handoffs between teams"]],
  },
  {
    id: "kemi",
    name: "Revenue operations lead",
    role: "Illustrative persona",
    company: "Northwind",
    photo: "/images/people/kemi.jpg",
    pos: "58% 28%",
    quote: "A revenue operations lead sees where the quarter is heading, without a Friday scramble through spreadsheets.",
    stats: [["Clearer", "Aim: pipeline forecasts"], ["Quicker", "Aim: reporting"]],
  },
  {
    id: "imani",
    name: "Success manager",
    role: "Illustrative persona",
    company: "Stackline",
    photo: "/images/people/imani.jpg",
    pos: "50% 30%",
    quote: "A success manager is reminded of follow-ups at the right moment, so no customer slips through.",
    stats: [["On time", "Aim: renewal follow-ups"], ["Timely", "Aim: replies to customers"]],
  },
  {
    id: "zara",
    name: "Business owner",
    role: "Illustrative persona",
    company: "Harbor",
    photo: "/images/people/zara.jpg",
    pos: "50% 28%",
    quote: "A small business owner moves from a shared inbox and a spreadsheet to a real pipeline, without a rebuild as the business grows.",
    stats: [["Quick", "Aim: getting started"], ["Room", "Aim: to grow without a rebuild"]],
  },
].map((s) => ({ ...s, logo: ALL_LOGOS.find((l) => l.name === s.company) }));

// Collage design canvas, in px. Every tile is positioned as a percentage of it, so
// the whole composition scales with the viewport and keeps its proportions.
const CW = 1500;
const CH = 640;
const SLOTS = [
  // far left, stack left (small over tall), stack right, far right. All fully inside the canvas.
  { x: 0, y: 150, w: 170, h: 300 },
  { x: 194, y: 20, w: 220, h: 210 },
  { x: 194, y: 254, w: 220, h: 330 },
  { x: 1086, y: 20, w: 220, h: 210 },
  { x: 1086, y: 254, w: 220, h: 330 },
  { x: 1330, y: 150, w: 170, h: 300 },
];
const CENTER = { x: 438, y: 82, w: 624, h: 440 };
const WAVE = [6, 14, 22, 10, 28, 18, 8, 26, 14, 32, 20, 10, 24, 16, 30, 12, 22, 8, 26, 18, 34, 14, 20, 10, 28, 16, 24, 12, 30, 18, 8, 22, 14, 26, 10, 20, 32, 16, 24, 12];

const pct = (v, total) => `${(v / total) * 100}%`;
const place = ({ x, y, w, h }) => ({ left: pct(x, CW), top: pct(y, CH), width: pct(w, CW), height: pct(h, CH) });

function Photo({ story, sizes, className = "" }) {
  return (
    <Image
      src={story.photo}
      alt=""
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      style={{ objectPosition: story.pos }}
    />
  );
}

function Logo({ logo, className = "text-[18px]", size = "[&_svg]:h-6" }) {
  return (
    <span className={`flex items-center gap-2 [&_svg]:w-auto ${size}`}>
      {logo.icon}
      <Wordmark className={className}>{logo.name}</Wordmark>
    </span>
  );
}

/** A selectable photo tile, absolutely placed on the collage canvas. */
function Tile({ story, slot, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Read the ${story.name} scenario`}
      style={place(slot)}
      className="pop-in group absolute overflow-hidden rounded-[1.75cqw] bg-fog shadow-[0_0_0_1px_rgba(40,30,20,.05),0_1.1cqw_2cqw_-1.4cqw_rgba(40,30,20,.35)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_0_2px_rgba(225,114,0,.5),0_1.5cqw_2.5cqw_-1.4cqw_rgba(225,114,0,.45)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
    >
      <Photo story={story} sizes="(min-width: 1024px) 18vw, 25vw" className="transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span aria-hidden className="absolute inset-x-[7%] bottom-[5%] translate-y-1 text-left text-[max(12px,.85cqw)] font-medium leading-tight text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {story.name}
        <span className="block font-normal text-white/80">{story.role}</span>
      </span>
    </button>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const s = STORIES[active];
  // The other six stories, in order after the active one, fill the slots left to right.
  const others = [1, 2, 3, 4, 5, 6].map((k) => STORIES[(active + k) % STORIES.length]);
  const pick = (id) => setActive(STORIES.findIndex((x) => x.id === id));

  return (
    <section id="testimonial" aria-labelledby="proof-title" className="scroll-mt-6 pt-12 sm:pt-14 lg:pt-16 xl:pt-20">
      <SectionHead
        badge="Illustrative scenarios"
        title="Built for teams that sell and ship"
        sub={`From two-person startups to growing companies: how teams could use ${BRAND}. Illustrative scenarios, not customer quotes.`}
        id="proof-title"
      />

      {/* Desktop collage: wider than the text column but always inside the page margins. The centre tile is the selected story. */}
      <div className="relative mt-7 hidden xl:mt-9 xl:block">
        <div className="relative left-1/2 w-[min(1480px,calc(100vw-96px))] -translate-x-1/2 [container-type:inline-size]">
          <div aria-hidden className="pointer-events-none absolute -inset-x-[3%] inset-y-[4%] bg-[radial-gradient(55%_55%_at_50%_48%,rgba(253,226,200,.7),rgba(238,240,251,.45)_55%,transparent_78%)]" />
          <div className="relative w-full" style={{ aspectRatio: `${CW} / ${CH}` }}>
            {SLOTS.map((slot, i) => (
              <Tile key={`${i}-${others[i].id}`} story={others[i]} slot={slot} onSelect={() => pick(others[i].id)} />
            ))}

            <div
              style={place(CENTER)}
              className="absolute overflow-hidden rounded-[2cqw] bg-fog shadow-[0_0_0_1px_rgba(40,30,20,.05),0_2.6cqw_4.4cqw_-2.4cqw_rgba(40,30,20,.5)]"
            >
              {STORIES.map((st, i) => (
                <div key={st.id} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-500 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}>
                  <Photo story={st} sizes="(min-width: 1024px) 42vw, 100vw" />
                </div>
              ))}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/50 to-transparent" />
              <div key={s.id} className="pop-in absolute bottom-[4.4%] left-[3.7%] rounded-[1.1cqw] bg-white/90 px-[1.4cqw] py-[.85cqw] shadow-[0_10px_24px_-12px_rgba(0,0,0,.4)] backdrop-blur-md">
                <p className="text-[max(14px,1.07cqw)] font-medium leading-snug tracking-[-0.01em] text-head">{s.name}</p>
                <p className="text-[max(12px,.88cqw)] leading-snug text-body">{s.role}</p>
              </div>
            </div>

            {/* Pulse bar under the centre tile, like a call waveform. Decorative. */}
            <div aria-hidden className="absolute flex items-center justify-between" style={{ left: pct(CENTER.x + 120, CW), width: pct(CENTER.w - 240, CW), top: pct(548, CH), height: pct(52, CH) }}>
              {WAVE.map((h, i) => (
                <span key={i} className="wave-bar block rounded-full bg-[#1a1916]" style={{ width: "max(2px,.2cqw)", height: `${h * 0.095}cqw`, animationDelay: `${i * 70}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and tablet: one big photo, a thumbnail strip underneath. */}
      <div className="mx-auto mt-6 max-w-[640px] xl:hidden">
        <div className="relative aspect-[4/3] max-h-[440px] w-full overflow-hidden rounded-[22px] sm:aspect-[16/10] sm:rounded-[26px] bg-fog shadow-[0_0_0_1px_rgba(40,30,20,.05),0_28px_50px_-30px_rgba(40,30,20,.5)]">
          {STORIES.map((st, i) => (
            <div key={st.id} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-500 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}>
              <Photo story={st} sizes="(min-width: 640px) 640px, 100vw" />
            </div>
          ))}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
          <div key={s.id} className="pop-in absolute inset-x-3 bottom-3 rounded-xl bg-white/90 px-3 py-2 backdrop-blur-md">
            <p className="text-[15px] font-medium leading-5 text-head">{s.name}</p>
            <p className="text-[13px] leading-4 text-body">{s.role}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5 sm:gap-2">
          {STORIES.map((st, i) => (
            <button
              key={st.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Read the ${st.name} scenario`}
              aria-pressed={i === active}
              className={`relative aspect-square overflow-hidden rounded-xl transition-[box-shadow,opacity] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                i === active ? "shadow-[0_0_0_2px_var(--color-brand)]" : "opacity-70 shadow-[0_0_0_1px_rgba(40,30,20,.08)]"
              }`}
            >
              <Photo story={st} sizes="14vw" />
            </button>
          ))}
        </div>
      </div>

      {/* Trusted by companies */}
      <div className="mt-7 flex flex-col items-center gap-4 text-center sm:mt-9">
        <p className="text-[15px] leading-6 text-body">
          <span className="font-medium text-head">Built for owners and growing companies.</span> Scenarios, logos and figures are illustrative.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          {ALL_LOGOS.slice(0, 5).map((l) => (
            <li key={l.name}>
              <Logo logo={l} />
            </li>
          ))}
        </ul>
      </div>

      {/* The selected story. */}
      <div
        role="region"
        aria-live="polite"
        aria-label={`${s.name} scenario`}
        className="mx-auto mt-8 grid max-w-[1080px] sm:mt-10 grid-cols-1 gap-5 rounded-[32px] bg-[linear-gradient(180deg,#eceffb_0%,#f6f2f3_50%,#fde6d3_100%)] p-3 shadow-[0_30px_60px_-40px_rgba(225,114,0,.4),inset_0_0_0_1px_rgba(255,255,255,.85)] sm:p-4 lg:grid-cols-[minmax(0,1fr)_268px]"
      >
        <figure className="relative flex min-h-[280px] flex-col justify-between rounded-[24px] bg-white p-5 shadow-[0_0_0_1px_rgba(120,110,160,.08)] sm:p-8">
          <svg aria-hidden width="40" height="32" viewBox="0 0 40 32" fill="#e17200" className="opacity-90">
            <path d="M0 32V19C0 8.500 5.500 2 15 0l1.500 4.500C11 6.500 9 10 9 14h7v18H0Zm23 0V19C23 8.500 28.500 2 38 0l1.500 4.500C34 6.500 32 10 32 14h7v18H23Z" />
          </svg>
          <blockquote key={s.id} className="pop-in font-display mt-4 text-pretty t-quote font-medium tracking-[-0.022em] text-ink">
            {s.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
            <div className="flex items-center gap-[14px]">
              <span className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_2px_#fff,0_0_0_3px_rgba(225,114,0,.45)]">
                <Image src={s.photo} alt="" fill sizes="52px" className="object-cover" style={{ objectPosition: s.pos.replace(/ .*/, " 24%") }} />
              </span>
              <div>
                <p className="font-display t-h3 font-semibold leading-6 tracking-[-0.02em] text-ink">{s.name}</p>
                <p className="text-[15px] leading-5 text-body">{s.role}</p>
              </div>
            </div>
            <div aria-hidden className="shrink-0">
              <Logo logo={s.logo} className="text-[20px]" size="[&_svg]:h-8" />
            </div>
          </figcaption>
        </figure>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          {s.stats.map(([v, l]) => (
            <div key={`${s.id}-${l}`} className="pop-in flex min-h-[110px] flex-col items-center justify-center rounded-[24px] bg-white/80 px-4 text-center shadow-[0_0_0_1px_rgba(120,110,160,.08)] backdrop-blur-sm lg:min-h-0">
              <p className="font-display t-stat whitespace-nowrap font-semibold tracking-[-0.03em] text-ink">{v}</p>
              <p className="mt-1.5 t-body text-body">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
