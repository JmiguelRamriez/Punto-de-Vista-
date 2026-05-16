"use client";

const questions = [
  "¿Qué lo enamoró de la tecnología y cuándo supo que su vocación era enseñar?",
  "¿Qué consejo le daría al joven profesor que empezaba hace 40 años?",
  "¿Cómo se siente al ver a sus exalumnos convertidos en colegas?",
  "¿Qué habilidades humanas diferenciarán a los ingenieros del futuro?",
  "¿Cómo le gustaría ser recordado por sus estudiantes?",
];

export function InterviewSummary() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[42rem] mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          Resumen
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
          Sobre esta conversacion
        </h2>

        <div className="space-y-5 text-foreground/80 leading-relaxed text-[1.0625rem] text-pretty">
          <p>
            El Dr. Rick Leigh Swenson Durie es una de las figuras más emblemáticas del Tecnológico de Monterrey, con una trayectoria de más de 40 años dedicados a la formación de ingenieros y a la innovación educativa. Profesor Titular y reconocido como Profesor Emérito, su legado trasciende las aulas y se extiende a la investigación, la mentoría y el desarrollo de nuevas generaciones de profesionistas.
          </p>
          <p>
            En esta entrevista, el Dr. Swenson comparte su vision sobre la evolucion de la ingenieria, los retos de la educacion superior en Mexico y las lecciones que ha aprendido a lo largo de cuatro decadas formando a algunos de los lideres mas destacados del pais.
          </p>
        </div>

        {/* Questions Highlight */}
        <div className="mt-14 pt-10 border-t border-border/60">
          <p className="text-sm font-medium text-foreground mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Preguntas destacadas de la entrevista
          </p>
          <ul className="space-y-4">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                  {i + 1}
                </span>
                <p className="font-serif text-lg text-foreground font-medium leading-snug">
                  {q}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
