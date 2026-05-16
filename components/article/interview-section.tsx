import Image from "next/image";

interface InterviewItem {
  question: string;
  answer: string;
}

const interviews: InterviewItem[] = [
  {
    question: "¿Qué lo enamoró de la tecnología y cuándo supo que su verdadera vocación era enseñar?",
    answer: "[Respuesta 1: Aquí va la respuesta completa del Dr. Swenson.]"
  },
  {
    question: "¿Qué consejo personal le daría al joven profesor que estaba por dar su primera clase hace 40 años?",
    answer: "[Respuesta 2: Aquí va la respuesta completa del Dr. Swenson.]"
  },
  {
    question: "¿Cómo se siente al ver que sus exalumnos ahora son sus colegas y compañeros de trabajo?",
    answer: "[Respuesta 3: Aquí va la respuesta completa del Dr. Swenson.]"
  },
  {
    question: "¿Qué habilidades humanas y éticas serán el verdadero diferenciador para los ingenieros del mañana?",
    answer: "[Respuesta 4: Aquí va la respuesta completa del Dr. Swenson.]"
  },
  {
    question: "¿Qué sueño personal le emociona cumplir y cómo le gustaría ser recordado por sus estudiantes?",
    answer: "[Respuesta 5: Aquí va la respuesta completa del Dr. Swenson.]"
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
                <h3 className="font-serif text-xl font-bold text-foreground">Dr. Rick Leigh Swenson Durie</h3>
                <p className="text-muted-foreground text-sm mt-1">Profesor Titular · Profesor Emérito</p>
                <p className="text-muted-foreground/70 text-sm mt-4 leading-relaxed">
                  Más de 40 años de trayectoria en el Tecnológico de Monterrey, donde ha sido reconocido por su excelencia docente, su liderazgo en la formación de ingenieros y su contribución al desarrollo académico de la institución.
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
