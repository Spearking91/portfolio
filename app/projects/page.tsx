import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/reveal";
import { projects } from "../data/portfolio";
import { getWebsitePreviewUrl } from "../../lib/preview";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web, mobile, teaching, and operations work by Kelvin Acquah.",
};

export default function ProjectsPage() {
  return (
    <main className="hero min-h-screen bg-base-200 py-12">
      <div className="hero-content flex-col">
        <Reveal className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold">
            Projects &amp; <span className="text-primary">case work</span>
          </h1>
          <p className="py-4 opacity-80">
            Mobile products, web apps, embedded lab support, and operations
            systems — the same stack you see on the home page, used in real
            settings.
          </p>
        </Reveal>

        <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const previewUrl = project.liveUrl
              ? getWebsitePreviewUrl(project.liveUrl)
              : null;

            return (
              <Card
                key={index}
                id={index}
                slug={project.slug}
                title={project.title}
                year={project.year}
                summary={project.summary}
                description={project.description}
                stack={project.stack}
                liveUrl={project.liveUrl}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
