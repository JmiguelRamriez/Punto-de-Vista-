import Image from "next/image";

interface InterviewItem {
  question: string;
  answer: string;
}

const interviews: InterviewItem[] = [
  {
    question: "¿Qué lo enamoró de la tecnología y cuándo supo que su verdadera vocación era enseñar?",
    answer: "Me encantaba la computación, pero había algo con lo que no estaba conforme: ver a las computadoras como una \"caja negra\". Quería saber cómo funcionaban internamente, cómo fluía la electricidad y cómo se tomaban las decisiones. Esa curiosidad me llevó del área de sistemas al área de digitales. De hecho, junto con un grupo de estudiantes a los que les daba clase, formamos el primer laboratorio de electrónica del Tec en un salón pequeñito. Conseguir componentes en los ochentas era a prueba y error, viajando hasta República del Salvador en la Ciudad de México. En cuanto a la enseñanza, me di cuenta de que definitivamente la mejor forma de aprender es enseñando."
  },
  {
    question: "¿Qué consejo personal le daría al joven profesor que estaba por dar su primera clase hace 40 años?",
    answer: "Le diría: sé auténtico con lo que quieres hacer, sigue tus pasiones y no dejes que nadie decida por ti. Curiosamente, en mi caso, la enseñanza fue un accidente. Cuando iba a graduarme, le dije al director de carrera que ya me iba a buscar oportunidades fuera. Él me pidió ayuda: \"No me dejes colgado, ayúdame nada más este siguiente cuatrimestre\". Me quedé. Algo que no quería por nada del mundo se convirtió en la mejor decisión que alguien hizo por mí. Las buenas oportunidades se presentan una sola vez; tienes que ser suficientemente sensible para tomarlas."
  },
  {
    question: "¿Cómo se siente al ver que sus exalumnos ahora son sus colegas y compañeros de trabajo?",
    answer: "Es una de las satisfacciones más bellas que puede haber. Desde que egresé hace 45 años, he tenido alumnos que hoy son directores o tienen puestos altos dentro del Tec, como Adrián Arroyo o Ricardo Cortés. Descubrir que su vocación también fue la enseñanza da mucho gusto. De hecho, la razón por la que estoy aquí en este momento, ya jubilado y dando clase, es gracias a esos alumnos que hoy son directivos y me dieron la oportunidad de continuar con mi pasión."
  },
  {
    question: "¿Qué habilidades humanas y éticas serán el verdadero diferenciador para los ingenieros del mañana?",
    answer: "El diferenciador está en la robótica colaborativa, aquella que está al servicio del ser humano. No hablo de robots industriales en jaulas haciendo tareas repetitivas, sino de robots asistenciales, prótesis o sillas de ruedas adaptables a cualquier entorno. Si estás programando inteligencia artificial para un robot que trabajará con humanos, tiene que haber empatía. La verdadera duda de nuestro futuro, sobre todo cuando los robots adquieran conciencia, es cómo será nuestra interacción con ellos. Imagínate trabajando con un robot y que, en agradecimiento, te cierre el ojo. Esas pequeñas sutilezas y toques humanos no deben dejar de existir."
  },
  {
    question: "¿Qué sueño personal le emociona cumplir y cómo le gustaría ser recordado por sus estudiantes?",
    answer: "Ahorita estoy en la etapa de la jubilación, una palabra que me aterraba. Mi mayor miedo hoy es quedarme obsoleto, por eso sigo tomando cursos y aprendiendo. Con los años he descubierto que la verdadera labor de un docente no es abrir cabezas vacías para verter conocimiento. Los alumnos ya tienen un potencial enorme dentro; el maestro solo está ahí para ayudarles a descubrir de lo que son capaces. ¿Y cómo quiero ser recordado? No por dar una buena clase, sino por arrancarles una sonrisa. En una reunión de exalumnos les pregunté qué recordaban de mí, y lo que los marcó fueron las anécdotas chuscas. Una vez, desesperado por explicar un concepto, les dije: \"Muchachos, si ustedes fueran galletitas, tendrían forma de animalitos\". Eso los marcó de por vida. Lo que hago casi todos los días de mi vida es intentar hacer reír a un completo desconocido. La habilidad de arrancar una sonrisa, y la conexión humana que eso genera, es el legado que me gustaría dejar."
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
                  src="/images/professor-swenson.jpg"
                  alt="Foto del entrevistado"
                  fill
                  className="object-cover scale-[1.8] object-[center_20%]"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-serif text-xl font-bold text-foreground">Rick Lee Swenson</h3>
                <p className="text-muted-foreground text-sm mt-1">Profesor Titular · Profesor Emérito</p>
                <p className="text-muted-foreground/70 text-sm mt-4 leading-relaxed">
                  67 años, nacido en Niagara Falls, Canadá. Ingresó al Tec de Monterrey en 1977, formando parte de la segunda generación de Sistemas Computacionales. Comenzó a dar clases siendo estudiante y hoy, con más de 45 años de trayectoria, es una institución dentro del campus de Querétaro.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Conversación</span>
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
