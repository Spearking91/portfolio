import Link from "next/link";
import { Github, Gmail, Linkedin } from "@boxicons/react";
import { socials } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-6">
      <aside>
        <p className="font-semibold">Kelvin Acquah</p>
        <p className="text-sm opacity-80">
          Front-end & Cross-platform Developer · Accra, Ghana
        </p>
      </aside>
      <nav className="flex flex-wrap gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/projects" className="link link-hover">
          Projects
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          href={socials.linkedin}
          aria-label="LinkedIn"
          className="transition-transform duration-200 hover:scale-110"
        >
          <Linkedin className="size-5" />
        </Link>
        <Link
          href={socials.github}
          aria-label="GitHub"
          className="transition-transform duration-200 hover:scale-110"
        >
          <Github className="size-5" />
        </Link>
        <Link
          href={`mailto:${socials.email}`}
          aria-label="Email"
          className="transition-transform duration-200 hover:scale-110"
        >
          <Gmail className="size-5" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
