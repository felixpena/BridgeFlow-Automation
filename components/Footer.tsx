import { Zap, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f172a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                BridgeFlow
                <span className="text-gradient-emerald ml-1">Automation</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Automatizamos los puentes entre SAP y Excel para empresas que no pueden permitirse
              perder más tiempo en procesos manuales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                { label: "El Problema", href: "#problema" },
                { label: "Nuestra Solución", href: "#solucion" },
                { label: "Comparativa ROI", href: "#roi" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto directo</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@bridgeflow.io"
                  className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  <Mail size={14} className="text-emerald-500" />
                  contacto@bridgeflow.io
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  <Linkedin size={14} className="text-cyan-500" />
                  LinkedIn BridgeFlow
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {year} BridgeFlow Automation. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Automatización no invasiva · SAP-Excel · Python
          </p>
        </div>
      </div>
    </footer>
  );
}
