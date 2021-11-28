import React from "react";
import { Button } from "rsuite";
import { gapi } from "gapi-script";
import { useSelector } from "react-redux";
import {MdOutlineConstruction} from "react-icons/md"

function Settings(props) {
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
        <h3>account settings:</h3>
        <br />
        signing in ensures you don't lose data when you switch or reset browsers. it also syncs accross devices :)
        <br />
        <br />
        {!signInState ? (
          <Button appearance="primary" color="green" onClick={() => signIn()}>
            <span style={{ fontWeight: "bolder" }}>sign in</span>
          </Button>
        ) : (
          <Button appearance="primary" color="red" onClick={() => signOut()}>
            <span style={{ fontWeight: "bolder" }}>sign out</span>
          </Button>
        )}
        <br />
        <br />
        <br />
        <br />
        <h3>other settings:</h3>
        <br />
        <MdOutlineConstruction /> coming soon...
      </div>
    </div>
  );
}

export default Settings;
