import { Locator, Page, expect } from '@playwright/test';
import texts from './test-data/texts.json';
import urlPaths from './test-data/urlPaths.json';

export class CartPage {
  readonly page: Page;
  readonly productsInCart: Locator;
  readonly cartButtonInHeader: Locator;
  readonly cartButtonInHeaderCount: Locator;
  readonly totalPrice: Locator;
  readonly addButton: Locator;
  readonly minusButton: Locator;
  readonly binButton: Locator;
  readonly confirmRemoveButton: Locator;
  readonly cart: Locator;
  readonly checkoutButton: Locator;

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
    this.confirmRemoveButton = page.getByTestId('confirm-remove-button');
    this.cart = page.getByTestId('cart');
    this.checkoutButton = page.getByTestId('checkout-button');
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
    await expect(this.productsInCart).toHaveText(productName);
    await this.minusButton.click();
    await this.confirmRemoveButton.click();
    await expect(this.productsInCart).not.toHaveText(productName);
  }

  async verifyEmptyCart() {
    await expect(this.productsInCart).toBeEmpty();
    await expect(this.totalPrice).toBeEmpty();
    await expect(this.cart).toHaveText(texts.emptyCart);
  }

  async goToCheckout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(urlPath.checkoutStep1);
  }
}
