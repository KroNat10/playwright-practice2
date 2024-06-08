import { Locator, Page, expect } from '@playwright/test';
import urlPaths from './test-data/urlPath.json';

export class CheckoutPage {
  readonly page: Page;
  readonly deliveryRadionButton: Locator;
  readonly paymentMethodRadioButton: Locator;
  readonly continueButton: Locator;
  readonly nameInput: Locator;
  readonly lastnameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly summaryOfOrderButton: Locator;
  readonly finishingOrderButton: Locator;
  readonly deliveryAdressInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deliveryRadionButton = page.getByTestId('delivery-radio-button');
    this.paymentMethodRadioButton = page.getByTestId(
      'payment-method-radio-button'
    );
    this.continueButton = page.getByTestId('continue-button');
    this.nameInput = page.getByTestId('name-input');
    this.lastnameInput = page.getByTestId('lastname-input');
    this.emailInput = page.getByTestId('email-input');
    this.phoneInput = page.getByTestId('phone-input');
    this.addressInput = page.getByTestId('address-input');
    this.summaryOfOrderButton = page.getByTestId('summary-of-order-button');
    this.finishingOrderButton = page.getByTestId('finishing-order-button');
    this.deliveryAdressInput = page.getByTestId('delivery-address-input');
  }

  async selectDelivery() {
    await this.deliveryRadionButton.setChecked(true);
    await this.deliveryRadionButton.isChecked();
  }

  async selectDeliveryAdress(deliveryAdress) {
    await this.deliveryAdressInput.fill(deliveryAdress);
  }

  async selectPaymentMethod() {
    await this.paymentMethodRadioButton.setChecked(true);
    await this.paymentMethodRadioButton.isChecked();
  }

  async clickOnContinueButton() {
    await this.continueButton.click();
    await expect(this.page).toHaveURL(urlPaths.checkoutStep2);
  }

  async fillDeliveryDetails(name, lastname, email, phone, address) {
    await this.nameInput.fill(name);
    await this.lastnameInput.fill(lastname);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.deliveryAdressInput.fill(address);
  }

  async clickOnSummaryOfOrderButton() {
    await this.summaryOfOrderButton.click();
    await expect(this.page).toHaveURL(urlPaths.checkoutStep3);
  }

  async clickOnFinishingOrderButton() {
    await this.finishingOrderButton.click();
    await expect(this.page).toHaveURL(urlPaths.checkoutStep4);
  }
}
