import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* ── Main strip ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <a href="#" aria-label="BridgeFlow Automation — inicio" className="inline-block mb-4">
            <Image
              src="/img/logo.png"
              alt="BridgeFlow Automation"
              width={144}
              height={36}
              className="h-8 w-auto brightness-0 invert opacity-80"
            />
          </a>
          <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
            Automatización no invasiva sobre SAP para empresas en Latinoamérica
            que no pueden esperar la migración.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">
            Navegación
          </p>
          <ul className="flex flex-col gap-2.5">
            {[
              ["El Problema",  "#problema"    ],
              ["Metodología",  "#metodologia" ],
              ["Garantías",    "#garantias"   ],
              ["Contacto",     "#contacto"    ],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">
            ¿Listo para empezar?
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            Un proceso automatizado. Una semana de implementación.
            Un ROI que su equipo verá desde el primer ciclo.
          </p>
          <a href="#contacto" className="btn-cta text-sm py-2.5 px-5 w-fit">
            Solicitar Diagnóstico
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            © {new Date().getFullYear()} BridgeFlow Automation. Todos los derechos reservados.
          </p>
          <p className="text-[12px] text-slate-700">
            Automatización SAP · Python · Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}
