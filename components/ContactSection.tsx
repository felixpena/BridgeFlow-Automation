"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, ChevronRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const benefits = [
  "Diagnóstico gratuito del proceso candidato a automatizar",
  "Estimación de ROI específica para su caso",
  "Propuesta técnica en 48 horas hábiles",
  "Sin permanencia. Sin letra pequeña.",
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm]     = useState({
    nombre:  "",
    cargo:   "",
    empresa: "",
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
        setStatus("success");
        setForm({ nombre: "", cargo: "", empresa: "", proceso: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(29,111,239,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,111,239,0.18), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-chip mb-5 mx-auto w-fit">Solicitar Diagnóstico Operativo</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow leading-tight tracking-tight">
            El primer paso cuesta{" "}
            <span className="text-blue-grad">45 minutos.</span>
          </h2>
          <p className="mt-5 text-platinum text-lg leading-relaxed">
            Cuéntenos qué proceso le está costando más tiempo a su equipo.
            Nosotros hacemos el resto.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — benefits */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-bright/70 mb-5">
                Lo que incluye
              </p>
              <ul className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="text-[0.875rem] text-silver leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini callout */}
            <div
              className="rounded-2xl border border-blue-mid/20 p-6"
              style={{
                background: "linear-gradient(135deg, rgba(29,111,239,0.07) 0%, rgba(11,20,38,0.6) 100%)",
              }}
            >
              <p className="text-silver text-[0.875rem] leading-relaxed">
                <span className="text-snow font-semibold block mb-1">¿Cuánto puede ahorrar?</span>
                Si un analista dedica 6 horas semanales a un proceso que automatizamos,
                su empresa recupera{" "}
                <span className="text-blue-bright font-semibold">300+ horas al año</span>{" "}
                de trabajo estratégico.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="card p-8 lg:p-10">

              {status === "success" ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center text-center py-10 gap-5">
                  <div className="w-16 h-16 rounded-full bg-blue-dim border border-blue-mid/30 flex items-center justify-center">
                    <CheckCircle2 size={30} className="text-blue-bright" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-snow mb-2">
                      Solicitud recibida.
                    </h3>
                    <p className="text-platinum text-sm max-w-xs mx-auto leading-relaxed">
                      Revisaremos los detalles de su proceso y le contactaremos en las próximas
                      48 horas hábiles con una propuesta técnica personalizada.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-blue-bright text-sm hover:text-blue-glow underline underline-offset-4 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-[11px] font-semibold uppercase tracking-wider text-platinum/70">
                        Nombre completo *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={form.nombre}
                        onChange={set("nombre")}
                        placeholder="Ej. Ana García"
                        className="field"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="cargo" className="text-[11px] font-semibold uppercase tracking-wider text-platinum/70">
                        Cargo *
                      </label>
                      <input
                        id="cargo"
                        name="cargo"
                        type="text"
                        required
                        value={form.cargo}
                        onChange={set("cargo")}
                        placeholder="Ej. Gerente de Operaciones"
                        className="field"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="empresa" className="text-[11px] font-semibold uppercase tracking-wider text-platinum/70">
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={set("empresa")}
                      placeholder="Nombre de su organización"
                      className="field"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="proceso" className="text-[11px] font-semibold uppercase tracking-wider text-platinum/70">
                      Proceso crítico a automatizar *
                    </label>
                    <textarea
                      id="proceso"
                      name="proceso"
                      required
                      rows={5}
                      value={form.proceso}
                      onChange={set("proceso")}
                      placeholder="Describa el proceso que más tiempo consume a su equipo. Ej: Cada cierre mensual exportamos el reporte de costos de SAP (transacción KSB1), lo cruzamos con el presupuesto en Excel y generamos un informe de variación. Dos analistas dedican un día completo a esto..."
                      className="field resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      Ocurrió un error al enviar. Por favor intente nuevamente.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Solicitar Diagnóstico Operativo
                        <ChevronRight size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-[12px] text-platinum/35 text-center leading-snug">
                    Sin compromisos. Sus datos se utilizan exclusivamente para coordinar
                    la sesión de diagnóstico.
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
