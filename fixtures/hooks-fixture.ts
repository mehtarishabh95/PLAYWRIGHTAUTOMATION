import {test as baseTest} from "./common-fixture"

type HooksFixtureType={
    goToOrangeHrm:any; //y koi class to h nhi isliye any bs 1 mtd h jise use krna h
    logoutToHrm:any;
}

export const test=baseTest.extend<HooksFixtureType> ({
    goToOrangeHrm:async({loginPage}: any,use:any)=>{//loginPage fixture use kiya hto get that method
        await loginPage.goToOrangeHrm();
        await use();//y before method use hoga to phle mtd and then use
    },

    logoutToHrm:async({userPage}:any,use:any)=>{
        await use();//y after mtd h to use hone k baad logout hoga
        await userPage.logout();
    }

})

export {expect} from  "@playwright/test" //so we will not need to add extra import for expect in test script.
    
//For interview purpose Hooks 
// test.beforeAll() 
// test.beforeEach()
// test.afterEach()
// test.afterAll()