"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

// Faixa de rolagem contínua, como o teletipo de agência de notícias,
// listando as ferramentas de um grupo de hard skills.
export default function SkillsTicker({ items }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const half = track.scrollWidth / 2;

    const animation = anime({
      targets: track,
      translateX: [0, -half],
      duration: Math.max(6000, half * 28),
      easing: "linear",
      loop: true,
    });

    return () => animation.pause();
  }, [items]);

  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: "max-content",
          padding: "10px 0",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--ink-2)",
              whiteSpace: "nowrap",
              padding: "0 20px",
              borderRight: "1px solid var(--rule)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
