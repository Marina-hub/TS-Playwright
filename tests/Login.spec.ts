import  { test} from "../Fixtures/fixtures";
import testdata from '../TestData/testdata.json';


test.describe('Login with valid credentials', () => {
    test('should login with valid credentials', async ({ page , homePage , loginPage}) => {
      

        await page.goto('https://vendorbotit.com/ts-dev/public/login');
        await loginPage.EnterUsername(testdata.Username);
        await loginPage.EnterPassword(testdata.Password);
        await loginPage.pressonLogin();   
        await loginPage.takeScreenshot('./tests/screenshots/HomePage.png');
        await homePage.ValidateHomePageURL();
        await homePage.ClickOnOrdersTab();
        await homePage.HoverOverOrdersTab();
        await homePage.navigateToOrderbyVendor_Orders();
        await loginPage.takeScreenshot('./tests/screenshots/CreateOrder.png');
    });
test.beforeEach(async ({ page }) => {
    await page.goto('https://vendorbotit.com/ts-dev/public/login');
});

test.afterEach(async ({ page }) => {
    await page.close();
});

});

