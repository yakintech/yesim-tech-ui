import { tokenStorageHelper } from "../../utils/auth/TokenHelper";
import { axiosInstance } from "../axiosInstance";
import { LoginModel } from "./LoginModel";

export class LoginService {

    //login method
    static async login(loginModel: LoginModel): Promise<any> {

       try {
        let result = await axiosInstance.post("/token", loginModel)
        if (result.status === 200) {


            //get email in JWT token 
            let token = result.data.token
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            console.log("EMAil", JSON.parse(jsonPayload).email)



            tokenStorageHelper.setStoreWithEncryption(result.data.token)
            return { email: JSON.parse(jsonPayload).email, roles: result.data.roles }
        }
        else{
            throw new Error("Login failed")
        }
       } catch (error) {
            throw error
       }
    }
}