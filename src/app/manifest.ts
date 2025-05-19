import { SERVICE_METADATA } from "@/constants/service";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SERVICE_METADATA.TITLE,
    short_name: "HRQ",
    description: SERVICE_METADATA.DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
