import {test, expect} from '@playwright/test';

test.describe('File upload tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', {name: 'File Upload'}).click();
    });

test('Successful upload' , async ({page}) => {
  await expect(page.getByRole('heading', { name: 'File Uploader page for' })).toBeVisible();
  await page.getByTestId('file-input').setInputFiles('tests/fixtures/Chess butterfly.jpg');
  await page.getByTestId('file-submit').click();
  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
});
});