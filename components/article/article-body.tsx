import { ReactNode } from "react";

interface ArticleBodyProps {
  children: ReactNode;
}

export function ArticleBody({ children }: ArticleBodyProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      {children}
    </div>
  );
}
