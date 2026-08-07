"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "表紙", sub: "Início" },
  { href: "/sobre", label: "人物", sub: "Sobre" },
  { href: "/projetos", label: "作品", sub: "Projetos" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  return (
    <header
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-50 border-b-4 border-[var(--ink)] bg-[var(--paper)]/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-[family-name:var(--font-display)] text-xl tracking-wide"
        >
          <span className="hanko-stamp inline-flex h-8 w-8 items-center justify-center text-[13px] font-[family-name:var(--font-jp)]">
            咲
          </span>
          <span>SAKUYA.DEV</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative px-4 py-2 font-[family-name:var(--font-jp)] text-sm ${
                  active ? "text-[var(--paper)]" : "text-[var(--ink)]"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 bg-[var(--ink)] snip-notch" />
                )}
                <span className="block leading-none">{l.label}</span>
                <span className="mt-0.5 block text-[10px] tracking-[0.2em] opacity-70 font-[family-name:var(--font-mono)]">
                  {l.sub.toUpperCase()}
                </span>
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 bg-[var(--ink)] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[var(--ink)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[var(--ink)] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t-2 border-[var(--ink)] md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-[var(--line)] px-5 py-3 font-[family-name:var(--font-jp)]"
            >
              <span>{l.label}</span>
              <span className="text-[10px] tracking-[0.2em] opacity-70 font-[family-name:var(--font-mono)]">
                {l.sub.toUpperCase()}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
