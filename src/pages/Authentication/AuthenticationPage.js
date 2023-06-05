import React from "react";
function authenticationPage(){
    return(
        <div>
            <div className= "registrationContainer">
                <p>Regnos chat</p>
                <form>
                    <label><b>Phone Number</b></label>
                    <input type={"number"} placeholder={"Enter first name"}/>

                    <label><b>Username</b></label>
                    <input placeholder={"Enter user name"}/>

                    <label><b>Password</b></label>
                    <input type={"password"} placeholder={"Enter password"}/>

                    <label><b>confirm Password</b></label>
                    <input type={"password"} placeholder={"confirm password"}/>


                    <button type={"submit"}>Sign up</button>
                </form>
                <p>or continue with</p>
            </div>
        </div>

    )
}

export default authenticationPage