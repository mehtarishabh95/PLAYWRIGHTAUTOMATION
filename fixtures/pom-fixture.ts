//We will write fixtures related to pom
import {test as baseTest} from "@playwright/test"; //as baseTest is alias.. So we will use baseTest to create fixture
import{LoginPage} from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { LeftNavigationPage } from "../pages/LeftNavigationPage";
import { PimPage } from "../pages/PimPage";

type PomFixtures={  //for this type name pascal casing is suggested.. first char capital
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    userPage:UserPage;
    leftNavigationPage:LeftNavigationPage;
    pimPage:PimPage;
    
}

//To use this baseTest we need to export it.. and its not necessary to provide test name but whatever name we provide we have to use that in test script like import {test} from "@playwright/test";.. right now it is coming from playwright test but now it will be from fixture file.. and test method name also should start with that keyword e.g. test("Temp test",async({page})=>{
export const test=baseTest.extend<PomFixtures>({//we have to provide generic type of the fixture
//inside this we will provide a javaScript object.. key and value pair
    loginPage:async({page},use)=>{
    // const loginPageObj=new LoginPage(page);   
    // use(loginPageObj) ;
//Instead of upper lines we can use
        await use(new LoginPage(page))
},

dashboardPage:async({page},use)=>{
    await use(new DashboardPage(page))
},

userPage:async({page},use)=>{
    use(new UserPage(page));
},

leftNavigationPage:async({page},use)=>{
    use(new LeftNavigationPage(page))
},

pimPage:async({page},use)=>{
    use(new PimPage(page))
}



})


