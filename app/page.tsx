import Image from "next/image";
import {
  ArrowToBottom,
  Expo,
  Github,
  Gmail,
  Linkedin,
  Location,
  NextJs,
  Supabase,
  Typescript,
} from "@boxicons/react";
import Link from "next/link";
import Timeline from "./components/timeline";
import Stats from "./components/stats";
import SkillCard from "./skillCard";
import Reveal from "./components/reveal";
import { projects, skills, socials } from "./data/portfolio";

const skillIcons = {
  nextjs: NextJs,
  expo: Expo,
  supabase: Supabase,
  github: Github,
  typescript: Typescript,
};

export default function Home() {
  return (
    <main>
      <section id="home" className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/profile.png"
            alt="Kelvin Acquah"
            width={500}
            height={500}
            className="animate-fade-up delay-200 max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="animate-fade-up text-5xl font-bold">
              Hi, I&apos;m <span className="text-primary">Kelvin Acquah</span>
            </h1>
            <h2 className="animate-fade-up delay-100 text-3xl font-light">
              Front-end & Cross-platform Developer
            </h2>
            <p className="animate-fade-up delay-200 py-6">
              Hi, I&apos;m a frontend developer that builds responsive,
              high-performance web and mobile applications with React Native,
              Expo and Next.js. I use Supabase to combine nice-looking user
              interfaces with a solid backend data management. I have
              cross-platform experience, including Flutter. Whether I am
              building seamless mobile experiences or scalable web apps, I care
              about clean architecture, smooth interactions and fast execution.
            </p>
            <div className="animate-fade-up delay-300 flex flex-row gap-3">
              <Location /> <span>Accra, Ghana</span>
            </div>
            <div className="animate-fade-up delay-400 flex gap-5 p-4">
              <Link
                href={socials.linkedin}
                className="btn btn-circle border-base-content border-2 border-solid transition-all duration-200 hover:scale-110 hover:border-primary"
              >
                <Linkedin />
              </Link>
              <Link
                href={socials.github}
                className="btn btn-circle border-base-content border-2 border-solid transition-all duration-200 hover:scale-110 hover:border-primary"
              >
                <Github />
              </Link>
              <Link
                href={`mailto:${socials.email}`}
                className="btn btn-circle border-base-content border-2 border-solid transition-all duration-200 hover:scale-110 hover:border-primary"
              >
                <Gmail />
              </Link>
            </div>
            <div className="animate-fade-up delay-400 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">
                View projects
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="hero bg-base-content min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <Reveal className="text-center flex flex-col items-center justify-center">
              <h2 className="text-2xl font-medium text-base-200">About me</h2>
              <h3 className="text-3xl font-bold text-base-200 lg:hidden">
                Know More <span className="text-primary">About Me</span>
              </h3>
              <div className="w-15 border-b-4 border-primary" />
            </Reveal>
            <Reveal delay={80}>
              <Image
                src="/suit.png"
                alt="About me"
                width={500}
                height={500}
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </Reveal>
            <Reveal delay={160}>
              <h2 className="text-3xl text-base-300 font-bold">
                I am a Passionate{" "}
                <span className="text-primary">frontend developer</span>
              </h2>
              <p className="py-6 text-base-300">
                who transforms complex product requirements into fast,
                intuitive, and polished digital experiences. My core expertise
                centers around building seamless mobile applications with{" "}
                <span className="font-bold text-base-200">React Native </span>{" "}
                and <span className="font-bold text-base-200">Expo</span>,
                alongside scalable, high-performance web applications using{" "}
                <span className="font-bold text-base-200">Next.js</span>. Beyond
                the user interface, I bridge the gap between frontend design and
                backend data by integrating robust services using
                <span className="font-bold text-base-200"> Supabase</span>
                —managing secure database schemas, real-time subscriptions, and
                authentication workflows. I also bring versatile experience with{" "}
                <span className="font-bold text-base-200">Flutter</span>,
                allowing me to adapt quickly across diverse mobile environments.
                Whether I&apos;m optimizing state management, crafting
                responsive layouts, or connecting reliable API endpoints, I
                focus on writing clean, maintainable code that delivers
                exceptional user value.
              </p>
              <div className="flex justify-center">
                <Stats className="text-base-200" />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-outline text-base-200">
                  More about me
                </Link>
                <a href={`mailto:${socials.email}`} className="btn btn-primary">
                  <ArrowToBottom /> Get in touch
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <Reveal className="text-center items-center flex flex-col">
            <h2 className="text-2xl font-medium ">Services</h2>
            <h3 className="text-3xl font-bold">
              What I <span className="text-primary">Offer</span>
            </h3>
            <div className="w-15 border-b-4 border-primary" />
          </Reveal>
          <div className="flex flex-wrap justify-center gap-5">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.slug];
              return (
                <Reveal key={skill.slug} delay={index * 80}>
                  <SkillCard
                    icon={<Icon className="size-7" />}
                    title={skill.title}
                    description={skill.description}
                    href={`/skills/${skill.slug}`}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="hero min-h-screen bg-base-100">
        <div className="hero-content flex flex-col">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold">
              Selected <span className="text-primary">work</span>
            </h2>
            <p className="py-3 opacity-80">
              A snapshot of product, teaching, and operations work across web,
              mobile, and hardware.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <Reveal key={project.slug} delay={index * 90}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="card h-full shadow-sm transition-all duration-3000 hover:-translate-y-1 hover:shadow-lg hover:aura hover:aura-rainbow"
                >
                  <div className="card-body bg-base-100">
                    <p className="text-xs font-semibold text-primary">
                      {project.year}
                    </p>
                    <h3 className="card-title">{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="card-actions">
                      {project.stack.slice(0, 3).map((tag) => (
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
          <Reveal>
            <Link href="/projects" className="btn btn-primary mt-4">
              See all projects
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="hero min-h-screen bg-base-content">
        <div className="hero-content flex flex-col">
          <Reveal>
            <h2 className="text-3xl text-base-200 font-bold">Experience</h2>
          </Reveal>
          <Reveal delay={120}>
            <Timeline />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
