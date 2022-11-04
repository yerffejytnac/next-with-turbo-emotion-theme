import { test, expect } from "@playwright/test";

test.describe("Index Page", () => {
  test.beforeEach(async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto("/");
  });

  test("The page should contain an h1 with the correct text content", async ({
    page,
  }) => {
    // Ensure the text is equal to "Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial."
    await expect(page.locator("h1")).toContainText(
      "Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial."
    );
  });

  test("The first button on the page should contain the correct text content", async ({
    page,
  }) => {
    // Grab the first Button on the page...
    const button = await page.locator("button:first-of-type");
    // Ensure the text is equal to "Elevated Button"
    await expect(button).toContainText("Elevated Button");
  });

  test("The first button on the page should trigger a dialog displaying an alert when clicked", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual("Button pressed!");
      await dialog.dismiss();
    });

    // Grab the first Button on the page...
    const button = await page.locator("button:first-of-type");
    // Trigger `onPress` event for Button, and ensure alert dialog contains the correct text
    await button.click();
  });
});
