export const projects = [
  {
    slug: "aurora-financas",
    edition: "001",
    section: "Produto",
    title: "Aurora Finanças",
    dek: "Um painel de investimentos que troca gráficos ansiosos por leitura calma.",
    summary:
      "Redesenho completo de um dashboard financeiro voltado a investidores iniciantes, priorizando clareza numérica sobre densidade visual.",
    year: "2025",
    role: "Product Design & Front-end",
    stack: ["Next.js", "TypeScript", "D3.js", "Prisma", "PostgreSQL"],
    hue: 4,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Tempo até 1ª decisão", value: "-38%" },
      { label: "Usuários no piloto", value: "1.200" },
      { label: "NPS pós-lançamento", value: "62" },
    ],
    content: [
      {
        heading: "O problema",
        body: "A maioria dos aplicativos de investimento comprime dezenas de métricas na primeira tela, tratando densidade como sinônimo de poder. Para quem está começando, isso produz ansiedade, não confiança. O desafio era montar uma hierarquia que respondesse a uma única pergunta por vez.",
      },
      {
        heading: "Abordagem",
        body: "Organizamos a interface como uma matéria de jornal: um número principal, uma manchete de contexto e, só então, o corpo com detalhes. Testamos com oito usuários reais em sessões de 40 minutos, medindo tempo até a primeira decisão informada.",
      },
      {
        heading: "O que mudou",
        body: "O painel final reduz o número de elementos visíveis por padrão em 60%, empurrando comparações e séries históricas para uma segunda camada sob demanda. A tipografia ganhou uma escala mais generosa, e cores passaram a indicar apenas direção — nunca urgência artificial.",
      },
    ],
  },
  {
    slug: "gramatica-do-mapa",
    edition: "002",
    section: "Ferramenta",
    title: "Gramática do Mapa",
    dek: "Editor colaborativo de mapas urbanos para coletivos de mobilidade ativa.",
    summary:
      "Ferramenta open-source para desenhar, anotar e publicar mapas de ciclovias com dados de comunidades locais.",
    year: "2024",
    role: "Full-stack Engineer",
    stack: ["React", "Node.js", "Mapbox GL", "WebSockets", "Redis"],
    hue: 210,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Cidades mapeadas", value: "34" },
      { label: "Colaboradores ativos", value: "410" },
      { label: "Edições simultâneas", value: "tempo real" },
    ],
    content: [
      {
        heading: "Contexto",
        body: "Coletivos de ciclistas urbanos mantinham dados de infraestrutura em planilhas soltas e grupos de mensagens. Faltava um lugar único, editável em conjunto, que gerasse mapas publicáveis sem depender de um especialista em SIG.",
      },
      {
        heading: "Arquitetura",
        body: "Construímos um editor vetorial sobre Mapbox GL com sincronização por WebSockets, permitindo que várias pessoas desenhem trechos do mesmo mapa ao mesmo tempo, com resolução de conflitos por camadas — similar a um documento colaborativo, mas geográfico.",
      },
      {
        heading: "Resultado",
        body: "Hoje o projeto é mantido por voluntários em três países. A camada de exportação gera arquivos GeoJSON e PDFs prontos para impressão, usados em audiências públicas de mobilidade.",
      },
    ],
  },
  {
    slug: "biblioteca-de-sinais",
    edition: "003",
    section: "Experimento",
    title: "Biblioteca de Sinais",
    dek: "Um catálogo tipográfico interativo construído inteiramente em WebGL.",
    summary:
      "Estudo pessoal sobre tipografia cinética: cada letra do alfabeto vira um pequeno objeto 3D reagindo a física simples.",
    year: "2024",
    role: "Creative Engineering (projeto pessoal)",
    stack: ["Three.js", "GLSL", "anime.js", "Vite"],
    hue: 30,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Glifos modelados", value: "58" },
      { label: "FPS médio (desktop)", value: "60" },
      { label: "Tamanho do bundle", value: "310kb" },
    ],
    content: [
      {
        heading: "Por que este projeto existe",
        body: "Queria entender, na prática, onde termina a animação de interface e começa a escultura digital. A biblioteca trata cada caractere como um corpo rígido com massa e atrito, respondendo ao cursor como se fosse feito de chumbo tipográfico.",
      },
      {
        heading: "Detalhes técnicos",
        body: "Cada glifo é uma extrusão de uma curva SVG convertida em geometria three.js, com sombreamento próprio em GLSL para simular a luz raspante de uma prensa. O anime.js coordena as transições de estado — repouso, atenção, colapso — sobre os parâmetros físicos.",
      },
      {
        heading: "Aprendizado",
        body: "O maior custo não foi renderização, foi legibilidade: física demais e o texto vira ruído. O projeto final limita a amplitude de movimento a 12 graus por eixo, o suficiente para parecer vivo sem deixar de ser lido.",
      },
    ],
  },
  {
    slug: "estacao-clara",
    edition: "004",
    section: "Produto",
    title: "Estação Clara",
    dek: "App de meteorologia hiperlocal para produtores rurais de pequena escala.",
    summary:
      "Interface offline-first que traduz previsões complexas em decisões simples: regar, colher ou esperar.",
    year: "2023",
    role: "Front-end Lead",
    stack: ["React Native", "GraphQL", "Service Workers", "SQLite"],
    hue: 150,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Municípios atendidos", value: "19" },
      { label: "Uso offline", value: "78%" },
      { label: "Avaliação na loja", value: "4,8" },
    ],
    content: [
      {
        heading: "O contexto",
        body: "Produtores em áreas com conectividade instável precisavam de previsões confiáveis sem depender de conexão constante. O aplicativo teria de funcionar dias sem sincronizar e ainda assim orientar decisões diárias.",
      },
      {
        heading: "Decisões de design",
        body: "Substituímos ícones de nuvem genéricos por recomendações escritas em linguagem direta — 'bom para colher amanhã de manhã' em vez de '2mm de chuva às 14h'. Toda a lógica de tradução dado→recomendação roda no dispositivo.",
      },
      {
        heading: "Impacto",
        body: "Em pesquisa de campo após seis meses, 71% dos usuários relataram ajustar pelo menos uma decisão de colheita com base nos alertas do app, reduzindo perdas por chuva inesperada.",
      },
    ],
  },
  {
    slug: "arquivo-vivo",
    edition: "005",
    section: "Ferramenta",
    title: "Arquivo Vivo",
    dek: "Sistema de digitalização e busca semântica para jornais históricos.",
    summary:
      "Pipeline de OCR e indexação que transforma acervos de jornal em papel num arquivo pesquisável por assunto.",
    year: "2023",
    role: "Back-end Engineer",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
    hue: 265,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Páginas indexadas", value: "82 mil" },
      { label: "Precisão de busca", value: "91%" },
      { label: "Tempo médio de busca", value: "180ms" },
    ],
    content: [
      {
        heading: "Desafio",
        body: "Um acervo de jornal regional com quase um século de edições existia apenas em microfilme e caixas de papel. A meta era permitir que pesquisadores buscassem por tema, não apenas por data ou título.",
      },
      {
        heading: "Pipeline",
        body: "Construímos um pipeline que digitaliza, aplica OCR, corrige erros comuns de tipografia antiga e gera embeddings semânticos por parágrafo, armazenados com pgvector para busca por similaridade além de palavras-chave exatas.",
      },
      {
        heading: "Uso hoje",
        body: "O sistema é usado por três universidades para pesquisa histórica, com uma interface pública que permite navegar o acervo por década, assunto ou evento.",
      },
    ],
  },
  {
    slug: "peso-de-pagina",
    edition: "006",
    section: "Experimento",
    title: "Peso de Página",
    dek: "Extensão de navegador que mostra o custo ambiental de cada site visitado.",
    summary:
      "Projeto independente que estima emissões de CO₂ por carregamento de página e sugere alternativas mais leves.",
    year: "2022",
    role: "Idealização & Desenvolvimento",
    stack: ["JavaScript", "Chrome Extension API", "Chart.js"],
    hue: 95,
    links: { demo: "#", code: "#" },
    stats: [
      { label: "Instalações", value: "6.400" },
      { label: "Sites avaliados", value: "1,2M" },
      { label: "Redução média sugerida", value: "34%" },
    ],
    content: [
      {
        heading: "Motivação",
        body: "Depois de ler sobre o custo energético da internet, quis tornar esse número visível no momento em que ele é gerado: durante a navegação comum, não em um relatório anual abstrato.",
      },
      {
        heading: "Como funciona",
        body: "A extensão mede o peso total transferido por página e aplica um fator de conversão baseado em estudos públicos de intensidade de carbono da rede elétrica, exibindo uma estimativa discreta na barra de ferramentas.",
      },
      {
        heading: "Limites e aprendizados",
        body: "O projeto deixa claro, na própria interface, que a estimativa é aproximada. O objetivo nunca foi precisão absoluta, e sim criar um hábito de atenção — o que, segundo o feedback dos usuários, funcionou melhor do que um número exato teria funcionado.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
