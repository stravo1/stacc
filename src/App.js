import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Header, Content, Footer, Grid, Row, Col } from "rsuite";
import SideNav from "./components/SideNav";
import { gapi } from "gapi-script";
import checkInstall from "./assets/js/installHandler";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoaded,
  changeSignInState,
  resetStacc,
  setAccessToken,
  setIds,
} from "./store/slices/generalSlice";
import { RiAppsLine } from "react-icons/ri";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineSync } from "react-icons/ai";
import { uploadFiles } from "./assets/js/requestHandler";

var CLIENT_ID =
  "25256502274-6b15ibif1usnm9rtbi4blennjrvrl5lm.apps.googleusercontent.com";
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
// accesses only the appData folder
var SCOPES = "https://www.googleapis.com/auth/drive.appdata";

function App() {
  var dispatch = useDispatch();
  var loaded = useSelector((state) => state["general"].loaded);
  var signInState = useSelector((state) => state["general"].signedIn);
  var accessToken = useSelector((state) => state["general"].accessToken);
  var fileIds = useSelector((state) => state["general"].id);

  useEffect(() => {
    //equivalent to componentDidMount
    if (!loaded) {
      var callback = console.log;
      gapi.load("client:auth2", function () {
        ////console.log(108)
        gapi.client
          .init({
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(
            async function () {
              // Listen for sign-in state changes.
              gapi.auth2.getAuthInstance().isSignedIn.listen(async (state) => {
                console.log(state);
                dispatch(changeSignInState(state));
                if (state) {
                  dispatch(
                    setAccessToken(
                      gapi.auth2
                        .getAuthInstance()
                        .currentUser.get()
                        .getAuthResponse().access_token
                    )
                  );
                  var x = await checkInstall(
                    gapi.auth2
                      .getAuthInstance()
                      .currentUser.get()
                      .getAuthResponse().access_token
                  );
                  dispatch(setIds(x));
                  dispatch(resetStacc()); //resets the stacc_loaded status for refreshing the lists from drive after sign-in
                }
              });
              // Handle the initial sign-in state.
              dispatch(
                changeSignInState(gapi.auth2.getAuthInstance().isSignedIn.get())
              );
              console.log(signInState);
              if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                dispatch(
                  setAccessToken(
                    gapi.auth2
                      .getAuthInstance()
                      .currentUser.get()
                      .getAuthResponse().access_token
                  )
                );
                var x = await checkInstall(
                  gapi.auth2
                    .getAuthInstance()
                    .currentUser.get()
                    .getAuthResponse().access_token
                );
                dispatch(setIds(x));
              }
              //console.log(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
            },
            function (error) {
              window.alert(JSON.stringify(error, null, 2));
            }
          );
      });
      dispatch(changeLoaded(1));
    }
  });
  const [open, setOpen] = useState(false);
  async function handleSync() {
    alert(
      "Please don't close the app while syncing. You'll be informed when the process is complete"
    );
    await uploadFiles(
      accessToken,
      "daily",
      localStorage.getItem("daily"),
      fileIds["daily"]
    );
    await uploadFiles(
      accessToken,
      "weekly",
      localStorage.getItem("weekly"),
      fileIds["weekly"]
    );
    await uploadFiles(
      accessToken,
      "monthly",
      localStorage.getItem("monthly"),
      fileIds["monthly"]
    );

    alert("Sync complete!");
  }
  return (
    <div className="App">
      <Container>
        <Header
          style={{
            width: "100vw",
            position: "fixed",
            top: 0,
            zIndex: 999,
            background: "rgba(14, 18, 25)",
            paddingBottom: "1.5rem",
          }}
        >
          <Grid fluid>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingLeft: "1rem",
                }}
                onClick={() => setOpen(true)}
              >
                <RiAppsLine fontSize="1.5rem" />
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h3 style={{ fontWeight: "bolder" }}>stacc</h3>
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "1rem",
                }}
              >
                <FiUploadCloud
                  className="fade-in"
                  onClick={() => handleSync()}
                  style={
                    signInState && fileIds["daily"]
                      ? { display: "unset" }
                      : { display: "none" }
                  }
                  fontSize="1.5rem"
                />
              </Col>
            </Row>
          </Grid>
        </Header>
        <Content
          style={{
            position: "relative",
            textAlign: "",
            top: "6.5rem",
            height: "80vh",
          }}
        >
          <Outlet />
        </Content>
        <SideNav open={open} setOpen={(bool) => setOpen(bool)} />
      </Container>
    </div>
  );
}

export default App;
