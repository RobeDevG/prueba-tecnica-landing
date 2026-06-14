interface SiteConfig {
  name: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  name: "AgroIndustrial Peru",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
};
