import { Page } from "@playwright/test";

export class SteamHomePage {
  // Main navigation locators variables
  installSteamButton: any;
  signInLink: any;

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

    this.topSellersSection = page.getByRole("tab", { name: "Top Sellers" });
    this.specialOffersSection = page.getByRole("tab", { name: "Specials" });
    this.freeToPlaySection = page.getByRole("tab", { name: "Trending Free" });
    this.addToWishlistButton = page.getByRole("button", {
      name: "Add to your wishlist",
    });
    this.reviewsSection = page.getByText("Reviews");
    this.languageDropdown = page.getByText("language", { exact: true });
    this.turkishLanguageOption = page.getByText("Türkçe (Turkish)");
    this.storeMenuItem = page.getByRole("link", { name: "MAĞAZA" });
    this.storeSubmenu = page
      .getByRole("navigation", { name: "Genel Menü" })
      .locator(".submenu_Store");
  }
}
