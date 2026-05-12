import Link from "next/link";
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-bold">
              Punto<span className="font-light"> de Vista</span>
            </Link>
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Contando las historias de innovacion, investigacion y las personas extraordinarias que estan dando forma a nuestro futuro. Una publicacion dedicada a la narrativa centrada en el ser humano en ciencia y tecnologia.
            </p>
            
            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Suscribete a nuestro boletin</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-[#1a1a2e] px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-white/50">
              Secciones
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Entrevistas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Investigacion
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Historias
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Vida Universitaria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Egresados
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About & Social */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-white/50">
              Acerca de
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Nuestra Mision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Equipo Editorial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Escribe para Nosotros
                </Link>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Correo"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2026 Punto de Vista. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Politica de Privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terminos de Uso
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
