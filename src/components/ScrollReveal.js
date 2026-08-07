"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

// Revela o filho quando ele entra na viewport: um "wipe" vertical que
// lembra uma folha de jornal sendo desdobrada, seguido de um leve
// assentar de posição.
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = 1;
      el.style.clipPath = "none";
      return;
    }

    el.style.clipPath = "inset(0 0 100% 0)";
    el.style.opacity = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: el,
              clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
              opacity: [0, 1],
              duration: 850,
              delay,
              easing: "easeOutQuart",
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
