import { LOGOS, Wordmark } from "./logos";

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="pt-[15px] text-center">
      <h2 id="clients-title" className="t-lead font-medium tracking-[-0.01em] text-head">
        Illustrative logos of the teams Fati is designed to serve
      </h2>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:mt-10 sm:gap-x-8 lg:gap-x-[42px] lg:gap-y-6">
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
