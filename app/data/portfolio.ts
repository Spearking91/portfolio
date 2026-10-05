export const skills = [
  {
    slug: "nextjs",
    title: "Next.js",
    description:
      "Scalable web apps with the App Router — fast pages, clean architecture, and production-ready routing.",
    details:
      "I use Next.js to ship production web apps with App Router layouts, server rendering where it helps, and client components only where interaction is needed. Typical work includes routing, data fetching, forms, and connecting a Supabase backend without giving up performance.",
  },
  {
    slug: "expo",
    title: "Expo RN",
    description:
      "Cross-platform mobile apps with React Native and Expo: responsive UIs, shared code, and smooth native feel.",
    details:
      "React Native and Expo are my primary mobile stack. I build shared UI, navigation, and data flows that run on iOS and Android from one codebase — including auth, offline-friendly screens, and backend integration with Supabase.",
  },
  {
    slug: "supabase",
    title: "Supabase",
    description:
      "Auth, Postgres, and realtime data behind the UI — schemas, subscriptions, and secure backend workflows.",
    details:
      "I use Supabase as the application backend: Postgres schemas, row-level security, authentication, and realtime subscriptions. That lets a Next.js or React Native client stay focused on UI while still owning data integrity.",
  },
  {
    slug: "github",
    title: "GitHub",
    description:
      "Version control and collaboration with Git: clean history, reviews, and shipping features with confidence.",
    details:
      "Git and GitHub are how I keep work reviewable. I prefer small commits, clear pull requests, and a history that other developers can follow when picking up a feature or fixing a regression.",
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description:
      "Typed JavaScript that catches bugs early and keeps larger React Native and Next.js codebases maintainable.",
    details:
      "TypeScript is the default language across my web and mobile work. Shared types between UI and API data reduce runtime surprises and make refactors safer as a product grows.",
  },
] as const;

export const projects = [
  {
    slug: "cross-platform-apps",
    title: "Cross-platform product apps",
    year: "2023 – 2024",
    summary:
      "Mobile-first product work in React Native and Expo, with shared TypeScript and a Supabase backend.",
    description:
      "I spent 2023–2024 building cross-platform mobile experiences: navigation, auth, and screens that stay responsive on different device sizes. Expo keeps the loop fast; Supabase handles accounts, data, and realtime updates so the client stays focused on interaction.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    href: "https://github.com/Spearking91",
  },
  {
    slug: "nextjs-web-apps",
    title: "Next.js web applications",
    year: "2026",
    summary:
      "High-performance websites and dashboards with the Next.js App Router, typed data, and clean UI systems.",
    description:
      "In 2026 I expanded into Next.js for marketing sites and app-like web UIs. I care about routing structure, loading states, and connecting the same Supabase data layer used on mobile so products feel consistent across platforms.",
    stack: ["Next.js", "TypeScript", "Supabase", "DaisyUI"],
    href: "https://github.com/Spearking91",
  },
  {
    slug: "embedded-lab-support",
    title: "Embedded systems teaching support",
    year: "2024 – 2025",
    summary:
      "Firmware, sensors, and hardware labs on Arduino, ESP32, and Raspberry Pi while teaching at UMaT.",
    description:
      "As a teaching assistant I helped students take microcontroller projects from circuit prototype to working firmware. That included I2C, SPI, and UART interfacing, plus debugging the messy middle between hardware and software.",
    stack: ["Arduino", "ESP32", "Raspberry Pi", "Firmware"],
    href: "https://github.com/Spearking91",
  },
  {
    slug: "retail-operations",
    title: "Retail POS & inventory operations",
    year: "2025 – 2026",
    summary:
      "Day-to-day ownership of supermarket POS data, stock tracking, and staff training on the floor systems.",
    description:
      "At Dessa Bliss I designed and oversaw inventory and POS workflows: pricing updates, stock accuracy, and training junior staff. It is operations work, but it sharpened how I think about data entry, reliability, and tools people actually use under pressure.",
    stack: ["POS", "Inventory", "Operations"],
    href: "https://github.com/Spearking91",
  },
] as const;

export type Skill = (typeof skills)[number];
export type Project = (typeof projects)[number];

export const socials = {
  linkedin: "https://linkedin.com/in/kelvin-acquah-b251b5279",
  github: "https://github.com/Spearking91",
  email: "baninacquah@gmail.com",
} as const;
