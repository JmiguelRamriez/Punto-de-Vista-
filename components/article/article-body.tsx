import { ReactNode } from "react";

interface ArticleBodyProps {
  children: ReactNode;
}

export function ArticleBody({ children }: ArticleBodyProps) {
  return (
    <div className="max-w-[42rem] mx-auto px-6 py-16 md:py-24">
      {children}
    </div>
  );
}
