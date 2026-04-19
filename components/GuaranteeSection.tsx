import { Code2, LayoutDashboard, BookOpenCheck, Users2 } from "lucide-react";

const pillars = [
  {
    icon:   Code2,
    title:  "Código Limpio y Auditable",
    desc:   "Cada script entregado sigue estándares de codificación corporativa: documentado, versionado en Git y estructurado para que cualquier desarrollador interno pueda leerlo, mantenerlo y extenderlo. Sin lógica oculta ni dependencias externas críticas.",
    color:  "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    icon:   LayoutDashboard,
    title:  "Interfaces Modernas (UI/UX Corporativa)",
    desc:   "Cuando el proceso lo requiere, construimos interfaces web internas con diseño enterprise — no formularios de consola ni macros visuales. Sus equipos operan sobre herramientas que se ven y comportan como aplicaciones profesionales.",
    color:  "bg-cyan-50 border-cyan-100 text-cyan-600",
  },
  {
    icon:   BookOpenCheck,
    title:  "Documentación Técnica Entregable",
    desc:   "Al cierre de cada proyecto recibe un dossier técnico completo: arquitectura del flujo, manual de operación, procedimiento de recuperación ante fallos y guía de mantenimiento. Su empresa retiene el conocimiento, no solo el resultado.",
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
  "Python 3.10+ con type hints estrictos",
  "Versionado Git con historial completo",
  "Logs de ejecución estructurados (JSON)",
  "Variables de entorno para credenciales",
  "Documentación en Markdown / Confluence",
  "Pruebas unitarias incluidas",
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
            Entregamos software.
            <br />
            <span className="text-cyan-600">No macros de Excel.</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed">
            La percepción de fragilidad asociada a la automatización periférica de SAP nace
            de soluciones improvisadas. Nuestro estándar de entrega{" "}
            <strong className="text-slate-700 font-semibold">
              elimina esa percepción con evidencia técnica.
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
