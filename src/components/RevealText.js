"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

// Divide o texto em palavras e revela cada uma com um leve deslizar +
// desfoque, como se estivesse saindo debaixo de um rolo de tinta.
// `as` controla a tag semântica (h1, p, etc).
export default function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  style,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = el.querySelectorAll(".rt-word");

    if (prefersReducedMotion) {
      words.forEach((w) => {
        w.style.opacity = 1;
        w.style.transform = "none";
      });
      return;
    }

    anime.set(words, { opacity: 0, translateY: "0.55em", rotateZ: 0.6 });
    anime({
      targets: words,
      opacity: [0, 1],
      translateY: ["0.55em", "0em"],
      rotateZ: [0.6, 0],
      easing: "easeOutExpo",
      duration: 900,
      delay: anime.stagger(55, { start: delay }),
    });
  }, [delay]);

  const parts = text.split(" ");

  return (
    <Tag ref={ref} className={className} style={style}>
      {parts.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <span className="rt-word" style={{ display: "inline-block" }}>
            {word}
            {i < parts.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
