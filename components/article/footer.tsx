import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              Punto<span className="font-light text-white/60"> de Vista</span>
            </Link>
            <p className="mt-5 text-white/40 max-w-md leading-relaxed text-sm">
              Una plataforma editorial del Tecnológico de Monterrey. Contamos las historias de innovación, investigación y las personas extraordinarias que están dando forma a nuestro futuro a través de la ingeniería y la tecnología.
            </p>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-4">
                Suscribete al boletin
              </p>
              <form className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
              Secciones
            </h4>
            <ul className="space-y-3">
              {["Innovacion", "Investigacion", "Ingenieria", "Historias", "Vida Universitaria"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
              Acerca de
            </h4>
            <ul className="space-y-3">
              {["Nuestra Mision", "Equipo Editorial", "Contacto", "Escribe para Nosotros"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6">
              Redes
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/jmiwe21?igsh=amJ0NzNpYnhkb3Rm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jos%C3%A9-miguel-ramirez-gutierrez-a592a4351/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="mailto:A01712628@tec.mx"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all"
                aria-label="Correo"
              >
                <Mail className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>&copy; 2026 Punto de Vista · Tecnologico de Monterrey</p>
          <div className="flex gap-6">
            {["Privacidad", "Terminos", "Accesibilidad"].map((item) => (
              <Link key={item} href="#" className="hover:text-white/50 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
