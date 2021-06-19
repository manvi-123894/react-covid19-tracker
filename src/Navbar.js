import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import "./Navbar.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import icon from "./icon.jpeg"
const Navbar = () => {

 const [showNav,setShowNav] = useState(false);

 return (
   <React.Fragment>
      <Link to="/" style={{textDecoration : "none"}}>
        <h1 className="main-icon">
            <img className="nav-icon" src={icon} alt="" /> 
            <span>Corona</span>Tracker
          </h1>
      </Link>
        

          <FaBars className="fa-bars" onClick={() => setShowNav(!showNav)}/>

          <div className={`nav-links ${showNav ? "show-navbar" : "" }`}>
            <ul>
               <Link className="li" to="/">
                 Home 
               </Link>

              
               <Link className="li" to="/news">
                 News
               </Link>

               <Link className="li" to="/about">
                About
               </Link>
             </ul> 
          </div> 
   </React.Fragment> 
 );
}

export default Navbar;