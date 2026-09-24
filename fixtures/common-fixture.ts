import {test as basetest} from "../fixtures/pom-fixture"//all the fixtures are in single folder so we can write it as "./pom-fixture" instead of "../fixtures/pom-fixture.ts" it both the fixtures are in different folders then we have to write the path as "../fixtures/pom-fixture.ts"
import CommonUtils from "../utils/CommonUtils"

type commonFixtureType={
    commonUtils:CommonUtils
}

export const test =basetest.extend<commonFixtureType>({
    commonUtils:async({},use)=>{//commonUtils k liye koi fixture ki jrurat nhi h isliye humne empty object pass kiya hai
        use(new CommonUtils())  
        //ek trh se return ki jagah ise use kr rhe h
        //use(new CommonUtils())  //yeh line humne isliye likhi h taki hum CommonUtils class k methods ko test me use kr ske
})