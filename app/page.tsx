"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/article/navbar";
import { HeroSection } from "@/components/article/hero-section";
import { ArticleBody } from "@/components/article/article-body";
import { PullQuote } from "@/components/article/pull-quote";
import { InterviewSummary } from "@/components/article/interview-summary";
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

      <div ref={addToRefs} className="fade-up-section">
        <InterviewSummary />
      </div>

      <div id="resumen" ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="La ensenanza no es transmitir conocimientos, es formar personas capaces de transformar la realidad."
          author="Dr. Rick Leigh Swenson Durie"
          role="Profesor Emcrito · Tecnologico de Monterrey"
        />
      </div>

      <div id="conversacion" ref={addToRefs} className="fade-up-section">
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

      <div id="reflexiones" ref={addToRefs} className="fade-up-section">
        <InterviewSection />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Reflexiones Finales
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            La conversacion con el Dr. Swenson nos deja ensenanzas profundas sobre el proposito de la educacion. Su enfoque humanista de la ingenieria, su conviccion en el potencial de los estudiantes y su vision critica sobre el futuro de la profesion son un testimonio de lo que significa ser maestro.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Al escucharlo, queda claro que la verdadera innovacion no esta solo en la tecnologia, sino en la capacidad de formar personas con etica, creatividad y compromiso social.
          </p>
        </ArticleBody>
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="La educacion es el puente entre el potencial y la realizacion. He visto a generaciones de estudiantes convertirse en lideres que transforman Mexico."
          author="Dr. Rick Leigh Swenson Durie"
          role="Profesor Emcrito · Tecnologico de Monterrey"
        />
      </div>

      <div id="futuro" ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Mirando al Futuro
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            [Parrafo sobre el futuro: Que viene despues para el Dr. Swenson? Cuales son sus proximos proyectos o metas tras mas de 40 anos de trayectoria?]
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 mb-12">
            [Parrafo de cierre final: Termina con una nota inspiradora o reflexiva sobre el legado del Dr. Swenson y su impacto en el Tecnologico de Monterrey.]
          </p>
        </ArticleBody>
      </div>

      <Footer />
    </main>
  );
}
