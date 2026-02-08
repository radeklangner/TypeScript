import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from './loginpage';

let loginPage: LoginPage;

Given('Otwieram stronę logowania', async function () {
  loginPage = new LoginPage(this.page); // 'this.page' z Playwright+Cucumber
  await loginPage.goto();
});

When('Wpisuję {string} do pola email', async function (email) {
  await loginPage.fillEmail(email);
});

When('Wpisuję {string} do pola hasło', async function (password) {
  await loginPage.fillPassword(password);
});

When('Klikam przycisk "Zaloguj"', async function () {
  await loginPage.clickLogin();
});

Then('Powinienem zobaczyć komunikat {string}', async function (komunikat) {
  // np. sprawdzasz obecność komunikatu na stronie
  await this.page.waitForSelector(`text=${komunikat}`);
});