import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { siteConfig } from "@/config/site";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AgroIndustrial Peru | Productos frescos de exportación",
    template: "%s | AgroIndustrial Peru",
  },
  description:
    "Landing corporativa de AgroIndustrial Peru para presentar productos frescos, clientes y canales de contacto con arquitectura preparada para backend.",
  keywords: [
    "AgroIndustrial Peru",
    "agroexportación peruana",
    "productos frescos",
    "frutas peruanas",
    "hortalizas peruanas",
    "landing corporativa",
  ],
  openGraph: {
    title: "AgroIndustrial Peru",
    description:
      "Productos frescos con trazabilidad, calidad de exportación y canales de contacto corporativo.",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/images/hero/seleccion-fresca.png",
        width: 1600,
        height: 940,
        alt: "Selección fresca de productos agroindustriales",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-[#fbfaf3] text-[#173c2d]">{children}</body>
    </html>
  );
}
