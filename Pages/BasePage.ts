import {Locator, Page} from '@playwright/test';

export default class BasePage {
    protected readonly page: Page;
   

    constructor(page: Page) {
        this.page = page;
       
    }

    protected async buttonclick(button: Locator) {
        await button.click();
    }

    protected async enterText(input: Locator, text: string) {
        await input.fill(text);
    }

    protected async Hover(element: Locator) {
        await element.hover();
    }

    public async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: filename });
    }
    

}