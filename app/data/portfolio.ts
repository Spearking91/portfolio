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

export type Projecty = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string; // Direct image URL or /images/... path for mobile/app projects
  snackUrl?: string;
};

export const projects: Projecty[] = [
  {
    slug: "nextjs-web-apps",
    title: "Oyce Jewels",
    year: "2026",
    summary:
      "A jewelry storefront built with Next.js, TypeScript, and Supabase.",
    description:
      "In 2026 I expanded into Next.js for marketing sites and app-like web UIs. I care about routing structure, loading states, and connecting the same Supabase data layer used on mobile so products feel consistent across platforms.",
    stack: ["Next.js", "TypeScript", "Supabase", "DaisyUI"],
    githubUrl: "https://github.com/Spearking91/jewels",
    liveUrl: "https://oycejewels.vercel.app",
  },
  {
    slug: "nextjs-web-apps-2",
    title: "Dessa Bliss",
    year: "2026",
    summary: "An ecommerce site for a wholesale and retail shop",
    description:
      "In 2026 I expanded into Next.js for marketing sites and app-like web UIs. I care about routing structure, loading states, and connecting the same Supabase data layer used on mobile so products feel consistent across platforms.",
    stack: ["Next.js", "TypeScript", "Supabase", "DaisyUI"],
    githubUrl: "https://github.com/Spearking91/dessa_bliss_site",
    liveUrl: "https://dessabliss.vercel.app",
  },
  {
    slug: "nextjs-web-apps",
    title: "Stock Sync",
    year: "2026",
    summary: "An ecommerce site for a wholesale and retail shop",
    description:
      "In 2026 I expanded into Next.js for marketing sites and app-like web UIs. I care about routing structure, loading states, and connecting the same Supabase data layer used on mobile so products feel consistent across platforms.",
    stack: ["Next.js", "TypeScript", "Supabase", "DaisyUI"],
    githubUrl: "https://github.com/Spearking91/stocksync",
    liveUrl: "https://stocksync.vercel.app",
  },
  {
    slug: "React native app",
    title: "Astream",
    year: "2025",
    summary: "A chat application",
    description:
      "In 2026 I expanded into Next.js for marketing sites and app-like web UIs. I care about routing structure, loading states, and connecting the same Supabase data layer used on mobile so products feel consistent across platforms.",
    stack: ["React Native", "TypeScript", "Supabase"],
    githubUrl: "https://github.com/Spearking91/stocksync",
    liveUrl: "https://stocksync.vercel.app",
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  org?: string;
  description: string;
  tags: string[];
  newTag?: boolean;
};

export const items: TimelineItem[] = [
  
  {
    date: "Mar 2025 – Jan 2026",
    title: "Manager",
    org: "Dessa Bliss Disposables and Diaper Hub",
    description:
      "Designed and oversaw the supermarket POS and inventory database, keeping pricing, stock tracking, and product data accurate. Supervised floor operations, cash management, and junior staff training on POS systems.",
    tags: ["POS", "Inventory", "Operations"],
  },
  {
    date: "Oct 2024 – Sep 2025",
    title: "Teaching Assistant",
    org: "University of Mines and Technology",
    description:
      "Guided students through firmware, hardware integration, and sensor interfacing (I2C, SPI, UART) on Arduino, ESP32, and Raspberry Pi — from circuit prototyping to debugging.",
    tags: ["Arduino", "ESP32", "Embedded"],
  },
  {
    date: "2023 – 2024",
    title: "React Native",
    description:
      "Cross-platform mobile development with React Native and Expo: responsive UIs, solid architecture, and backend integration.",
    tags: ["React Native", "Expo", "Supabase"],
  },
  {
    date: "Oct 2023 – Dec 2023",
    title: "Networking Intern",
    org: "Electricity Company of Ghana",
    description:
      "Installed and configured software to match user requirements. Monitored network performance and troubleshot issues.",
    tags: ["Networking", "Support"],
  },
  {
    date: "Jan 2021 – Oct 2024",
    title: "BSc. Computer Engineering",
    org: "University of Energy and Natural Resources",
    description:
      "Degree in Computer Engineering, with a focus on software, systems, and hardware–software integration.",
    tags: ["Education"],
  },
];

export type Skill = (typeof skills)[number];
export type Project = (typeof projects)[number];

export const socials = {
  linkedin: "https://linkedin.com/in/kelvin-acquah-b251b5279",
  github: "https://github.com/Spearking91",
  email: "baninacquah@gmail.com",
} as const;
