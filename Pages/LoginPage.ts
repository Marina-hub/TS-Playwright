import {Locator, Page} from '@playwright/test';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
   
    protected readonly usernameInput: Locator = this.page.locator('input[name="email"]');
    protected readonly passwordInput: Locator = this.page.locator('input[name="password"]');
    protected readonly loginButton: Locator = this.page.getByRole('button', { name: 'Login' });


    async EnterUsername(username:string){
        await this.enterText(this.usernameInput, username);
       
    }

    async EnterPassword(password:string){
        await this.enterText(this.passwordInput, password);
        
    }

     async pressonLogin(){
         await this.buttonclick(this.loginButton);
    }

    


}

