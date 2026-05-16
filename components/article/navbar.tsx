"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#innovacion", label: "Innovacion" },
  { href: "#investigacion", label: "Investigacion" },
  { href: "#ingenieria", label: "Ingenieria" },
  { href: "#historias", label: "Historias" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    if (targetId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 cursor-pointer ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          Punto<span className="font-light"> de Vista</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:opacity-100 cursor-pointer ${
                isScrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            className={`md:hidden transition-colors duration-500 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-background z-40 pt-24">
          <nav className="flex flex-col gap-0">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="px-8 py-5 text-lg text-foreground/80 hover:text-primary hover:bg-muted/50 border-b border-border/50 transition-all cursor-pointer"
                style={{ animation: `slide-up 0.3s ease-out ${i * 0.05}s both` }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
