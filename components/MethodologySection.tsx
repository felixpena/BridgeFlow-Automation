import { Layers, MousePointerClick, GitMerge, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon:     Layers,
    number:   "01",
    title:    "Capa de Inteligencia Periférica",
    desc:     "Construimos una capa de automatización que opera sobre la GUI de SAP, exactamente como lo haría un usuario experto, pero a velocidad de máquina y sin errores. No tocamos el backend. No alteramos tablas. No necesitamos autorizaciones especiales.",
  },
  {
    icon:     MousePointerClick,
    number:   "02",
    title:    "Automatización de la Interfaz (RPA Selectivo)",
    desc:     "Nuestros agentes de software navegan transacciones SAP (SE16, ME21N, FB50, etc.), extraen los datos requeridos, los procesan mediante lógica Python y los entregan en el formato exacto que su equipo necesita: Excel, PDF, email automático o dashboard.",
  },
  {
    icon:     GitMerge,
    number:   "03",
    title:    "Flujos Críticos Customizados",
    desc:     "No vendemos una plataforma genérica. Diseñamos cada automatización sobre el proceso específico de su empresa: su lógica de negocio, sus reglas de validación, sus formatos de reporte. El resultado es un conector quirúrgico, no un template.",
  },
  {
    icon:     ShieldCheck,
    number:   "04",
    title:    "Shadow IT Controlado y Auditable",
    desc:     "Cada automatización corre bajo protocolo de seguridad definido: credenciales cifradas, logs de ejecución completos y documentación técnica entregada al cliente. Shadow IT no significa IT sin control — significa IT ágil con trazabilidad total.",
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-dots opacity-50" />

      {/* Bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(29,111,239,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.15), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="label-chip mb-5">Metodología BridgeFlow</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow leading-tight tracking-tight">
              Automatización que actúa
              <br />
              desde{" "}
              <span className="text-blue-grad">los bordes del sistema.</span>
            </h2>
          </div>
          <p className="text-platinum text-base leading-relaxed max-w-sm lg:text-right">
            Nuestro enfoque de{" "}
            <span className="text-silver font-semibold">Shadow IT inteligente</span> convierte
            la GUI de SAP en una superficie programable sin comprometer un solo byte de su
            configuración central.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {steps.map(({ icon: Icon, number, title, desc }) => (
            <div key={number} className="card p-7 flex gap-5">

              {/* Number + icon column */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-blue-dim border border-blue-mid/25 flex items-center justify-center text-blue-bright">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-bold text-blue-bright/40 tracking-widest">
                  {number}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-snow mb-2 leading-snug">{title}</h3>
                <p className="text-[0.875rem] text-platinum leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Architecture callout ── */}
        <div
          className="rounded-2xl border border-blue-mid/20 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(29,111,239,0.06) 0%, rgba(11,20,38,0.9) 60%)",
          }}
        >
          <div className="p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">

            {/* Diagram — abstract pipeline */}
            <div className="flex-shrink-0 flex items-center gap-2 text-[12px] font-mono text-platinum/50">
              {["SAP GUI", "→", "BridgeFlow Agent", "→", "Python Engine", "→", "Output"].map(
                (node, i) => (
                  <span
                    key={i}
                    className={
                      node === "→"
                        ? "text-blue-bright/30"
                        : node === "BridgeFlow Agent"
                        ? "px-3 py-1.5 rounded-lg border border-blue-core/40 bg-blue-dim text-blue-bright font-semibold text-[11px]"
                        : "px-3 py-1.5 rounded-lg border border-rim bg-surface text-[11px]"
                    }
                  >
                    {node}
                  </span>
                )
              )}
            </div>

            <div className="lg:border-l lg:border-rim lg:pl-8">
              <p className="text-silver text-[0.9375rem] leading-relaxed">
                <span className="text-snow font-semibold">
                  Sin SDKs propietarios. Sin APIs que SAP cobre por llamada.
                </span>{" "}
                Cada automatización está construida en Python puro, con dependencias
                mínimas y documentación completa. Usted recibe el código, no una caja negra.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-4 text-blue-bright text-sm font-semibold hover:text-blue-glow transition-colors"
              >
                Ver cómo funciona en su caso <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
