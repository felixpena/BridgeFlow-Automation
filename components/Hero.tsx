import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Presentación principal"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-white"
    >
      {/* ── Subtle corner gradients (Clean Tech look) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 55% 50% at 0% 0%,   rgba(8,145,178,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 55% 50% at 100% 100%, rgba(8,145,178,0.05) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Dot grid (very subtle) ── */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <div className="label-pill mb-8 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" aria-hidden="true" />
          Automatización SAP No Invasiva · Latinoamérica
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-slate-900 leading-[1.06] tracking-[-0.025em] max-w-4xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Libere su operación
          <br />
          de la{" "}
          <span className="text-cyan-600">rigidez de SAP</span>.
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Automatización no invasiva que entrega resultados{" "}
          <span className="text-slate-700 font-medium">en días, no años.</span> La migración
          a S/4HANA puede esperar.{" "}
          <span className="text-slate-700 font-medium">Su operación no puede.</span>
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#contacto" className="btn-cta">
            Solicitar Diagnóstico Operativo
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a href="#problema" className="btn-outline">
            Ver el diagnóstico
          </a>
        </div>

        {/* Trust pills */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            "Sin modificar el backend de SAP",
            "Sin permisos de administrador",
            "Código 100% auditable",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-[13px] text-slate-400 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#problema"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-300 hover:text-cyan-500 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Más</span>
        <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
