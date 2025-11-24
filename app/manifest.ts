import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viajes lili",
    short_name: "VL",
    description: "Viajes lili",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/app-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
