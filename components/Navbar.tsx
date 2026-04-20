"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "El Problema",  href: "#problema"    },
  { label: "Metodología",  href: "#metodologia" },
  { label: "Garantías",    href: "#garantias"   },
  { label: "Contacto",     href: "#contacto"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" aria-label="BridgeFlow Automation — inicio" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="BridgeFlow Automation"
            width={210}
            height={60}
            className="h-14 md:h-16 w-auto max-w-[220px] md:max-w-[280px] object-contain"
            priority
          />
        </a>

        {/* ── Desktop nav ── */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <a href="#contacto" className="hidden md:inline-flex btn-cta text-sm py-2.5 px-5">
          Solicitar Diagnóstico
        </a>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-500 hover:text-slate-900 transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg px-6 pb-6">
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-sm font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-100 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="btn-cta w-full justify-center"
                >
                  Solicitar Diagnóstico
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
