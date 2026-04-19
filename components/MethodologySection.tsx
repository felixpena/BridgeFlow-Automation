import { Layers, MousePointerClick, GitMerge, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon:   Layers,
    num:    "01",
    title:  "Capa de Inteligencia Periférica",
    desc:   "Construimos una capa de automatización que opera sobre la GUI de SAP exactamente como lo haría un usuario experto — a velocidad de máquina y sin errores. No tocamos el backend. No alteramos tablas. No necesitamos autorizaciones especiales.",
  },
  {
    icon:   MousePointerClick,
    num:    "02",
    title:  "Automatización de la Interfaz",
    desc:   "Nuestros agentes navegan transacciones SAP (SE16, ME21N, FB50…), extraen los datos requeridos, los procesan con lógica Python y los entregan en el formato exacto: Excel, PDF, email automático o dashboard web.",
  },
  {
    icon:   GitMerge,
    num:    "03",
    title:  "Flujos Críticos Customizados",
    desc:   "No vendemos plataformas genéricas. Diseñamos cada automatización sobre su proceso específico: su lógica de negocio, sus reglas de validación, sus formatos de reporte. El resultado es un conector quirúrgico.",
  },
  {
    icon:   ShieldCheck,
    num:    "04",
    title:  "Shadow IT Controlado y Auditable",
    desc:   "Cada automatización opera bajo protocolo de seguridad definido: credenciales cifradas, logs de ejecución completos y documentación técnica entregada. Shadow IT ágil con trazabilidad total.",
  },
];

/* Visual pipeline data */
const pipeline = ["SAP GUI", "BridgeFlow Agent", "Python Engine", "Output"];

export default function MethodologySection() {
  return (
    <section id="metodologia" aria-labelledby="metodologia-heading" className="section-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="label-pill mb-5">Metodología BridgeFlow</div>
            <h2
              id="metodologia-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Automatización que actúa
              <br />desde los{" "}
              <span className="text-cyan-600">bordes del sistema.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-sm lg:text-right">
            Nuestro enfoque de{" "}
            <strong className="text-slate-700 font-semibold">Shadow IT inteligente</strong>{" "}
            convierte la GUI de SAP en una superficie programable sin comprometer
            la configuración central.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {steps.map(({ icon: Icon, num, title, desc }) => (
            <article key={num} className="card p-7 flex gap-5">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                  <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="text-[11px] font-bold text-slate-300 tracking-widest">{num}</span>
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-slate-900 mb-2 leading-snug">{title}</h3>
                <p className="text-[0.875rem] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Visual pipeline ── */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">

            {/* Pipeline diagram */}
            <div
              className="flex-shrink-0 flex flex-wrap items-center gap-2 font-mono text-[12px]"
              aria-label="Flujo de datos: SAP GUI → BridgeFlow Agent → Python Engine → Output"
            >
              {pipeline.map((node, i) => (
                <span key={node} className="flex items-center gap-2">
                  <span
                    className={
                      node === "BridgeFlow Agent"
                        ? "px-3 py-2 rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 font-semibold text-[11px]"
                        : "px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-[11px]"
                    }
                  >
                    {node}
                  </span>
                  {i < pipeline.length - 1 && (
                    <ArrowRight size={13} className="text-slate-300 flex-shrink-0" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="lg:border-l lg:border-slate-200 lg:pl-8">
              <p className="text-slate-600 text-[0.9375rem] leading-relaxed">
                <strong className="text-slate-900 font-semibold">
                  Sin SDKs propietarios. Sin APIs que SAP cobre por llamada.
                </strong>{" "}
                Cada automatización está construida en Python puro, con dependencias
                mínimas y documentación completa. Usted recibe el código, no una caja negra.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-4 text-cyan-600 text-sm font-semibold hover:text-cyan-700 transition-colors"
              >
                Ver cómo funciona en su caso{" "}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
