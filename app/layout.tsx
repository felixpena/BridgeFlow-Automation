import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeFlow Automation | Automatización Crítica de Procesos SAP",
  description:
    "Soluciones de automatización no invasivas para superar la rigidez de SAP. Optimice su operación en días, sin esperar años de migración. Especialistas en Latinoamérica.",
  keywords: [
    "automatización SAP",
    "SAP automation Latinoamérica",
    "S/4HANA migration",
    "Shadow IT SAP",
    "BridgeFlow Automation",
    "eficiencia operativa SAP",
    "automatización procesos críticos",
    "RPA SAP sin backend",
  ],
  authors: [{ name: "BridgeFlow Automation" }],
  openGraph: {
    title: "BridgeFlow Automation | Automatización Crítica de Procesos SAP",
    description:
      "Soluciones de automatización no invasivas para superar la rigidez de SAP. Optimice su operación en días, sin esperar años de migración. Especialistas en Latinoamérica.",
    type:   "website",
    locale: "es_419",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "BridgeFlow Automation | Automatización Crítica de Procesos SAP",
    description: "Automatización no invasiva sobre SAP. Sin esperar la migración a S/4HANA.",
  },
  robots: {
    index:  true,
    follow: true,
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
      <GoogleAnalytics gaId="G-2VQ9NE3G6W" />
    </html>
  );
}
