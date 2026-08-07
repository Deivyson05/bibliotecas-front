"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { animate, createTimeline } from "animejs";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(titleRef.current, { clipPath: "inset(0 100% 0 0)" })
        .fromTo(
          linesRef.current,
          { opacity: 0, scale: 0.6, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "power2.out" }
        )
        .to(
          titleRef.current,
          { clipPath: "inset(0 0% 0 0)", duration: 0.9 },
          "-=0.25"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          stampRef.current,
          { opacity: 0, scale: 2, rotate: 12 },
          { opacity: 1, scale: 1, rotate: -6, duration: 0.5, ease: "back.out(3)" },
          "-=0.35"
        )
        .fromTo(
          dotsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, rootRef);

    // anime.js — ambient dust / scroll cue motion, independent of the GSAP intro
    let cueAnim: ReturnType<typeof animate> | undefined;
    let tl2: ReturnType<typeof createTimeline> | undefined;

    if (cueRef.current) {
      cueAnim = animate(cueRef.current, {
        translateY: [0, 10, 0],
        duration: 1400,
        loop: true,
        ease: "inOutSine",
      });
    }

    if (stampRef.current) {
      tl2 = createTimeline({ loop: true });
      tl2.add(stampRef.current, {
        rotate: ["-6deg", "-3deg", "-6deg"],
        duration: 3200,
        ease: "inOutSine",
      });
    }

    return () => {
      ctx.revert();
      cueAnim?.pause();
      tl2?.pause();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden border-b-4 border-[var(--ink)] pt-24"
    >
      <div
        ref={dotsRef}
        className="halftone pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        ref={linesRef}
        className="speed-lines pointer-events-none absolute -right-1/3 -top-1/4 h-[140%] w-[140%] opacity-[0.08]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 md:px-8">
        <div className="flex items-start justify-between">
          <div>
            <p
              ref={subRef}
              className="mb-3 font-[family-name:var(--font-jp)] text-sm tracking-[0.4em] text-white bg-[var(--hanko)]"
            >
              第一巻 ・ VOLUME ONE
            </p>
            <h1
              ref={titleRef}
              className="font-[family-name:var(--font-display)] text-[15vw] leading-[0.85] tracking-tight sm:text-[10vw] md:text-[7.5vw] text-white bg-black/80"
            >
              SAKUYA
              <br />
              DEV
            </h1>
            <p
              ref={subRef}
              className="mt-6 max-w-md font-[family-name:var(--font-body)] text-base leading-relaxed text-white bg-black/80 md:text-lg"
            >
              Desenvolvedor full-stack. Conto histórias em código do mesmo
              jeito que gosto de lê-las: em capítulos, com um bom clímax e
              pelo menos uma cena de ação.
            </p>
          </div>

          <div
            ref={stampRef}
            className="hanko-stamp hidden h-24 w-24 shrink-0 items-center justify-center bg-[var(--paper)] font-[family-name:var(--font-jp)] text-sm leading-tight sm:flex"
          >
            自主
            <br />
            制作
          </div>
        </div>

        <div className="vertical-jp pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 font-[family-name:var(--font-jp)] text-xs text-[var(--ink)] opacity-40 lg:block">
          プログラマー ・ デザイナー ・ ストーリーテラー
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-8 md:px-8">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest opacity-60">
          目次 — role para ver os projetos
        </span>
        <div ref={cueRef} className="text-2xl">
          ↓
        </div>
      </div>
    </section>
  );
}
