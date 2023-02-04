import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  Grid,
  Row,
  Col,
  Modal,
  Button,
} from "rsuite";
import SideNav from "./components/SideNav";
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
import { BiLoaderAlt } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { uploadFiles, getNewToken } from "./assets/js/requestHandler";


function App() {
  var dispatch = useDispatch();
  var loaded = useSelector((state) => state["general"].loaded);
  var signInState = useSelector((state) => state["general"].signedIn);
  var accessToken = useSelector((state) => state["general"].accessToken);
  var fileIds = useSelector((state) => state["general"].id);
  var syncing = useSelector((state) => state["general"].syncing);

  useEffect(() => {
    (async () => {
      /* check in refresh-token is available */
      if (localStorage.getItem("refresh_token")) {
        /* set log-in status to be true */
        dispatch(changeSignInState(true));

        /* set new access token */
        var token = await getNewToken();
        dispatch(setAccessToken(token));

        /* check install */
        var x = await checkInstall(token);

        /* setIds and reset staccs */
        dispatch(setIds(x));
        dispatch(resetStacc());
      }
    })();
  }, [loaded]);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClose() {
    setModalOpen(false);
  }
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
                {syncing ? (
                  <BiLoaderAlt
                    className="fade-in icon-spin"
                    onClick={() => setModalOpen(true)}
                    style={
                      signInState && fileIds["daily"]
                        ? { display: "unset" }
                        : { display: "none" }
                    }
                    fontSize="1.5rem"
                  />
                ) : (
                  <BsCheck2Circle
                    className="fade-in"
                    onClick={() => setModalOpen(true)}
                    style={
                      signInState && fileIds["daily"]
                        ? { display: "unset" }
                        : { display: "none" }
                    }
                    fontSize="1.5rem"
                  />
                )}
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
      <Modal size="sm" open={modalOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Sync</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ opacity: "0.5" }}>
            {!syncing ? "Tasks have been synced!" : "Syncing in process..."}
          </span>
          <br></br>
          <span style={{ fontSize: "small" }}>Sync all tasks manually?</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={syncing}
            onClick={() => {
              handleSync();
              handleClose();
            }}
            appearance="primary"
          >
            Sync
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
