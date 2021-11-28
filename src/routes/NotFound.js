import React from "react";
import logo from "../assets/svg/404.svg";

function NotFound() {
  return (
    <div style={{display:"grid", width:"90vw"}}>
      <img src={logo} alt="404 error logo" style={{ height: "33vh" }}></img>
      <br />
      <h2 style={{textAlign:"center"}}>Not found!</h2>
    </div>
  );
}

export default NotFound;
