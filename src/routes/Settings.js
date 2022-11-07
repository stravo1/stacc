import React, { useState } from "react";
import { Toggle } from "rsuite";
import { gapi } from "gapi-script";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineConstruction } from "react-icons/md";
import {
  changeLoaded,
  changeSignInState,
  setAccessToken,
} from "../store/slices/generalSlice";

function Settings(props) {
  var dispatch = useDispatch();
  const [autoTrash, setAutoTrash] = useState(
    localStorage.getItem("autoTrash") == "true" ? true : false
  );
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      var code = codeResponse.code;

      const tokens = await axios.post("https://red-formula-303406.ue.r.appspot.com/auth/stacc", {
        // http://localhost:3001/auth/google backend that will exchange the code
        code,
      });

      /* store tokens */
      dispatch(setAccessToken(tokens.data.access_token));
      localStorage.setItem("access_token", tokens.data.access_token);
      localStorage.setItem("refresh_token", tokens.data.refresh_token);

      /* update sign in status */
      dispatch(changeSignInState(true));
      dispatch(changeLoaded(1));

      console.log(tokens);
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/drive.appdata",
  });
  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    dispatch(changeSignInState(false));
    dispatch(changeLoaded(0));
  };

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
              if (signInState) logOut();
              else login();
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
