import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

console.log("=== LADUJE LOGIN.STEPS.TS ===");

Given('Otwieram strone {string}', async function (url: string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto(url);
  process.stdout.write(`STEP: Otwieram strone ${url}\n`);
});

When('Wpisuje {string} w pole numeru', async function (value: string) {
  await page.locator('#input-number').fill(value);
  process.stdout.write(`STEP: Wpisuje "${value}" w pole numeru\n`);
});

When('Czekam {int} sekund', async function (sekundy: number) {
  process.stdout.write(`Czekam ${sekundy} sekund...\n`);
  await new Promise(resolve => setTimeout(resolve, sekundy * 1000));
});

Then('Zamykam przegladarke', async function () {
  if (browser) {
    await browser.close();
    process.stdout.write('STEP: Przegladarka zamknieta\n');
  }
});