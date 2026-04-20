import { Hourglass, ShieldOff, BrainCog } from "lucide-react";

const pains = [
  {
    icon:     Hourglass,
    tag:      "Parálisis por Migración",
    headline: "No espere 7 años para modernizarse.",
    body:     "El roadmap hacia S/4HANA es real, pero sus competidores no van a pausar el mercado mientras usted migra. Cada trimestre sin automatización es una ventaja competitiva que está cediendo. Resolvemos el problema hoy, dentro de su infraestructura actual.",
    stat:     { value: "7.4 años", label: "Duración promedio de una migración S/4HANA completa" },
    accent:   "bg-amber-50 border-amber-100",
    iconBg:   "bg-amber-100 text-amber-600",
    statClr:  "text-amber-600",
  },
  {
    icon:     ShieldOff,
    tag:      "Saturación de IT",
    headline: "Soluciones que IT aprueba sin tickets.",
    body:     "Nuestras automatizaciones operan en la capa periférica de SAP — sin acceso al backend, sin modificaciones de configuración, sin fricciones con el departamento de sistemas. IT conserva el control total. Usted recibe el resultado.",
    stat:     { value: "0 cambios", label: "Requeridos en la infraestructura central de SAP" },
    accent:   "bg-cyan-50 border-cyan-100",
    iconBg:   "bg-cyan-100 text-cyan-600",
    statClr:  "text-cyan-600",
  },
  {
    icon:     BrainCog,
    tag:      "Fuga de Talento",
    headline: "Automatice lo mecánico. Libere lo estratégico.",
    body:     "Sus analistas senior dedican horas semanales a tareas que un proceso automatizado resuelve en segundos: exportar, limpiar, cruzar, formatear. Ese tiempo tiene un costo visible — y un costo oculto mayor: la desmotivación de su mejor gente.",
    stat:     { value: "−40%", label: "Reducción típica de carga operativa en el primer proceso" },
    accent:   "bg-violet-50 border-violet-100",
    iconBg:   "bg-violet-100 text-violet-600",
    statClr:  "text-violet-600",
  },
];

export default function PainSection() {
  return (
    <section id="problema" aria-labelledby="problema-heading" className="section-tint py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <header className="max-w-2xl mb-14">
          <div className="label-pill mb-5">El Costo de la Espera</div>
          <h2
            id="problema-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Cada día sin automatización
            <br />
            tiene un precio{" "}
            <span className="text-cyan-600">que se acumula.</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed">
            La brecha entre lo que SAP ofrece nativamente y lo que su operación necesita hoy
            no es un problema de tecnología. Es un problema de{" "}
            <strong className="text-slate-700 font-semibold">tiempo, talento y competitividad.</strong>
          </p>
        </header>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, tag, headline, body, stat, accent, iconBg, statClr }) => (
            <article key={tag} className="card p-8 flex flex-col gap-5">

              {/* Icon badge */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </div>

              {/* Copy */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {tag}
                </p>
                <h3 className="text-[1.1rem] font-bold text-slate-900 leading-snug mb-3">
                  {headline}
                </h3>
                <p className="text-[0.9rem] text-slate-500 leading-relaxed">{body}</p>
              </div>

              {/* Stat */}
              <div className={`mt-auto pt-5 border-t border-slate-100`}>
                <p className={`text-2xl font-extrabold ${statClr}`}>{stat.value}</p>
                <p className="text-[12px] text-slate-400 mt-0.5 leading-snug">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Central argument callout ── */}
        <aside className="mt-10 p-7 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500 to-cyan-300 flex-shrink-0" aria-hidden="true" />
          <p className="text-slate-600 text-[0.9375rem] leading-relaxed">
            <strong className="text-slate-900 font-semibold">
              La migración a S/4HANA tardará años y costará millones.
            </strong>{" "}
            Pero su operación necesita eficiencia hoy. Cerramos la brecha entre su
            infraestructura actual de SAP y la agilidad que el mercado le exige —{" "}
            <strong className="text-slate-800 font-medium">
              sin esperar al proyecto de transformación digital.
            </strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
