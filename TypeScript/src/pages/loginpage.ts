import { Page } from 'playwright';

/**
 * Page Object Model for Login Page
 * Handles all login-related interactions on https://example.com/login
 */
export class LoginPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('https://example.com/login');
  }

  async fillEmail(email: string): Promise<void> {
    await this.page.fill('#email', email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.page.fill('#password', password);
  }

  async clickLogin(): Promise<void> {
    await this.page.click('#login');
  }
}