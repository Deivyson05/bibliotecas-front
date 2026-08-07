# O Correspondente — Portfólio de Desenvolvedor

Portfólio pessoal construído como um jornal editorial: fundo branco, tipografia
fina (Newsreader + IBM Plex Mono), animações com anime.js e um elemento de
assinatura em 3D (campo de pontos "halftone") feito com three.js.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

- `src/app/page.js` — página inicial, com as capas dos projetos
- `src/app/sobre/page.js` — página "Sobre", com soft e hard skills
- `src/app/projetos/[slug]/page.js` — página de detalhamento de cada projeto
- `src/lib/projects.js` — **edite aqui** para trocar os projetos pelos seus
- `src/lib/skills.js` — **edite aqui** para trocar as habilidades e a linha do tempo
- `src/components/HalftoneField.js` — o campo de pontos 3D (three.js)
- `src/components/RevealText.js` / `ScrollReveal.js` — animações com anime.js
- `public/fonts/` — fontes auto-hospedadas (Newsreader, IBM Plex Mono) em .woff2

## Pontos para personalizar

1. Troque "Seu Nome" em `src/app/page.js` (hero) pelo seu nome real.
2. Ajuste o e-mail e links em `src/components/Footer.js`.
3. Substitua o conteúdo de `src/lib/projects.js` pelos seus projetos reais
   (a capa de cada um é gerada automaticamente em SVG a partir do campo `hue`,
   sem precisar de imagens).
4. Ajuste `hardSkills`, `softSkills` e `timeline` em `src/lib/skills.js`.
