"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import anime from "animejs";

const LINKS = [
  { href: "/", label: "Capa" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
];

function NavLink({ href, label, active }) {
  function handleEnter(e) {
    const underline = e.currentTarget.querySelector(".nav-underline");
    if (!underline) return;
    anime({
      targets: underline,
      scaleX: [0, 1],
      duration: 320,
      easing: "easeOutQuad",
    });
  }
  function handleLeave(e) {
    const underline = e.currentTarget.querySelector(".nav-underline");
    if (!underline) return;
    anime({
      targets: underline,
      scaleX: active ? 1 : [1, 0],
      duration: 250,
      easing: "easeInQuad",
    });
  }

  return (
    <Link
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ position: "relative", padding: "4px 2px", display: "inline-block" }}
    >
      {label}
      <span
        className="nav-underline"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -2,
          height: 1.5,
          background: "var(--accent)",
          transform: `scaleX(${active ? 1 : 0})`,
          transformOrigin: "left center",
        }}
      />
    </Link>
  );
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      style={{
        display: "flex",
        gap: "clamp(16px, 3vw, 32px)",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 400,
      }}
    >
      {LINKS.map((l) => (
        <NavLink
          key={l.href}
          href={l.href}
          label={l.label}
          active={l.href === "/" ? pathname === "/" : pathname.startsWith(l.href.replace("/#projetos", "/__never"))}
        />
      ))}
    </nav>
  );
}
