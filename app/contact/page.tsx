import type { Metadata } from "next";
import Link from "next/link";
import { Github, Gmail, Linkedin, Location } from "@boxicons/react";
import ContactForm from "../components/contact-form";
import { socials } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Kelvin Acquah for frontend, Next.js, and React Native work.",
};

export default function ContactPage() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row items-start gap-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">
            Let&apos;s <span className="text-primary">build</span>
          </h1>
          <p className="py-4">
            Open to frontend and cross-platform roles, freelance product work,
            and collaborations. Send a note and I&apos;ll reply from Accra.
          </p>
          <div className="flex items-center gap-2 py-2">
            <Location /> Accra, Ghana
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              href={socials.linkedin}
              className="btn btn-circle border-2 transition-transform duration-200 hover:scale-110"
            >
              <Linkedin />
            </Link>
            <Link
              href={socials.github}
              className="btn btn-circle border-2 transition-transform duration-200 hover:scale-110"
            >
              <Github />
            </Link>
            <Link
              href={`mailto:${socials.email}`}
              className="btn btn-circle border-2 transition-transform duration-200 hover:scale-110"
            >
              <Gmail />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
