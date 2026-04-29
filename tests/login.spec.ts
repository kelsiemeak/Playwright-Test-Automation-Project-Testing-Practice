import { test, expect } from '@playwright/test';

//navigate to website needs to be a beforeEach function

test.describe('Login Tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Try it out' }).nth(1).click();
});

test('Successful Login', async ({page}) => {
const usernameInput = page.getByRole('textbox', { name: 'Username' });
const passwordInput = page.getByRole('textbox', { name: 'Password' });

  await expect(page.locator('#username')).toBeVisible();
  await expect(usernameInput).toBeVisible();    
  await (usernameInput).fill('practice');
  await expect(page.locator('#password')).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await (passwordInput).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
});