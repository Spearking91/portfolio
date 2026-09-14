import Image from "next/image";
import Navbar from "./components/navbar";
import {
  ArrowToBottom,
  Expo,
  Git,
  Github,
  Gmail,
  Linkedin,
  Location,
  LocationPin,
  NextJs,
  Supabase,
  Typescript,
} from "@boxicons/react";
import Link from "next/link";

export default function Home() {
  const skill = [
    { Icon: NextJs, Label: "Next Js" },
    { Icon: Expo, Label: "Expo RN" },
    { Icon: Supabase, Label: "Supabase" },
    { Icon: Github, Label: "Github" },
    { Icon: Typescript, Label: "Typescript" },
  ];
  return (
    <main>
      <Navbar />

      {/* Intro */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="Tailwind CSS hero component"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello, I'm Kelvin Acquah</h1>
            <h1 className="text-4xl font-bold">
              <span className="text-primary">Front-end </span> Developer
            </h1>
            <p className="py-6">
              Hi, I'm a frontend developer that builds responsive,
              high-performance web and mobile applications with React Native,
              Expo and Next.js. I use Supabase to combine nice-looking user
              interfaces with a solid backend data management. I have
              cross-platform experience, including Flutter. Whether I am
              building seamless mobile experiences or scalable web apps, I care
              about clean architecture, smooth interactions and fast execution.
            </p>
            <div className="flex flex-row gap-3">
              <Location /> <span>Accra, Ghana</span>
            </div>
            <div className="flex gap-5 p-4">
              <Link
                href={"https://linkedin.com/in/kelvin-acquah-b251b5279"}
                className="btn btn-circle border-base-content border-2 border-solid"
              >
                <Linkedin />
              </Link>
              <Link
                href={"https://github.com/Spearking91"}
                className="btn btn-circle border-base-content border-2 border-solid"
              >
                <Github />
              </Link>
              <Link
                href={"https://github.com/Spearking91"}
                className="btn btn-circle border-base-content border-2 border-solid"
              >
                <Gmail />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About me */}
      <section>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt="Tailwind CSS hero component"
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">About me</h1>
              <p className="py-6 text-olive-400">
                I am a frontend and cross-platform developer who transforms
                complex product requirements into fast, intuitive, and polished
                digital experiences. My core expertise centers around building
                seamless mobile applications with{" "}
                <span className="font-bold text-base-content">
                  React Native{" "}
                </span>{" "}
                and <span className="font-bold text-base-content">Expo</span>,
                alongside scalable, high-performance web applications using{" "}
                <span className="font-bold text-base-content">Next.js</span>.
                Beyond the user interface, I bridge the gap between frontend
                design and backend data by integrating robust services using
                <span className="font-bold text-base-content"> Supabase</span>
                —managing secure database schemas, real-time subscriptions, and
                authentication workflows. I also bring versatile experience with{" "}
                <span className="font-bold text-base-content">Flutter</span>,
                allowing me to adapt quickly across diverse mobile environments.
                Whether I'm optimizing state management, crafting responsive
                layouts, or connecting reliable API endpoints, I focus on
                writing clean, maintainable code that delivers exceptional user
                value.
              </p>
              <button className="btn btn-primary">
                <ArrowToBottom /> Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skils */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-sm">
            The skills, tools and technologies I am really good at
          </p>
          <div className="flex flex-wrap gap-5">
            {skill.map((Frame, index) => (
              <div className="flex flex-col items-center" key={index}>
                <Frame.Icon className="size-20" />
                <span className="text-sm">{Frame.Label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
