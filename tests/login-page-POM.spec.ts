import {test} from '@playwright/test';
import {NavigationPage} from '../page-object-model/navigation-page';

test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
});

test('Navigate to Login Page', async ({page}) => {
    const navigateTo = new NavigationPage(page);
    const username = 'practice';
    const password = 'SuperSecretPassword!';
    await navigateTo.successfulLogin(username, password)
})
