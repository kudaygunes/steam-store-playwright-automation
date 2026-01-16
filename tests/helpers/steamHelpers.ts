import { Locator, Page } from "@playwright/test";

export class SteamHelpers {
  private page: Page;

  searchInput: any;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search the store");
  }

  async goto() {
    await this.page.goto("https://store.steampowered.com");
  }

  async searchGame(gameName: string) {
    await this.searchInput.fill(gameName);
    await this.searchInput.press("Enter");
  }

  async openGameFromSearch(gameName: string) {
    const gameLink = this.page.getByRole("link", {
      name: gameName,
      exact: false,
    });
    await gameLink.first().click();
  }

  customerReviewsHeaderFor(gameTitle: string): Locator {
    // Uses getByRole to find a heading element containing the dynamic text.
    // The 'name' option in getByRole considers the accessible name, which includes text content.
    return this.page.getByRole("heading", {
      name: `Customer reviews for ${gameTitle}`,
    });
    // Alternative using getByText:
    // return this.page.getByText(`Customer reviews for ${gameTitle}`);
  }
}
