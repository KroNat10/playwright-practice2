import { Locator, Page, expect } from '@playwright/test';
import texts from './test-data/texts.json';
import urlPath from './test-data/urlPath.json';

export class CartPage {
  readonly page: Page;
  readonly productsInCart: Locator;
  readonly cartButtonInHeader: Locator;
  readonly cartButtonInHeaderCount: Locator;
  readonly totalPrice: Locator;
  readonly addButton: Locator;
  readonly minusButton: Locator;
  readonly binButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsInCart = page.getByTestId('products-in-cart');
    this.cartButtonInHeader = page.getByTestId('cart-button-in-header');
    this.cartButtonInHeaderCount = page.getByTestId(
      'cart-button-in-header-count'
    );
    this.totalPrice = page.getByTestId('total-price');
    this.addButton = page.getByTestId('add-button');
    this.minusButton = page.getByTestId('minus-button');
    this.binButton = page.getByTestId('bin-button');
  }

  async amountOfProductsInCartShouldBe(count) {
    await expect(this.cartButtonInHeaderCount).toHaveText(count.toString());
  }

  async goToCart() {
    await this.cartButtonInHeader.click();
    await expect(this.page).toHaveURL(urlPath.cartDetail);
  }

  async verifyProductInCart(productName: string) {
    await expect(this.productsInCart).toHaveText(productName);
    await expect(this.productsInCart).toBeVisible();
  }
  async verifyAmountOfProductInCart(productName: string, amount: number) {
    await expect(this.productsInCart).toHaveText(`${productName} ${amount} ks`);
  }

  async addProductToCart() {
    await this.addButton.click();
  }

  async removeProductFromCart(productName: string) {
    await this.minusButton.click();
  }
}
