import { Suspense } from "react";
import { AboutUs } from "@/components/sections/AboutUs";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";
import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LandingSkeleton } from "@/components/skeletons/LandingSkeleton";
import { siteConfig } from "@/config/site";
import type { LandingPageData } from "@/domain/landing";
import { getLandingPageData } from "@/services/landing.service";

export default function Home() {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <LandingContent />
    </Suspense>
  );
}

async function LandingContent() {
  const data = await getLandingPageData();
  const structuredData = buildStructuredData(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar title={data.navbarTitle} menuItems={data.menuItems} />
      <main>
        <Hero title={data.hero.title} subtitle={data.hero.subtitle} images={data.hero.images} />
        <ProductsSection products={data.products} />
        <AboutUs
          title={data.aboutUs.title}
          subtitle={data.aboutUs.subtitle}
          content={data.aboutUs.content}
        />
        <ClientsCarousel title="Nuestros Clientes" logos={data.clientLogos} />
      </main>
      <Footer copyright={data.footer.copyright} socialLinks={data.footer.socialLinks} />
    </>
  );
}

function buildStructuredData(data: LandingPageData) {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: data.navbarTitle,
        url: siteUrl,
        logo: `${siteUrl}/images/brand/ingredients-reference.jpg`,
        sameAs: data.footer.socialLinks.map((link) => link.href),
      },
      {
        "@type": "WebSite",
        name: data.navbarTitle,
        url: siteUrl,
        inLanguage: "es-PE",
        description: data.hero.subtitle,
      },
      {
        "@type": "ItemList",
        name: "Productos AgroIndustrial Peru",
        itemListElement: data.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.title,
            description: product.subtitle,
            image: `${siteUrl}${product.image}`,
            brand: {
              "@type": "Brand",
              name: data.navbarTitle,
            },
          },
        })),
      },
    ],
  };
}
