import { defineConfig } from "vite";

export default defineConfig({
  test: {
    browser: {
      enable: true,
      headless: false,
      name: "chrome",
      provider: "webdriverio",
    },
  },
});
