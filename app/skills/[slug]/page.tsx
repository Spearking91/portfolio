import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Expo,
  Github,
  NextJs,
  Supabase,
  Typescript,
} from "@boxicons/react";
import { projects, skills } from "../../data/portfolio";

const skillIcons = {
  nextjs: NextJs,
  expo: Expo,
  supabase: Supabase,
  github: Github,
  typescript: Typescript,
};

type SkillPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: SkillPageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  if (!skill) return { title: "Skill" };
  return { title: skill.title, description: skill.description };
}

export default async function SkillDetailPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  if (!skill) notFound();

  const Icon = skillIcons[skill.slug];
  const related = projects.filter((project) =>
    project.stack.some((tag) =>
      tag.toLowerCase().includes(skill.title.split(" ")[0].toLowerCase()),
    ),
  );

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col items-start max-w-3xl">
        <Link href="/#skills" className="link link-primary mb-2">
          ← Back to skills
        </Link>
        <Icon className="size-12" />
        <h1 className="text-4xl font-bold">{skill.title}</h1>
        <p className="py-4 text-lg">{skill.details}</p>
        {related.length > 0 && (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-3">Related work</h2>
            <div className="flex flex-col gap-3">
              {related.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="card-body py-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <Link href="/contact" className="btn btn-primary mt-4">
          Hire me for this
        </Link>
      </div>
    </main>
  );
}
