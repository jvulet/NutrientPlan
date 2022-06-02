import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LogIn from "./login";
import "./style.css";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const navigate=useNavigate();

  const handleSubmitReg = async (e) => {
    e.preventDefault();
    try{
      const res = await createUserWithEmailAndPassword(auth,email, password)
      const user = res.user
       await addDoc(collection(db,"users"), {
          id: user.uid,
          name,
          surname,
          email,
          password,
        })
        
          navigate("/mainpage")
          setName(name)
          setSurname(surname)
          setEmail(email)
          setPassword(password)
       
      }
      catch(error){
        console.log(error)
      }
  };
  return (
    <>
      <Container className="logInContainer" fluid>
        <Row>
          <Col className="colImg2" xs={6} md={6} lg={6}>
            <img
              className="half-img2"
              src={require("../../images/loginR.jpg")}
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="inputLabel4">Prezime:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Unesite prezime"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
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
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitReg}
                      >
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
