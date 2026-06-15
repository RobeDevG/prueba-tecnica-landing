interface SiteConfig {
  name: string;
  url: string;
  whatsappUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "AgroIndustrial Peru",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  whatsappUrl: "https://wa.me/65464564654",
};
