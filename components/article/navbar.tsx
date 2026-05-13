"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#", label: "Inicio" },
  { href: "#", label: "Innovacion" },
  { href: "#", label: "Investigacion" },
  { href: "#", label: "Ingenieria" },
  { href: "#", label: "Historias" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Punto<span className="font-light"> de Vista</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:opacity-100 ${
                isScrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-40 pt-24">
          <nav className="flex flex-col gap-0">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-8 py-5 text-lg text-foreground/80 hover:text-primary hover:bg-muted/50 border-b border-border/50 transition-all"
                style={{ animation: `slide-up 0.3s ease-out ${i * 0.05}s both` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
