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
  });
});
