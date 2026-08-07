import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/RevealText";
import ScrollReveal from "@/components/ScrollReveal";
import CoverArt from "@/components/CoverArt";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — O Correspondente`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <>
      {/* ------------------------------------------------------------ */}
      {/* CABEÇALHO DA MATÉRIA                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="wrap" style={{ paddingTop: 40 }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>
          <Link href="/" style={{ color: "var(--ink-2)" }}>
            Arquivo
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          {project.section}
          <span style={{ margin: "0 8px" }}>/</span>
          Nº {project.edition}
        </p>

        <RevealText
          as="h1"
          text={project.title}
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(34px, 5.6vw, 62px)",
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            maxWidth: "20ch",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(17px, 1.8vw, 21px)",
            color: "var(--ink-2)",
            maxWidth: "56ch",
            marginTop: 16,
          }}
        >
          {project.dek}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 28px",
            marginTop: 24,
            paddingTop: 18,
            borderTop: "1px solid var(--rule)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.04em",
            color: "var(--ink-2)",
          }}
        >
          <span>Ano — {project.year}</span>
          <span>Função — {project.role}</span>
          <span>Stack — {project.stack.join(", ")}</span>
        </div>
      </section>

      <div className="wrap" style={{ marginTop: 36 }}>
        <div style={{ border: "1px solid var(--rule)" }}>
          <CoverArt
            hue={project.hue}
            edition={project.edition}
            title={project.title}
            className="project-hero-cover"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* CORPO DA MATÉRIA + FICHA TÉCNICA                              */}
      {/* ------------------------------------------------------------ */}
      <section
        className="wrap editorial-grid"
        style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
          gap: "var(--gutter)",
          alignItems: "start",
        }}
      >
        <article>
          {project.content.map((block, i) => (
            <ScrollReveal as="div" delay={i * 60} key={block.heading}>
              <div style={{ marginBottom: 36 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(20px, 2.2vw, 25px)",
                    marginBottom: 10,
                  }}
                >
                  {block.heading}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink)",
                    margin: 0,
                    maxWidth: "68ch",
                  }}
                >
                  {block.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </article>

        <aside
          style={{
            border: "1px solid var(--rule)",
            padding: 24,
            position: "sticky",
            top: 24,
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Ficha técnica
          </p>

          <dl style={{ margin: 0 }}>
            {project.stats.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "10px 0",
                  borderTop: "1px solid var(--rule)",
                }}
              >
                <dt
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--ink-2)",
                  }}
                >
                  {s.label}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 15,
                  }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid var(--rule-strong)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <a href={project.links.demo} style={{ borderBottom: "1.5px solid var(--ink)", width: "fit-content" }}>
              Ver projeto ↗
            </a>
            <a href={project.links.code} style={{ color: "var(--ink-2)", borderBottom: "1.5px solid var(--rule)", width: "fit-content" }}>
              Código-fonte ↗
            </a>
          </div>
        </aside>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* NAVEGAÇÃO ENTRE MATÉRIAS                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="wrap" style={{ marginTop: 72 }}>
        <hr className="rule rule--double" style={{ marginBottom: 0 }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--gutter)",
            paddingTop: 24,
          }}
        >
          <Link href={`/projetos/${prev.slug}`}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>
              ← Matéria anterior
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                margin: 0,
              }}
            >
              {prev.title}
            </p>
          </Link>
          <Link href={`/projetos/${next.slug}`} style={{ textAlign: "right" }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>
              Próxima matéria →
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                margin: 0,
              }}
            >
              {next.title}
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
