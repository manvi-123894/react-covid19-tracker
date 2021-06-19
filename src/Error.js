import React from "react"
import {Link} from "react-router-dom"
import {FaArrowCircleLeft} from "react-icons/fa"
import "./Error.css"
import { BiSad } from "react-icons/bi"

const Error = () => {
 return (
  <div className="error">
   <h1>
     <BiSad className="sad-icon" /> <br/>
     Oops Page Not Found !!
   </h1>
    <div className="back-home">
           <Link to="/" className="link">
       Back <FaArrowCircleLeft className="link-icon" />
     </Link>
    </div>
  </div>
 )
}

export default Error;