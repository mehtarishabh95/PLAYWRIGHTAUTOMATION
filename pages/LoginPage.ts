import { Locator, Page } from "@playwright/test";

export class LoginPage{//export So this class can be used in any other class.

    readonly page:Page;//Page is from playwright/test.. directly import  ho gya
    readonly userNameEdt:Locator;//comes form playwright/test
    readonly passwordEdt:Locator;
    readonly loginBtn:Locator;
    readonly loginErrorMessage:Locator;
    readonly appLogo:Locator;
    readonly leftNavigationPanel:Locator;

    constructor(page:Page){
        this.page=page;
        this.userNameEdt=page.getByRole('textbox', { name: 'Username' });
        this.passwordEdt=page.getByRole('textbox', { name: 'Password' });
        this.loginBtn=page.getByRole('button', { name: 'Login' });
        this.loginErrorMessage=page.getByText('Invalid credentials');
        this.appLogo=page.locator(".oxd-sidepanel-header");
        this.leftNavigationPanel=page.locator(".oxd-sidepanel-body");
    }

    //Business libarary

    /**
     * To Launch application.
     */
    async goToOrangeHrm(){
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);//this returns promice so we need await and due to await we need async. and $ to concatinate base url
        //we can use single cot or double but need consistency.
    }

    /**
     * To Login to application.
     */
    async loginToHrm(userName:string,password:string){
        await this.userNameEdt.fill(userName);
        await this.passwordEdt.fill(password);
        await this.loginBtn.click();
    }
}