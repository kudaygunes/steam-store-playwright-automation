import { Page } from '@playwright/test';

export class SteamGameDetailPage {
    // Search result locators variables
    gameTitleName: any;
    addToCartButton: any;
    reviewHeader: any;

    constructor(public page: Page) {
        this.gameTitleName = page.locator('#appHubAppName');
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' })
        this.reviewHeader = page.locator('div.user_reviews_sub_header:has-text("Most Helpful Reviews")');
    }
}