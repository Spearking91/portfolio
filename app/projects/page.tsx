import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";
import { projects } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web, mobile, teaching, and operations work by Kelvin Acquah.",
};

export default function ProjectsPage() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <Reveal className="text-center max-w-2xl">
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
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <Link
                href={`/projects/${project.slug}`}
                className="card bg-base-100 h-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:aura hover:aura-rainbow"
              >
                <div className="card-body">
                  <p className="text-xs font-semibold text-primary">
                    {project.year}
                  </p>
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="card-actions mt-2">
                    {project.stack.map((tag) => (
                      <div key={tag} className="badge badge-outline">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
