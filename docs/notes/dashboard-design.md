# Dashboard design notes

Source: `docs/dashbaord-inspiration.webp` (the original design was titled "Noventra"). The app is
matched to the screen area inside the device frame: 1014 × 720 at
x=93, y=90 of the 1200 × 900 image.

## Layout (px, at 1014 × 720)

| Piece            | Size / position                                   |
| ---------------- | ------------------------------------------------- |
| Page padding     | 18 on every side                                  |
| Sidebar          | 188 wide, 18 gap to main                          |
| Header           | 772 × 56                                          |
| Stat cards (2×2) | 181 × 120, gaps 13 / 12                           |
| Total Revenue    | 384 × 252                                         |
| Row 2 cards      | Retention, Leads Status, Schedule — 249 × 232     |
| Lead table       | 772 wide, clipped by the viewport and scrollable  |

## Colors

| Token        | Value     | Use                           |
| ------------ | --------- | ----------------------------- |
| brand        | `#e17200` | Active nav, selected date     |
| ink          | `#1a1916` | Headings, values              |
| ink-soft     | `#55524e` | Body text                     |
| ink-mute     | `#8a867f` | Captions                      |
| up / down    | `#1fb85a` / `#e0373f` | Trends                    |
| donut        | `#ea9a44` `#56a3fb` `#48e681` | Desktop / Laptop / Mobile |
| page gradient| `#d0d0d0` → `#e7e0d3` → `#fdefd4` | Background        |

Cards are `white/29%` glass over the gradient.

## Known gaps vs. the inspiration

- Avatars are drawn placeholders, not photos.
- Iconsax's npm package ships the standard linear set; the rounded-corner
  variant is not in it, so Analytics, Messages, Help and Log Out are custom SVGs
  in `src/components/icons.jsx` drawn to match.

## Revenue + Sales performance section

Component: `src/components/SalesOverview.jsx` (client component), between the
stat/revenue row and the Retention / Leads / Schedule row. Layout was first
matched to a reference, then restyled with the app's own palette: glass `Card`s,
brand orange gauge/bars, dark `#2a2827` tooltip, 276px tall.

- Revenue (left, wide): Week / Month / Year tabs swap the dataset, axis scale,
  average line and summary text. Hovering a bar highlights it and shows a tooltip
  centred on the bar (clamped near the top). The current period is highlighted by
  default; later periods are projected (dashed).
- Sales performance (right): 31-tick gauge at 86, ticks and arc in brand orange.
- Entrance animations are CSS-only (`bar-grow`, `gauge-in` in `globals.css`), so
  they run even before hydration.
- Data is placeholder (Year: 2026 YTD sums to $300,000, avg $30k).
