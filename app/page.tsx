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

      <div id="resumen" ref={addToRefs} className="fade-up-section">
        <InterviewSummary />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="La educación entra más por el corazón que por la cabeza."
          author="Rick Swenson"
          role="Profesor Emérito · Tecnológico de Monterrey"
        />
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <div className="relative w-full h-[50vh] md:h-[80vh]">
          <Image
            src="https://tec.mx/sites/default/files/styles/16_9/public/repositorio/Campus/Queretaro/Instalaciones/biblioteca-campus-queretaro-tec.webp?itok=l_2QsBjr"
            alt="Campus Tecnológico de Monterrey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-5xl mx-auto">

            </div>
          </div>
        </div>
      </div>

      <div id="conversacion" ref={addToRefs} className="fade-up-section">
        <InterviewSection />
      </div>

      <div id="reflexiones" ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Reflexiones Finales
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            La conversación con Swenson nos deja enseñanzas profundas sobre el propósito de la educación. Su enfoque humanista de la ingeniería, su convicción en el potencial de los estudiantes y su visión crítica sobre el futuro de la profesión son un testimonio de lo que significa ser maestro.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Al escucharlo, queda claro que la verdadera innovación no está solo en la tecnología, sino en la capacidad de formar personas con ética, creatividad y compromiso social.
          </p>
        </ArticleBody>
      </div>

      <div ref={addToRefs} className="fade-up-section">
        <PullQuote
          quote="Yo no soy maestro porque domino mi materia. Soy maestro porque me interesa mi alumno."
          author="Rick Swenson"
          role="Profesor Emérito · Tecnológico de Monterrey"
        />
      </div>

      <div id="futuro" ref={addToRefs} className="fade-up-section">
        <ArticleBody>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-8 mb-8">
            Mirando al Futuro
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            Hoy, ya jubilado, Rick Swenson sigue dando clases en el Tec de Monterrey, fiel a su vocación y a esa frase que lo define: &ldquo;La educación entra más por el corazón que por la cabeza&rdquo;. Lejos de retirarse, continúa tomando cursos, aprendiendo nuevas tecnologías y demostrando que su mayor miedo —quedarse obsoleto— es también su mayor motor.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 mb-12">
            Cuando se le pregunta qué legado quiere dejar, su respuesta no tiene que ver con logros académicos ni innovaciones técnicas. Él quiere ser recordado como alguien que supo arrancar sonrisas. Porque al final, después de 45 años frente al pizarrón, ha descubierto que la conexión humana —esa risa compartida en medio de una explicación de circuitos— es lo que realmente transforma a un estudiante.
          </p>
        </ArticleBody>
      </div>

      <Footer />
    </main>
  );
}
