import { test, expect } from '@playwright/test';
import { SteamHomePage } from './pages/steamHomepage.ts';
import { SteamHelpers } from './helpers/steamHelpers.ts';
import { SteamSearchResultPage } from './pages/steamSearchResultPage.ts';

let homePage: SteamHomePage;
let steamHelper: SteamHelpers;
let steamSearchResultPage: SteamSearchResultPage;

test.beforeEach(async ({ page }) => {
    homePage = new SteamHomePage(page);
    steamHelper = new SteamHelpers(page);
    steamSearchResultPage = new SteamSearchResultPage(page);

    await steamHelper.goto();
});

// Search for a game using the search bar, assert the search link equals the game name and assert the first result contains the game name
test('Search for a game by name', async ({ page }) => {
    // first, we perform a search for the game "Terraria"  
    await steamHelper.searchGame('Terraria');
    // secondly, we verify the URL is equals to the search term
    await expect(page).toHaveURL(/\/search\?term=/);
    // lastly, we assert that the first search result contains the game name
    await expect(steamSearchResultPage.searchFirstResult).toHaveText('Terraria');
});