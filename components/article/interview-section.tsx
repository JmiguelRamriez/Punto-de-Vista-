import Image from "next/image";

interface InterviewItem {
  question: string;
  answer: string;
}

// PLACEHOLDER - Reemplazar con las preguntas y respuestas reales
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
    <section className="my-16 md:my-24 bg-[#1a1a2e]/5">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto md:mx-0">
                <Image
                  src="/images/researcher-portrait-2.jpg"
                  alt="Foto del entrevistado"
                  fill
                  className="object-cover"
                />
              </div>
              {/* PLACEHOLDER - Informacion del entrevistado */}
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-serif text-xl font-bold text-foreground">[Nombre del Entrevistado]</h3>
                <p className="text-muted-foreground mt-1">[Cargo o Titulo]</p>
                <p className="text-sm text-muted-foreground mt-2">
                  [Breve biografia o descripcion del entrevistado. Por ejemplo: su trayectoria, logros destacados, o por que es relevante para esta entrevista.]
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              La Entrevista
            </h2>
            
            <div className="space-y-10">
              {interviews.map((item, index) => (
                <div key={index} className="border-l-4 border-[#1a1a2e] pl-6 bg-white py-6 px-6 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-[#1a1a2e]/70 mb-3 font-medium">
                    Pregunta {index + 1}
                  </p>
                  <p className="font-medium text-foreground text-lg mb-4">
                    {item.question}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
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
