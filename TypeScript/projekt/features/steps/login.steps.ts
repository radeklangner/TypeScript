import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

// Ustawiamy timeout na 60 sekund, bo GitHub Actions czasem działa wolniej
setDefaultTimeout(60 * 1000);

Given('I open the page {string}', async function (url: string) {
    console.log(`>>> KROK: Otwieram stronę: ${url}`);
    // Uruchomienie przeglądarki w trybie headless (wymagane na GitHub Actions)
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
});

When('I type {string} into the number field', async function (number: string) {
    console.log(`>>> KROK: Wpisuję numer: ${number}`);
    // Czekamy na selektor, aby upewnić się, że strona się załadowała
    await page.waitForSelector('input[type="number"]');
    await page.fill('input[type="number"]', number);
});

When('I wait {int} seconds', async function (seconds: number) {
    console.log(`>>> KROK: Czekam ${seconds} sekund...`);
    await page.waitForTimeout(seconds * 1000);
});

Then('I close the browser', async function () {
    console.log(`>>> KROK: Zamykam przeglądarkę`);
    await browser.close();
});