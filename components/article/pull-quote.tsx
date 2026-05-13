interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function PullQuote({ quote, author, role }: PullQuoteProps) {
  return (
    <aside className="my-20 md:my-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative py-16 md:py-20 border-t border-b border-border/40">
          <span
            className="absolute top-4 left-0 text-8xl md:text-9xl font-serif text-primary/5 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug md:leading-snug text-balance italic">
              {quote}
            </p>
            <footer className="mt-10">
              <div className="w-8 h-px bg-accent/60 mx-auto mb-6" />
              <cite className="not-italic">
                <span className="text-base font-medium text-foreground">{author}</span>
                <span className="mx-2 text-muted-foreground/50">·</span>
                <span className="text-sm text-muted-foreground">{role}</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
