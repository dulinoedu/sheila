import { defineConfig } from "vite";

export default defineConfig({
  test: {
    browser: {
      enable: true,
      headless: true,
      name: "chrome",
      provider: "webdriverio",
    },
  },
});
