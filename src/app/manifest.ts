import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Call",
    short_name: "The Call",
    description: "Decisions worth making.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3eb",
    theme_color: "#182d27",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
