import { test, expect } from '@playwright/test';
import { SteamHomePage } from './pages/steamHomepage.ts';
import { SteamHelpers } from './helpers/steamHelpers.ts';
import { SteamSearchResultPage } from './pages/steamSearchResultPage.ts';
import { SteamGameDetailPage } from './pages/steamGameDetailPage.ts';

let homePage: SteamHomePage;
let steamHelper: SteamHelpers;
let steamSearchResultPage: SteamSearchResultPage;
let steamGameDetailPage: SteamGameDetailPage;

test.beforeEach(async ({ page }) => {
    homePage = new SteamHomePage(page);
    steamHelper = new SteamHelpers(page);
    steamSearchResultPage = new SteamSearchResultPage(page);
    steamGameDetailPage = new SteamGameDetailPage(page);

    await steamHelper.goto();
});

test('Game title confirmation', async ({ page }) => {
    await steamHelper.searchGame('Stardew Valley');
    await steamHelper.openGameFromSearch('Stardew Valley');
    // We assert that the game detail page's game title is the correct one
    await expect(page.locator('#appHubAppName')).toHaveText('Stardew Valley')
});

test('Add to Cart button is visible', async ({ page }) => {
    await steamHelper.searchGame('Stardew Valley');
    await steamHelper.openGameFromSearch('Stardew Valley');
    // We assert that the Add to Cart button is really a button and visible on the game detail page
    await expect(steamGameDetailPage.addToCartButton).toBeVisible();
});

test('Reviews section on game detail page', async ({ page }) => {
  await steamHelper.searchGame('Hades');
  await steamHelper.openGameFromSearch('Hades');
  const reviewHeader = steamHelper.customerReviewsHeaderFor('Hades');
  await expect(reviewHeader).toBeVisible();
});