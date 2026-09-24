// import {test} from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
//upper lines are commented because we have used fixture now
// import {test} from "../fixtures/pom-fixture"//iska explaination line 6 k baad h
// import CommonUtils from "../utils/CommonUtils";//fixture use krenge
// import{test} from "../fixtures/common-fixture" //we will use hooks fixture instead of this
import{test} from "../fixtures/hooks-fixture"

//common fixture m pom-fixture extend hua h.. to ise use krne pr bydefault wo bhi import ho jayega so line 4 ko comment kiya

// //Hook for url  .. but we will use fixture for this
// test.beforeEach('Before each hook',async({loginPage})=>{
//     await loginPage.goToOrangeHrm();
// })

// test.afterEach('After each hook',async({userPage})=>{
//     await userPage.logout();
// })

//We will not be using our automation like this .. this is just an ex. so we will create fixture fiels..
// test("Temp test",async({page,goToOrangeHrm,logoutToHrm,loginPage,commonUtils})=>{
    // const loginPage=new LoginPage(page); now fixture will do this.
    // await loginPage.goToOrangeHrm();
    // await loginPage.loginToHrm("Admin","admin123");

    //To get data from environment files..
    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);

    // //Getting UN and PWD encrypted data 
    // const commonUtils=new CommonUtils(); //we will use fixture for this
    // const un=commonUtils.encriptData("Admin")
    // console.log(un);//now we can place it in env files.

    // const pwd=commonUtils.encriptData("admin123")
    // console.log(pwd);

    //Decrypt data 
    // const decUN=commonUtils.decryptData(process.env.USER_NAME!)
    // const decPWD=commonUtils.decryptData(process.env.PASSWORD!)
    //we have put this exclamation mark to tell this that the data entered is not undefined data.. because this data may be undefined
    // console.log(decUN);
    // console.log(decPWD);
    //This decrypted data we can use in our script .. like this no one can get out id pwd.. because to run this he needs secret_key
    
    //Now using this decrypted data to login
    // await loginPage.goToOrangeHrm(); //using hooks on top for this
    // await loginPage.loginToHrm(decUN,decPWD); //AFter global setup this login not required
    // console.log(await page.title());
    // await page.pause();

    //merge conflict comment new
    
// })