import { Locator, expect} from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {

    
    protected readonly pageURL: string = 'https://vendorbotit.com/ts-dev/public/';
    protected readonly OrdersTab: Locator = this.page.getByRole('link', { name: 'Orders', exact: true });
    protected readonly OrderByVendor: Locator = this.page.getByText('Order By Vendor');

    async navigateToOrderbyVendor_Orders(){
        await this.buttonclick(this.OrderByVendor);
    } 

    async HoverOverOrdersTab(){
        await this.Hover(this.OrdersTab);
    }

    async ValidateHomePageURL(){
        await expect(this.page).toHaveURL('https://vendorbotit.com/ts-dev/public/home');
    }

    async ClickOnOrdersTab(){
       await this.buttonclick(this.OrdersTab);
    }
    

}
