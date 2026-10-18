import { defineConfig, devices } from "@playwright/test";

/**
 * The suite runs against the dev server because that is what the owner
 * actually loads. BASE_URL lets it point at a production build instead:
 *
 *   bun run build && bun run start   # then BASE_URL=http://localhost:2026
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:2026",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});