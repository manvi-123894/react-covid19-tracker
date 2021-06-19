import React from "react"
import Loader from "react-loader-spinner";
import "./Loading.css"

const Loading = () => {
 return (
  <div className="loading">
    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
  </div>
 );
}

export default Loading;