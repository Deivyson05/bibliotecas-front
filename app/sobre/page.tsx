import CharacterPortrait from "@/components/CharacterPortrait";
import SkillBar from "@/components/SkillBar";
import Reveal from "@/components/Reveal";

const HARD_SKILLS = [
  { label: "TypeScript / JavaScript", level: 92, note: "arma principal" },
  { label: "React / Next.js", level: 90, note: "estilo de combate favorito" },
  { label: "Node.js / APIs", level: 82, note: "suporte tático" },
  { label: "Animação (GSAP / anime.js)", level: 78, note: "golpe especial" },
  { label: "Bancos de dados (SQL/NoSQL)", level: 74, note: "reserva estratégica" },
];

const TOOLS = [
  "Next.js",
  "TypeScript",
  "GSAP",
  "anime.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "Git",
  "Docker",
];

const MOVES = [
  {
    name: "Prototipagem Relâmpago",
    desc: "Sai do zero a um protótipo clicável em horas, não semanas — ótimo para validar ideias antes de investir em produção.",
  },
  {
    name: "Refatoração Silenciosa",
    desc: "Entra em bases de código antigas e confusas e devolve algo legível, testável e mais rápido, sem quebrar o que já funciona.",
  },
  {
    name: "Olho para Detalhe",
    desc: "Cuida de microinterações, estados vazios e casos extremos — os quadrinhos que ninguém vê, mas que fazem a história inteira funcionar.",
  },
];

export default function SobrePage() {
  return (
    <main className="pt-24">
      <section className="paper-grain border-b-4 border-[var(--ink)] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-jp)] text-xs tracking-[0.35em] text-[var(--hanko)]">
            人物紹介
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
            FICHA DO PERSONAGEM
          </h1>
        </div>
      </section>

      <section className="border-b-4 border-[var(--ink)] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="panel-cut border-[3px] border-[var(--ink)] shadow-[8px_8px_0_var(--ink)]">
              <CharacterPortrait className="w-full" />
            </div>
            <div className="mt-4 caption-box px-4 py-3">
              <p className="font-[family-name:var(--font-display)] text-xl tracking-wide">
                SAKUYA
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest opacity-60">
                classe: full-stack dev
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
                Programador(a) com foco em produtos web rápidos e bem
                acabados. Curto transformar interfaces estáticas em algo que
                reage, respira e conta uma pequena história a cada
                interação — sem exagerar no efeito e sem perder performance.
              </p>
            </Reveal>

            <Reveal delay={0.05} className="mt-10">
              <h2 className="mb-4 font-[family-name:var(--font-jp)] text-sm tracking-[0.3em] text-[var(--hanko)]">
                能力値 — ATRIBUTOS
              </h2>
              <div>
                {HARD_SKILLS.map((s) => (
                  <SkillBar key={s.label} {...s} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h2 className="mb-4 font-[family-name:var(--font-jp)] text-sm tracking-[0.3em] text-[var(--hanko)]">
                装備 — EQUIPAMENTOS
              </h2>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="snip-notch border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-10 font-[family-name:var(--font-jp)] text-sm tracking-[0.3em] text-[var(--hanko)]">
              必殺技 — GOLPES ESPECIAIS
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {MOVES.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="caption-box h-full p-5">
                  <p className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide">
                    {m.name}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
