import {test} from "../fixtures/common-fixture"
import { expect, Expect } from "@playwright/test";

test("Global setup for Auto login",async({page,loginPage,commonUtils,dashboardPage})=>{
    const decryptedUN=commonUtils.decryptData(process.env.USER_NAME!)
    const decryptedPwd=commonUtils.decryptData(process.env.PASSWORD!)

    await loginPage.goToOrangeHrm();
    console.log("decryptedUN "+decryptedUN+"");
    
    await loginPage.loginToHrm(decryptedUN,decryptedPwd);
    //Assertion for login
    await page.waitForURL(process.env.BASE_URL+"web/index.php/dashboard/index")
    await page.waitForLoadState("networkidle")
    expect(dashboardPage.dashboardTitleTxt).toHaveText("Dashboard");
    await page.context().storageState({
        path: "./playwright/.auth/auth.json"
    })
    //we are storing this auth state here.. so by taking context of page and inside storage start we have this js block.. inside it we are saving this state in a file auth.json under playwright/.auth folder
}
)