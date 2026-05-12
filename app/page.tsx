"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/article/navbar";
import { HeroSection } from "@/components/article/hero-section";
import { ArticleBody } from "@/components/article/article-body";
import { ImageGallery } from "@/components/article/image-gallery";
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
      
      <article className="relative">
        {/* Introduccion - PLACEHOLDER */}
        <div ref={addToRefs} className="fade-up-section">
          <ArticleBody>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              [Parrafo introductorio: Aqui va una descripcion del contexto de la entrevista. Describe donde se realizo, el ambiente, y presenta brevemente al entrevistado. Este parrafo debe capturar la atencion del lector.]
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              [Segundo parrafo: Proporciona mas contexto sobre el tema de la entrevista. Explica por que esta conversacion es relevante y que pueden esperar los lectores al continuar leyendo.]
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              [Tercer parrafo: Puedes incluir una cita breve del entrevistado que resuma el tono o tema principal de la conversacion. Esto genera interes y anticipa el contenido de la entrevista.]
            </p>
          </ArticleBody>
        </div>

        {/* Cita Destacada - PLACEHOLDER */}
        <div ref={addToRefs} className="fade-up-section">
          <PullQuote 
            quote="[Cita destacada del entrevistado - una frase memorable o impactante que resuma su vision o mensaje principal.]"
            author="[Nombre del Entrevistado]"
            role="[Cargo o Titulo]"
          />
        </div>

        {/* Galeria de Imagenes */}
        <div ref={addToRefs} className="fade-up-section">
          <ImageGallery 
            images={[
              { src: "/images/team-collaboration.jpg", alt: "Descripcion de la imagen 1", caption: "[Pie de foto 1: Describe el contexto de esta imagen.]" },
              { src: "/images/robot-detail.jpg", alt: "Descripcion de la imagen 2", caption: "[Pie de foto 2: Describe el contexto de esta imagen.]" },
              { src: "/images/lab-workspace.jpg", alt: "Descripcion de la imagen 3", caption: "[Pie de foto 3: Describe el contexto de esta imagen.]" },
            ]}
          />
        </div>

        {/* Contexto Adicional - PLACEHOLDER */}
        <div ref={addToRefs} className="fade-up-section">
          <ArticleBody>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-16 mb-8">
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

        {/* Imagen a Ancho Completo */}
        <div ref={addToRefs} className="fade-up-section my-16 md:my-24">
          <div className="relative w-full h-[50vh] md:h-[70vh]">
            <Image
              src="/images/lab-workspace.jpg"
              alt="Imagen panoramica"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-6 left-6 md:left-12 text-white/90 text-sm md:text-base max-w-xl">
              [Pie de foto: Descripcion de la imagen panoramica y su relevancia para la historia.]
            </p>
          </div>
        </div>

        {/* Seccion de Entrevista */}
        <div ref={addToRefs} className="fade-up-section">
          <InterviewSection />
        </div>

        {/* Reflexiones Finales - PLACEHOLDER */}
        <div ref={addToRefs} className="fade-up-section">
          <ArticleBody>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-16 mb-8">
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

        {/* Segunda Cita Destacada - PLACEHOLDER */}
        <div ref={addToRefs} className="fade-up-section">
          <PullQuote 
            quote="[Segunda cita destacada - otra frase memorable que cierre o complemente la primera.]"
            author="[Nombre del Entrevistado]"
            role="[Cargo o Titulo]"
          />
        </div>

        {/* Conclusion */}
        <div ref={addToRefs} className="fade-up-section">
          <ArticleBody>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-16 mb-8">
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

        {/* Cita de Cierre Visual */}
        <div ref={addToRefs} className="fade-up-section py-16 md:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic">
              &quot;[Cita inspiradora o frase final que resuma el espiritu de la entrevista.]&quot;
            </p>
            <p className="mt-6 text-muted-foreground">— [Autor de la cita]</p>
          </div>
        </div>
      </article>

      <Footer />

      <style jsx global>{`
        .fade-up-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-up-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
