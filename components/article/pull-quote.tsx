interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function PullQuote({ quote, author, role }: PullQuoteProps) {
  return (
    <aside className="my-16 md:my-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative py-12 md:py-16 border-l-4 border-[#1a1a2e] pl-8 md:pl-12">
          {/* Decorative Quote Mark */}
          <span 
            className="absolute -top-4 left-6 md:left-10 text-8xl md:text-9xl font-serif text-[#1a1a2e]/10 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          
          <blockquote className="relative z-10">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug md:leading-snug text-balance">
              {quote}
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#1a1a2e]" />
              <div>
                <cite className="not-italic font-medium text-foreground">{author}</cite>
                <p className="text-sm text-muted-foreground mt-1">{role}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
