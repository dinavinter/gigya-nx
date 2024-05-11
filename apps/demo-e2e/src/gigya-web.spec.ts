import { test, expect } from '@playwright/test';


test('test-loaded', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.getByRole('heading', { name: 'Register with your email and' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
});
