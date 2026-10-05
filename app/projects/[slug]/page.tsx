import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col items-start max-w-3xl">
        <Link href="/projects" className="link link-primary mb-2">
          ← All projects
        </Link>
        <p className="text-sm font-semibold text-primary">{project.year}</p>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="py-4 text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <a
          href={project.href}
          className="btn btn-primary mt-6"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}
