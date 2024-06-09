import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductDetailPage } from '../pages/productDetailPage';

test.describe('Product detail test', async () => {
  test('Product detail test', async ({ page }) => {
    await test.step('Go to home page', async () => {
      const homePage = new HomePage(page);

      await homePage.goToHomePage();
    });

    await test.step('Search for product Tvaroh plnotučný', async () => {
      const homePage = new HomePage(page);

      await homePage.searchForProduct('Tvaroh plnotučný');
    });

    await test.step('Verify result of searching', async () => {
      const homePage = new HomePage(page);

      await homePage.verifySearchResults('Tvaroh plnotučný');
    });

    await test.step('Go to product detail via button', async () => {
      const homePage = new HomePage(page);

      await homePage.goToProductDetailViaButton();
    });

    await test.step('Verify product detail', async () => {
      const productDetailPage = new ProductDetailPage(page);

      await productDetailPage.verifyProductDetail('Tvaroh plnotučný');
    });
  });
});
