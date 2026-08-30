import { test as baseTest} from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';
import HomePage from '../Pages/HomePage';

type MyPages = {
    loginPage: LoginPage;
    homePage: HomePage;
};

const testpages = baseTest.extend<MyPages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

export const test = testpages;

