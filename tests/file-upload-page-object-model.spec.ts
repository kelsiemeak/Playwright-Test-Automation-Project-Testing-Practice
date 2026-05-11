import {test, expect} from '@playwright/test';
import path from 'path';
import {NavigationPage} from '../page-object-model/navigation-page';
const files = {
  valid: path.join(__dirname, './fixtures/142kb-small-file-jpg.jpg'),
  large: path.join(__dirname, './fixtures/1mb-large-file-png.png'),
};


test.describe('File upload tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', {name: 'File Upload'}).click();
    });

test('Successful upload' , async ({page}) => {
    const navigateTo = new NavigationPage(page);
    if (await page.getByText('Consent').isVisible()) {
        await page.getByText('Consent').click();
    }
    await navigateTo.successfulUpload(files.valid);
});
});

