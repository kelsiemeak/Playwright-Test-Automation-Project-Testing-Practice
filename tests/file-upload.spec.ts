import {test, expect} from '@playwright/test';
import path from 'path';
const files = {
  valid: path.join(__dirname, './fixtures/142kb-small-file-jpg.jpg'),
  large: path.join(__dirname, './fixtures/1mb-large-file-png.png'),
};

test.describe('File upload tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', {name: 'File Upload'}).click();
    await expect(page.getByRole('heading', { name: 'File Uploader page for' })).toBeVisible();
    });

test('Successful upload' , async ({page}) => {
  await page.getByTestId('file-input').setInputFiles(files.valid);
  await page.getByTestId('file-submit').click();
  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
});

test('Do nothing when no file is uploaded', async ({page}) => {
  await page.getByTestId('file-submit').click();
  await expect(page.getByRole('heading', {name: 'File Uploader'})).toBeVisible();
  await expect(page.getByText('File Uploaded!')).toHaveCount(0);
  await expect(page).toHaveURL(/upload/);
});

test('Show error when file is too large', async ({page}) => {
      await page.getByTestId('file-input').setInputFiles(files.large);
      await page.getByTestId('file-submit').click();
      await expect(page.getByText(/File too large/i)).toBeVisible();
      await expect(page).toHaveURL(/upload/);
});

});
