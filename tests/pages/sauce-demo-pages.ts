import { type Page, expect, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.loginButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await expect(this.username).toHaveValue(username);
    await expect(this.password).toHaveValue(password);
    await this.loginButton.click();
  }
}

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('.inventory_item button');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.inventoryItems).toHaveCount(6);
  }

  async inventoryCount() {
    return this.inventoryItems.count();
  }

  async addAllToCart() {
    const count = await this.addToCartButtons.count();
    for (let index = 0; index < count; index++) {
      await this.addToCartButtons.nth(index).click();
    }
  }

  async expectCartBadgeCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart() {
    await this.cartLink.click();
  }
}

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.title = page.locator('.title');
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.cartItems).toHaveCount(6);
  }

  async expectItemsPresent(names: string[]) {
    for (const name of names) {
      await expect(this.page.locator('.cart_item', { hasText: name })).toBeVisible();
    }
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.title = page.locator('[data-test="header"]');
  }

  async expectLoaded() {
    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(this.postalCode).toBeVisible();
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }
}

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly subtotalLabel: Locator;
  readonly cartItems: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.cartItems = page.locator('.cart_item');
    this.finishButton = page.locator('#finish');
  }

  async expectLoaded() {
    await expect(this.subtotalLabel).toBeVisible();
  }

  async expectItemCount(count: number) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async finish() {
    await this.finishButton.click();
  }
}

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async expectOrderComplete() {
    await expect(this.completeHeader).toBeVisible();
  }
}
