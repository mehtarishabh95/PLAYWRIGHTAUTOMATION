import {test as basetest} from "../fixtures/pom-fixture"//all the fixtures are in single folder so we can write it as "./pom-fixture" instead of "../fixtures/pom-fixture.ts" it both the fixtures are in different folders then we have to write the path as "../fixtures/pom-fixture.ts"
import CommonUtils from "../utils/CommonUtils"

type commonFixtureType={
    commonUtils:CommonUtils
}

export const test =basetest.extend<commonFixtureType>({
    commonUtils:async({},use)=>{
        use(new CommonUtils())  
    }   
})