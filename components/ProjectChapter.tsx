import CoverArt from "./CoverArt";
import Reveal from "./Reveal";
import type { Project } from "@/lib/projects";

export default function ProjectChapter({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={project.slug}
      className="scroll-mt-24 border-b-4 border-[var(--ink)] px-5 py-16 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 flex items-center gap-4">
          <span className="font-[family-name:var(--font-jp)] text-lg tracking-widest text-[var(--hanko)]">
            {project.chapter}
          </span>
          <span className="h-px flex-1 bg-[var(--ink)] opacity-30" />
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest opacity-50">
            {project.kana}
          </span>
        </Reveal>

        <div
          className={`grid gap-10 md:grid-cols-2 md:items-center ${
            reversed ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal y={50}>
            <div className="panel-cut border-[3px] border-[var(--ink)] shadow-[10px_10px_0_var(--ink)]">
              <CoverArt tone={project.cover} className="aspect-[4/3] w-full" />
            </div>
          </Reveal>

          <Reveal y={50} delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-wide md:text-5xl">
              {project.title}
            </h2>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest opacity-50">
              {project.role} · {project.year}
            </p>

            <div className="mt-5 space-y-3">
              {project.description.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--ink-soft)]"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border-2 border-[var(--ink)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="snip-notch border-[3px] border-[var(--ink)] bg-[var(--ink)] px-5 py-2.5 font-[family-name:var(--font-jp)] text-sm tracking-widest text-[var(--paper)] transition-transform hover:-translate-y-0.5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
