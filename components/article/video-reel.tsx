export function VideoReel() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Video Resumen
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-3">
            La historia en un minuto
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="w-[260px] sm:w-[300px]">
            <div className="relative rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-800 p-2 shadow-2xl shadow-black/30">
              <div className="relative rounded-[2.25rem] overflow-hidden bg-black aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-10" />
                <iframe
                  src="https://www.youtube.com/embed/WAEIJIkUB8I"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground/60 mt-4 tracking-wide">
              Una mirada rápida a la conversación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
