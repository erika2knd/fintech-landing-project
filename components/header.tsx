"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HeaderAuthControls from "@/components/HeaderAuthControls"; 

const NAV = [
  { href: "#experience", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "/contact", label: "Contacts" }, 
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textPrimary = scrolled ? "text-gray-900" : "text-white";
  const textSecondary = scrolled ? "text-gray-600" : "text-white/80";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        <nav className="flex h-16 md:h-20 items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900/40 rounded"
          >
            <span className={`text-2xl font-extrabold ${textPrimary}`}>Fynora</span>
          </Link>

          <ul className={`hidden md:flex items-center gap-8 text-sm ${textSecondary}`}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:${scrolled ? "text-gray-900" : "text-white"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900/40 rounded`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <HeaderAuthControls scrolled={scrolled} />

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center rounded-full p-2 ${
                scrolled ? "text-gray-900 hover:bg-gray-900/10" : "text-white hover:bg-white/20"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 focus-visible:ring-offset-2`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`md:hidden border-t ${
              scrolled ? "bg-white/90 backdrop-blur border-black/5" : "bg-black/60 backdrop-blur border-white/10"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-24 py-4">
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                        scrolled ? "text-gray-900 hover:bg-gray-900/5" : "text-white hover:bg-white/10"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <HeaderAuthControls scrolled={scrolled} variant="mobile" />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

