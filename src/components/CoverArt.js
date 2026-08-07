// Capa gerativa: nenhuma imagem externa é usada. Cada projeto ganha uma
// composição própria de pontos de meio-tom (halftone), determinística a
// partir do "hue" e do "edition" do projeto — como se fosse impressa numa
// chapa diferente para cada matéria.

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function CoverArt({ hue = 10, edition = "001", title = "", className }) {
  const seed = parseInt(edition, 10) * 97 + hue;
  const rand = seededRandom(seed || 1);
  const cols = 14;
  const rows = 10;
  const cellW = 300 / cols;
  const cellH = 200 / rows;

  const dots = [];
  const cx = 3 + rand() * 8;
  const cy = 2 + rand() * 6;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c - cx;
      const dy = (r - cy) * 1.3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const falloff = Math.max(0, 1 - dist / 11);
      const jitter = 0.75 + rand() * 0.5;
      const radius = Math.max(0, falloff * jitter * (cellW / 2.1));
      if (radius < 0.35) continue;
      dots.push({
        x: c * cellW + cellW / 2,
        y: r * cellH + cellH / 2,
        r: radius,
      });
    }
  }

  const inkColor = `hsl(${hue} 30% 12%)`;
  const tintColor = `hsl(${hue} 55% 42%)`;

  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      role="img"
      aria-label={`Ilustração de capa para ${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="0" y="0" width="300" height="200" fill="var(--paper)" />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={i % 5 === 0 ? tintColor : inkColor}
          opacity={i % 5 === 0 ? 0.55 : 0.92}
        />
      ))}
      <line x1="0" y1="199.25" x2="300" y2="199.25" stroke={inkColor} strokeWidth="1.5" />
      <text
        x="8"
        y="16"
        fontFamily="var(--font-mono)"
        fontSize="9"
        letterSpacing="0.08em"
        fill={inkColor}
        opacity="0.55"
      >
        Nº {edition}
      </text>
    </svg>
  );
}
