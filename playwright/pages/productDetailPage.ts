import { expect, Locator, Page } from '@playwright/test';
import texts from './test-data/texts.json';

export class ProductDetailPage {
  readonly page: Page;
  readonly productImage: Locator;
  readonly productTitle: Locator;
  readonly productSummary: Locator;
  readonly productPrice: Locator;
  readonly productParameters: Locator;
  readonly homePageButton: Locator;
  readonly addToCartButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productImage = page.getByTestId('product-image');
    this.productTitle = page.getByTestId('product-title');
    this.productSummary = page.getByTestId('product-summary');
    this.productPrice = page.getByTestId('product-price');
    this.productParameters = page.getByTestId('product-parameters');
    this.homePageButton = page.getByTestId('home-page-button');
    this.addToCartButton = page.getByTestId('add-to-cart-button');
    this.flashMessage = page.getByTestId('flash-message');
  }

  async verifyProductDetail(productName: string) {
    await this.productImage.isVisible();
    await expect(this.productTitle).toBe(productName);
    await expect(this.productSummary).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productPrice).not.toBe('');
    await expect(this.productParameters).toBeVisible();
    await expect(this.productParameters).not.toBe('');
    await expect(this.addToCartButton).toBeVisible();
  }

  async isButtonAddToCartVisible() {
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.addToCartButton).toBeEnabled();
  }

  async addToCart() {
    await this.addToCartButton.click();
    await expect(this.flashMessage).toHaveText(texts."informationProductWasAddedIntoCart)
  }
}
