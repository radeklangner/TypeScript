import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false }); // Otwiera przeglądarkę
  const page = await browser.newPage();
  await page.goto('https://practice.expandtesting.com/inputs'); // Przechodzi na stronę

  // Kliknięcie w pole wyszukiwania
  await page.click('#input-number');

  // Wpisanie tekstu
  await page.fill('#input-number', '12345');

    // Kliknięcie w pole wyszukiwania
    await page.click('#input-text');

    // Wpisanie tekstu
    await page.fill('#input-text', 'ACAB');

  // Kliknięcie przycisku "Szukaj"
  // W Google można po prostu wysłać Enter:
  await page.keyboard.press('Enter');

  // Czekaj na wyniki
  await page.waitForTimeout(3000);

  await browser.close();
})();