"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    const id = href.replace("#", "");
    setActiveSection(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Go to Home" className="flex items-center">
          <Image
            src="/logos/ale-solutions-landscape-snow-removal-logo.png"
            alt="ALE Solutions landscape and snow removal logo"
            width={38}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </a>

        <button
          type="button"
          className="rounded-md border border-slate-300 p-2 text-[#333333] transition hover:border-[#1E90FF] hover:text-[#1E90FF] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[linear-gradient(to_right,#00aaff_0%,#009977_100%)] font-bold text-white"
                      : "text-[#333333] hover:bg-[#F5F7FA] hover:text-[#1E90FF]"
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-[linear-gradient(to_right,#00aaff_0%,#009977_100%)] font-bold text-white"
                      : "text-[#333333] hover:bg-[#F5F7FA] hover:text-[#1E90FF]"
                  }`}
                  onClick={() => {
                    handleNavClick(link.href);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
