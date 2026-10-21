import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section-shell scroll-mt-24 py-16 md:py-24" aria-labelledby={`${id}-title`}>
      <div className="container-page mx-auto max-w-6xl px-5 md:px-8">
        <h2 id={`${id}-title`} className="headline-type mb-8 font-bold tracking-tight text-ink">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;