import { Hourglass, ShieldOff, BrainCog } from "lucide-react";

const pains = [
  {
    icon: Hourglass,
    tag:  "01 — Parálisis por Migración",
    headline: "No espere 7 años para modernizarse.",
    body: "El roadmap hacia S/4HANA es real, pero sus competidores no van a pausar el mercado mientras usted migra. Cada trimestre sin automatización es una ventaja competitiva que está cediendo. Nosotros resolvemos el problema hoy, dentro de su infraestructura actual.",
    stat: { value: "7.4 años", label: "Duración promedio de una migración S/4HANA completa" },
  },
  {
    icon: ShieldOff,
    tag:  "02 — Saturación de IT",
    headline: "Soluciones que IT aprobará antes del almuerzo.",
    body: "Nuestras automatizaciones operan en la capa periférica de SAP: sin acceso al backend, sin modificaciones de configuración, sin tickets al departamento de sistemas. Su equipo de IT conserva el control total. Nosotros entregamos el resultado.",
    stat: { value: "0 cambios", label: "Requeridos en la infraestructura central de SAP" },
  },
  {
    icon: BrainCog,
    tag:  "03 — Fuga de Talento",
    headline: "Deje de pagarle a su equipo para que haga trabajo de script.",
    body: "Sus analistas senior dedican horas semanales a tareas que un proceso automatizado resuelve en segundos: exportar, limpiar, cruzar, formatear. Ese tiempo tiene un costo real y un costo oculto mayor: la desmotivación de profesionales capaces haciendo trabajo mecánico.",
    stat: { value: "−40%", label: "Reducción típica de carga operativa en el primer proceso" },
  },
];

export default function PainSection() {
  return (
    <section id="problema" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#07101F]" />
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Top separator glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.2), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <div className="label-chip mb-5">El Costo de la Espera</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow leading-tight tracking-tight">
            Cada día sin automatización
            <br />
            tiene un precio{" "}
            <span className="text-blue-grad">que se acumula.</span>
          </h2>
          <p className="mt-5 text-platinum text-lg leading-relaxed">
            La brecha entre lo que SAP hace nativamente y lo que su operación necesita hoy no
            es un problema de tecnología. Es un problema de{" "}
            <span className="text-silver font-medium">tiempo, talento y competitividad.</span>
          </p>
        </div>

        {/* ── Pain cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pains.map(({ icon: Icon, tag, headline, body, stat }) => (
            <div key={tag} className="card p-8 flex flex-col gap-5">

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-blue-dim border border-blue-mid/20 flex items-center justify-center text-blue-bright flex-shrink-0">
                <Icon size={20} strokeWidth={1.75} />
              </div>

              {/* Copy */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-bright/70 mb-2">
                  {tag}
                </p>
                <h3 className="text-[1.125rem] font-bold text-snow leading-snug mb-3">
                  {headline}
                </h3>
                <p className="text-[0.9rem] text-platinum leading-relaxed">{body}</p>
              </div>

              {/* Stat */}
              <div className="mt-auto pt-5 border-t border-rim">
                <p className="text-2xl font-extrabold text-blue-bright">{stat.value}</p>
                <p className="text-[12px] text-platinum/60 mt-0.5 leading-snug">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom callout ── */}
        <div className="mt-10 p-7 rounded-2xl border border-rim bg-surface/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-2 h-12 rounded-full bg-gradient-to-b from-blue-core to-blue-mid flex-shrink-0" />
          <p className="text-silver text-[0.9375rem] leading-relaxed">
            <span className="text-snow font-semibold">La migración a S/4HANA tardará años y costará millones.</span>{" "}
            Pero su operación necesita eficiencia hoy. Cerramos la brecha entre su
            infraestructura actual de SAP y la agilidad que el mercado le exige —{" "}
            <span className="text-snow font-medium">sin esperar al proyecto de transformación digital.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
