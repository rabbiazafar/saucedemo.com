import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.linkedin.com/');
  await page.getByText('LinkedIn LinkedIn is better').click();
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.goto('https://www.linkedin.com/login/');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('rabbiazafar12@hotmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('106397Rabbia');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'Jobs, 0 new notifications' }).click();

  
  
});