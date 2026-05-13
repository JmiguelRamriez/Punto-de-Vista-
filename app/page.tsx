"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/article/navbar";
import { HeroSection } from "@/components/article/hero-section";
import { ArticleBody } from "@/components/article/article-body";
import { ImageGallery } from "@/components/article/image-gallery";
import { PullQuote } from "@/components/article/pull-quote";
import { InterviewSection } from "@/components/article/interview-section";
import { Footer } from "@/components/article/footer";
import { ArrowRight } from "lucide-react";

export default function ArticlePage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <div ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="[Cita destacada del entrevistado - una frase memorable o impactante que resuma su vision o mensaje principal.]"
          author="[Nombre del Entrevistado]"
          role="[Cargo o Titulo]"
        />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <ImageGallery
          images={[
            { src: "/images/team-collaboration.jpg", alt: "Descripcion de la imagen 1", caption: "[Pie de foto 1: Describe el contexto de esta imagen.]" },
            { src: "/images/robot-detail.jpg", alt: "Descripcion de la imagen 2", caption: "[Pie de foto 2: Describe el contexto de esta imagen.]" },
            { src: "/images/lab-workspace.jpg", alt: "Descripcion de la imagen 3", caption: "[Pie de foto 3: Describe el contexto de esta imagen.]" },
          ]}
        />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            [Subtitulo: Tema o Seccion]
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            [Parrafo de contexto: Aqui puedes expandir sobre el tema principal antes de la entrevista formal. Incluye informacion de fondo, datos relevantes, o la historia del entrevistado.]
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            [Parrafo adicional: Continua desarrollando el contexto. Puedes incluir anecdotas, descripciones del lugar, o reflexiones del periodista.]
          </p>
        </ArticleBody>
      </div>

      {/* Full-width Photo */}
      <div ref={addToRefs} className="fade-up-section my-16 md:my-24">
        <div className="relative w-full h-[50vh] md:h-[80vh]">
          <Image
            src="/images/lab-workspace.jpg"
            alt="Imagen panoramica"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-5xl mx-auto">
              <p className="text-white/80 text-sm md:text-base max-w-2xl">
                [Pie de foto: Descripcion de la imagen panoramica y su relevancia para la historia.]
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <InterviewSection />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Reflexiones Finales
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            [Parrafo de cierre: Reflexiona sobre los puntos clave de la entrevista. Que aprendimos? Cual es el mensaje principal que el entrevistado quiere transmitir?]
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            [Parrafo final: Concluye con una observacion significativa o mira hacia el futuro. Puedes incluir una ultima cita del entrevistado o tus propias reflexiones como periodista.]
          </p>
        </ArticleBody>
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="[Segunda cita destacada - otra frase memorable que cierre o complemente la primera.]"
          author="[Nombre del Entrevistado]"
          role="[Cargo o Titulo]"
        />
      </div>

      {/* Research Spotlight Section */}
      <section ref={addToRefs} className="fade-up-section py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Investigacion"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Investigacion</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                Donde la ciencia encuentra su proposito
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                En el Tecnologico de Monterrey, la investigacion no solo se queda en los laboratorios. Nuestros investigadores y estudiantes trabajan en proyectos que tienen un impacto real en la sociedad, desde soluciones de energia limpia hasta avances en medicina regenerativa.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground border-b border-foreground/20 hover:border-foreground/60 pb-0.5 transition-all group">
                Explorar investigacion
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Mirando al Futuro
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            [Parrafo sobre el futuro: Que viene despues para el entrevistado? Cuales son sus proximos proyectos o metas?]
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 mb-12">
            [Parrafo de cierre final: Termina con una nota inspiradora o reflexiva que deje al lector pensando.]
          </p>
        </ArticleBody>
      </div>

      {/* Closing Quote */}
      <div ref={addToRefs} className="fade-up-section py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic text-white/90 text-balance">
            &quot;[Cita inspiradora o frase final que resuma el espiritu de la entrevista.]&quot;
          </p>
          <p className="mt-8 text-white/50 text-sm">— [Autor de la cita]</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
