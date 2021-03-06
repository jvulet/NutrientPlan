import React, { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Modal,
  Button,
} from "react-bootstrap";
import "./style.css";
import Image from "react-bootstrap/Image";
import Jelovnik1 from "../Jelovnik/Jelovnik1/jelovnik1";
import Jelovnik2 from "../Jelovnik/Jelovnik2/jelovnik2";
import Jelovnik3 from "../Jelovnik/Jelovnik3/jelovnik3";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import MainPage from "../MainPage/mainpage";
import Nabavka1 from "../Nabavka/Nabavka1/nabavka1";
import Nabavka2 from "../Nabavka/Nabavka2/nabavka2";
import Nabavka3 from "../Nabavka/Nabavka3/nabavka3";
import List from "../List/list";
import LogIn from "../LogIn/login";
import Mjerenja from "../Mjerenja/mjerenja";

import {
  faListCheck,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Registration from "../LogIn/registration";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import ProtectedRoute from "../Mjerenja/protected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.product);

  const [user, setUser] = useState(null);
  const [changeLoginIcon, setChangeLoginIcon] = useState(faUser);
  const [show, setShow] = useState(false);

  const [userHasToken, setUserHasToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        currentUser.getIdToken().then((idToken) => {
          setUserHasToken(idToken);
        });
        setUser(true);
        setChangeLoginIcon(faPowerOff);
      } else {
        setUser(false);
        setChangeLoginIcon(faUser);
      }
    });
  }, []);

  const handleLogout = () => {
    if (user) {
      signOut(auth);
      localStorage.removeItem("userId");
      setUserHasToken(null);
    } else {
      setUser(false);
    }
  };

  const handleOpenModal = () => {
    if (!user) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleProtect = () => {
    setShow(false);
    navigate("/");
  };

  const handleGoToLogIn = () => {
    setShow(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="NavBar" variant="dark">
        <Container className="navContainer" fluid>
          <Navbar.Brand style={{ margin: "10px", cursor:"pointer"}} onClick={()=>navigate("/")} >
            <Image
              className="Logo"
              src={require("../../images/Logo.png")}
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ marginRight: "15%", paddingTop: "15px" }}
          />
          <Navbar.Collapse className="NavCollapse" id="responsive-navbar-nav">
            <Nav className="Me-auto" style={{ paddingTop: "20px" }}>
              <Nav.Link
                as={Link}
                to="/"
                style={{ paddingRight: "20px" }}
              >
                NASLOVNICA
              </Nav.Link>
              <NavDropdown
                title="JELOVNIK"
                id="collasible-nav-dropdown"
                className="Dropdown"
                style={{ paddingRight: "20px" }}
              >
                <NavDropdown.Item>
                  <Link
                    to="/jelovnik1/ponedjeljak"
                    className="JelovnikName"
                    onClick={handleOpenModal}
                  >
                    1. jelovnik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/jelovnik2"
                    className="JelovnikName"
                    onClick={handleOpenModal}
                  >
                    2. jelovnik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/jelovnik3"
                    className="JelovnikName"
                    onClick={handleOpenModal}
                  >
                    3. jelovnik
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="NABAVKA"
                id="collasible-nav-dropdown"
                className="Dropdown"
                style={{ paddingRight: "20px" }}
              >
                <NavDropdown.Item>
                  <Link
                    to="/nabavka1"
                    className="NabavkaName"
                    onClick={handleOpenModal}
                  >
                    Nabavka 1
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/nabavka2"
                    className="NabavkaName"
                    onClick={handleOpenModal}
                  >
                    Nabavka 2
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/nabavka3"
                    className="NabavkaName"
                    onClick={handleOpenModal}
                  >
                    Nabavka 3
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={"/mjerenja"}
                onClick={handleOpenModal}
                style={{ paddingRight: "20px" }}
              >
                MJERENJA
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar.Collapse id="responsive-navbar-nav" className="icons">
        <Nav style={{ flexWrap: "nowrap" }}>
          <Nav.Link as={Link} to={"/lista"}>
            {user ? (
              <div>
                <div className="bagDiv">
                  <span className="bag-quantity">{cartTotalQuantity}</span>
                </div>
              </div>
            ) : null}

            <FontAwesomeIcon
              className="list-icon"
              icon={faListCheck}
              color={"black"}
              size="xl"
              style={{ marginLeft: "37%" }}
              onClick={handleOpenModal}
            />
          </Nav.Link>
          <Nav.Link as={Link} to={"/login"}>
            <FontAwesomeIcon
              icon={changeLoginIcon}
              color={"black"}
              size="xl"
              onClick={handleLogout}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Modal show={show} onHide={handleOpenModal}>
        <Modal.Body>
          Da biste pristupili ovoj stranici morate se prijaviti!
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="buttonModal"
            variant="primary"
            onClick={handleProtect}
          >
            Povratak na naslovnicu
          </Button>
          <Button
            className="buttonModal"
            variant="secondary"
            onClick={handleGoToLogIn}
          >
            Prijava
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/jelovnik1/*"
            element={
              <ProtectedRoute elementPath={<Jelovnik1 />}>
                <Jelovnik1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jelovnik2"
            element={
              <ProtectedRoute elementPath={<Jelovnik2 />}>
                <Jelovnik2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jelovnik3"
            element={
              <ProtectedRoute elementPath={<Jelovnik3 />}>
                <Jelovnik3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nabavka1"
            element={
              <ProtectedRoute elementPath={<Nabavka1 />}>
                <Nabavka1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nabavka2"
            element={
              <ProtectedRoute elementPath={<Nabavka2 />}>
                <Nabavka2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nabavka3"
            element={
              <ProtectedRoute elementPath={<Nabavka3 />}>
                <Nabavka3 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mjerenja"
            element={
              <ProtectedRoute elementPath={<Mjerenja />}>
                <Mjerenja />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lista"
            element={
              <ProtectedRoute elementPath={<List />}>
                <List />
              </ProtectedRoute>
            }
          />
          {!user && <Route path="/login" element={<LogIn />} />}
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>

    </>
  );
};

export default NavBar;
