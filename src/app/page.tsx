import { projectCaseStudies } from "../mocks/portfolio.mock";
import type { ProjectCaseStudy } from "../types/contracts";

const featuredCaseStudies: readonly ProjectCaseStudy[] = projectCaseStudies
  .filter((study) => study.featured)
  .sort((left, right) => left.order - right.order);

export default function HomePage() {
  return (
    <>
      <p className="mt-gutter max-w-measure text-lead">
        Ingeniería de datos e IA para decisiones de producto y de operación.
      </p>
      <ul className="mt-gutter flex flex-col gap-gutter">
        {featuredCaseStudies.map((study) => (
          <li key={study.slug}>
            <article className="rounded-2xl border border-white/10 bg-surface p-gutter shadow-card">
              <h2 className="font-display text-section">{study.title}</h2>
              <p className="font-mono text-meta text-muted">
                <time dateTime={String(study.year)}>{study.year}</time>
              </p>
              <p className="mt-gutter max-w-measure">{study.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
