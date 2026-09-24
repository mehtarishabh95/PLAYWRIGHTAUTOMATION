import {test,expect} from "../fixtures/hooks-fixture"
const loginModuleData=require("../data/login-module-data.json")

test.use({
    storageState:{
        cookies:[],
        origins:[]
    }
})

test.describe("Invalid Login test cases",{
    tag:'@INVALID LOGIN',
    annotation:{
        type:"Story link",
        description:"https://link of story"
    }
},
()=>{
    test("[Login] As a user i should not be able to login with wrong password",
        {
            tag:['@UI','@UAT'],
            annotation:{
                type:'Test case Link',
                description:'https//dev.azzure.com/project/testcaseId'
            }
        },
        async({page,goToOrangeHrm,loginPage,commonUtils})=>{
        const userName=commonUtils.decryptData(process.env.USER_NAME!)
        const wrongPassword=loginModuleData.wrong_password;
        await loginPage.loginToHrm(userName,wrongPassword)
        await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.login_error_mesasge)
        page.waitForLoadState("networkidle")
        await expect(loginPage.userNameEdt).toBeVisible();
     
    }
    )
    
    test("[Login] As a user i should not be able to login with wrong user name",
        {
            tag:['@UI','@UAT'],
            annotation:{
                type:'Tes   t case Link',
                description:'https//dev.azzure.com/project/testcaseId'
            }
        },
        
        async({goToOrangeHrm,loginPage,commonUtils})=>
        {
        const wrongUserName=loginModuleData.wrong_userName;
        const password=commonUtils.decryptData(process.env.PASSWORD!)
        await loginPage.loginToHrm(wrongUserName,password)
        await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.login_error_mesasge)
        await expect(loginPage.userNameEdt).toBeVisible();
        }
    )
    
    test("[Login] As a user i should not be able to login with wrong username and password",
        {
            tag:['@UI','@DEV'],
            annotation:{
                type:'Test case Link',
                description:'https//dev.azzure.com/project/testcaseId'
            }
        },
        async({goToOrangeHrm,loginPage,commonUtils})=>{
        const wrongUserName=loginModuleData.wrong_userName;
        const wrongPassword=loginModuleData.wrong_password;
        await loginPage.loginToHrm(wrongUserName,wrongPassword)
        await expect(loginPage.loginErrorMessage).toHaveText(loginModuleData.login_error_mesasge)
        await expect(loginPage.userNameEdt).toBeVisible();
    }
    )
})


test("[Login] As a user i should be able to login with correct UN Pwd",
{
    tag:'@VISUAL',
    annotation:{
        type:"Test case Link",
        description:"//http....."
    }
},
async({page,goToOrangeHrm,loginPage,commonUtils})=>{
    const userName=commonUtils.decryptData(process.env.USER_NAME!)
    const password=commonUtils.decryptData(process.env.PASSWORD!)
    await loginPage.loginToHrm(userName,password)
    //Adding assertions for visual testing.. like logo of the app and left side panel screenshot.. first time test case will fail because we haven't pasted any screenshot in the project.. so it will only take screenshot and put in the project.. now next time it will compare with that ss.
    await expect(loginPage.appLogo).toHaveScreenshot("appLogo.png");//bydefault set kr dega name agar khud s nhi diya to .. wse wo bhi koi issue nhi h.. pr baad m delete krna pda to problem ho skti h
    await expect(loginPage.leftNavigationPanel).toHaveScreenshot("leftNavigationPanel.png")

})