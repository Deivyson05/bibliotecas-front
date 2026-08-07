# SAKUYA.DEV — Portfólio estilo mangá

Portfólio de programador em Next.js (App Router), com animações em GSAP e anime.js,
inspirado visualmente em capas e páginas de mangá: papel envelhecido, halftone,
tinta preta grossa, carimbo hanko vermelho e cards de projeto recortados como tirinhas.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

> A primeira build precisa de internet para baixar as fontes do Google Fonts
> (Anton, Shippori Antique B1, Zen Kaku Gothic New, JetBrains Mono) — isso é
> automático via `next/font/google`, não precisa configurar nada.

## Páginas

- `/` — capa (hero) + resumo dos projetos em cards recortados ("tirinhas")
- `/sobre` — ficha de personagem: skills como barras de atributo (anime.js),
  ferramentas como "equipamentos" e diferenciais como "golpes especiais"
- `/projetos` — cada projeto detalhado como um capítulo de mangá, com stack,
  papel no projeto e links

## Onde editar o conteúdo

- `lib/projects.ts` — dados dos 3 projetos (troque pelos seus)
- `components/Hero.tsx` — nome, tagline e texto de capa
- `app/sobre/page.tsx` — skills, ferramentas e "golpes especiais"
- `components/Footer.tsx` — links de contato (GitHub, LinkedIn, email)
- `components/CoverArt.tsx` / `components/CharacterPortrait.tsx` — arte de capa
  gerada em SVG (placeholder). Troque por `<img>`/screenshots reais quando
  tiver artes ou prints dos projetos.

## Animação

- **GSAP + ScrollTrigger**: entrada do hero, reveals ao rolar a página,
  hover dos cards de projeto (`components/Reveal.tsx`, `components/ProjectStrip.tsx`)
- **anime.js**: barras de skill que enchem ao entrar na tela, selo hanko
  balançando e seta de scroll pulsando (`components/SkillBar.tsx`, `components/Hero.tsx`)

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · GSAP · anime.js v4
