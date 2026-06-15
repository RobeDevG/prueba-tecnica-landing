import type { LandingPageData } from "@/domain/landing";
import { siteConfig } from "@/config/site";
import { getClients } from "@/services/clients.service";
import { getCompanyInfo } from "@/services/company.service";
import { getHero } from "@/services/hero.service";
import { getNavigation } from "@/services/navigation.service";
import { getProducts } from "@/services/products.service";

export async function getLandingPageData(): Promise<LandingPageData> {
  const [navigation, hero, products, clients, companyInfo] = await Promise.all([
    getNavigation(),
    getHero(),
    getProducts(),
    getClients(),
    getCompanyInfo(),
  ]);

  return {
    navbarTitle: navigation.title,
    menuItems: navigation.menuItems,
    whatsappUrl: siteConfig.whatsappUrl,
    hero,
    products,
    clients,
    aboutUs: companyInfo.aboutUs,
    footer: companyInfo.footer,
  };
}
