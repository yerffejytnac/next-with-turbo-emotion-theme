import { test, expect } from "@playwright/test";

test("should navigate to the index page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The index page should contain an h1 with the following content
  await expect(page.locator("h1")).toContainText(
    "Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial."
  );
  // The index page should contain a button with "Primary Button" text
  await expect(page.locator("button")).toContainText("Primary Button");
});
