import Link from "next/link";
import RevealText from "@/components/RevealText";
import HalftoneField from "@/components/HalftoneField";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const [lead, ...rest] = projects;

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO / MANCHETE                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(40px, 6vw, 76px)",
          paddingBottom: "clamp(40px, 6vw, 76px)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.9,
            maskImage:
              "radial-gradient(60% 60% at 78% 40%, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 78% 40%, black 0%, transparent 72%)",
          }}
        >
          <HalftoneField style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Perfil &middot; Desenvolvedor Full-stack
          </p>

          <RevealText
            as="h1"
            text="Seu Nome escreve interfaces com rigor editorial."
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(38px, 6.4vw, 76px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: "16ch",
            }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              marginTop: 32,
              maxWidth: 760,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(16px, 1.6vw, 19px)",
                lineHeight: 1.6,
                color: "var(--ink-2)",
                maxWidth: "48ch",
              }}
            >
              Projeto e construo produtos digitais de ponta a ponta —
              da arquitetura de dados à última animação de interface.
              Este espaço reúne o arquivo de trabalhos como uma edição
              de jornal: cada projeto é uma matéria, com contexto,
              decisões e resultado.
            </p>

            <div
              style={{
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <Link
                href="#projetos"
                style={{
                  borderBottom: "1.5px solid var(--ink)",
                  paddingBottom: 3,
                }}
              >
                Ver projetos ↓
              </Link>
              <Link
                href="/sobre"
                style={{
                  borderBottom: "1.5px solid var(--rule)",
                  paddingBottom: 3,
                  color: "var(--ink-2)",
                }}
              >
                Sobre mim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule rule--double" />

      {/* ---------------------------------------------------------------- */}
      {/* GRADE DE PROJETOS                                                */}
      {/* ---------------------------------------------------------------- */}
      <section id="projetos" className="wrap" style={{ paddingTop: 48, paddingBottom: 24 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(24px, 2.6vw, 32px)",
            }}
          >
            Edição de hoje — Projetos
          </h2>
          <span className="eyebrow">{projects.length} matérias arquivadas</span>
        </div>

        <div style={{ marginBottom: 56 }}>
          <ProjectCard project={lead} size="lead" />
        </div>

        <hr className="rule" style={{ marginBottom: 40 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            columnGap: "var(--gutter)",
            rowGap: 48,
          }}
        >
          {rest.map((project, i) => (
            <div
              key={project.slug}
              style={{
                borderLeft: i % 3 !== 0 ? "1px solid var(--rule)" : "none",
                paddingLeft: i % 3 !== 0 ? "var(--gutter)" : 0,
              }}
            >
              <ProjectCard project={project} delay={i * 60} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
