import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page:Page;
    readonly addBtn:Locator;
    readonly employFirstNameEdt:Locator;
    readonly middleNameEdt:Locator;
    readonly lastNameEdt:Locator;
    readonly employIdEdt:Locator;
    readonly saveBtn:Locator;
    readonly newEmployNameHeading:Locator;

    constructor(page:Page){
        this.page=page;
        this.addBtn=page.getByRole('button', { name: ' Add' });
        this.employFirstNameEdt=page.getByRole('textbox', { name: 'First Name' })
        this.middleNameEdt=page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameEdt=page.getByRole('textbox', { name: 'Last Name' });
        this.employIdEdt=page.getByRole('textbox').nth(4);
        this.saveBtn=page.getByRole('button', { name: 'Save' });
        this.newEmployNameHeading=page.locator(".orangehrm-edit-employee-name");
}

//Business library
async addNewEmploy( firtName:string,middleName:string,lastName:string,employId:number){
    await this.addBtn.click()
    await this.employFirstNameEdt.fill(firtName)
    await this.middleNameEdt.fill(middleName)
    await this.lastNameEdt.fill(lastName)
    await this.employIdEdt.fill(employId.toString())
    await this.saveBtn.click();
}

}

