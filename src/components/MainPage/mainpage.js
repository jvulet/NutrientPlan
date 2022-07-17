import React from "react";
import { Link, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./style.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Jelovnik1 from "../Jelovnik/Jelovnik1/jelovnik1";
import Jelovnik2 from "../Jelovnik/Jelovnik2/jelovnik2";
import Jelovnik3 from "../Jelovnik/Jelovnik3/jelovnik3";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="MainCont" fluid>
        <Row className="welcomeRow">
          <Col className="welCol" xs={6} md={6} lg={6}>
            <div className="welDivWrap">
              <p className="welcomeHead">DOBRODOŠLI</p>
              <p className="welcomeMes">
                u svijet zdravih prehrambenih<br></br> navika
              </p>
            </div>
          </Col>
          <Col className="picCol" xs={6} md={6} lg={6}>
            <Image
              className="wel-img1"
              src={require("../../images/welcome.jpg")}
              alt="category"
              fluid
            />
          </Col>
        </Row>
        <Row className="welcome-row">
          <Col className="FImCol" xs={4} md={4} lg={4}>
            <Image
              className="wel-img"
              src={require("../../images/poma.jpg")}
              alt="category"
              style={{ height: "100%" }}
              fluid
            />
            <div className="traka"></div>
          </Col>
          <Col className="SImCol" xs={4} md={4} lg={4}>
            <Image
              className="wel-img"
              src={require("../../images/basil.jpg")}
              alt="category"
              style={{ height: "100%" }}
              fluid
            />
            <div className="trakaTxt">
              <p className="howTxt">
                OBROK: Jednostavno. Ukusno. Bez stresa.<br></br>
                Mi planirano. Ti kuhaš.
              </p>
            </div>
          </Col>
          <Col className="TImCol" xs={4} md={4} lg={4}>
            <Image
              className="wel-img"
              src={require("../../images/batat.jpg")}
              alt="category"
              style={{ height: "100%" }}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Row className="boldLineRow">
            <div className="boldLine"></div>
          </Row>
          <Row className="functionRow">
            <p className="functionTxt">KAKO FUNKCIONIRA</p>
          </Row>
          <Row className="todoRow">
            <Col className="FImCol3" xs={4} md={4} lg={4}>
              <Image
                className="todo-img"
                src={require("../../images/plan.png")}
                alt="category"
                fluid
              />
              <Row>
                <p className="planHeader">PLANIRAJ</p>
              </Row>
              <Row>
                <p className="planTxt">
                  Pripremi listu namirnica koje ti<br></br> nedostaju za
                  trenutni jelovik.
                </p>
              </Row>
            </Col>
            <Col className="SImCol3" xs={4} md={4} lg={4}>
              <Image
                className="todo-img"
                src={require("../../images/prepare.png")}
                alt="category"
                fluid
              />
              <Row>
                <p className="planHeader">PRIPREMI</p>
              </Row>
              <Row>
                <p className="planTxt">
                  Više se ne moraš misliti što ćeš <br></br>naredni tjedan
                  kuhati. Uz pomoć <br></br>jelovnika znaš točno koja ćeš jela
                  <br></br>pripremati tako da ih na vrijeme<br></br> možeš
                  napraviti i time je uspijeh<br></br> zagarantiran.
                </p>
              </Row>
            </Col>
            <Col className="TImCol3" xs={4} md={4} lg={4}>
              <Image
                className="todo-img"
                src={require("../../images/cook.png")}
                alt="category"
                fluid
              />
              <Row>
                <p className="planHeader">KUHAJ</p>
              </Row>
              <Row>
                <p className="planTxt">
                  Prateći naše recepte na brz i<br></br> jednostavan način
                  pripremite<br></br> svoje obroke. Jela nisu <br></br>
                  komplicirana i ne zahtijevaju<br></br> mnogo vremena za
                  pripremu.
                </p>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row className="beginDiv">
          <Row className="beginRow">
            <p className="beginTxt">Započnimo...</p>
          </Row>
          <Row className="beginRow">
            <Col className="FImCol3" xs={4} md={4} lg={4}>
              <Row>
                <Image
                  className="begin-img"
                  src={require("../../images/jaje.jpg")}
                  alt="category"
                  fluid
                />
                <Row className="krugRow">
                  <p className="beginKcal">
                    <p className="beginKcalTxt">
                      1700<br></br>kcal
                    </p>
                  </p>
                </Row>
              </Row>
              <Row>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/jelovnik1")}
                >
                  1. JELOVNIK
                </button>
              </Row>
            </Col>

            <Col className="SImCol3" xs={4} md={4} lg={4}>
              <Row>
                <Image
                  className="begin-img"
                  src={require("../../images/slanutak.jpg")}
                  alt="category"
                  fluid
                />
                <Row className="krugRow">
                  <p className="beginKcal">
                    <p className="beginKcalTxt">
                      1600<br></br>kcal
                    </p>
                  </p>
                </Row>
              </Row>
              <Row>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/jelovnik2")}
                >
                  2. JELOVNIK
                </button>
              </Row>
            </Col>

            <Col className="TImCol3" xs={4} md={4} lg={4}>
              <Row>
                <Image
                  className="begin-img"
                  src={require("../../images/meso2.jpg")}
                  alt="category"
                  fluid
                />
                <Row className="krugRow">
                  <p className="beginKcal">
                    <p className="beginKcalTxt">
                      1500<br></br>kcal
                    </p>
                  </p>
                </Row>
              </Row>
              <Row>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/jelovnik3")}
                >
                  3. JELOVNIK
                </button>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>

      <div>
        <Routes>
          <Route path={"/jelovnik1"} element={<Jelovnik1 />} />
          <Route path={"/jelovnik2"} element={<Jelovnik2 />} />
          <Route path={"/jelovnik3"} element={<Jelovnik3 />} />
        </Routes>
      </div>
    </>
  );
};

export default MainPage;
