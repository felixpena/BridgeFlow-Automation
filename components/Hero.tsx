import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Radial blue bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(29,111,239,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Hairline horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-border/20 to-transparent" style={{"--tw-border-opacity":"1"} as React.CSSProperties} />
        <div
          className="absolute top-[38%] left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.12), transparent)" }}
        />
        <div
          className="absolute top-[62%] left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.06), transparent)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <div className="label-chip mb-8 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-bright animate-pulse" />
          Automatización SAP No Invasiva
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-snow leading-[1.06] tracking-[-0.02em] max-w-4xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Libere su operación
          <br />
          de la{" "}
          <span className="text-blue-grad">rigidez de SAP</span>.
        </h1>

        {/* Subheadline */}
        <p
          className="mt-7 text-lg sm:text-xl text-platinum leading-relaxed max-w-2xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Soluciones de automatización no invasivas que{" "}
          <span className="text-silver font-medium">entregan en días</span> lo que a su
          departamento de IT le tomaría años. La migración a S/4HANA puede esperar.{" "}
          <span className="text-silver font-medium">Su operación no puede.</span>
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#contacto" className="btn-primary">
            Solicitar Diagnóstico Operativo
            <ArrowRight size={17} />
          </a>
          <a href="#problema" className="btn-ghost">
            Ver el diagnóstico
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            "Sin modificar el backend de SAP",
            "Sin permisos de administrador",
            "Código 100% auditable",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-[13px] text-platinum/60">
              <span className="w-1 h-1 rounded-full bg-blue-bright/50 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-platinum/30 hover:text-platinum/60 transition-colors"
      >
        <span className="text-[11px] uppercase tracking-widest">Más</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
