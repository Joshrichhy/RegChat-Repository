import React from "react";
import "../styles/Register.css"
import facebook from "../../../assets/images/facebook.svg";
import google from "../../../assets/images/google.svg";
function RegisterPage(){
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
                    <input type={"number"} placeholder={"Enter phone number"}/>
                    <br/>
                    <br/>

                    <label><b id="username">Username</b></label>
                    <br/>
                    <br/>
                    <input placeholder={"Enter user name"}/>
                    <br/>
                    <br/>

                    <label><b id="password">Password</b></label>
                    <br/>
                    <br/>
                    <input type={"password"} placeholder={"Enter password"}/>
                    <br/>
                    <br/>

                    <label>< b id="cpassword">confirm Password</b></label>
                    <br/>
                    <br/>
                    <input type={"password"} placeholder={"confirm password"}/>
                    <br/>
                    <br/>


                    <button id="submit" type={"submit"}>Sign up</button>
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