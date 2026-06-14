export interface MenuItem {
  label: string;
  href: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  images: string[];
}

export type ProductPropertyIcon =
  | "origin"
  | "season"
  | "variety"
  | "caliber"
  | "flavor"
  | "presentation";

export interface ProductProperty {
  icon: ProductPropertyIcon;
  label: string;
  value: string;
}

export interface Product {
  id: string;
  image: string;
  images?: string[];
  title: string;
  subtitle: string;
  properties: ProductProperty[];
}

export interface AboutUs {
  title: string;
  subtitle: string;
  content: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  segment: string;
  location: string;
  relationship: string;
}

export type SocialIcon = "facebook" | "instagram" | "linkedin" | "whatsapp";

export interface SocialLink {
  icon: SocialIcon;
  label: string;
  href: string;
}

export interface CompanyInfo {
  aboutUs: AboutUs;
  footer: {
    copyright: string;
    socialLinks: SocialLink[];
  };
}

export interface LandingPageData {
  menuItems: MenuItem[];
  navbarTitle: string;
  hero: Hero;
  products: Product[];
  aboutUs: AboutUs;
  clients: Client[];
  footer: CompanyInfo["footer"];
}
