# Ashes of the Singularity II Guide

Unofficial English fan guide for [Ashes of the Singularity II](https://store.steampowered.com/app/3499790/Ashes_of_the_Singularity_II/) (Steam AppID **3499790**), aimed at **ashesofthesingularityii.wiki**.

Not affiliated with Oxide Games, Stardock Entertainment, Valve, or Steam. The site does not sell the game or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://ashesofthesingularityii.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/ashes/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/ashes/ads.config.ts` | Ad slot left empty and disabled |
| Active site | `sites/active` → `ashes` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/ashes/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is `G-CJ1920QPM9`, so the base layout loads GA4 on content pages. The ad slot does not render. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.
