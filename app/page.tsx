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
import { ArrowRight, BookOpen, FlaskConical, Cog, Users } from "lucide-react";

const featuredStories = [
  {
    category: "Investigacion",
    title: "Como la inteligencia artificial esta transformando la investigacion cientifica en Mexico",
    excerpt: "Investigadores del Tec de Monterrey estan desarrollando modelos de IA que prometen acelerar descubrimientos en multiples disciplinas.",
    image: "/images/hero-robotics.jpg",
    author: "Maria Fernanda Lopez",
    date: "15 Ene 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    category: "Ingenieria",
    title: "Estudiantes disenan puente sostenible que conecta comunidades rurales",
    excerpt: "Un equipo de ingenieria civil creo una estructura innovadora utilizando materiales locales y tecnicas de construccion sustentable.",
    image: "/images/lab-workspace.jpg",
    author: "Carlos Mendoza",
    date: "12 Ene 2026",
    readTime: "6 min",
  },
  {
    category: "Innovacion",
    title: "El laboratorio de robotica que esta redefiniendo la automatizacion industrial",
    excerpt: "Conoce el centro de investigacion donde estudiantes y profesores colaboran en proyectos de robotica de vanguardia.",
    image: "/images/robot-detail.jpg",
    author: "Ana Sofia Ruiz",
    date: "10 Ene 2026",
    readTime: "10 min",
  },
];

const innovationStories = [
  {
    title: "Biotecnologia: el futuro de la medicina personalizada llega a las aulas",
    category: "Biotecnologia",
    image: "/images/team-collaboration.jpg",
  },
  {
    title: "Startups universitarias que estan cambiando el panorama tecnologico",
    category: "Emprendimiento",
    image: "/images/researcher-portrait-1.jpg",
  },
  {
    title: "Energias renovables: el compromiso del Tec con un futuro sostenible",
    category: "Sustentabilidad",
    image: "/images/lab-workspace.jpg",
  },
];

const categories = [
  { icon: FlaskConical, label: "Investigacion", count: "24 articulos", href: "#" },
  { icon: Cog, label: "Ingenieria", count: "18 articulos", href: "#" },
  { icon: BookOpen, label: "Innovacion", count: "31 articulos", href: "#" },
  { icon: Users, label: "Vida Estudiantil", count: "15 articulos", href: "#" },
];

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

      {/* Featured Stories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Destacado</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Historias Recientes
              </h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group">
              Ver todas
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredStories.map((story, index) => (
              <Link
                key={story.title}
                href="#"
                className={`group block ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <article className="relative overflow-hidden bg-muted h-full">
                  <div className={`relative ${index === 0 ? "aspect-[16/10] lg:aspect-[21/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 ${index === 0 ? "lg:p-10" : ""}`}>
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent font-medium mb-3 bg-accent/10 backdrop-blur-sm px-2.5 py-1">
                      {story.category}
                    </span>
                    <h3 className={`font-serif text-white font-bold leading-tight text-balance ${
                      index === 0 ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-xl"
                    }`}>
                      {story.title}
                    </h3>
                    {index === 0 && (
                      <p className="mt-3 text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
                        {story.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-4 text-white/40 text-xs">
                      <span>{story.author}</span>
                      <span className="w-px h-3 bg-white/20" />
                      <span>{story.date}</span>
                      <span className="w-px h-3 bg-white/20" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <Link href="#" className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
            Ver todas las historias
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Explora</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Cobertura por Area
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Navega a traves de nuestras categorias y descubre las historias que estan definiendo el futuro de la ingenieria y la tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="group bg-white p-8 md:p-10 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50"
                >
                  <div className="w-12 h-12 mx-auto mb-5 bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="h-5 w-5 text-primary/60" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{cat.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5">{cat.count}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section ref={addToRefs} className="fade-up-section py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Innovacion</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Fronteras del Conocimiento
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovationStories.map((story) => (
              <Link key={story.title} href="#" className="group">
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted mb-5">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                    {story.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground mt-2 leading-snug group-hover:text-accent transition-colors">
                    {story.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
