import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] w-full overflow-hidden">
      <Image
        src="/images/hero-robotics.jpg"
        alt="Imagen principal de la entrevista"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/50 to-[#0a1628]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-accent/90 text-accent-foreground text-xs uppercase tracking-[0.2em] px-4 py-1.5 font-medium">
              Entrevista Exclusiva
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/50 text-sm tracking-wide">Tecnológico de Monterrey</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.05] mb-6 text-balance max-w-5xl">
            Dr. Rick Swenson: más de 40 años formando ingenieros en el Tec
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-10 text-pretty font-light">
            Una conversación con el Profesor Emérito sobre su trayectoria, la evolución de la ingeniería y el futuro de la educación en México.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 ring-1 ring-white/20 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/researcher-portrait-1.jpg"
                  alt="Foto del autor"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white font-medium">Redaccion</span>
                <span className="mx-2 text-white/30">·</span>
                <span className="text-white/60">Punto de Vista</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span>Mayo 2026</span>
              <span className="w-px h-4 bg-white/20" />
              <span>[X] min de lectura</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.25em]">Desplazar</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
