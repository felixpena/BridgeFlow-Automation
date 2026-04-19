"use client";

import { ArrowRight, ChevronDown, TrendingUp, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f2027]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Automatización Empresarial de Próxima Generación
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Elimine los{" "}
            <span className="text-gradient-emerald">Excel-SAP Loops</span>
            <br />
            que consumen el tiempo
            <br />
            de su equipo.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-4">
            Sus analistas no deberían pasar los viernes cruzando datos a mano.{" "}
            <span className="text-slate-200 font-medium">
              BridgeFlow automatiza cada puente entre SAP y Excel en segundos,
            </span>{" "}
            sin tocar la infraestructura central de IT.
          </p>
          <p className="text-base text-slate-500 mb-12">
            Automatización no invasiva · Retorno de Inversión Inmediato · Shadow IT seguro
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contacto"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/45 transition-all duration-300 hover:scale-105"
            >
              Agenda una Demo Ejecutiva
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#roi"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 text-base font-medium"
            >
              Ver Comparativa de ROI
            </a>
          </div>

          {/* Social proof metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Clock,
                value: "−87%",
                label: "Reducción en tiempo de reportes",
                color: "emerald",
              },
              {
                icon: TrendingUp,
                value: "0 errores",
                label: "En cruces de datos automatizados",
                color: "cyan",
              },
              {
                icon: Shield,
                value: "100%",
                label: "Compatible con políticas de IT central",
                color: "emerald",
              },
            ].map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center p-5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-sm"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    color === "emerald"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-cyan-500/15 text-cyan-400"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className="text-2xl font-black text-white mb-1">{value}</span>
                <span className="text-xs text-slate-500 text-center leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Descubra el problema</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
