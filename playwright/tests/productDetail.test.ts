import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductDetailPage } from '../pages/productDetailPage';

test.describe('Product detail test', async () => {
  test('Product detail test', async ({ page }) => {
    const homePage = new HomePage(page);
    const productDetailPage = new ProductDetailPage(page);

    await homePage.goToHomePage();
    await homePage.searchForProduct('Tvaroh plnotučný');
    await homePage.verifySearchResults('Tvaroh plnotučný');
    await homePage.productDetailButton.click();
    await productDetailPage.verifyProductDetail('Tvaroh plnotučný');
  });
});
