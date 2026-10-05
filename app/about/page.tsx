import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Stats from "../components/stats";
import Timeline from "../components/timeline";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kelvin Acquah — frontend and cross-platform developer based in Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <main className="bg-base-200">
      <section className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <Reveal>
            <Image
              src="/suits.png"
              alt="Kelvin Acquah"
              width={420}
              height={420}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </Reveal>
          <Reveal delay={100} className="max-w-xl">
            <p className="text-primary font-semibold">About</p>
            <h1 className="text-4xl font-bold">
              Building interfaces that feel fast on every device
            </h1>
            <p className="py-6">
              I am a Computer Engineering graduate from the University of Energy
              and Natural Resources, now focused on frontend and cross-platform
              product work. I like the overlap between polished UI and the
              systems underneath it — whether that is a Next.js route, a React
              Native screen, or firmware talking to a sensor.
            </p>
            <Stats />
            <Link href="/contact" className="btn btn-primary mt-6">
              Let&apos;s work together
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="bg-base-content py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <h2 className="mb-8 text-3xl font-bold text-base-200">
            Experience & education
          </h2>
          <Timeline />
        </div>
      </section>
    </main>
  );
}
