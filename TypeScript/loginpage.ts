// loginPage.ts
export class LoginPage {
    constructor(private page) {} // 'page' z Playwright
  
    async goto() {
      await this.page.goto('https://example.com/login');
    }
  
    async fillEmail(email: string) {
      await this.page.fill('#email', email);
    }
  
    async fillPassword(password: string) {
      await this.page.fill('#password', password);
    }
  
    async clickLogin() {
      await this.page.click('#login');
    }
  }

  import { Page } from 'playwright';

export class InputPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://practice.expandtesting.com/inputs');
  }

  async fillNumber(value: string) {
    await this.page.fill('#input-number', value);
  }

  async fillText(value: string) {
    await this.page.fill('#input-text', value);
  }

  async getNumberValue(): Promise<string> {
    return await this.page.inputValue('#input-number');
  }

  async getTextValue(): Promise<string> {
    return await this.page.inputValue('#input-text');
  }
}