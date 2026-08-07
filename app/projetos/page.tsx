import ProjectChapter from "@/components/ProjectChapter";
import { projects } from "@/lib/projects";

export default function ProjetosPage() {
  return (
    <main className="pt-24">
      <section className="paper-grain border-b-4 border-[var(--ink)] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-jp)] text-xs tracking-[0.35em] text-[var(--hanko)]">
            全話一覧
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
            TODOS OS CAPÍTULOS
          </h1>
          <p className="mt-3 max-w-lg text-sm text-[var(--ink-soft)]">
            Cada projeto contado do início ao fim: o problema, a construção e
            o resultado.
          </p>
        </div>
      </section>

      {projects.map((p, i) => (
        <ProjectChapter project={p} index={i} key={p.slug} />
      ))}
    </main>
  );
}
