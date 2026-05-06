import {Page} from '@playwright/test';

export class NavigationPage {
  readonly page: Page

  constructor (page: Page) {
    this.page = page
  }
  async loginPage() {
  await this.page.getByRole('link', { name: 'Try it out' }).nth(1).click();
}
}


/* steps
Import
Define class
Readonly page: Page
Constructor
Method
Export class
Import class in test file
Create instance of class
Call method in test
*/