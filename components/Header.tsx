"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { company, navLinks } from "@/lib/company";
import { PhoneIcon, ArrowRightIcon, MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-sand-deep bg-paper/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
          {/* Logo */}
          <a href="#top" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nyc Heating & Air"
              width={160}
              height={48}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-clay-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:text-clay-600"
            >
              <PhoneIcon className="h-4 w-4 text-teal-600" />
              {company.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-all hover:bg-clay-600"
            >
              Book Service
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={company.phoneHref}
              aria-label={`Call ${company.phoneDisplay}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-clay-500 text-white shadow-soft"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-sand-deep bg-paper lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sand-deep py-3.5 font-display text-lg text-ink last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="my-3 flex items-center justify-center gap-2 rounded-full bg-clay-500 px-5 py-3 text-sm font-bold text-white"
              >
                Book Service
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
