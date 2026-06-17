# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: linkedin.spec.ts >> test
- Location: tests\linkedin.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.linkedin.com/login/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "0 notifications" [level=2] [ref=e3]
  - main [ref=e8]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.linkedin.com/');
  5  |   await page.getByText('LinkedIn LinkedIn is better').click();
  6  |   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
> 7  |   await page.goto('https://www.linkedin.com/login/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  |   await page.getByRole('textbox', { name: 'Email or phone' }).click();
  9  |   await page.getByRole('textbox', { name: 'Email or phone' }).fill('rabbiazafar12@hotmail.com');
  10 |   await page.getByRole('textbox', { name: 'Password' }).click();
  11 |   await page.getByRole('textbox', { name: 'Password' }).fill('106397Rabbia');
  12 |   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  13 |   await page.getByRole('link', { name: 'Jobs, 0 new notifications' }).click();
  14 | });
```