import { Page } from "@playwright/test";

export class SteamHomePage {
  // Main navigation locators variables
  installSteamButton: any;
  signInLink: any;
  languageSelectorTrigger: any;
  storeMenuItem: any;
  storeSubmenu: any;

  // Game discovery locators variables
  topSellersSection: any;
  specialOffersSection: any;
  freeToPlaySection: any;

  // Wishlist & game detail locators variables
  addToWishlistButton: any;

  // Reviews locators variables
  reviewsSection: any;

  // Language dropdown locators variables
  languageDropdown: any;
  turkishLanguageOption: any;
  changeLanguagePopup: any;

  constructor(public page: Page) {
    this.installSteamButton = page.getByRole("link", { name: "Install Steam" });
    this.signInLink = page.getByRole("link", { name: "sign in" });
    this.languageSelectorTrigger = page.getByText("language");
    this.topSellersSection = page.locator("button.home_tab", {
      hasText: "Top Sellers",
    });
    this.specialOffersSection = page.locator("button.home_tab", {
      hasText: "Specials",
    });
    this.freeToPlaySection = page.locator("button.home_tab", {
      hasText: "Trending Free",
    });
    this.addToWishlistButton = page.getByRole("button", {
      name: "Add to your wishlist",
    });
    this.reviewsSection = page.getByText("Reviews");
    this.languageDropdown = page.getByText("language", { exact: true });
    this.turkishLanguageOption = page.getByText("Türkçe (Turkish)");
    this.storeMenuItem = page.getByRole("link", { name: "MAĞAZA" });
    this.storeSubmenu = page.locator(
      'div[aria-label="Genel Menü"] .submenu_Store'
    );
  }
}
