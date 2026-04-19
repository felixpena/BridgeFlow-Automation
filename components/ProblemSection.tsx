import { Clock, AlertTriangle, Link2Off } from "lucide-react";

const problems = [
  {
    icon: Clock,
    tag: "Problema 01",
    title: "Los viernes se convierten en cuellos de botella",
    description:
      "Sus analistas más valiosos dedican horas críticas a exportar datos de SAP, limpiarlos en Excel y consolidar reportes de forma manual. Cada viernes, el mismo ritual. Cada semana, el mismo riesgo.",
    detail: "Promedio industria: 6–9 horas semanales por analista",
    color: "red",
  },
  {
    icon: AlertTriangle,
    tag: "Problema 02",
    title: "Errores en reportes que llegan a la dirección",
    description:
      "Un campo mal cruzado, una fórmula que no se actualizó, un rango de fecha incorrecto. Los procesos manuales generan una tasa de error que compromete la credibilidad de sus reportes ante la alta gerencia.",
    detail: "El 68% de los errores en reportes proviene de procesos manuales repetitivos",
    color: "amber",
  },
  {
    icon: Link2Off,
    tag: "Problema 03",
    title: "Dependencia crítica de personas, no de procesos",
    description:
      "Cuando el analista que 'sabe cómo hacerlo' toma vacaciones o renuncia, el proceso se detiene. Su empresa opera sobre conocimiento tácito no documentado, creando un riesgo operacional invisible y creciente.",
    detail: "El 45% de las empresas reportó interrupción operativa por rotación de personal",
    color: "orange",
  },
];

const colorMap = {
  red: {
    tag: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/8",
    icon: "bg-red-500/15 text-red-400",
    glow: "hover:border-red-500/35",
    detail: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  amber: {
    tag: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/8",
    icon: "bg-amber-500/15 text-amber-400",
    glow: "hover:border-amber-500/35",
    detail: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  orange: {
    tag: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/8",
    icon: "bg-orange-500/15 text-orange-400",
    glow: "hover:border-orange-500/35",
    detail: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
};

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-6">
            El Diagnóstico
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            ¿Le suena familiar alguno
            <br />
            de estos{" "}
            <span className="text-gradient-blue">escenarios críticos</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Las empresas que utilizan SAP enfrentan una brecha sistémica entre sus datos
            transaccionales y la operación diaria de sus equipos. El resultado es siempre el mismo:
            ineficiencia medible y riesgo operacional silencioso.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const colors = colorMap[problem.color as keyof typeof colorMap];
            const Icon = problem.icon;

            return (
              <div
                key={problem.tag}
                className={`group relative p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm card-glow-hover transition-all duration-300 ${colors.glow}`}
              >
                {/* Tag */}
                <span className={`text-xs font-bold uppercase tracking-widest ${colors.tag} mb-4 block`}>
                  {problem.tag}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {problem.description}
                </p>

                {/* Data point */}
                <div className={`px-4 py-3 rounded-lg border text-xs font-medium ${colors.detail}`}>
                  <span className="opacity-70 mr-1">Dato:</span> {problem.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1e293b] to-[#162032] border border-white/8 text-center">
          <p className="text-slate-300 text-lg">
            Cada hora que su equipo dedica a estas tareas manuales es{" "}
            <span className="text-white font-semibold">
              una hora que no dedica al análisis estratégico
            </span>{" "}
            que realmente mueve la aguja del negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
