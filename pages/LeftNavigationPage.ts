import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage{
 readonly page:Page
 readonly pimModuleLnk:Locator 

 constructor(page:Page){
    this.page=page
    this.pimModuleLnk=page.getByRole('link', { name: 'PIM' });

 }

 async openPimModule(){
   await this.pimModuleLnk.click();
 }
}