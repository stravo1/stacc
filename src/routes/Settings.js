import React, { useState } from "react";
import { Toggle } from "rsuite";
import { gapi } from "gapi-script";
import { useSelector } from "react-redux";
import { MdOutlineConstruction } from "react-icons/md";

function Settings(props) {
  const [autoTrash, setAutoTrash] = useState(
    localStorage.getItem("autoTrash") == "true" ? true : false
  );
  function signIn() {
    gapi.auth2.getAuthInstance().signIn();
  }
  function signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }
  var signInState = useSelector((state) => state["general"].signedIn);
  return (
    <div style={{ margin: "1.5rem" }}>
      <div style={{ fontWeight: "500" }}>
        <div id="account_header">
          <h3>sync</h3>
          
          <Toggle
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            checked={signInState}
            onChange={() => {
              if(signInState) signOut()
              else signIn()
            }}
          />  
          
        </div>
        signing in ensures you don't lose data when you switch or reset
        browsers. it also syncs across devices :)
        <br />
        <br />
        <br />
        <div id="autotrash_header">
          <h3>autotrash</h3>
          <Toggle
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            checked={autoTrash}
            onChange={() => {
              setAutoTrash(!autoTrash);
              localStorage.setItem("autoTrash", !autoTrash);
            }}
          />
        </div>
        autotrash cleans all your tasks at the end of the day/week/month to
        start fresh!!
        <br />
        <br />
        <br />
        <h3>other settings:</h3>
        <MdOutlineConstruction /> coming soon...
      </div>
    </div>
  );
}

export default Settings;
