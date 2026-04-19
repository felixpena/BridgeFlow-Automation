import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeFlow Automation | Automatización Crítica SAP",
  description:
    "Soluciones ágiles para la rigidez de SAP en Latinoamérica. Automatización no invasiva que entrega resultados en días, no años.",
  keywords: [
    "automatización SAP",
    "SAP Latinoamérica",
    "S/4HANA",
    "Shadow IT SAP",
    "BridgeFlow Automation",
    "RPA SAP",
    "eficiencia operativa",
  ],
  authors:  [{ name: "BridgeFlow Automation" }],
  openGraph: {
    title:       "BridgeFlow Automation | Automatización Crítica SAP",
    description: "Soluciones ágiles para la rigidez de SAP en Latinoamérica.",
    type:        "website",
    locale:      "es_419",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "BridgeFlow Automation | Automatización Crítica SAP",
    description: "Soluciones ágiles para la rigidez de SAP en Latinoamérica.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-2VQ9NE3G6W" />
    </html>
  );
}
