import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductDetailPage } from '../pages/productDetailPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import deliveryAdress from './test-data/deliveryAdress.json';
import customers from './test-data/customers.json';

test.describe('Checkout test', () => {
  test('Process checkout', async ({ page }) => {
    await test.step('Go to home page', async () => {
      const homePage = new HomePage(page);
      await homePage.goToHomePage();
    });

    await test.step('Go to product detail via button', async () => {
      const homePage = new HomePage(page);

      await homePage.goToProductDetailViaButton();
    });

    await test.step('Add product to cart', async () => {
      const productDetailPage = new ProductDetailPage(page);

      await productDetailPage.addToCart();
    });

    await test.step('Go to checkout', async () => {
      const cartPage = new CartPage(page);

      await cartPage.goToCheckout();
    });

    await test.step('Select delivery', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.selectDelivery();
    });

    await test.step('Select delivery address', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.selectDeliveryAdress(deliveryAdress);
    });

    await test.step('Select payment method', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.selectPaymentMethod();
    });

    await test.step('Click on Continue button', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.clickOnContinueButton();
    });

    await test.step('Fill delivery details', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.fillDeliveryDetails(
        customers.name,
        customers.lastname,
        customers.email,
        customers.phone,
        deliveryAdress
      );
    });

    await test.step('Click on Summary of order button', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.clickOnSummaryOfOrderButton();
    });

    await test.step('Click on Finishing order button', async () => {
      const checkoutPage = new CheckoutPage(page);

      await checkoutPage.clickOnFinishingOrderButton();
    });
  });
});
