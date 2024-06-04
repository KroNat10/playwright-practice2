import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productImage: Locator;
  readonly productTitle: Locator;
  readonly productSummary: Locator;
  readonly productPrice: Locator;
  readonly productParameters: Locator;
  readonly homePageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productImage = page.getByTestId('product-image');
    this.productTitle = page.getByTestId('product-title');
    this.productSummary = page.getByTestId('product-summary');
    this.productPrice = page.getByTestId('product-price');
    this.productParameters = page.getByTestId('product-parameters');
    this.homePageButton = page.getByTestId('home-page-button');
  }

  async verifyProductDetail(productName: string) {
    await this.productImage.isVisible();
    await expect(this.productTitle).toBe(productName);
    await expect(this.productSummary).toBeVisible();
  }
}
