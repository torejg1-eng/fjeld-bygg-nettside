// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fjeld Bygg og Tomrertjenester AS",
    short_name: "Fjeld Bygg",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F8",
    theme_color: "#374151",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
