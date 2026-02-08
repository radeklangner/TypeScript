import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

// Ustawiamy timeout na 60 sekund
setDefaultTimeout(60 * 1000);

Given('I open the page {string}', async function (url: string) {
  console.log(`\n[STEP] Otwieram przeglądarkę i przechodzę do: ${url}`);
  
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  
  await page.goto(url);
  console.log(`[INFO] Strona ${url} załadowana pomyślnie.`);
});

When('I type {string} into the number field', async function (number: string) {
  console.log(`[STEP] Próbuję wpisać numer: ${number}`);
  
  // Selektor input[type="number"] jest poprawny dla strony expandtesting
  await page.fill('input[type="number"]', number);
  
  const val = await page.inputValue('input[type="number"]');
  console.log(`[INFO] Wpisano wartość: ${val}`);
});

When('I wait 5 seconds', async function () {
  console.log(`[STEP] Czekam 5 sekund...`);
  await page.waitForTimeout(5000);
  console.log(`[INFO] Odczekano.`);
});

Then('I close the browser', async function () {
  console.log(`[STEP] Zamykam przeglądarkę.`);
  await browser.close();
});