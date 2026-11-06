export const siteConfig = {
  siteName: 'Ashes of the Singularity II Guide',
  domain: 'ashesofthesingularityii.wiki',
  url: 'https://ashesofthesingularityii.wiki',
  gameTitle: 'Ashes of the Singularity II',
  steamAppId: 3499790,
  steamUrl: 'https://store.steampowered.com/app/3499790/Ashes_of_the_Singularity_II/',
  supportEmail: '',
  social: [
    { href: 'https://www.ashesofthesingularity.com/', label: 'Official site' },
    { href: 'https://www.stardock.com/games/article/542557/ashes-of-the-singularity-ii-release-date-announcement', label: 'Release announcement' },
    { href: 'https://support.stardock.com/', label: 'Stardock support' },
  ],
  developer: 'Oxide Games',
  publisher: 'Stardock Entertainment',
  tagline: 'Unofficial English fan guide for the large-scale RTS: factions, resources, and counters.',
  locale: 'en',
  themeColor: '#0b0e10',
  contentRoot: 'ashes',
  homeTitle: 'Ashes of the Singularity II Guide — Factions, Resources & Release',
  homeDescription:
    'Unofficial English guide to Ashes of the Singularity II (Steam AppID 3499790). Oxide Games and Stardock Entertainment, release 10 Nov 2026, three factions, Turinium, and regions. Not affiliated with the developers or Valve.',
  analytics: {
    gaId: 'G-CJ1920QPM9',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Ashes of the Singularity II: armored soldiers on a rock above tanks, mechs, and aircraft on a desert battlefield',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Ashes of the Singularity II: the emblem and title beside a bipedal mech firing over a ridge',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'ashesofthesingularityii.wiki is an unofficial fan-made guide for Ashes of the Singularity II. It is not affiliated with, endorsed by, or sponsored by Oxide Games, Stardock Entertainment, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Unit cards printed before launch can change. This site does not sell the game, recover accounts, or invent balance numbers. The support link in the footer is Stardock’s public support site from the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/guide', label: 'Guide' },
    { href: '/factions', label: 'Factions' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/factions', label: 'Factions' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 6 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, and system requirements are from the Steam appdetails API on 6 Nov 2026. Faction and resource lines are from the linked Stardock and Oxide posts. No launch client was available to recheck unit cards. The public price was not in that appdetails payload.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/3499790/Ashes_of_the_Singularity_II/',
      label: 'Steam store page',
    },
    {
      href: 'https://www.ashesofthesingularity.com/',
      label: 'Official Ashes site',
    },
    {
      href: 'https://www.stardock.com/games/article/539682/frequently-asked-questions-for-ashes-of-the-singularity-ii',
      label: 'Stardock FAQ',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
