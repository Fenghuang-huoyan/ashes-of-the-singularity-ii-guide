# Ads — ashesofthesingularityii.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/ashes/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` and `scriptSrc` are empty strings. No zone key from another game is stored here. `resolveAdPlacement` therefore marks the slot inactive, and `AdSlot.astro` renders nothing.

`analytics.gaId` in `sites/ashes/site.config.ts` is an empty string. The base layout does not load gtag.

Adult and sensitive categories stay off. Fill the zone only after Adsterra issues one for this domain.
