import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INFINITECH Zimbabwe",
    short_name: "INFINITECH",
    description:
      "INFINITECH Zimbabwe — Electrical Engineering, Solar Systems, CCTV, Networking, Automation and Smart Technology Solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070a",
    theme_color: "#00bfff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
          }
