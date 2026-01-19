import { test, expect } from "@playwright/test";
import { SteamHomePage } from "./pages/steamHomepage.ts";
import { SteamHelpers } from "./helpers/steamHelpers.ts";
import { SteamSearchResultPage } from "./pages/steamSearchResultPage.ts";
import { argosScreenshot } from "@argos-ci/playwright";

let homePage: SteamHomePage;
let steamHelper: SteamHelpers;
let steamSearchResultPage: SteamSearchResultPage;

test.beforeEach(async ({ page }) => {
  homePage = new SteamHomePage(page);
  steamHelper = new SteamHelpers(page);
  steamSearchResultPage = new SteamSearchResultPage(page);

  await steamHelper.goto();
});

// View Top Sellers section is visible, can be clicked and active after click
test("Display Top Sellers section", async ({ page }) => {
  // first, we ensure the Top Sellers section is visible
  await expect(homePage.topSellersSection).toBeVisible();
  homePage.topSellersSection.click();
  // second, we verify that the Top Sellers section is active
  await expect(homePage.topSellersSection).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("Display Special Offers section", async ({ page }) => {
  // first, we ensure the Specials section is visible
  await expect(homePage.specialOffersSection).toBeVisible();
  await homePage.specialOffersSection.click();
  // second, we verify that the Specials section is active
  await expect(homePage.specialOffersSection).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("Redirect to Steam client download page", async ({ page }) => {
  await homePage.installSteamButton.click();
  await expect(page).toHaveURL("https://store.steampowered.com/about/");
});

test("Navigate to sign-in page", async ({ page }) => {
  await homePage.signInLink.first().click();
  // We assert that the URL is the login page URL
  await expect(page).toHaveURL(/.*store\.steampowered\.com\/login\/?.*/);
});

test("Changing language and assert language is really changed", async ({
  page,
}) => {
  // first, assertion to language dropdown is visible
  await expect(homePage.languageDropdown).toBeVisible();
  // second, we change the language to Turkish
  await homePage.languageDropdown.click();
  await homePage.turkishLanguageOption.click();
  // third, we assert that some UI element's language is really changed to Turkish by asserting the Store menu item text
  await expect(homePage.storeMenuItem).toContainText("MAĞAZA");
  // lastly asserting the MAĞAZA submenu is visible when hovering over the Store menu item
  await homePage.storeMenuItem.hover();
  // with not.toBeHidden method, we wait for the element to be present in the DOM and not hidden. If we don't do this, because of the animation still continues when hovering, test fails.
  await expect(homePage.storeSubmenu).not.toBeHidden();
  // after above method, we can safely assert the submenu is visible
  await expect(homePage.storeSubmenu).toBeVisible();
  // this is used in argos ci for visual test comparison await argosScreenshot(page, "steam homepage");
});
