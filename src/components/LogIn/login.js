import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";

const LogIn = () => {
  return (
    <>
      <Container className="logInContainer" fluid>
        <Row>
          <Col className="colImg" xs={6}  md={6} lg={6}>
            <img
              className="half-img"
              src={require("../../images/loginnnn.jpg")}
              alt="LogIn image"
            />
          </Col>
          <Col className="colLogo"  lg={2}>
            <div className="logoDiv">
              <div className="logo-div">
                  <div className="txtDiv">
                <p className="txt-logo">Plan prehrane<br />by</p>
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
                    <label className="inputLabel1">Korisničko ime:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Korisničko ime"
                    />
                  </div>
                  <div className="mb-3">
                    <label  className="inputLabel2">Lozinka:</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Unesite lozinku"
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      PRIJAVI SE
                    </button>
                  </div>
                  </div>
                  {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p> */}
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
