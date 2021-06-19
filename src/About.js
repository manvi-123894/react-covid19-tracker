import React from "react"
import {Link} from "react-router-dom"
import {FaArrowCircleLeft} from "react-icons/fa"
import "./About.css"

const About = () => {
 return (
   <div className="about">
     <h1>About</h1>
     <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur deserunt quaerat quisquam consequuntur dolorem? Commodi ea aliquid accusantium reprehenderit, porro ipsa a distinctio aspernatur eveniet, nulla aliquam neque vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur deserunt quaerat quisquam consequuntur dolorem? Commodi ea aliquid accusantium reprehenderit, porro ipsa a distinctio aspernatur eveniet, nulla aliquam neque vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur deserunt quaerat quisquam consequuntur dolorem? Commodi ea aliquid accusantium reprehenderit, porro ipsa a distinctio aspernatur eveniet, nulla aliquam neque vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur deserunt quaerat quisquam consequuntur dolorem? Commodi ea aliquid accusantium reprehenderit, porro ipsa a distinctio aspernatur eveniet, nulla aliquam neque vel.
     </p>

    <div className="back-home">
           <Link to="/" className="link">
       Back <FaArrowCircleLeft className="link-icon" />
     </Link>
    </div>
   </div>
 );
}

export default About;