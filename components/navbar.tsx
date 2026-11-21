"use client";

import { Menu } from "@boxicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/85 shadow-sm backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="size-5" />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-circle bg-primary text-white text-xl transition-transform duration-200 hover:scale-105"
        >
          A
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${active ? "text-primary font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-primary">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
