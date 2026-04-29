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
  await usernameInput.fill('practice');
  await passwordInput.fill('SuperSecretPassword!');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
});


test('Unsuccessful Login with Invalid Credentials', async ({page}) => {
    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
      
    await usernameInput.fill('practic');
    await passwordInput.fill('SuperSecretPassword');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.locator('#flash')).toContainText('invalid!');
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(page).toHaveURL(/login/);
});

test('Unsuccessful Login with Empty Credentials', async ({page}) => {
    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    
    await usernameInput.fill('');
    await passwordInput.fill('');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.locator('#flash')).toContainText('invalid!');
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(page).toHaveURL(/login/);
});
});
