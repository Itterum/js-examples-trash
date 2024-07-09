import {chromium} from 'playwright';

const url = 'https://playwright.dev';
const selector = '.hero';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.click('.toggle_vylO');
    await page.screenshot({path: 'example.png', fullPage: true});
    await page.waitForTimeout(1000);

    const result = await page.$$eval(selector, (elements) => {
        return elements.map(element => {
            const title = element.querySelector('.container > .hero__title')?.textContent || 'No title';
            const gitHubStars = element.querySelector('.gh-count')?.textContent || 'No stars';

            return {title, gitHubStars};
        });
    });

    console.log(result);

    await browser.close();
})();
