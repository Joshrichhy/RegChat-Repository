import {axiosInstance} from "./index";

import axios from "axios";
export const RegisterUser = async (user) => {
    try {
      const response =  await axios.post("api/users/register", user);
        return response.data
    }
    catch (error) {
        return error.response.data
    }
}

export const LoginUser = async (user) => {
    try {
        const response = await axios.post("api/users/login", user);
        return response.data
    }
    catch (error){
        return error.response.data
    }
}