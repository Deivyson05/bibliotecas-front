"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function SkillBar({
  label,
  level,
  note,
}: {
  label: string;
  level: number; // 0-100
  note?: string;
}) {
  const fillRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    const num = numRef.current;
    if (!wrap || !fill || !num) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            animate(fill, {
              width: [`0%`, `${level}%`],
              duration: 1100,
              ease: "outQuart",
            });
            const counter = { v: 0 };
            animate(counter, {
              v: level,
              duration: 1100,
              ease: "outQuart",
              onUpdate: () => {
                if (num) num.textContent = String(Math.round(counter.v));
              },
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={wrapRef} className="mb-5">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-[family-name:var(--font-body)] text-sm font-bold tracking-wide">
          {label}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-xs tabular-nums opacity-70">
          <span ref={numRef}>0</span>/100
        </span>
      </div>
      <div className="h-4 w-full border-2 border-[var(--ink)] bg-[var(--paper)]">
        <div
          ref={fillRef}
          className="halftone-dense h-full border-r-2 border-[var(--ink)] bg-[var(--hanko)]"
          style={{ width: "0%" }}
        />
      </div>
      {note && (
        <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wide opacity-50">
          {note}
        </p>
      )}
    </div>
  );
}
