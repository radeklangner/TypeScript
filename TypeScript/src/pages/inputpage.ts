import { Page } from 'playwright';

/**
 * Page Object Model for Input Page
 * Handles input field interactions on https://practice.expandtesting.com/inputs
 */
export class InputPage {
  constructor(private page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('https://practice.expandtesting.com/inputs');
  }

  async fillNumber(value: string): Promise<void> {
    await this.page.fill('#input-number', value);
  }

  async fillText(value: string): Promise<void> {
    await this.page.fill('#input-text', value);
  }

  async getNumberValue(): Promise<string> {
    return await this.page.inputValue('#input-number');
  }

  async getTextValue(): Promise<string> {
    return await this.page.inputValue('#input-text');
  }
}