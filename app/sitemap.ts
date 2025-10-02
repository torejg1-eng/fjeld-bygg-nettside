import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fjeld-bygg.vercel.app";
  const routes = ["", "/tjenester", "/prosjekter", "/om-oss", "/kontakt"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
