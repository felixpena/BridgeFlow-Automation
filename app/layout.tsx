import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeFlow Automation | Automatización SAP-Excel de Alto Rendimiento",
  description:
    "Eliminamos el caos operativo de empresas SAP automatizando los procesos manuales de cruce de datos en Excel con Python. Eficiencia operativa garantizada.",
  keywords: [
    "SAP automation",
    "Excel automation",
    "Python SAP",
    "automatización empresarial",
    "BridgeFlow",
    "eficiencia operativa",
  ],
  openGraph: {
    title: "BridgeFlow Automation",
    description: "Automatizamos los puentes entre SAP y Excel para empresas que valoran su tiempo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
