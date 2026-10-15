// astro.config.mjs
import { defineConfig } from "astro/config";
import path from "node:path";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  integrations: [
    AstroPWA({
      registerType: "autoUpdate",
      injectRegister: "auto", // <-- Esto inyecta automáticamente el registro del service worker
      devOptions: {
        enabled: false, // <-- Esto activa el PWA en npm run dev
        navigateFallback: "/",
      },
      manifest: {
        name: "Kubix",
        short_name: "Kubix",
        description: "Plataforma PWA de descubrimiento y control",
        theme_color: "#072439",
        background_color: "#072439",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
          {
            src: "/icon-192-any.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512-any.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-192-maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{html,css,js,ico,png,svg,webp}"],
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
