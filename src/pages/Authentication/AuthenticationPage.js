import React from "react";
import '../Authentication/styles/authentication.css'
function AuthenticationPage(){
    return(
        <div className="authenticationMainContainer">
            <div id="circle"></div>
            <div id="circle2"></div>
            <div className= "authenticationContainer">
                <h2>AUTHENTICATION</h2>
                <p>A verification code has been sent to ******0197</p>
                <p>Enter Verification Code</p>
                <input placeholder={"Enter code"}/>
                <br/>
                <br/>
                <button id="submit" type={"submit"}>verify</button>
            </div>
        </div>

    )
}

export default AuthenticationPage