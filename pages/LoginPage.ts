import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page:Page;
    readonly userNameEdt:Locator;
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
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
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