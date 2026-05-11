import {Page, Locator} from '@playwright/test';


export class NavigationPage {
  readonly page: Page
  readonly loginPageButton: Locator;
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly logoutButton: Locator;
  readonly dismissBtn: Locator;
  readonly fileInput: Locator;
  readonly fileSubmitButton: Locator;
  readonly fileUploaderHeader: Locator;
  readonly fileUploadedHeader: Locator;
  readonly fileTooLargeText: Locator;



  constructor (page: Page) {
    this.page = page
    this.loginPageButton = this.page.getByRole('link', { name: 'Try it out' }).nth(1)
    this.loginButton = this.page.getByRole('button', { name: 'Login' })
    this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.logoutButton =  this.page.getByRole('link', { name: 'Logout' });
    this.dismissBtn = this.page.getByText('Close', { exact: true });
    this.fileInput = this.page.getByTestId('file-input');
    this.fileSubmitButton = this.page.getByTestId('file-submit');
    this.fileUploaderHeader = this.page.getByRole('heading', { name: 'File Uploader page for' });
    this.fileUploadedHeader = this.page.getByRole('heading', { name: 'File Uploaded!' });
    this.fileTooLargeText = this.page.getByText(/File too large/i);
  }

// Method to close popup if it appears
  async closePopupIfPresent() {
    if (await this.dismissBtn.isVisible({ timeout: 2000 })) {
      await this.dismissBtn.click();
    }
  }
  // Method to perform successful login
async successfulLogin(username: string, password: string) { 
    await this.loginPageButton.click(); 
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click(); 
};

// Method to perform unsuccessful login with invalid credentials
async unsuccessfulLogin(invalidUsername: string, invalidPassword: string) { 
   await this.loginPageButton.click(); 
    await this.usernameInput.fill(invalidUsername);
    await this.passwordInput.fill(invalidPassword);
    await this.loginButton.click(); 
};

// Method to perform unsuccessful login with empty credentials
async emptyLogin(emptyUsername: string, emptyPassword: string) {
    await this.loginPageButton.click();
    await this.usernameInput.fill(emptyUsername);
    await this.passwordInput.fill(emptyPassword);
    await this.loginButton.click();
};

async logout() {
    await this.logoutButton.click();
}


async successfulUpload(filepath: string) {
 await this.fileInput.setInputFiles(filepath);
 await this.fileSubmitButton.click();
};


async noFileUploaded() {
  await this.fileSubmitButton.click();
}

async fileTooLarge(filepath: string) {
  await this.fileInput.setInputFiles(filepath);
 await this.fileSubmitButton.click();
}
}
 
