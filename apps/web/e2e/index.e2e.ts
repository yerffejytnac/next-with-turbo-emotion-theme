import { test, expect } from "@playwright/test";

test.describe("Index", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render an h1 with the correct text content", async ({
    page,
  }) => {
    await expect(page.locator("h1")).toContainText(
      "Vaporware scenester organic, yr JOMO 3 wolf moon polaroid sartorial."
    );
  });

  test("first button should contain the correct text content", async ({
    page,
  }) => {
    const button = await page.locator("button:first-of-type");
    await expect(button).toContainText("Elevated Button");
  });

  test("first button should trigger an alert dialog when clicked", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual("Button pressed!");
      await dialog.dismiss();
    });

    const button = await page.locator("button:first-of-type");
    await button.click();
  });
});
