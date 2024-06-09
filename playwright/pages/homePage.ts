import { Locator, Page, expect } from '@playwright/test';
import urlPaths from './test-data/urlPath.json';

export class HomePage {
  readonly page: Page;
  readonly productWidgetOnHomePage: Locator;
  readonly searchBar: Locator;
  readonly productDetailButton: Locator;
  readonly productImage: Locator;
  readonly productTitle: Locator;
  readonly productSummary: Locator;
  readonly productPrice: Locator;
  readonly productParameters: Locator;
  readonly homePageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productWidgetOnHomePage = page.getByTestId(
      'product-widget-on-home-page'
    );
    this.searchBar = page.getByTestId('search-bar');
    this.productDetailButton = page.getByTestId('product-detail-button');
    this.productImage = page.getByTestId('product-image');
    this.productTitle = page.getByTestId('product-title');
    this.productSummary = page.getByTestId('product-summary');
    this.productPrice = page.getByTestId('product-price');
    this.productParameters = page.getByTestId('product-parameters');
    this.homePageButton = page.getByTestId('home-page-button');
  }

  async goToHomePage() {
    await this.page.goto('https://www.online-shopping.cz');
    await expect(this.page).toHaveURL(urlPaths.homePageUrl);
  }

  async goToHomePageViaButton() {
    await this.homePageButton.click();
    await expect(this.page).toHaveURL(urlPaths.homePageUrl);
  }

  async searchForProduct(product: any) {
    await this.searchBar.fill(product);
    await this.page.keyboard.press('Enter');
  }

  async verifySearchResults(product: any) {
    await expect(this.productTitle).toHaveText(product);
  }

  async goToProductDetailViaButton() {
    await this.productDetailButton.click();
    await expect(this.page).toHaveURL(new RegExp(urlPaths.productDetail));
  }

  async verifyComplaintUrl() {
    await expect(this.page).toHaveURL(new RegExp(urlPaths.productDetail));
  }
}
