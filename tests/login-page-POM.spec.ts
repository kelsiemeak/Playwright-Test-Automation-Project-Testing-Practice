import {test, expect} from '@playwright/test';
import {NavigationPage} from '../page-object-model/navigation-page';

test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
});



test('Login with valid credentials', async ({page}) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.closePopupIfPresent();
    const username = 'practice';
    const password = 'SuperSecretPassword!';
    await navigateTo.successfulLogin(username, password);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await expect(navigateTo.logoutButton).toBeVisible();
    await navigateTo.logout();
});

test('Login with invalid credentials', async ({page}) => {
    const navigateTo = new NavigationPage(page);
    const invalidUsername = 'practic';
    const invalidPassword = 'SuperSecretPassword';
    await navigateTo.closePopupIfPresent();
    await navigateTo.unsuccessfulLogin(invalidUsername, invalidPassword)
    await expect(page.locator('#flash')).toContainText('invalid!');
    await expect(page).toHaveURL(/login/);
});

test('Login with empty credentials', async ({page}) => {
    const navigateTo = new NavigationPage(page);
    const emptyUsername = '';
    const emptyPassword = '';
    await navigateTo.closePopupIfPresent();
    await navigateTo.emptyLogin(emptyUsername, emptyPassword);
    await expect(page.locator('#flash')).toContainText('invalid!');
    await expect(page).toHaveURL(/login/);
});
