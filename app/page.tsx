import Hero from "@/components/Hero";
import ProjectStrip from "@/components/ProjectStrip";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="paper-grain relative border-b-4 border-[var(--ink)] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-2 border-b-2 border-dashed border-[var(--ink)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-jp)] text-xs tracking-[0.35em] text-[var(--hanko)]">
                目次
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
                PROJETOS EM DESTAQUE
              </h2>
            </div>
            <p className="max-w-xs font-[family-name:var(--font-mono)] text-xs uppercase leading-relaxed tracking-wide opacity-60">
              três projetos mais bombásticos
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectStrip project={p} index={i} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center gap-6 px-5 py-20 text-center md:px-8">
        <p className="font-[family-name:var(--font-jp)] text-xs tracking-[0.35em] text-[var(--hanko)]">
          次回予告
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight tracking-wide md:text-5xl">
          QUER SABER MAIS SOBRE O AUTOR?
        </h2>
        <Link
          href="/sobre"
          className="snip-notch border-[3px] border-[var(--ink)] bg-[var(--ink)] px-8 py-3 font-[family-name:var(--font-jp)] text-sm tracking-widest text-[var(--paper)] transition-transform hover:-translate-y-0.5"
        >
          ページをめくる — ver ficha do personagem
        </Link>
      </section>
    </main>
  );
}
