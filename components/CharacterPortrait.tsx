export default function CharacterPortrait({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 380"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern id="cp-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.1" fill="#17140f" opacity="0.55" />
        </pattern>
      </defs>

      <rect width="300" height="380" fill="#efe9db" />

      {/* speed lines behind */}
      <g opacity="0.5" stroke="#17140f" strokeWidth="1.2">
        {Array.from({ length: 22 }).map((_, i) => {
          const angle = (i / 22) * Math.PI * 2;
          const cx = 150;
          const cy = 150;
          const r1 = 90;
          const r2 = 190;
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

      {/* silhouette bust */}
      <path
        d="M150 60c-30 0-50 24-50 55 0 18 7 32 17 42-38 14-62 45-66 96h198c-4-51-28-82-66-96 10-10 17-24 17-42 0-31-20-55-50-55Z"
        fill="#17140f"
      />
      {/* collar / jacket shape */}
      <path
        d="M40 380c6-46 30-76 66-90l18 22-24 30 8 38Z"
        fill="#b3202b"
      />
      <path
        d="M260 380c-6-46-30-76-66-90l-18 22 24 30-8 38Z"
        fill="#b3202b"
      />

      <rect x="0" y="300" width="300" height="80" fill="url(#cp-dots)" opacity="0.6" />

      <rect x="1" y="1" width="298" height="378" fill="none" stroke="#17140f" strokeWidth="2" />
    </svg>
  );
}
