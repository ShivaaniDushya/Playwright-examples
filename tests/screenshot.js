import {chromium} from "playwright";

(async() => {

    const browser = await chromium.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();
    await page.goto("https://www.w3schools.com/");

    await page.screenshot({path: "w3school.png", fullPage: true});

    await browser.close();

})();