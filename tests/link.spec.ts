import { test, expect } from '@playwright/test';

test('Search and review SQA jobs on LinkedIn', async ({ page }) => {

  // Step 1: Open LinkedIn homepage
  await page.goto('https://www.linkedin.com/');
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();

  // Step 2: Click Sign In
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.locator('#username')).toBeVisible();

  // Step 3 & 4: Enter credentials and login
  await page.locator('#username').fill('rabbiazafar12@hotmail.com');
  await page.locator('#password').fill('106397Rabbia');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(/linkedin\.com\/feed|linkedin\.com\/jobs/);

  // Step 5: Go to Jobs page
  await page.getByRole('link', { name: 'Jobs' }).click();
  await expect(page).toHaveURL(/linkedin\.com\/jobs/);

  // Step 6: Search for SQA jobs
  await page.getByRole('combobox', { name: /Search by title/ }).fill('Software Quality Assurance');
  await page.keyboard.press('Enter');

  // Step 7: Apply filters if available
  const filterButton = page.getByRole('button', { name: 'Experience level' });
  if (await filterButton.isVisible()) {
    await filterButton.click();
  }

  // Step 8: Verify SQA-related job titles appear in results
  const jobCards = page.locator('.job-card-container');
  await jobCards.first().waitFor({ state: 'visible' });
  await expect(jobCards.first()).toBeVisible();

  // Step 9: Open the first job posting
  await jobCards.first().click();

  // Step 10: Verify job description contains QA keywords
  const description = page.locator('.jobs-description');
  await description.waitFor({ state: 'visible' });
  const descText = (await description.textContent()) ?? '';
  const qaKeywords = ['quality', 'testing', 'QA', 'automation', 'defect'];
  const hasKeyword = qaKeywords.some(k => descText.toLowerCase().includes(k.toLowerCase()));
  expect(hasKeyword).toBeTruthy();

  // Step 11: Click Easy Apply if available
  const easyApplyButton = page.getByRole('button', { name: 'Easy Apply' });
  if (await easyApplyButton.isVisible()) {
    await easyApplyButton.click();
    await expect(page.locator('.jobs-easy-apply-modal')).toBeVisible();
    await page.keyboard.press('Escape');
  }

  // Step 12: Save the job if save button is available
  const saveButton = page.getByRole('button', { name: /Save/ });
  if (await saveButton.isVisible()) {
    await saveButton.click();
    await expect(page.getByText(/Saved|Job saved/i)).toBeVisible();
  }

});