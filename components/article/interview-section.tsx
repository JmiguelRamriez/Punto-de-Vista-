import Image from "next/image";

interface InterviewItem {
  question: string;
  answer: string;
}

const interviews: InterviewItem[] = [
  {
    question: "[Pregunta 1: Escribe aqui la primera pregunta de la entrevista]",
    answer: "[Respuesta 1: Aqui va la respuesta completa del entrevistado a la primera pregunta. Puede ser tan larga como sea necesario para capturar toda la informacion relevante.]"
  },
  {
    question: "[Pregunta 2: Escribe aqui la segunda pregunta de la entrevista]",
    answer: "[Respuesta 2: Aqui va la respuesta completa del entrevistado a la segunda pregunta. Incluye detalles, anecdotas o datos relevantes que el entrevistado haya compartido.]"
  },
  {
    question: "[Pregunta 3: Escribe aqui la tercera pregunta de la entrevista]",
    answer: "[Respuesta 3: Aqui va la respuesta completa del entrevistado a la tercera pregunta. Asegurate de capturar el tono y la personalidad del entrevistado.]"
  },
  {
    question: "[Pregunta 4: Escribe aqui la cuarta pregunta de la entrevista]",
    answer: "[Respuesta 4: Aqui va la respuesta completa del entrevistado a la cuarta pregunta.]"
  },
  {
    question: "[Pregunta 5: Escribe aqui la quinta pregunta de la entrevista]",
    answer: "[Respuesta 5: Aqui va la respuesta completa del entrevistado a la quinta pregunta.]"
  }
];

export function InterviewSection() {
  return (
    <section className="my-20 md:my-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-1">
            <div className="md:sticky md:top-32">
              <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto md:mx-0 overflow-hidden">
                <Image
                  src="/images/researcher-portrait-2.jpg"
                  alt="Foto del entrevistado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-serif text-xl font-bold text-foreground">[Nombre del Entrevistado]</h3>
                <p className="text-muted-foreground text-sm mt-1">[Cargo o Titulo]</p>
                <p className="text-muted-foreground/70 text-sm mt-4 leading-relaxed">
                  [Breve biografia o descripcion del entrevistado.]
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Conversacion</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                La Entrevista
              </h2>
            </div>

            <div className="space-y-12">
              {interviews.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      Pregunta {index + 1}
                    </span>
                    <span className="h-px flex-1 bg-border/60" />
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-foreground font-medium leading-snug mb-6">
                    {item.question}
                  </p>
                  <p className="text-foreground/75 leading-relaxed text-[1.0625rem] text-pretty">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
