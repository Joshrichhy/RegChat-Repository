import React, {useState} from "react";
import "../styles/Register.css"
import facebook from "../../../assets/images/facebook.svg";
import google from "../../../assets/images/google.svg";
import {RegisterUser} from "../../../apiCalls/users";
function RegisterPage(){
    const [users, setUsers] = useState({
        userName: "",
        phoneNumber: "",
        password: ""
    })

    const register = async () => {
        try {
            const response = await RegisterUser(users);
            if (response.success){
                alert(response.message)
                console.log(users)
            }else alert(response.message)
        }
        catch (error){
            alert(error.message)
        }
    }

    return(
        <div className= "registrationMainContainer">
            <div id="circle"></div>
            <div id="circle2"></div>
            <div className= "registrationContainer">
                <h2 id="appnmae">Regnos chat</h2>
                <br/>
                <br/>
                <form>
                    <label><b id="phonenumber">Phone Number</b></label>
                    <br/>
                    <br/>
                    <input type="text"
                           value={users.phoneNumber}
                           onChange={(e) => setUsers({...users, phoneNumber: e.target.value})}
                           placeholder={"Enter phone number"}/>
                    <br/>
                    <br/>
                    <label><b id="username">Username</b></label>
                    <br/>
                    <br/>
                    <input
                        type="text"
                        value={users.userName}
                        onChange={(e) => setUsers({...users, userName: e.target.value})}
                        placeholder={"Enter user name"}/>
                    <br/>
                    <br/>

                    <label><b id="password">Password</b></label>
                    <br/>
                    <br/>
                    <input type="password"
                           value={users.password}
                           onChange={(e) => setUsers({...users, password: e.target.value})}
                           placeholder={"Enter password"}/>
                    <br/>
                    <br/>

                    <button id="submit"
                            onClick={register}
                            type={"submit"}>Sign up</button>
                    <br/>
                    <br/>
                </form>
                <p>or continue with</p>
                <div className="altsignin"><img src={facebook} alt="facebook"/>
                    <img className="google" src={google} alt="google"/></div>
            </div>
        </div>

    )
}

export default RegisterPage