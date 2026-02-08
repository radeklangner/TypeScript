import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

console.log("=== LADUJE LOGIN.STEPS.TS ===");

Given('I open the page {string}', async function (url: string) {
  // Twój kod otwierający stronę
});

When('I type {string} into the number field', async function (number: string) {
  // Twój kod wpisujący numer
});

When('I wait 5 seconds', async function () {
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Then('I close the browser', async function () {
  // Twój kod zamykający
});