import { Zap, Lock, GitBranch, RefreshCw, FileCheck, Layers } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Conectores Inteligentes SAP-Excel",
    description:
      "Desarrollamos puentes Python a medida que extraen, limpian y cruzan sus datos de SAP directamente hacia los formatos Excel que su equipo ya utiliza. Sin cambiar herramientas. Sin fricción.",
  },
  {
    icon: RefreshCw,
    title: "Ejecución Automatizada y Programada",
    description:
      "Sus reportes críticos se generan solos: a la hora que necesite, con los datos correctos, entregados donde corresponde. El trabajo ocurre en segundo plano mientras su equipo se enfoca en decisiones.",
  },
  {
    icon: Lock,
    title: "Arquitectura No Invasiva",
    description:
      "Nuestros automatizadores operan dentro del perímetro de su red existente. No requieren acceso privilegiado al núcleo de SAP ni modificaciones de infraestructura. IT central aprueba.",
  },
  {
    icon: FileCheck,
    title: "Validación y Trazabilidad Integradas",
    description:
      "Cada ejecución genera un registro de auditoría completo. Sabrá exactamente qué datos se procesaron, cuándo y con qué resultado. Cero ambigüedad en sus reportes.",
  },
  {
    icon: Layers,
    title: "Escalabilidad por Proceso",
    description:
      "Empezamos con el proceso que más tiempo le consume. Una vez validado, escalamos a toda la cadena operativa. Su ROI crece con cada flujo automatizado.",
  },
  {
    icon: Zap,
    title: "Despliegue en Días, No en Meses",
    description:
      "No implementamos un ERP nuevo. Automatizamos el proceso existente. Nuestro tiempo de despliegue promedio es de 5 a 15 días hábiles, según la complejidad del flujo.",
  },
];

const steps = [
  {
    num: "01",
    title: "Diagnóstico Operacional",
    desc: "Mapeamos sus flujos SAP-Excel en una sesión de trabajo de 2 horas con su equipo técnico y operativo.",
  },
  {
    num: "02",
    title: "Diseño del Puente",
    desc: "Desarrollamos el conector Python con su lógica de negocio específica, reglas de validación y formatos requeridos.",
  },
  {
    num: "03",
    title: "Prueba Piloto Controlada",
    desc: "Ejecutamos el automatizador en paralelo con el proceso manual durante una semana para validar resultados.",
  },
  {
    num: "04",
    title: "Despliegue y Transferencia",
    desc: "Ponemos el proceso en producción y documentamos cada componente para que su equipo mantenga total visibilidad.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solucion" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1e293b]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Nuestra Solución
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Automatización que{" "}
            <span className="text-gradient-emerald">respeta su ecosistema</span>
            <br />y transforma su operación.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No reemplazamos SAP. No migramos su stack. Construimos conectores inteligentes que
            hacen en segundos lo que sus equipos tardan horas en completar manualmente.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-[#0f172a]/60 border border-white/8 card-glow-hover hover:border-emerald-500/25"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-bold mb-2 text-base">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="bg-[#0f172a]/80 border border-white/8 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white mb-2">
              De la diagnosis al resultado: nuestro proceso en 4 etapas
            </h3>
            <p className="text-slate-400 text-sm">
              Metodología probada para garantizar resultados medibles desde el primer ciclo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent z-10 -translate-y-1/2" />
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black text-gradient-emerald leading-none">
                    {step.num}
                  </span>
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
