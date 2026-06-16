# Inventory Checkout Happy Path Plan

## Application Overview

Happy path test plan for Saucedemo inventory page: log in, verify all products, add them to cart, and complete checkout.

## Test Scenarios

### 1. Inventory Checkout

**Seed:** `tests/seed.spec.ts`

#### 1.1. Complete purchase of all inventory items

**File:** `specs/inventory-plan.md`

**Steps:**
  1. -
    - expect: Start on https://www.saucedemo.com with the login page visible.
  2. Enter Username as standard_user.
    - expect: Username field accepts input.
  3. Enter Password as secret_sauce.
    - expect: Password field accepts input.
  4. Click the Login button.
    - expect: The inventory page loads successfully.
    - expect: The page title or header includes Swag Labs.
    - expect: A list of inventory items is visible.
  5. Count the inventory products on the inventory page.
    - expect: Exactly 6 products are displayed.
    - expect: Each product row shows a name, price, and Add to cart button.
  6. Click Add to cart for every visible product.
    - expect: Each product button changes to Remove or indicates the product is in the cart.
    - expect: The cart badge displays 6.
  7. Click the shopping cart icon or link.
    - expect: The cart page loads.
    - expect: There are 6 items listed in the cart.
  8. Verify the cart page includes all 6 selected product names.
    - expect: The cart shows Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, and Test.allTheThings() T-Shirt (Red).
  9. Click the Checkout button.
    - expect: The checkout information page loads.
    - expect: First Name, Last Name, and Postal Code fields are present.
  10. Enter First Name as Test, Last Name as User, and Postal Code as 12345.
    - expect: All checkout form fields accept input.
  11. Click the Continue button.
    - expect: The order summary page loads.
    - expect: The item total is displayed.
  12. Verify the order summary includes the 6 items and correct item total.
    - expect: The summary page lists all 6 products.
    - expect: Item total is shown.
  13. Click the Finish button.
    - expect: The order completion page loads.
    - expect: The confirmation message Thank you for your order! is displayed.
