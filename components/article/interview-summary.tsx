"use client";

const questions = [
  "[Pregunta 1: Escribe aqui la primera pregunta de la entrevista]",
  "[Pregunta 2: Escribe aqui la segunda pregunta de la entrevista]",
  "[Pregunta 3: Escribe aqui la tercera pregunta de la entrevista]",
  "[Pregunta 4: Escribe aqui la cuarta pregunta de la entrevista]",
  "[Pregunta 5: Escribe aqui la quinta pregunta de la entrevista]",
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
            [Parrafo de resumen: Aqui va una descripcion general de la entrevista. Explica de que trata la conversacion, quien es el entrevistado y por que es relevante. Este texto debe dar al lector una vision clara de lo que encontrara al leer la entrevista completa.]
          </p>
          <p>
            [Segundo parrafo: Puedes incluir el contexto detras de la entrevista, donde se realizo, o que momento particular de la carrera del entrevistado captura esta conversacion.]
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
