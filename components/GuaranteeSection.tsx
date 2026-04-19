import { Code2, LayoutDashboard, BookOpenCheck, Users2 } from "lucide-react";

const pillars = [
  {
    icon:  Code2,
    title: "Código Limpio y Auditable",
    desc:  "Cada script entregado sigue estándares de codificación corporativa: documentado, versionado en Git y estructurado para que cualquier desarrollador interno pueda leerlo, mantenerlo y extenderlo. No hay lógica oculta ni dependencias críticas externas.",
  },
  {
    icon:  LayoutDashboard,
    title: "Interfaces Modernas (UI/UX Corporativa)",
    desc:  "Cuando el proceso lo requiere, construimos interfaces web internas con diseño enterprise — no formularios básicos ni scripts de consola. Sus equipos operan sobre herramientas que se ven y se comportan como aplicaciones profesionales.",
  },
  {
    icon:  BookOpenCheck,
    title: "Documentación Técnica Entregable",
    desc:  "Al cierre de cada proyecto recibe un dossier técnico completo: arquitectura del flujo, manual de operación, procedimiento de recuperación ante fallos y guía de mantenimiento. Su empresa retiene todo el conocimiento, no solo el resultado.",
  },
  {
    icon:  Users2,
    title: "Transferencia de Conocimiento",
    desc:  "Capacitamos a su equipo técnico en el funcionamiento de cada automatización. El objetivo no es crear dependencia de BridgeFlow — es que su organización sea autónoma. Los clientes que vuelven lo hacen por convicción, no por obligación.",
  },
];

const certifications = [
  "Python 3.10+ con type hints estrictos",
  "Versionado Git con historial completo",
  "Logs de ejecución estructurados (JSON)",
  "Variables de entorno para credenciales",
  "Documentación en Markdown/Confluence",
  "Pruebas unitarias incluidas",
];

export default function GuaranteeSection() {
  return (
    <section id="garantias" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#07101F]" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.15), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <div className="label-chip mb-5">Garantía de Profesionalismo</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow leading-tight tracking-tight">
            Entregamos software.
            <br />
            <span className="text-blue-grad">No macros de Excel.</span>
          </h2>
          <p className="mt-5 text-platinum text-lg leading-relaxed">
            La percepción de fragilidad asociada a la automatización periférica de SAP nace
            de soluciones improvisadas. Nuestro estándar de entrega{" "}
            <span className="text-silver font-medium">
              elimina esa percepción con evidencia técnica.
            </span>
          </p>
        </div>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-7 flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-dim border border-blue-mid/25 flex items-center justify-center text-blue-bright">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-snow mb-2">{title}</h3>
                <p className="text-[0.875rem] text-platinum leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Standards block ── */}
        <div className="rounded-2xl border border-rim bg-surface/50 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            <div className="lg:w-72 flex-shrink-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-bright/70 mb-2">
                Estándares de Entrega
              </p>
              <h3 className="text-xl font-extrabold text-snow leading-snug">
                Cada proyecto cumple con estos requisitos técnicos.
              </h3>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-rim bg-elevated/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-bright flex-shrink-0" />
                  <span className="text-[13px] text-silver font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
