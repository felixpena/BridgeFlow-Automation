"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "El Problema",    href: "#problema"    },
  { label: "Metodología",    href: "#metodologia" },
  { label: "Garantías",      href: "#garantias"   },
  { label: "Contacto",       href: "#contacto"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040C18]/90 backdrop-blur-xl border-b border-[#1A2840]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-core to-blue-mid flex items-center justify-center shadow-lg shadow-blue-core/30">
            <Zap size={13} className="text-white" strokeWidth={2.8} />
          </span>
          <span className="font-bold text-[15px] tracking-tight text-snow">
            BridgeFlow
            <span className="text-blue-grad ml-[3px]">Automation</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-platinum hover:text-snow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
          Solicitar Diagnóstico
        </a>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-platinum hover:text-snow transition-colors"
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1426]/98 backdrop-blur-xl border-b border-[#1A2840] px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-platinum hover:text-snow transition-colors border-b border-[#111D33]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Solicitar Diagnóstico
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
