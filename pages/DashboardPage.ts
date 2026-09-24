import { Locator, Page } from "@playwright/test";


export class DashboardPage{
    readonly page:Page;
    readonly dashboardTitleTxt:Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardTitleTxt=page.getByRole('heading', { name: 'Dashboard' })
        
    }

}