export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    provider: {
      type: "authjs",
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    viewer: false,
  },
  ssr: false,
  runtimeConfig: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_ORIGIN: process.env.AUTH_ORIGIN,
  },
});
