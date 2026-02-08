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