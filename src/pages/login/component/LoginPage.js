import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/LoginPage.css'
import facebook from '../../../assets/images/facebook.svg'
import google from '../../../assets/images/google.svg'
function LoginPage(){

    return(
        <div className="loginMainContainer">
            <div id="circle"></div>
            <div id="circle2"></div>
            <div className= "loginContainer">
                <h2 id="appname">Regnos chat</h2>
                <br/>
                <form>
                    <label><b id="phoneNumber">Phone Number</b></label>
                    <br/>
                    <input type={"number"} placeholder={"Enter phone Number"}/>
                    <br/>
                    <br/>
                    <label><b id="password">Password</b></label>
                    <br/>
                    <input type={"password"} placeholder={"Enter password"}/>
                    <br/>
                    <br/>
                    <button id="submit" type={"submit"}>Login</button>
                </form>
                <p id="alt">Don't have an account yet? <span>
                  <a href= '/register'>Sign Up</a>
                    <br/> or continue with</span></p>
                <div className="altsignin"><img src={facebook} alt="facebook"/>
                    <img className="google" src={google} alt="google"/></div>
            </div>
        </div>

    )
}

export default LoginPage