import {test as baseTest} from "./common-fixture"

type HooksFixtureType={
    goToOrangeHrm:any; 
    logoutToHrm:any;
}

export const test=baseTest.extend<HooksFixtureType> ({
    goToOrangeHrm:async({loginPage}: any,use:any)=>{
        await loginPage.goToOrangeHrm();
        await use();
    },

    logoutToHrm:async({userPage}:any,use:any)=>{
        await use();
        await userPage.logout();
    }

})

export {expect} from "@playwright/test" 
