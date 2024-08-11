import axios from "axios";
import { BASEURL } from "./Utils";

 class AuthService {
    
    SignIn(formData){
        console.log(formData)
        const API = BASEURL + "/user/login";
        return axios.post(API, formData);
    }
    SignUp(formData){
        console.log(formData)
        const API = BASEURL + "/user/signup";
        return axios.post(API, formData, {
            headers: {
                "Content-Type": "application/json",
            }});
    }
    ForgotPassword(formData){
        const API = BASEURL + "/user/forgot_password";
        return axios.put(API, formData, {
            headers: {
                "Content-Type": "application/json",
            }});
    }

    VerifyUser(userProfileId){
        const API = BASEURL + "/user/verify/"+userProfileId;
        return axios.get(API, {
            headers: {
                "Content-Type": "application/json",
            }});
        }
}

export default new AuthService();