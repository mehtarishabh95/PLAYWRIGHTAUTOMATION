import {Locator, Page} from "@playwright/test"

export class UserPage{
    readonly page:Page;
    readonly profileDD:Locator;
    readonly logoutBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.profileDD=page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutBtn=page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout(){
        await this.profileDD.click();
        await this.logoutBtn.click();
    }
}