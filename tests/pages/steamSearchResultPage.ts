import { Page } from '@playwright/test';

export class SteamSearchResultPage {
    // Search result locators variables
    searchFirstResult: any;

    constructor(public page: Page) {
        this.searchFirstResult = page.locator('.search_name .title').first();
    }
}