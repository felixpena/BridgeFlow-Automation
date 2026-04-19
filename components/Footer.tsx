import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-rim bg-[#040C18]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2 select-none">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-core to-blue-mid flex items-center justify-center">
            <Zap size={11} className="text-white" strokeWidth={2.8} />
          </span>
          <span className="font-bold text-sm tracking-tight text-snow">
            BridgeFlow
            <span className="text-blue-grad ml-[3px]">Automation</span>
          </span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {[
            ["El Problema",  "#problema"    ],
            ["Metodología",  "#metodologia" ],
            ["Garantías",    "#garantias"   ],
            ["Contacto",     "#contacto"    ],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] text-platinum/50 hover:text-platinum transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-[12px] text-platinum/30">
          © {new Date().getFullYear()} BridgeFlow Automation
        </p>
      </div>
    </footer>
  );
}
