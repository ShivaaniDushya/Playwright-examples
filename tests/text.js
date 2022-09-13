import {chromium} from "playwright";

(async() => {

    const browser = await chromium.launch({headless: false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto("https://www.w3schools.com/");

    const text = await page.$("#search2");
    await text.type("Javascript");

    await browser.close();
})();