# Landing page design notes

Source: `docs/landing-inspiration.webp` (1680 × 8522, titled "Finexa"). Built in
`src/components/landing/`, rendered by `src/app/page.js`. The dashboard lives on `/dashboard`.

## Colours and icons

(Historical — see the polish pass below.) The reference is purple; the project is orange. Layout, spacing and type were matched to the
reference, then recoloured with the dashboard's tokens (`brand #e17200`, `ink`, `peach`, cream
`#fff4e6`). Icons are Iconsax (same package as the dashboard); a few glyphs Iconsax doesn't
ship (sparkle, coins, pie, browser reload/download) are inline SVGs in the components that use them.
The product name comes from `src/components/landing/config.js` (`BRAND`).

## Geometry (at the 1680 reference width)

| Piece | Value |
| --- | --- |
| Frame | 1440 card inset 120px from the brand-coloured edge, radius 64 |
| Content | 1280 wide, 80px inner padding |
| Section rhythm | 160px between sections (80 + 80) |
| H1 | 56 / 64, semibold, tracking -0.035em |
| H2 | 44 / 52, weight 580, tracking -0.021em |
| Body / sub copy | 16.5px (reference text renders ~3% larger than a 16px base) |
| Small UI text | 15px; buttons 13px |

Verified with `scripts/landing-compare.py` (per-section blurred diff) and
`scripts/landing-rows.py` (text-band offsets): page height 8522 = reference, text bands within 0-2px.

## Dashboard slot

`BrowserFrame` (inside `Hero`) is the Safari-style window from the reference. Pass the dashboard as
the child of `<Hero>` in `Landing.jsx`; it fills `[data-slot="dashboard"]` (1280 wide, 628 tall at
desktop) and fades out at the bottom edge via a mask, exactly like the reference. It is empty today.

## Responsive rules

- Frame margin and inner padding scale linearly between 1280 and 1680 (see `Landing.jsx`).
- `xl` (1280+): two-column capabilities, three pricing cards. Below: single column.
- `3xl` (1560+, custom breakpoint in `globals.css`): four "How it works" cards; two columns below.
- Integrations diagram is desktop (`xl`) only; a compact stack replaces it below.

## Known gaps / placeholders

- Blog photos and the Stripe avatar are cropped from the reference (chips erased). Replace with real assets.
- Partner and payment logos are drawn wordmarks, not official artwork.
- Testimonials for Slack / Xero / HubSpot are invented placeholder copy; only Stripe is from the reference.
- Footer / nav links other than in-page anchors point to `#`.

## Polish pass (supersedes the pixel-match brief where they differ)

Requested by the user: remove the brand-coloured frame and improve UX/UI. Changes:

- Full-bleed page on a warm canvas (`--color-canvas #f8f5f0`); no inset orange frame. Nav is sticky with a blurred background.
- Hero: sentence-case H1 (60/66 at xl), primary CTA first ("Start free trial"), secondary "Book a demo".
  The browser window shows a real screenshot of the dashboard (`public/images/dashboard-preview.webp`,
  captured from `/dashboard`; retake it if the dashboard changes).
- Buttons: flatter, clearer states (white / dark / brand) instead of the heavy embossed pills.
- Copy: sentence case everywhere (was Title Case), real plan names (Starter / Pro / Enterprise) with
  a "Most popular" highlight, distinct taglines, fixed duplicated footer links.
- Removed the broken Stripe avatar image; insight tags are legible on photos.
- Checked at 1680, 1024 and 390 px: no horizontal scroll, no console errors.

## CRM / business management repositioning (2026-10-22)

The landing copy was rewritten from "AI finance platform" to "CRM and business management for SaaS teams",
matching the dashboard (leads, customers, projects, revenue, retention). Layout and spacing are unchanged.

| Section | Now about |
| --- | --- |
| Hero | "Run sales, customers and projects in one place"; trust row is trial / no card / users / rating |
| Capabilities | Pipeline & lead management, Customer 360 & retention, Revenue insights; chart is `RevenueChart` (revenue vs target) |
| How it works | Import contacts, track every deal, spot risks and wins, hit your targets |
| Pricing | Starter / Pro / Enterprise per user: contacts, automation, reports, SSO and audit logs |
| Customer stories | Four fictional customers, shared with the logo row via `logos.jsx` |
| FAQ, integrations, footer | CRM wording; integrations are Gmail, Slack, Stripe, Google Calendar |
| Insights | Illustrated cards (pipeline funnel, health score, task board) replace the stock photos |

Placeholders to replace with real content: customer names, quotes and metrics; the customer logos
(Boltshift, Lightbox, FeatherDev, Orbitly are fictional); plan limits and prices; integration glyphs are
simple drawings, not official artwork. The reference stock photos and the Stripe avatar were removed.

## AI section and customer stories (2026-10-22)

- `HubSection.jsx` + `HubFlow.jsx` (below the stories): "Close more deals, with less chasing". The hub diagram is a 620x540
  design canvas scaled to fit; connectors draw in once on entry, hovering a pill lights its connector,
  reduced motion shows the final state. The diagram is decorative (`role="img"` with a text description).
- `Testimonials.jsx`: photo collage (centre tile = selected story, click any other tile to swap), a
  "trusted by 2,000+ teams" logo row and a quote card with two stats. Mobile shows one photo plus a thumbnail strip.

### Photo sources and placeholder status

Portraits in `public/images/people/` come from Pexels (free licence, re-encoded and capped at 1200px):

| File | Pexels photo |
| --- | --- |
| `amara.jpg` | https://www.pexels.com/photo/woman-standing-near-whiteboard-1181519/ (Christina Morillo) |
| `daniel.jpg` | https://www.pexels.com/photo/man-wearing-blue-button-up-sweater-1181391/ (Christina Morillo) |
| `tolu.jpg` | https://www.pexels.com/photo/femme-au-bureau-20209020/ |
| `marcus.jpg` | https://www.pexels.com/photo/man-wearing-black-suit-on-white-background-12311559/ (Joseph Eulo) |
| `kemi.jpg` | https://www.pexels.com/photo/woman-in-black-blazer-sitting-on-black-office-chair-3727464/ |

**These are stock models, not customers.** The names, companies, quotes and figures beside them are invented.
Pexels' licence does not allow implying that the people endorse a product, so before launch replace every photo,
name, quote and number with real customers who have agreed to be featured.
