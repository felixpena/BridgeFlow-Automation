import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeFlow Automation — Libere su operación de la rigidez de SAP",
  description:
    "Soluciones de automatización no invasivas que entregan en días lo que a su departamento de IT le tomaría años. Cerramos la brecha entre su infraestructura SAP actual y la agilidad que el mercado le exige.",
  keywords: [
    "SAP automation",
    "S/4HANA migration",
    "Shadow IT",
    "automatización SAP",
    "BridgeFlow Automation",
    "eficiencia operativa SAP",
  ],
  openGraph: {
    title: "BridgeFlow Automation",
    description: "Automatización no invasiva sobre SAP. Sin esperar la migración a S/4HANA.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
