import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Viajes Lili Dashboard",
    short_name: "VLD",
    description: "Viajes Lili Dashboard",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/app-logo.jpg",
        sizes: "192x192",
        type: "image/jpg",
      },
    ],
  };
}
