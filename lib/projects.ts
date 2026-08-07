export type Project = {
  slug: string;
  chapter: string; // 第01話 etc
  title: string;
  kana: string; // small furigana-style tag
  summary: string; // short teaser for home
  description: string[]; // paragraphs for detail page
  stack: string[];
  role: string;
  year: string;
  links: { label: string; href: string }[];
  cover: string; // gradient tone key used for placeholder art
};

export const projects: Project[] = [
  {
    slug: "ronin-tasks",
    chapter: "第01話",
    title: "RŌNIN TASKS",
    kana: "タスク管理",
    summary:
      "Gerenciador de tarefas com quadros arrastáveis e sincronização em tempo real.",
    description: [
      "Um app de produtividade construído para squads pequenas que precisam de velocidade: quadros kanban, atalhos de teclado para tudo e sincronização em tempo real via WebSockets.",
      "O maior desafio foi manter a UI a 60fps durante o drag-and-drop com centenas de cartões — resolvido com virtualização de lista e otimizações de re-render no React.",
    ],
    stack: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "WebSockets"],
    role: "Full-stack · solo",
    year: "2025",
    links: [
      { label: "Ver código", href: "https://github.com" },
      { label: "Abrir demo", href: "https://example.com" },
    ],
    cover: "indigo",
  },
  {
    slug: "hanabi-shop",
    chapter: "第02話",
    title: "HANABI SHOP",
    kana: "E-COMMERCE",
    summary: "Loja virtual headless com checkout otimizado e CMS próprio.",
    description: [
      "Plataforma de e-commerce headless para marcas pequenas: catálogo, carrinho, checkout e um painel de administração próprio construído do zero.",
      "Foco total em performance — Lighthouse 98+ em mobile — e em um checkout de uma página só, reduzindo o abandono de carrinho em 27% comparado à versão anterior.",
    ],
    stack: ["Next.js", "Stripe", "Sanity", "Tailwind", "Vercel"],
    role: "Front-end lead",
    year: "2024",
    links: [
      { label: "Ver código", href: "https://github.com" },
      { label: "Abrir demo", href: "https://example.com" },
    ],
    cover: "crimson",
  },
  {
    slug: "yokai-engine",
    chapter: "第03話",
    title: "YŌKAI ENGINE",
    kana: "GAME JAM",
    summary: "Motor 2D leve para jams, com editor de níveis visual no navegador.",
    description: [
      "Motor de jogos 2D em Canvas/WebGL feito para game jams: sistema de entidades leve, editor de níveis visual e hot-reload de assets direto no navegador.",
      "Usado em 3 game jams por uma equipe de 4 pessoas, permitindo prototipar uma mecânica jogável em menos de 2 horas.",
    ],
    stack: ["TypeScript", "WebGL", "Vite", "ECS"],
    role: "Criador & mantenedor",
    year: "2023",
    links: [
      { label: "Ver código", href: "https://github.com" },
      { label: "Ler docs", href: "https://example.com" },
    ],
    cover: "ink",
  },
];
