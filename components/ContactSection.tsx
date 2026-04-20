"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ChevronRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

type Status = "idle" | "loading" | "success" | "error";

const benefits = [
  "Diagnóstico gratuito del proceso candidato a automatizar",
  "Estimación de ROI específica para su caso",
  "Propuesta técnica en 48 horas hábiles",
  "Sin permanencia. Sin letra pequeña.",
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form,   setForm]   = useState({
    nombre:  "",
    cargo:   "",
    empresa: "",
    email:   "",
    proceso: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mrerkvnp", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        sendGAEvent("event", "generate_lead", {
          event_category: "contact_form",
          empresa:         form.empresa,
          cargo:           form.cargo,
        });
        setStatus("success");
        setForm({ nombre: "", cargo: "", empresa: "", email: "", proceso: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="section-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-pill mb-5 mx-auto w-fit">Solicitar Diagnóstico Operativo</div>
          <h2
            id="contacto-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            El primer paso cuesta{" "}
            <span className="text-cyan-600">45 minutos.</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed">
            Cuéntenos qué proceso le está costando más tiempo a su equipo.
            Nosotros hacemos el resto.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — benefits */}
          <aside className="lg:col-span-2 flex flex-col gap-5" aria-label="Lo que incluye el diagnóstico">
            <div className="card p-7 bg-white">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
                Lo que incluye
              </p>
              <ul className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-cyan-500 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[0.875rem] text-slate-600 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ROI callout */}
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
              <p className="text-slate-700 text-[0.875rem] leading-relaxed">
                <strong className="text-slate-900 font-semibold block mb-1">
                  ¿Cuánto puede ahorrar?
                </strong>
                Si un analista dedica 6 horas semanales a un proceso que automatizamos,
                su empresa recupera{" "}
                <strong className="text-cyan-700 font-semibold">300+ horas al año</strong>{" "}
                de trabajo estratégico.
              </p>
            </div>
          </aside>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="card p-8 lg:p-10 bg-white">

              {status === "success" ? (
                /* ── Success ── */
                <div className="flex flex-col items-center justify-center text-center py-10 gap-5">
                  <div className="w-16 h-16 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                    <CheckCircle2 size={30} className="text-cyan-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      Solicitud recibida.
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                      Revisaremos los detalles de su proceso y le contactaremos en las
                      próximas 48 horas hábiles con una propuesta técnica personalizada.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-cyan-600 text-sm hover:text-cyan-700 underline underline-offset-4 transition-colors font-medium"
                  >
                    Enviar otra consulta
                  </button>
                </div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Row 1: Nombre + Cargo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="nombre"
                        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Nombre completo <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="nombre" name="nombre" type="text" required
                        value={form.nombre} onChange={set("nombre")}
                        placeholder="Ej. Ana García"
                        className="field"
                        autoComplete="name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cargo"
                        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Cargo <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="cargo" name="cargo" type="text" required
                        value={form.cargo} onChange={set("cargo")}
                        placeholder="Ej. Gerente de Operaciones"
                        className="field"
                        autoComplete="organization-title"
                      />
                    </div>
                  </div>

                  {/* Row 2: Empresa + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="empresa"
                        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Empresa <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="empresa" name="empresa" type="text" required
                        value={form.empresa} onChange={set("empresa")}
                        placeholder="Nombre de su organización"
                        className="field"
                        autoComplete="organization"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Email corporativo <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={set("email")}
                        placeholder="nombre@empresa.com"
                        className="field"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Proceso */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="proceso"
                      className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Proceso crítico a automatizar{" "}
                      <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="proceso" name="proceso" required rows={5}
                      value={form.proceso} onChange={set("proceso")}
                      placeholder="Describa el proceso que más tiempo consume a su equipo. Ej: Cada cierre mensual exportamos el reporte de costos de SAP (KSB1), lo cruzamos con el presupuesto en Excel y generamos un informe de variación. Dos analistas dedican un día completo a esto..."
                      className="field resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <p
                      role="alert"
                      className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    >
                      Ocurrió un error al enviar. Por favor intente nuevamente.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-cta justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                        Enviando solicitud…
                      </>
                    ) : (
                      <>
                        Solicitar Diagnóstico Operativo
                        <ChevronRight size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-[12px] text-slate-400 text-center leading-snug">
                    Sin compromisos. Sus datos se utilizan exclusivamente
                    para coordinar la sesión de diagnóstico.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
