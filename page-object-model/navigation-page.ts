import {Page} from '@playwright/test';

export class NavigationPage {
  readonly page: Page
  readonly loginPageButton: Locator;
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;


  constructor (page: Page) {
    this.page = page
    this.loginPageButton = this.page.getByRole('link', { name: 'Try it out' }).nth(1)
    this.loginButton = this.page.getByRole('button', { name: 'Login' })
    this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  }

async successfulLogin(username: string, password: string) { 
    await this.loginPageButton.click(); 
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click(); 
};

async fileUploadPage() {
  await this.page.getByRole('link', {name: 'File Upload'}).click();
}
}
 
