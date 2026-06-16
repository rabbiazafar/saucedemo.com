// spec: specs/inventory-plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import {
  LoginPage,
  InventoryPage,
  CartPage,
  CheckoutPage,
  CheckoutOverviewPage,
  CheckoutCompletePage,
} from './pages/sauce-demo-pages';

test.describe('Inventory Checkout', () => {
  test('Complete purchase of all inventory items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.expectLoaded();
    await inventoryPage.addAllToCart();
    await inventoryPage.expectCartBadgeCount(6);
    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectItemsPresent([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)',
    ]);
    await cartPage.checkout();

    await checkoutPage.expectLoaded();
    await checkoutPage.fillCheckoutInfo('Test', 'User', '12345');
    await checkoutPage.continue();

    await checkoutOverviewPage.expectLoaded();
    await checkoutOverviewPage.expectItemCount(6);
    await checkoutOverviewPage.finish();

    await checkoutCompletePage.expectOrderComplete();
  });
});
