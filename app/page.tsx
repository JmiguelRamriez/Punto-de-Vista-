"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/article/navbar";
import { HeroSection } from "@/components/article/hero-section";
import { ArticleBody } from "@/components/article/article-body";
import { PullQuote } from "@/components/article/pull-quote";
import { InterviewSection } from "@/components/article/interview-section";
import { Footer } from "@/components/article/footer";

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

      <div id="innovacion" ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="[Cita destacada del entrevistado - una frase memorable o impactante que resuma su vision o mensaje principal.]"
          author="[Nombre del Entrevistado]"
          role="[Cargo o Titulo]"
        />
      </div>

      <div id="investigacion" ref={addToRefs} className="fade-up-section">
        <div className="relative w-full h-[50vh] md:h-[80vh]">
          <Image
            src="https://tec.mx/sites/default/files/styles/16_9/public/repositorio/Campus/Queretaro/Instalaciones/biblioteca-campus-queretaro-tec.webp?itok=l_2QsBjr"
            alt="Campus Tecnologico de Monterrey"
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

      <div id="ingenieria" ref={addToRefs} className="fade-up-section">
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

      <div id="historias" ref={addToRefs} className="fade-up-section">
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

      <Footer />
    </main>
  );
}
