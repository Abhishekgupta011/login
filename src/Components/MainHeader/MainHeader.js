import React from "react";
import './MainHeader.css'
import Navigation from "./Navigation";
const MainHeader = (props) =>{
    return(
       <header>
        <h1>Login Page</h1>
        <Navigation  onLogout={props.onLogout}/>
       </header>
    )
}

export default MainHeader;