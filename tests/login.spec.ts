import { test, expect } from '@playwright/test';

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
  await usernameInput.fill('practice');
  await expect(page.locator('#password')).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill('SuperSecretPassword!');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
});


test('Unsuccessful Login', async ({page}) => {
    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    
    await expect(page.locator('#username')).toBeVisible();
    await expect(usernameInput).toBeVisible();    
    await usernameInput.fill('practic');
    await expect(page.locator('#password')).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('SuperSecretPassword');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.locator('#flash').getByText('Your password is invalid!')).toBeVisible();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Close'})).toBeHidden();
});
});
