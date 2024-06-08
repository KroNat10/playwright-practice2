import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductDetailPage } from '../pages/productDetailPage';
import { CartPage } from '../pages/cartPage';

test.describe('Cart test', () => {
  test('Adding products into cart, updating cart test', async ({ page }) => {
    await test.step('Go to home page', async () => {
      const homePage = new HomePage(page);
      await homePage.goToHomePage();
    });

    await test.step('Go to product detail via button', async () => {
      const homePage = new HomePage(page);
      await homePage.goToProductDetailViaButton();
    });

    await test.step('Verify Add to cart button', async () => {
      const productDetailPage = new ProductDetailPage(page);
      await productDetailPage.isButtonAddToCartVisible();
    });

    await test.step('Add product to cart', async () => {
      const productDetailPage = new ProductDetailPage(page);
      await productDetailPage.addToCart();
    });

    await test.step('Verify amount of items in cart', async () => {
      const cartPage = new CartPage(page);
      await cartPage.amountOfProductsInCartShouldBe(1);
    });

    await test.step('Add second product to cart', async () => {
      const productDetailPage = new ProductDetailPage(page);
      await productDetailPage.addToCart();
    });

    await test.step('Verify amount of items in cart', async () => {
      const cartPage = new CartPage(page);
      await cartPage.amountOfProductsInCartShouldBe(2);
    });

    await test.step('Verify products in cart', async () => {
      const cartPage = new CartPage(page);
      await cartPage.verifyAmountOfProductInCart('Tvaroh plnotučný', 1);
      await cartPage.verifyAmountOfProductInCart('Random produkt', 1);
    });

    await test.step('Add two more products to cart', async () => {
      const productDetailPage = new ProductDetailPage(page);
      await productDetailPage.addToCart();
      await productDetailPage.addToCart();
    });

    await test.step('Verify new amount of products in cart', async () => {
      const cartPage = new CartPage(page);
      await cartPage.verifyAmountOfProductInCart('Tvaroh plnotučný', 3);
      await cartPage.verifyAmountOfProductInCart('Random produkt', 1);
    });

    await test.step('Remove products from cart', async () => {
      const cartPage = new CartPage(page);
      await cartPage.removeProductFromCart('Tvaroh plnotučný');
      await cartPage.removeProductFromCart('Random produkt');
    });
  });
});
