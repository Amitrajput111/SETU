import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://setugrowth.com";

  const routes = [
    "",
    "/services",
    "/industries",
    "/work",
    "/process",
    "/pricing",
    "/about",
    "/contact",
    "/audit",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/work" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/audit" || route === "/services" ? 0.9 : 0.8,
  }));
}
