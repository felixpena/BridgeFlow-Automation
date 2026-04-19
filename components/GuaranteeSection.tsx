import { Code2, LayoutDashboard, ShieldCheck, Users2 } from "lucide-react";

const pillars = [
  {
    icon:   Code2,
    title:  "Arquitectura Auditable y Transparente",
    desc:   "Cada componente entregado sigue estándares de ingeniería corporativa: documentado, versionado en control de fuente y estructurado para que cualquier equipo técnico interno pueda leerlo, mantenerlo y extenderlo. Sin lógica oculta. Sin dependencias críticas externas.",
    color:  "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    icon:   LayoutDashboard,
    title:  "Interfaces Modernas (UI/UX Corporativa)",
    desc:   "Cuando el proceso lo requiere, construimos interfaces web internas con diseño enterprise — herramientas que sus equipos adoptan sin fricción porque se ven y operan como productos SaaS de primer nivel, no como soluciones provisionales.",
    color:  "bg-cyan-50 border-cyan-100 text-cyan-600",
  },
  {
    icon:   ShieldCheck,
    title:  "Ciberseguridad Corporativa Integrada",
    desc:   "Cada solución cumple con estándares de seguridad de nivel enterprise: cifrado de credenciales, principio de mínimo privilegio, operación dentro del perímetro de red existente y sin exposición de datos sensibles fuera de los sistemas autorizados.",
    color:  "bg-violet-50 border-violet-100 text-violet-600",
  },
  {
    icon:   Users2,
    title:  "Transferencia de Conocimiento",
    desc:   "Capacitamos a su equipo en el funcionamiento de cada automatización. El objetivo no es crear dependencia de BridgeFlow — es que su organización sea autónoma. Los clientes que vuelven lo hacen por convicción, no por obligación.",
    color:  "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
];

const standards = [
  "Arquitectura portable e independiente de stack",
  "Control de versiones con historial de cambios",
  "Logs de auditoría estructurados y trazables",
  "Gestión segura de credenciales (zero hardcoding)",
  "Documentación técnica y operativa completa",
  "Validaciones y pruebas de regresión incluidas",
];

export default function GuaranteeSection() {
  return (
    <section id="garantias" aria-labelledby="garantias-heading" className="section-tint py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <header className="max-w-2xl mb-14">
          <div className="label-pill mb-5">Garantía de Profesionalismo</div>
          <h2
            id="garantias-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Entregamos soluciones de nivel enterprise.
            <br />
            <span className="text-cyan-600">No parches temporales.</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed">
            El valor de BridgeFlow no está en las herramientas que usamos — está en el puente
            estratégico que construimos. Cada entrega es{" "}
            <strong className="text-slate-700 font-semibold">
              auditable, segura y diseñada para durar.
            </strong>
          </p>
        </header>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {pillars.map(({ icon: Icon, title, desc, color }) => (
            <article key={title} className="card p-7 flex gap-5 bg-white">
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${color}`}>
                <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-[0.875rem] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Standards checklist ── */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-card p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            <div className="lg:w-64 flex-shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Estándares de Entrega
              </p>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                Cada proyecto cumple con estos requisitos técnicos.
              </h3>
            </div>

            <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {standards.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[13px] text-slate-700 font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
