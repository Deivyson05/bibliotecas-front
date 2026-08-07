import Link from "next/link";
import CoverArt from "./CoverArt";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({ project, size = "regular", delay = 0 }) {
  const isLead = size === "lead";

  return (
    <ScrollReveal delay={delay} className="project-card-reveal">
      <Link
        href={`/projetos/${project.slug}`}
        style={{ display: "block", height: "100%" }}
        className="project-card"
      >
        <div style={{ overflow: "hidden", border: "1px solid var(--rule)" }}>
          <CoverArt
            hue={project.hue}
            edition={project.edition}
            title={project.title}
            className="project-card__cover"
          />
        </div>

        <div style={{ paddingTop: 14 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 8, display: "flex", gap: 8, alignItems: "center" }}
          >
            <span>{project.section}</span>
            <span style={{ color: "var(--rule)" }}>&mdash;</span>
            <span>{project.year}</span>
          </p>

          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: isLead ? "clamp(26px, 3vw, 38px)" : "clamp(19px, 2vw, 23px)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              marginTop: 10,
              marginBottom: 0,
              color: "var(--ink-2)",
              fontSize: isLead ? 17 : 15,
              lineHeight: 1.55,
              maxWidth: isLead ? "62ch" : "40ch",
            }}
          >
            {project.dek}
          </p>
        </div>
      </Link>
    </ScrollReveal>
  );
}
