import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "./style.css";
import Image from "react-bootstrap/Image";
import Jelovnik1 from "../Jelovnik/Jelovnik1/jelovnik1";
import Jelovnik2 from "../Jelovnik/Jelovnik2/jelovnik2";
import Jelovnik3 from "../Jelovnik/Jelovnik3/jelovnik3";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MainPage from "../MainPage/mainpage";
import Nabavka1 from "../Nabavka/Nabavka1/nabavka1";
import Nabavka2 from "../Nabavka/Nabavka2/nabavka2";
import Nabavka3 from "../Nabavka/Nabavka3/nabavka3";
import List from "../List/list";
import LogIn from "../LogIn/login";
import Mjerenja from "../Mjerenja/mjerenja";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="NavBar" variant="dark">
        <Container className="navContainer" fluid>
          <Navbar.Brand style={{ margin: "10px" }}>
            <Image
              className="Logo"
              src={require("../../images/Logo.png")}
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ marginRight: "15%", paddingTop: '15px' }}
          />
          <Navbar.Collapse className="NavCollapse" id="responsive-navbar-nav">
            <Nav className="Me-auto" style={{paddingTop: '20px'}}>
              <Nav.Link as={Link} to="/mainpage" style={{paddingRight: '20px'}}>
                NASLOVNICA
              </Nav.Link>
              <NavDropdown
                title="JELOVNIK"
                id="collasible-nav-dropdown"
                className="Dropdown"
                style={{paddingRight: '20px'}}
              >
                <NavDropdown.Item>
                  <Link to="/jelovnik1" className="JelovnikName" >
                    1. jelovnik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/jelovnik2" className="JelovnikName">
                    2. jelovnik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/jelovnik3" className="JelovnikName">
                    3. jelovnik
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="NABAVKA"
                id="collasible-nav-dropdown"
                className="Dropdown"
                style={{paddingRight: '20px'}}
              >
                <NavDropdown.Item>
                  <Link to="/nabavka1" className="NabavkaName" >
                    Nabavka 1
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/nabavka2" className="NabavkaName">
                    Nabavka 2
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/nabavka3" className="NabavkaName">
                    Nabavka 3
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/mjerenja"} style={{paddingRight: '20px'}}>
                MJERENJA
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar.Collapse id="responsive-navbar-nav" className="icons">
        <Nav style={{ flexWrap: "nowrap" }}>
          <Nav.Link as={Link} to={"/lista"}>
            <FontAwesomeIcon className="list-icon" icon={faListCheck} color={"black"} size="xl" style={{ marginLeft: "37%" }} />
          </Nav.Link>
          <Nav.Link as={Link} to={"/login"}>
            <FontAwesomeIcon icon={faPowerOff} color={"black"} size="xl" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div>
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/jelovnik1/*" element={<Jelovnik1 />} />
          <Route path="/jelovnik2" element={<Jelovnik2 />} />
          <Route path="/jelovnik3" element={<Jelovnik3 />} />
          <Route path="/nabavka1" element={<Nabavka1 />} />
          <Route path="/nabavka2" element={<Nabavka2 />} />
          <Route path="/nabavka3" element={<Nabavka3 />} />
          <Route path="/mjerenja" element={<Mjerenja />} />
          <Route path="/lista" element={<List />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </>
  );
};

export default NavBar;
