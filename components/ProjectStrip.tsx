"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoverArt from "./CoverArt";
import type { Project } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectStrip({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const tilt = index % 2 === 0 ? -2.5 : 2.2;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, rotate: tilt * 3, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          rotate: tilt,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [tilt]);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      rotate: 0,
      scale: 1.03,
      duration: 0.35,
      ease: "power2.out",
    });
    if (burstRef.current) {
      gsap.fromTo(
        burstRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 0.35, scale: 1, duration: 0.4, ease: "power1.out" }
      );
    }
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotate: tilt,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    if (burstRef.current) {
      gsap.to(burstRef.current, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <Link
      href={`/projetos#${project.slug}`}
      className="block focus:outline-none"
      aria-label={`Ver detalhes de ${project.title}`}
    >
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="panel-cut-jag relative border-[3px] border-[var(--ink)] bg-[var(--paper)] shadow-[6px_6px_0_var(--ink)] transition-shadow"
        style={{ willChange: "transform" }}
      >
        {/* speed-line hover burst */}
        <div
          ref={burstRef}
          className="speed-lines pointer-events-none absolute inset-0 opacity-0"
        />

        {/* cut notch marks along top, like scissors dashes */}
        <div className="absolute -top-3 left-6 right-6 flex justify-between text-[var(--ink)]">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="text-xs opacity-40">
              ✂
            </span>
          ))}
        </div>

        <div className="h-40 w-full border-b-[3px] border-[var(--ink)]">
          <CoverArt tone={project.cover} className="h-full w-full" />
        </div>

        <div className="relative p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-[family-name:var(--font-jp)] text-[11px] tracking-widest text-[var(--hanko)]">
              {project.chapter}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest opacity-50">
              {project.year}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl leading-none tracking-wide">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-snug text-[var(--ink-soft)]">
            {project.summary}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-[var(--hanko)]">
            続きを読む »
          </span>
        </div>
      </div>
    </Link>
  );
}
