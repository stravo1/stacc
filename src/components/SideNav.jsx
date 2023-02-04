import React, { useEffect, useState } from "react";
import { Drawer, Nav } from "rsuite";
import { Link, useLocation } from "react-router-dom";
import {FiTriangle} from "react-icons/fi"
import {BiCircle, BiSquareRounded} from "react-icons/bi"
import { RiInformationLine, RiSettingsLine } from "react-icons/ri";

function SideNav(props) {

  const [active, setActive] = useState("daily");

  var location = useLocation()

  useEffect(() => {
    //console.log(location.pathname)
    if(location.pathname === "/" || location.pathname === "/stacc"){
      setActive("daily")
    }
    else{
      setActive(location.pathname.slice(1))
    }
  })
  function setOpen(bool) {
    props.setOpen(bool);
  }
  return (
    <Drawer
      size={"xs"}
      placement={"left"}
      open={props.open}
      onClose={() => setOpen(false)}
      dialogClassName="sideNav"
    >
      <Drawer.Body style={{ padding: "0.5rem" }}>
        <div className="drawerBodyCustom">
          <Nav
            reversed
            activeKey={active}
            onSelect={(eventkey) => {setActive(eventkey); setOpen(false)}}
            style={{ color: "red" }}
          >
            <div className="sideNavList"> LISTS </div>
            <div className="list">
              <Nav.Item eventKey="daily" as={Link} to="/daily">
                <FiTriangle /><div className="linkNavItem">Daily</div>
              </Nav.Item>
              <Nav.Item eventKey="weekly" as={Link} to="/weekly">
                <BiCircle /><div className="linkNavItem">Weekly</div>
              </Nav.Item>
              <Nav.Item eventKey="monthly" as={Link} to="/monthly">
                <BiSquareRounded /><div className="linkNavItem">Monthly</div>
              </Nav.Item>
            </div>
            <br />
            <div className="sideNavOthers">OTHERS </div>
            <div className="others">
              <Nav.Item eventKey="settings" as={Link} to="/settings">
              <RiSettingsLine /><div className="linkNavItem">Settings</div>
              </Nav.Item>
              <Nav.Item eventKey="about" as={Link} to="/about">
              <RiInformationLine /><div className="linkNavItem">About</div>
              </Nav.Item>
            </div>
          </Nav>
        </div>
      </Drawer.Body>
    </Drawer>
  );
}

export default SideNav;
