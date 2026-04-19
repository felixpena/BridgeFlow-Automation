"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Mail, User, Building2, MessageSquare } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    proceso: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          empresa: formData.empresa,
          email: formData.email,
          proceso: formData.proceso,
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ nombre: "", empresa: "", email: "", proceso: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1e293b]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Agenda una Sesión
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              El primer paso hacia la{" "}
              <span className="text-gradient-emerald">eficiencia operativa</span> comienza aquí.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Compártanos el proceso que más impacta a su equipo. En 48 horas tendrá una propuesta
              técnica con el ROI proyectado para su caso específico.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  text: "Diagnóstico inicial sin costo ni compromiso",
                },
                {
                  icon: CheckCircle,
                  text: "Propuesta técnica personalizada en 48 horas",
                },
                {
                  icon: CheckCircle,
                  text: "Confidencialidad total de su información operativa",
                },
                {
                  icon: CheckCircle,
                  text: "Sin cláusulas de permanencia forzosa",
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 lg:p-10 rounded-3xl bg-[#0f172a]/80 border border-white/8 shadow-2xl card-glow">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-2xl mb-2">
                      Solicitud recibida con éxito
                    </h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Nuestro equipo revisará los detalles de su proceso y le contactará en las
                      próximas 48 horas hábiles con una propuesta técnica personalizada.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-emerald-400 text-sm hover:text-emerald-300 underline underline-offset-4 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
                      >
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
                      >
                        Empresa *
                      </label>
                      <div className="relative">
                        <Building2
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de su empresa"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
                    >
                      Email corporativo *
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="su.nombre@empresa.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Proceso */}
                  <div>
                    <label
                      htmlFor="proceso"
                      className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
                    >
                      ¿Qué proceso de SAP le quita más tiempo a su equipo? *
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={15}
                        className="absolute left-3.5 top-4 text-slate-500"
                      />
                      <textarea
                        id="proceso"
                        name="proceso"
                        required
                        rows={5}
                        value={formData.proceso}
                        onChange={handleChange}
                        placeholder="Ej: Cada cierre mensual exportamos los centros de costo de SAP a Excel, los cruzamos con el presupuesto y generamos el reporte de variación. Tarda 8 horas entre 2 personas..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {formState === "error" && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      Ocurrió un error al enviar el formulario. Por favor intente nuevamente o
                      contáctenos directamente.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Solicitar Diagnóstico Gratuito
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    Al enviar este formulario acepta que nos contactemos con usted para coordinar la
                    sesión de diagnóstico. Sin spam, sin compromisos.
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
