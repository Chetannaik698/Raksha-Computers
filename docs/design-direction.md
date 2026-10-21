# Design direction

- **Palette:** midnight navy #07111F, deep #0B1424, electric blue #2677FF, red #F04452, bright red #FF5361, paper #F8FAFC, muted #A8B4C7. Blue is the light source; red is the action colour.
- **Type:** Unbounded (wide display, headlines) + Instrument Sans (body, UI). System fallbacks are set.
- **Layout:** asymmetric hero with oversized type overlapping the hardware art; list-style category index; light editorial feature section; horizontal accessories strip; text-led services rows. No repeated card walls.
- **Imagery:** no photographs were available offline. Hardware is drawn as original SVG illustrations (`components/Art.tsx`) and is NOT product photography. Swap in real shop photos via `Art`'s call sites.
- **Motion:** one orchestrated hero entrance, spinning GPU fans, hover/tap feedback, mobile menu and gallery transitions. All disabled under `prefers-reduced-motion`.
