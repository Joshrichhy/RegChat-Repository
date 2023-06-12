import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/LoginPage.css'
import facebook from '../../../assets/images/facebook.svg'
import google from '../../../assets/images/google.svg'
import {LoginUser} from "../../../apiCalls/users";
function LoginPage(){
    const [user, setUser] = useState({
        userName: "",
        password: ""
    })
    const Login = async ()=>{
        try {
            const response = await LoginUser(user)
            if (response.success){
                alert(response.message)
                window.location.href = "/AcceptChat"
        }else {alert(response.message)}
        }
        catch (error){
            alert(error.response.message)
        }
    }

    return(
        <div className="loginMainContainer">
            <div id="circle"></div>
            <div id="circle2"></div>
            <div className= "loginContainer">
                <h2 id="appname">Regnos chat</h2>
                <br/>
                <div>
                    <label><b id="phoneNumber">UserName</b></label>
                    <br/>
                    <input type="text"
                           value={user.userName}
                           onChange={(e)=> setUser({...user, userName:e.target.value})}
                           placeholder="Enter your Username"/>

                    <br/>
                    <br/>
                    <label><b id="password">Password</b></label>
                    <br/>
                    <input type="password"
                           value={user.password}
                           onChange={(e) => setUser({...user, password: e.target.value})}
                           placeholder={"Enter password"}/>
                    <br/>
                    <br/>
                    <button
                        onClick={Login}
                        type="submit"
                        id="submit">Login</button>
                </div>
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