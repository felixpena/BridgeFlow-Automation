import { X, Check, ArrowRight, TrendingUp } from "lucide-react";

const beforeItems = [
  "6–9 horas semanales por analista en tareas manuales",
  "Tasa de error del 12–18% en cruces de datos complejos",
  "Reportes listos el lunes o martes (cuando deberían estar el viernes)",
  "Proceso dependiente de 1–2 personas críticas e irremplazables",
  "Sin trazabilidad: nadie sabe exactamente cómo se generó el dato",
  "Escalabilidad nula: más volumen = más horas extra",
];

const afterItems = [
  "Proceso completado en 2–8 minutos de forma autónoma",
  "Tasa de error del 0%: validaciones automáticas integradas",
  "Reportes disponibles a primera hora, sin intervención humana",
  "Proceso documentado, reproducible y ejecutable por cualquier miembro del equipo",
  "Registro de auditoría completo: cada ejecución es trazable y verificable",
  "Escalabilidad lineal: el mismo esfuerzo procesa 10x el volumen",
];

const kpis = [
  {
    label: "Ahorro promedio por analista",
    value: "280+ horas/año",
    sub: "Reasignadas a trabajo estratégico",
    color: "emerald",
  },
  {
    label: "Reducción de errores operativos",
    value: "−94%",
    sub: "En cruces y consolidaciones de datos",
    color: "cyan",
  },
  {
    label: "Retorno de inversión estimado",
    value: "< 60 días",
    sub: "En el primer proceso automatizado",
    color: "emerald",
  },
  {
    label: "Tiempo de despliegue",
    value: "5–15 días",
    sub: "Del diagnóstico al proceso en producción",
    color: "cyan",
  },
];

export default function ROISection() {
  return (
    <section id="roi" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <TrendingUp size={12} />
            Comparativa de ROI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            El costo real de{" "}
            <span className="text-red-400">seguir como hoy</span>
            <br />
            versus el valor de{" "}
            <span className="text-gradient-emerald">automatizar ahora</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada semana sin automatización es una semana de costos ocultos acumulados. Los números
            hablan por sí solos.
          </p>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {kpis.map(({ label, value, sub, color }) => (
            <div
              key={label}
              className={`p-5 rounded-2xl border text-center ${
                color === "emerald"
                  ? "bg-emerald-500/8 border-emerald-500/20"
                  : "bg-cyan-500/8 border-cyan-500/20"
              }`}
            >
              <div
                className={`text-2xl lg:text-3xl font-black mb-1 ${
                  color === "emerald" ? "text-emerald-400" : "text-cyan-400"
                }`}
              >
                {value}
              </div>
              <div className="text-white text-xs font-semibold mb-1 leading-tight">{label}</div>
              <div className="text-slate-500 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-red-400">
                  Antes
                </div>
                <div className="text-white font-bold text-lg">Proceso Manual Actual</div>
              </div>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X
                    size={14}
                    className="text-red-400/60 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden">
            {/* Highlight badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              BridgeFlow
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Después
                </div>
                <div className="text-white font-bold text-lg">Con BridgeFlow Automation</div>
              </div>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={14}
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-[#1e293b] to-cyan-500/10 border border-emerald-500/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-xl lg:text-2xl mb-2">
              ¿Cuánto está costando el proceso manual en su empresa?
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              En una sesión de diagnóstico de 45 minutos, cuantificamos el costo real de su
              operación actual y proyectamos el retorno de automatizarla.
            </p>
          </div>
          <a
            href="#contacto"
            className="group flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Calcular mi ROI
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
