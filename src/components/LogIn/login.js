import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setMessage(false);
    } catch (err) {
      setMessage(true);
      //console.error(err);
      //alert("wrong");
    }
  };

  return (
    <>
      <Container className="logInContainer" fluid>
        <Row>
          <Col className="colImg" xs={6} md={6} lg={6}>
            <img
              className="half-img"
              src={require("../../images/login.jpg")}
              alt="LogIn image"
            />
          </Col>
          <Col className="colLogo" lg={2}>
            <div className="logoDiv">
              <div className="logo-div">
                <div className="txtDiv">
                  <p className="txt-logo">
                    Plan prehrane
                    <br />
                    by
                  </p>
                </div>
                <div>
                  <Image
                    className="logo-login"
                    src={require("../../images/Logo.png")}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col className="colForm" xs={4} md={4} lg={3}>
            <div className="loginOut">
              <div className="loginIn">
                <form className="logInForm">
                  <div className="inputDiv">
                    <h3 className="LogInHeading">Prijava</h3>
                    <div className="mb-3">
                      <label className="inputLabel1">E-mail adresa:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail adresa"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel2">Lozinka:</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Unesite lozinku"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {message ? (
                      <p className="errorMessage">
                        Greška <br></br>(neuspješna autentikacija)!
                      </p>
                    ) : (
                      <p></p>
                    )}
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        PRIJAVI SE
                      </button>
                    </div>

                    <p className="forgot-password">
                      Nisi{" "}
                      <Link as={Link} to={"/registration"} className="blueReg">
                        registriran?
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogIn;
