import Link from "next/link";
import NavBar from "./NavBar";

const EDITION_DATE = "07 de agosto de 2026";

export default function SiteHeader() {
  return (
    <header style={{ background: "var(--paper)" }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 14,
          paddingBottom: 14,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-2)",
        }}
      >
        <span>Edição Nº 007 &middot; {EDITION_DATE}</span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          Disponível para novos projetos
        </span>
      </div>

      <hr className="rule rule--strong" />

      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
          paddingTop: 16,
          paddingBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(22px, 3.4vw, 30px)",
            letterSpacing: "-0.01em",
          }}
        >
          O Correspondente&ensp;
          <span style={{ color: "var(--accent)" }}>&middot;</span>&ensp;
          <span style={{ fontStyle: "italic", fontWeight: 300 }}>Cadernos de Código</span>
        </Link>
        <NavBar />
      </div>

      <hr className="rule rule--strong" />
    </header>
  );
}
