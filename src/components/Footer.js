export default function Footer() {
  return (
    <footer style={{ marginTop: 96 }}>
      <hr className="rule rule--strong" />
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 24,
          paddingTop: 20,
          paddingBottom: 40,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.04em",
          color: "var(--ink-2)",
        }}
      >
        <p style={{ margin: 0, maxWidth: 420 }}>
          O Correspondente — Cadernos de Código. Publicação pessoal, composta
          em Newsreader e IBM Plex Mono, impressa digitalmente com Next.js,
          three.js e anime.js.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="mailto:contato@seudominio.dev">contato@seudominio.dev</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
