import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-robotics.jpg"
        alt="Imagen principal de la entrevista"
        fill
        priority
        className="object-cover"
      />
      
      {/* Gradient Overlay - Dark Blue Style */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/60 to-[#1a1a2e]/20" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Category Tag - Tec Style */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-[0.15em] px-3 py-1.5 border border-white/30">
              Entrevista Exclusiva
            </span>
          </div>
          
          {/* Title - PLACEHOLDER */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.1] mb-6 text-balance">
            [Titulo de la Entrevista]
          </h1>
          
          {/* Subtitle - PLACEHOLDER */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 text-pretty">
            [Subtitulo o breve descripcion del tema de la entrevista y por que es relevante para los lectores.]
          </p>
          
          {/* Author Info - PLACEHOLDER */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                <Image
                  src="/images/researcher-portrait-1.jpg"
                  alt="Foto del autor"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white font-medium">[Nombre del Autor]</span>
                <span className="mx-2">·</span>
                <span>[Cargo]</span>
              </div>
            </div>
            <div className="sm:ml-auto flex items-center gap-4">
              <span>[Fecha de Publicacion]</span>
              <span className="w-px h-4 bg-white/30" />
              <span>[X] min de lectura</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest">Leer mas</span>
        <svg 
          className="w-4 h-4 text-white/50" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
