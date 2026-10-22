# About page and honest-content pass

Built from `docs/fati-enterprise-prompty-01.md` and the follow-up finalization brief. Design of the landing
page and dashboard is locked: only text corrections and one About link were made on the landing, nothing on
the dashboard, and no global styles, layout, shared UI or backend code was touched.

## What the codebase actually contains (audit, 2026-10-22)

- Routes: `/`, `/about`, `/dashboard`. No backend, authentication, API, database, billing or integrations.
- The dashboard is a front-end screen on sample data. Its sidebar items other than Dashboard are placeholders.
- So every capability beyond that preview is "planned", and the site now says so.

## New

- `src/app/about/page.js`, `src/components/about/*`: ten sections, the four-card phone mockup (stays on
  `/about`, not on the landing), page-local nav and footer variants, scoped scroll reveal, accessible tabs.
- Mission, vision, values and "our future" are **draft company messaging pending approval** and are marked as
  such on the page.

## Landing page: exact text changes (layout unchanged)

| Area | Change |
| --- | --- |
| Hero trust row | "14-day free trial / No credit card needed / 50k+ active users / Rated 4.8 on G2 & Capterra" became "Interface preview / No account required / Built for owners / Built for growing companies" |
| Hero | Description no longer promises "live insights"; buttons "Start free trial / Book a demo" became "Open preview / Contact FATI" |
| Navigation | "Sign in" became "Explore" (there is no sign-in); "Start free trial" became "Open preview" |
| Clients | "Trusted by 2,000+ SaaS teams..." became "Illustrative logos of the teams Fati is designed to serve" |
| Capabilities | Three feature descriptions prefixed "Planned:"; intro says "designed to"; chart title "Sample revenue vs target" |
| How it works | Subtitle now says the examples are illustrative and use sample data |
| Pricing | Heading "Plans built to grow with you."; every price, billing term, "Save 20%", "forever", plan limit and "Most popular" removed; prices show "TBA"; badge reads "Draft"; lists reflect planned scope under "Planned to include:"; buttons "Explore the preview" |
| Stories | Seven invented testimonials replaced by labeled illustrative personas ("Sales lead", "Founder", ...) with stated aims instead of statistics; pill reads "Illustrative scenarios"; no invented names, quotes or numbers |
| Hub | Feature list prefixed "Planned:"; copy says "being designed to" |
| Integrations | "Works seamlessly with your tools" became "Built to connect with all of your tools" and states integrations are planned and unavailable |
| Insights | Posts do not exist: subtitle says "plan to publish", buttons read "Upcoming", meta reads "Planned guide" |
| FAQ | Security, trial, plan changes, onboarding, integrations and cancellation answers rewritten as honest "not finalized / planned" statements |
| Footer | Assurance strip claims ("Fast replies from real people", "Encrypted, role-based access") replaced with design intent; card text and buttons corrected; dead Privacy/Terms links replaced by an **About us** link to `/about` |
| Audience wording | "SaaS teams" replaced by owners and companies in the footer and Insights |
| Page metadata | Landing route title and description corrected at page level (root layout untouched) |

## Unresolved business decisions (need the owner)

1. **Pricing and trial.** Currently "TBA". Decide plan names, prices, billing terms, limits and whether any free
   tier or trial exists. Nothing on the site may be read as an offer until then.
2. **Customer stories.** There are none. The personas use free-licence stock portraits (Pexels) and sample logo
   marks (Boltshift, Lightbox, FeatherDev, Orbitly, Northwind, Stackline, Harbor are fictional). Replace with real,
   consented customers when they exist, or decide to remove the section.
3. **Partner marks.** The integrations section draws Gmail, Slack, Stripe and Google Calendar marks. Using other
   companies' brand marks to imply integrations needs their permission and real integrations.
4. **Contact details and social links.** None are approved. The landing footer still has four social chips
   (LinkedIn, X, Instagram, Facebook) that link to `#`. They were left in place because removing them changes the design.
5. **Legal pages.** No privacy policy or terms exist. Needed before collecting any user data or launching sign-up.
6. **Security and compliance wording.** The site now makes no certification, audit or encryption claims. Add
   them only once true and verifiable.
7. **Mission, vision, values, "our future".** Draft wording awaiting approval; remove the draft notes once approved.
8. **Headline claims left as is.** The hero headline ("Run sales, customers and projects in one place") and the
   product mock-ups describe the product's direction in present tense; the surrounding text now labels them
   planned or illustrative. Decide whether the headline should say "being built".
9. **Pre-existing contrast gaps** on the locked landing design: white text on the orange button (about 3.2:1)
   and the orange hero accent on the canvas (about 3:1). Not changed because it would alter the design.
10. **Dashboard** shows sample figures with no in-app "sample data" label. Left untouched (locked).

## Verification

- Layout lock: at 390, 768, 1024, 1280, 1440 and 1920 px the landing page height and every section position
  match the pre-change baseline exactly. Residual differences are only the centered hero button pair (about 5 px
  narrower) and trust row (about 9 px narrower) from the new wording.
- Dashboard: screenshots at 1440 and mobile pixel-identical; text identical; its files unchanged.
- 20 interaction checks pass (routes, scrollspy, chart tabs, pricing toggle, FAQ, story swap, mobile menu,
  About link, dashboard period tabs and table, About tabs).
- `/about`: no horizontal overflow from 320 to 1920 px; contrast, headings, landmarks, names, keyboard tabs,
  skip link and reduced motion all pass.
- `next build` succeeds; `/`, `/about`, `/dashboard` prerendered. No automated test suite exists in the project.
- Not verified: real phones and browsers other than Chrome.
