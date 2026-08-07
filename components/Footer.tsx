export default function Footer() {
  return (
    <footer className="border-t-4 border-[var(--ink)] bg-[var(--ink)] py-10 text-[var(--paper)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide">
            SAKUYA.DEV
          </p>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] opacity-60">
            発行 · publicado em todos os navegadores
          </p>
        </div>
        <div className="flex gap-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
          <a href="https://github.com" className="opacity-80 hover:opacity-100">
            GitHub
          </a>
          <a href="https://linkedin.com" className="opacity-80 hover:opacity-100">
            LinkedIn
          </a>
          <a href="mailto:voce@exemplo.com" className="opacity-80 hover:opacity-100">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
