import React from "react";
import breadcrumbs from '../../../assets/images/breadcrumbs.svg'
import search from '../../../assets/images/searchicon.svg'
import '../styles/acceptChat.css'
import profilePicture from '../../../assets/images/Rock.jfif'

function AcceptChat(){
    return(
        <div className="mainCont">
            <div className="chatMainCont">
            <div id="contacts">
                <div className="topNav">
                    <h2>Contacts</h2>
                    <div className="icons">
                        <img src={search} alt={"search"}/>
                        <img src={breadcrumbs} alt={"dropdown"}/>
                    </div>
                     </div>

                <div className="allContacts">
                    <div className= "eachContacts">
                        <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                        <p className="profileName">kuse001</p>
                    </div>
                    <div className= "eachContacts">
                        <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                        <p className="profileName">kuse001</p>
                    </div>
                    <div className= "eachContacts">
                        <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                        <p className="profileName">kuse001</p>
                    </div>
                    <div className= "eachContacts">
                        <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                        <p className="profileName">kuse001</p>
                    </div>
                </div>

            </div>

            <div className="chatArea">
                <div className= "selectedContact">
                    <img className="profilePicture" src={profilePicture} alt="profilePicture"/>
                    <p className="profileName">kuse001</p>
                </div>

                <div className="chatRequest">Hi, I want to be your friend</div>
                <div className= "arb">
                    <button className= "accept">Accept</button>
                    <button className= "reject">Reject</button>
                </div>



            </div>
            </div>
        </div>
    )
}

export default AcceptChat