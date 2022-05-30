import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import LogIn from "./login";
import "./style.css";

const Registration = () => {
  return (
    <>
      <Container className="logInContainer" fluid>
        <Row>
          <Col className="colImg2" xs={6} md={6} lg={6}>
            <img
              className="half-img2"
              src={require("../../images/loginR23.jpg")}
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
                  <div className="inputDiv2">
                    <h3 className="LogInHeading">Registracija</h3>
                    <div className="mb-3">
                      <label className="inputLabel3">Ime:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Unesite ime"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel4">Prezime:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Unesite prezime"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel1">Korisničko ime:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Korisničko ime"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel5">E-mail:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail adresu"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel2">Lozinka:</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Unesite lozinku"
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        REGISTRIRAJ SE
                      </button>
                    </div>

                    <p className="alreadyHave">
                      Već imate korisnički račun <br></br>
                      <Link as={Link} to={"/login"} className="blueReg2">
                        Prijavi se!
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

export default Registration;
