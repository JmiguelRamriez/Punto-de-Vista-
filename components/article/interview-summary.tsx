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
          Sobre esta conversación
        </h2>

        <div className="space-y-5 text-foreground/80 leading-relaxed text-[1.0625rem] text-pretty">
          <p>
            Rick Swenson (67 años, nacido en 1958 en Niagara Falls, Ontario, Canadá) llegó a Querétaro por el trabajo de su padre. Ingresó al Tec de Monterrey en 1977, formando parte de la segunda generación de Sistemas Computacionales en el campus. Empezó a dar clases siendo aún estudiante debido a la escasez de profesores en el área. Hoy, con más de 45 años de trayectoria, es una institución dentro del campus, reconocido como Profesor Titular y Profesor Emérito.
          </p>
          <p>
            En esta entrevista, Rick comparte su visión sobre la evolución de la ingeniería, los retos de la educación superior en México y las lecciones que ha aprendido a lo largo de cuatro décadas y media formando a algunos de los líderes más destacados del país.
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
