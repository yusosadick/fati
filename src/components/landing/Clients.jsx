import { LOGOS, Wordmark } from "./logos";

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="pt-[15px] text-center">
      <h2 id="clients-title" className="text-[18px] leading-7 tracking-[-0.005em] text-head sm:text-[18.4px]">
        Trusted by 2,000+ SaaS teams and growing startups
      </h2>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-[42px] gap-y-6">
        {LOGOS.map((l) => (
          <li key={l.name} className="flex items-center gap-[9px]">
            {l.icon}
            <Wordmark>{l.name}</Wordmark>
          </li>
        ))}
      </ul>
    </section>
  );
}
