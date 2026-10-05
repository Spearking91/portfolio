import React from "react";

type TimelineItem = {
  date: string;
  title: string;
  org?: string;
  description: string;
  tags: string[];
  newTag?: boolean;
};

const items: TimelineItem[] = [
  {
    date: "2026",
    title: "Next.js",
    description:
      "Building scalable, high-performance web apps with the Next.js App Router.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    newTag: true,
  },
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

const CheckIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${filled ? "text-primary" : ""}`}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const Card = ({ title, date, org, description, tags, newTag }: TimelineItem) => (
  <div className="card bg-base-100">
    <div className="card-body">
      <p className="text-xs font-semibold text-primary mb-2">{date}</p>
      <h2 className="card-title">
        {title}
        {newTag && <div className="badge badge-secondary">NEW</div>}
      </h2>
      {org && <p className="text-sm opacity-70">{org}</p>}
      <p>{description}</p>
      <div className="card-actions justify-start">
        {tags.map((tag) => (
          <div key={tag} className="badge badge-outline">
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const onStart = index % 2 === 0;

        return (
          <li key={`${item.title}-${item.date}`}>
            {index > 0 && <hr className="bg-primary" />}
            <div
              className={`${onStart ? "timeline-start" : "timeline-end"} timeline-box aura aura-rainbow p-1`}
            >
              <Card {...item} />
            </div>
            <div className="timeline-middle">
              <CheckIcon filled />
            </div>
            {!isLast && <hr className="bg-primary" />}
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
