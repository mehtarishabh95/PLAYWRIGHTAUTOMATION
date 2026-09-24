import cryptoJS from "crypto-js";


export default class CommonUtils{
    private secretKey:string;

    //In this class for typescript we got error in process so we installed some package.. suggested by vs code and added a line in tsconfig.json  "include": ["global.d.ts", "tests", "pages", "utils", "playwright.config.ts"]

    /**
     * Intializing secret key.
     */
    constructor(){
        // this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY:"" //Yha agar value nhi mili to empty string return krega..
        //Better h mtd bna do jo exception ya error throw kre 
        if(process.env.SECRET_KEY){//agar secret key mili to
            this.secretKey=process.env.SECRET_KEY;
        }else{
            throw new Error("== Please provide secret key to start execution ==");
        }
    }

    /**
     * This method provides encripted data in string
     * @param data 
     * @returns 
     */
    public encriptData(data:string){
        return cryptoJS.AES.encrypt(data,this.secretKey).toString();//converting encripted data into string.
    }

    /**
     * Provides decrypted data in string format. 
     * @param encData 
     * @returns 
     */
    public decryptData(encData:string){
        return cryptoJS.AES.decrypt(encData,this.secretKey).toString(cryptoJS.enc.Utf8)
    }
    
}