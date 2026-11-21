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
];

export type Skill = (typeof skills)[number];
export type Project = (typeof projects)[number];

export const socials = {
  linkedin: "https://linkedin.com/in/kelvin-acquah-b251b5279",
  github: "https://github.com/Spearking91",
  email: "baninacquah@gmail.com",
} as const;
