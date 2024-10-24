import { defineConfig } from "vite";

export default defineConfig({
  test: {
    browser: {
      enable: true,
      headless: true,
      name: "chrome",
      provider: "webdriverio",
    },
    coverage: {
      include: ["src/**/*.{js,ts}"],
      exclude: ["**/*.test.{js,ts}", "**/index.{js,ts}"],
      provider: "istanbul",
      reporter: ["lcov", "html"],
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
  },
});
