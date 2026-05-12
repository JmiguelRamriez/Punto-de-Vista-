"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          Punto<span className="font-light"> de Vista</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#" 
            className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Inicio
          </Link>
          <Link 
            href="#" 
            className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Entrevistas
          </Link>
          <Link 
            href="#" 
            className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Investigacion
          </Link>
          <Link 
            href="#" 
            className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Nosotros
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`hidden md:flex ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Compartir articulo</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`hidden md:flex ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Guardar articulo</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Abrir menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top-2">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Entrevistas
            </Link>
            <Link href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Investigacion
            </Link>
            <Link href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Nosotros
            </Link>
            <div className="flex gap-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Bookmark className="h-4 w-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
