import {expect, test} from "../fixtures/hooks-fixture"
const pimModuleData =require("../data/pim-module-data.json")

test("[Pim Page] As a user i should be able to add a new employ",
    {
        tag:['@UI','@UAT'],
        annotation:{
            type:'Test case Link',
            description:'https//dev.azzure.com/project/testcaseId'
        }
    }
    ,async({page,goToOrangeHrm,leftNavigationPage,pimPage})=>{

    const firstName=pimModuleData.first_name;
    const middleName=pimModuleData.middle_name
    const lastName=pimModuleData.last_name
    const employId=pimModuleData.employ_id  

    //Adding test steps 
await test.step('Open pim module',async()=>{
    await leftNavigationPage.openPimModule();
})

await test.step('Add new employ',async()=>{
    await pimPage.addNewEmploy(firstName,middleName,lastName,employId)
    await page.waitForLoadState("networkidle")
    await expect(pimPage.newEmployNameHeading).toHaveText(firstName+" "+lastName)
})
    
    

})