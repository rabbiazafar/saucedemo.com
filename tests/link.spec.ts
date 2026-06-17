// Playwright tests for LinkedIn
import { test, expect } from '@playwright/test';

const EMAIL = process.env.LINKEDIN_EMAIL || 'rabbiazafar12@hotmail.com';
const PASSWORD = process.env.LINKEDIN_PASSWORD || '106397Rabbia';

async function login(page) {
  await page.goto('https://www.linkedin.com/');
  const signInButton = page.getByRole('link', { name: /Sign in/i }).first();
  if (await signInButton.count() > 0 && await signInButton.isVisible()) {
    await signInButton.click();
  }

  const emailInput = page.getByLabel(/Email|Email or phone|Email address/i).first();
  await expect(emailInput).toBeVisible({ timeout: 20000 });
  await emailInput.fill(EMAIL);

  const passwordInput = page.getByLabel(/Password/i).first();
  await expect(passwordInput).toBeVisible({ timeout: 20000 });
  await passwordInput.fill(PASSWORD);

  const submitButton = page.getByRole('button', { name: /Sign in/i }).first();
  await submitButton.click();

  const searchInput = page.locator('input[placeholder*="Search"], input.search-global-typeahead__input').first();
  await expect(searchInput).toBeVisible({ timeout: 30000 });
}

async function ensureLoggedIn(page) {
  const searchInput = page.locator('input[placeholder*="Search"], input.search-global-typeahead__input').first();
  if (await searchInput.count() > 0) {
    await expect(searchInput).toBeVisible({ timeout: 5000 }).catch(async () => {
      await login(page);
    });
  } else {
    await login(page);
  }
}

test.describe('LinkedIn scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.linkedin.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/.*feed.*/i);
  });

  test('Search shows input after login', async ({ page }) => {
    await ensureLoggedIn(page);
    const searchInput = page.getByPlaceholder(/Search/i).first();
    await expect(searchInput).toBeVisible({ timeout: 20000 });
    await searchInput.fill('Playwright automation');
    await searchInput.press('Enter');
    await expect(page.locator('div.search-results__container, .search-results')).toBeVisible({ timeout: 20000 });
  });

  test('Logout by visiting mobile logout endpoint', async ({ page }) => {
    await ensureLoggedIn(page);
    await page.goto('https://www.linkedin.com/m/logout/');
    await expect(page).toHaveURL(/.*login.*/i);
  });
});
