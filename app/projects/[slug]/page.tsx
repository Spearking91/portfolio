import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";
import { getWebsitePreviewUrl } from "../../../lib/preview";

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

  const previewUrl = project.liveUrl
    ? getWebsitePreviewUrl(project.liveUrl)
    : null;

  return (
    <main className="hero min-h-screen bg-base-200 py-12">
      <div className="hero-content w-full max-w-3xl flex-col items-start">
        <Link href="/projects" className="link link-primary mb-2">
          ← All projects
        </Link>
        <p className="text-sm font-semibold text-primary">{project.year}</p>
        <h1 className="text-4xl font-bold">{project.title}</h1>

        {/* Plain, browserless live website screenshot */}
        {previewUrl && (
          <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl bg-base-300">
            <img
              src={previewUrl}
              alt={`${project.title} live website preview`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}

        <p className="py-4 text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              View Website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
