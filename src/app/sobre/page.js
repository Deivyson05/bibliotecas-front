import RevealText from "@/components/RevealText";
import ScrollReveal from "@/components/ScrollReveal";
import SkillsTicker from "@/components/SkillsTicker";
import { hardSkills, softSkills, timeline } from "@/lib/skills";

export const metadata = {
  title: "Sobre — O Correspondente",
};

export default function SobrePage() {
  const allHardSkills = hardSkills.flatMap((g) => g.items);

  return (
    <>
      <section className="wrap" style={{ paddingTop: 48, paddingBottom: 32 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>
          Nº 007 &middot; Perfil
        </p>
        <RevealText
          as="h1"
          text="Sobre o autor destas matérias."
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(32px, 5vw, 54px)",
            letterSpacing: "-0.015em",
            maxWidth: "18ch",
          }}
        />
      </section>

      <hr className="rule rule--double" />

      {/* ------------------------------------------------------------ */}
      {/* BIOGRAFIA — coluna editorial com capitular                    */}
      {/* ------------------------------------------------------------ */}
      <section
        className="wrap editorial-grid"
        style={{
          paddingTop: 48,
          paddingBottom: 56,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "var(--gutter)",
        }}
      >
        <ScrollReveal as="div">
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Coluna do editor
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 19,
              lineHeight: 1.75,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            <span
              style={{
                float: "left",
                fontSize: 68,
                lineHeight: 0.8,
                paddingRight: 10,
                paddingTop: 6,
                fontWeight: 500,
                color: "var(--accent)",
              }}
            >
              C
            </span>
            omecei a programar tentando consertar sites que eu mesmo
            quebrava. Hoje, o interesse virou ofício: passo os dias entre
            arquitetura de dados, componentes de interface e a pequena
            obsessão de fazer uma animação parecer inevitável, não
            decorativa. Prefiro produtos que resolvem um problema real a
            experimentos vazios — mas reservo tempo, sempre, para os
            dois.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--ink-2)",
              marginTop: 20,
            }}
          >
            Trabalhei em produtos financeiros, ferramentas de mapeamento
            colaborativo e experimentos pessoais em WebGL. O fio comum
            entre eles é tratar a interface como texto: algo que precisa
            ser lido com facilidade antes de impressionar.
          </p>
        </ScrollReveal>

        <ScrollReveal as="div" delay={100}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Linha do tempo
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((t, i) => (
              <div
                key={t.year}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "14px 0",
                  borderTop: i === 0 ? "1px solid var(--rule-strong)" : "1px solid var(--rule)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    minWidth: 40,
                  }}
                >
                  {t.year}
                </span>
                <div>
                  <p style={{ margin: 0, fontSize: 15, fontFamily: "var(--font-display)" }}>
                    {t.role}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--ink-2)" }}>{t.place}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--rule)" }} />
          </div>
        </ScrollReveal>
      </section>

      <hr className="rule rule--strong" />

      {/* ------------------------------------------------------------ */}
      {/* HARD SKILLS — classificados técnicos + ticker                */}
      {/* ------------------------------------------------------------ */}
      <section className="wrap" style={{ paddingTop: 48 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>
          Classificados &middot; Competências técnicas
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            columnGap: "var(--gutter)",
            rowGap: 32,
            marginBottom: 32,
          }}
        >
          {hardSkills.map((group, i) => (
            <ScrollReveal
              as="div"
              delay={i * 70}
              key={group.group}
              className=""
            >
              <div
                style={{
                  borderLeft: i !== 0 ? "1px solid var(--rule)" : "none",
                  paddingLeft: i !== 0 ? "var(--gutter)" : 0,
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-2)",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {group.group}
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 18,
                        padding: "7px 0",
                        borderTop: "1px solid var(--rule)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SkillsTicker items={allHardSkills} />

      {/* ------------------------------------------------------------ */}
      {/* SOFT SKILLS — pequenas notas de rodapé, como cartas ao editor */}
      {/* ------------------------------------------------------------ */}
      <section className="wrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>
          Cartas ao editor &middot; Modos de trabalho
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--gutter)",
          }}
        >
          {softSkills.map((s, i) => (
            <ScrollReveal as="div" delay={i * 60} key={s.label}>
              <blockquote
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                  }}
                >
                  “{s.quote}”
                </p>
                <footer
                  className="eyebrow"
                  style={{ marginTop: 10, fontStyle: "normal" }}
                >
                  — {s.label}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
