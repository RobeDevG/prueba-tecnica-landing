import type { Client, CompanyInfo, Hero, MenuItem, Product } from "@/domain/landing";
import { siteConfig } from "@/config/site";

const mockLatency = (baseMs = 280) =>
  new Promise((resolve) => {
    setTimeout(resolve, baseMs);
  });

export async function getNavigationMock(): Promise<{
  title: string;
  menuItems: MenuItem[];
}> {
  await mockLatency(180);

  return {
    title: "AgroIndustrial Peru",
    menuItems: [
      { label: "Productos", href: "#productos" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Nuestros Clientes", href: "#clientes" },
      { label: "Contacto", href: "#contacto" },
    ],
  };
}

export async function getHeroMock(): Promise<Hero> {
  await mockLatency(360);

  return {
    title: "Ingredientes peruanos que inspiran",
    subtitle:
      "Seleccionamos productos frescos con trazabilidad, calidad de exportación y una cadena preparada para crecer contigo.",
    images: [
      "/images/products/lemon-pngtree.png",
      "/images/products/tomatoes-pngtree.png",
      "/images/products/strawberry-pngtree.png",
      "/images/products/asparagus-pngtree.png",
    ],
  };
}

export async function getProductsMock(): Promise<Product[]> {
  await mockLatency(420);

  return [
    {
      id: "limon-tahiti",
      image: "/images/products/lemon-pngtree.png",
      images: ["/images/products/lemon-pngtree.png"],
      detailsUrl: "https://example.com/productos/limon-tahiti",
      extras: {
        items: [
          { icon: "origin", label: "Origen", value: "Perú" },
          { icon: "presentation", label: "Packing", value: "Caja exportación" },
        ],
        images: ["/images/products/lemon-pngtree.png" , "/images/products/tomatoes-pngtree.png" , "/images/products/tomatoes-pngtree.png"],
      },
      title: "Limón Tahití",
      subtitle: "Cítrico de calibre uniforme para bebidas, cocina y procesos industriales.",
      properties: [
        { icon: "origin", label: "Origen", value: "Perú" },
        { icon: "season", label: "Temporada", value: "Todo el año" },
        { icon: "variety", label: "Variedad", value: "Tahití" },
        { icon: "caliber", label: "Calibre", value: "48 - 58 mm" },
        { icon: "flavor", label: "Sabor", value: "Ácido y refrescante" },
        { icon: "presentation", label: "Presentación", value: "Caja 10 kg" },
      ],
    },
    {
      id: "tomate-roma",
      image: "/images/products/tomatoes-pngtree.png",
      images: ["/images/products/tomatoes-pngtree.png"],
      detailsUrl: "https://example.com/productos/tomate-roma",
      extras: {
        items: [
          { icon: "origin", label: "Origen", value: "Perú" },
          { icon: "presentation", label: "Packing", value: "Caja 6 kg" },
        ],
        images: ["/images/products/tomatoes-pngtree.png"],
      },
      title: "Tomate Roma",
      subtitle: "Hortaliza firme y jugosa para retail, food service y producción culinaria.",
      properties: [
        { icon: "origin", label: "Origen", value: "Perú" },
        { icon: "season", label: "Temporada", value: "Primavera - Otoño" },
        { icon: "variety", label: "Variedad", value: "Roma" },
        { icon: "caliber", label: "Calibre", value: "57 - 67 mm" },
        { icon: "flavor", label: "Sabor", value: "Dulce y jugoso" },
        { icon: "presentation", label: "Presentación", value: "Caja 6 kg" },
      ],
    },
    {
      id: "fresa-premium",
      image: "/images/products/strawberry-pngtree.png",
      images: ["/images/products/strawberry-pngtree.png"],
      detailsUrl: "https://example.com/productos/fresa-premium",
      extras: {
        items: [
          { icon: "origin", label: "Origen", value: "Perú" },
          { icon: "presentation", label: "Packing", value: "Clamshell 500 g" },
        ],
        images: ["/images/products/strawberry-pngtree.png"],
      },
      title: "Fresa Premium",
      subtitle: "Fruta roja de apariencia brillante para retail, repostería y food service.",
      properties: [
        { icon: "origin", label: "Origen", value: "Perú" },
        { icon: "season", label: "Temporada", value: "Ago. - Dic." },
        { icon: "variety", label: "Variedad", value: "Camino Real" },
        { icon: "caliber", label: "Calibre", value: "22 - 32 mm" },
        { icon: "flavor", label: "Sabor", value: "Dulce y aromática" },
        { icon: "presentation", label: "Presentación", value: "Clamshell 500 g" },
      ],
    },
    {
      id: "esparrago-verde",
      image: "/images/products/asparagus-pngtree.png",
      images: ["/images/products/asparagus-pngtree.png"],
      detailsUrl: "https://example.com/productos/esparrago-verde",
      extras: {
        items: [
          { icon: "origin", label: "Origen", value: "Ica" },
          { icon: "presentation", label: "Packing", value: "Atado 5 kg" },
        ],
        images: ["/images/products/asparagus-pngtree.png"],
      },
      title: "Espárrago Verde",
      subtitle: "Tallos frescos seleccionados para mercados premium y cocina profesional.",
      properties: [
        { icon: "origin", label: "Origen", value: "Ica" },
        { icon: "season", label: "Temporada", value: "May. - Ene." },
        { icon: "variety", label: "Variedad", value: "UC 157" },
        { icon: "caliber", label: "Calibre", value: "12 - 16 mm" },
        { icon: "flavor", label: "Sabor", value: "Vegetal y delicado" },
        { icon: "presentation", label: "Presentación", value: "Atado 5 kg" },
      ],
    },
  ];
}

export async function getClientsMock(): Promise<Client[]> {
  await mockLatency(260);

  return [
    {
      id: "andes-fresh",
      name: "Andes Fresh",
      logo: "/images/clients/andes-fresh.png",
      segment: "Retail premium",
      location: "Lima, Perú",
      relationship: "Cliente activo",
    },
    {
      id: "valle-norte",
      name: "Valle Norte",
      logo: "/images/clients/valle-norte.png",
      segment: "Distribución mayorista",
      location: "Trujillo, Perú",
      relationship: "Abastecimiento semanal",
    },
    {
      id: "pacific-foods",
      name: "Pacific Foods",
      logo: "/images/clients/pacific-foods.png",
      segment: "Food service",
      location: "Callao, Perú",
      relationship: "Cadena de frío",
    },
    {
      id: "mercado-verde",
      name: "Mercado Verde",
      logo: "/images/clients/mercado-verde.png",
      segment: "Canal orgánico",
      location: "Arequipa, Perú",
      relationship: "Selección por lote",
    },
    {
      id: "export-peru",
      name: "Export Peru",
      logo: "/images/clients/export-peru.png",
      segment: "Agroexportación",
      location: "Ica, Perú",
      relationship: "Calidad exportable",
    },
  ];
}

export async function getCompanyInfoMock(): Promise<CompanyInfo> {
  await mockLatency(320);

  return {
    aboutUs: {
      title: "Quiénes somos",
      subtitle: "Conectamos el campo peruano con compradores que exigen consistencia.",
      content:
        "AgroIndustrial Peru integra selección, empaque y despacho de frutas y hortalizas frescas. Trabajamos con productores certificados, control de calidad por lote y procesos pensados para una futura integración con sistemas de trazabilidad, inventario y pedidos.",
    },
    footer: {
      copyright: "© 2026 AgroIndustrial Peru. Todos los derechos reservados.",
      socialLinks: [
        { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
        { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
        { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
        { icon: "whatsapp", label: "WhatsApp", href: siteConfig.whatsappUrl },
      ],
    },
  };
}
