# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: link.spec.ts >> LinkedIn scenarios >> Login with valid credentials
- Location: tests\link.spec.ts:45:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel(/Email|Email or phone|Email address/i).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByLabel(/Email|Email or phone|Email address/i).first()

```

```yaml
- heading "0 notifications" [level=2]
- main
```

# Test source

```ts
  1  | // Playwright tests for LinkedIn
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | const EMAIL = process.env.LINKEDIN_EMAIL || 'rabbiazafar12@hotmail.com';
  5  | const PASSWORD = process.env.LINKEDIN_PASSWORD || '106397Rabbia';
  6  | 
  7  | async function login(page) {
  8  |   await page.goto('https://www.linkedin.com/');
  9  |   const signInButton = page.getByRole('link', { name: /Sign in/i }).first();
  10 |   if (await signInButton.count() > 0 && await signInButton.isVisible()) {
  11 |     await signInButton.click();
  12 |   }
  13 | 
  14 |   const emailInput = page.getByLabel(/Email|Email or phone|Email address/i).first();
> 15 |   await expect(emailInput).toBeVisible({ timeout: 20000 });
     |                            ^ Error: expect(locator).toBeVisible() failed
  16 |   await emailInput.fill(EMAIL);
  17 | 
  18 |   const passwordInput = page.getByLabel(/Password/i).first();
  19 |   await expect(passwordInput).toBeVisible({ timeout: 20000 });
  20 |   await passwordInput.fill(PASSWORD);
  21 | 
  22 |   const submitButton = page.getByRole('button', { name: /Sign in/i }).first();
  23 |   await submitButton.click();
  24 | 
  25 |   const searchInput = page.locator('input[placeholder*="Search"], input.search-global-typeahead__input').first();
  26 |   await expect(searchInput).toBeVisible({ timeout: 30000 });
  27 | }
  28 | 
  29 | async function ensureLoggedIn(page) {
  30 |   const searchInput = page.locator('input[placeholder*="Search"], input.search-global-typeahead__input').first();
  31 |   if (await searchInput.count() > 0) {
  32 |     await expect(searchInput).toBeVisible({ timeout: 5000 }).catch(async () => {
  33 |       await login(page);
  34 |     });
  35 |   } else {
  36 |     await login(page);
  37 |   }
  38 | }
  39 | 
  40 | test.describe('LinkedIn scenarios', () => {
  41 |   test.beforeEach(async ({ page }) => {
  42 |     await page.goto('https://www.linkedin.com/');
  43 |   });
  44 | 
  45 |   test('Login with valid credentials', async ({ page }) => {
  46 |     await login(page);
  47 |     await expect(page).toHaveURL(/.*feed.*/i);
  48 |   });
  49 | 
  50 |   test('Search shows input after login', async ({ page }) => {
  51 |     await ensureLoggedIn(page);
  52 |     const searchInput = page.getByPlaceholder(/Search/i).first();
  53 |     await expect(searchInput).toBeVisible({ timeout: 20000 });
  54 |     await searchInput.fill('Playwright automation');
  55 |     await searchInput.press('Enter');
  56 |     await expect(page.locator('div.search-results__container, .search-results')).toBeVisible({ timeout: 20000 });
  57 |   });
  58 | 
  59 |   test('Logout by visiting mobile logout endpoint', async ({ page }) => {
  60 |     await ensureLoggedIn(page);
  61 |     await page.goto('https://www.linkedin.com/m/logout/');
  62 |     await expect(page).toHaveURL(/.*login.*/i);
  63 |   });
  64 | });
  65 | 
```