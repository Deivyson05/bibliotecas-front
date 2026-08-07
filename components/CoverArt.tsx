const TONES: Record<
  string,
  { bg: string; fg: string; accent: string }
> = {
  indigo: { bg: "#20263a", fg: "#eef0f7", accent: "#b3202b" },
  crimson: { bg: "#2b1414", fg: "#f2e8dd", accent: "#e2c14e" },
  ink: { bg: "#17140f", fg: "#efe9db", accent: "#b3202b" },
};

export default function CoverArt({
  tone,
  className = "",
}: {
  tone: string;
  className?: string;
}) {
  const t = TONES[tone] ?? TONES.ink;
  const uid = tone;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`glow-${uid}`} cx="70%" cy="20%" r="75%">
          <stop offset="0%" stopColor={t.fg} stopOpacity="0.35" />
          <stop offset="100%" stopColor={t.fg} stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`dots-${uid}`}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.2" cy="1.2" r="1.1" fill={t.fg} opacity="0.5" />
        </pattern>
        <clipPath id={`clip-${uid}`}>
          <rect x="0" y="0" width="400" height="300" />
        </clipPath>
      </defs>

      <rect width="400" height="300" fill={t.bg} />
      <rect width="400" height="300" fill={`url(#glow-${uid})`} />

      <g clipPath={`url(#clip-${uid})`}>
        {/* speed lines burst */}
        <g opacity="0.5" stroke={t.fg} strokeWidth="1.5">
          {Array.from({ length: 18 }).map((_, i) => {
            const angle = (i / 18) * Math.PI * 2;
            const cx = 320;
            const cy = 60;
            const r1 = 20;
            const r2 = 60 + (i % 3) * 20;
            return (
              <line
                key={i}
                x1={cx + Math.cos(angle) * r1}
                y1={cy + Math.sin(angle) * r1}
                x2={cx + Math.cos(angle) * r2}
                y2={cy + Math.sin(angle) * r2}
              />
            );
          })}
        </g>

        {/* mountain / skyline silhouette */}
        <polygon
          points="0,300 0,215 45,175 85,225 135,155 195,235 245,185 305,245 345,195 400,235 400,300"
          fill={t.bg}
          stroke={t.fg}
          strokeWidth="2"
          opacity="0.9"
        />

        {/* halftone strip */}
        <rect
          x="0"
          y="255"
          width="400"
          height="45"
          fill={`url(#dots-${uid})`}
        />

        {/* moon / accent circle stamp */}
        <circle cx="320" cy="60" r="20" fill={t.accent} opacity="0.9" />
        <circle
          cx="320"
          cy="60"
          r="20"
          fill="none"
          stroke={t.fg}
          strokeWidth="2"
        />
      </g>

      <rect
        x="1"
        y="1"
        width="398"
        height="298"
        fill="none"
        stroke={t.fg}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    </svg>
  );
}
