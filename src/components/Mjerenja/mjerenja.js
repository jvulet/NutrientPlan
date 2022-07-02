import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import Template1 from "./template1";
import Template2 from "./template2";
import Template3 from "./template3";
import Template4 from "./template4";

const Mjerenja = () => {
  const title1 = "Početno stanje:";
  const title2 = "Stanje nakon 1. ciklusa:";
  const title3 = "Stanje nakon 2. ciklusa:";
  const title4 = "Stanje nakon 3. ciklusa:";
  const colorN = "rgba(192, 192, 192, 0.8)";
  const auth = getAuth();

  const [show, setShow] = useState(false);

  const [nameAndSurname, setNameAndSurname] = useState("");
  const [years, setYears] = useState("");
  const [high, setHigh] = useState("");
  const [sex, setSex] = useState("");

  //display from db user info
  const [UserName, showName] = useState(true);
  const [UserYears, showYears] = useState(true);
  const [UserHigh, showHigh] = useState(true);
  const [UserSex, showSex] = useState(true);

  //update user info and set display on
  const [displayName, setName] = useState("");
  const [displayYears, setYear] = useState("");
  const [displayHigh, setLen] = useState("");
  const [displaySex, setGenre] = useState("");

  const [enabled, setEnabled] = useState(false);

  const [data, setData] = useState([]);

  const handleClose = () => {
    setShow(false);
    setNameAndSurname("");
    setYears("");
    setSex("");
    setHigh("");
  };

  const handleShow = () => setShow(true);

  const onUpdate = async () => {
    //console.log(uid)
    const docRef = doc(db, "personalInfo", `${auth.currentUser.uid}`);
    const docSnap = await getDoc(docRef);

    /* console.log(docSnap.data()); */

    await setDoc(doc(db, "personalInfo", `${auth.currentUser.uid}`), {
      userName: nameAndSurname,
      userYears: years,
      userSex: sex,
      userHigh: high,
    });
    /* if (docSnap.exists()) {
      updateDoc(doc(db, "personalInfo", `${auth.currentUser.uid}`), {
        userName: nameAndSurname,
        userYears: years,
        userSex: sex,
        userHigh: high,
      });
    } */
    if (nameAndSurname !== "" || years !== "" || sex !== "" || high !== "") {
      setName(nameAndSurname || data.userName);
      showName(false);

      setYear(years || data.userYears);
      showYears(false);

      setGenre(sex || data.userSex);
      showSex(false);

      setLen(high || data.userHigh);
      showHigh(false);
    }
    if (nameAndSurname === "" || years === "" || sex === "" || high === "") {
      alert("Please, fill all fields!");
      setShow(true);
      setEnabled(false);
    } else {
      setShow(false);
      setNameAndSurname("");
      setYears("");
      setSex("");
      setHigh("");
      setEnabled(true);
      window.location.reload(false);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (currentUser) => {
      const docRef = doc(db, "personalInfo", `${auth.currentUser.uid}`);
      const docSnap = await getDoc(docRef);
      if (currentUser) {
        if (docSnap.id === auth.currentUser.uid && docSnap.exists()) {
          let existInfo = docSnap.data();
          console.log(existInfo);
          setData(existInfo);
          console.log(data);
        } else {
          console.log(docSnap.data());
        }
      }
    });
  }, []);

  useEffect(() => {
    if ((nameAndSurname && years && sex && high) === "") {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [nameAndSurname, years, sex, high]);

  console.log(high);

  return (
    <>
      <Container className="MjerCont" fluid>
        <div className="div-titleM">
          <h1 className="MjerenjaTitle">MJERENJA</h1>
        </div>
        <Row className="aboutRow">
          <Col className="FirColumn" xs={4} md={4} lg={4}>
            <Image
              className="info-img"
              src={require("../../images/m1.jpg")}
              alt="category"
              fluid
            />
          </Col>
          <Col
            className="SecColumn"
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            xs={7}
            md={6}
            lg={5}
          >
            <Row className="IconRow">
              <FontAwesomeIcon
                className="faPencil-icon"
                icon={faPencil}
                size="lg" 
                color="white"
              />
              <p className="instructionTxt">
                Unesite osnovne informacije o sebi:
              </p>
            </Row>
            <Row className="InputRow">
              {data.userName && data.userName !== null ? (
                <p className="filltxt">
                  Ime i prezime: <h4 className="fillTxtData"> {data.userName} </h4>
                </p>
              ) : (
                <p>
                  Ime i prezime: <h4 className="fillTxtData"> {displayName} </h4>
                </p>
              )}
              {data.userYears && data.userYears !== null ? (
                <p className="filltxt">
                  Godine: <h4 className="fillTxtData"> {data.userYears} </h4>
                </p>
              ) : (
                <p>
                  Godine: <h4 className="fillTxtData"> {displayYears} </h4>
                </p>
              )}
              {data.userSex && data.userSex !== null ? (
                <p className="filltxt">
                  Spol: <h4 className="fillTxtData"> {data.userSex} </h4>
                </p>
              ) : (
                <p>
                  Spol: <h4 className="fillTxtData"> {displaySex} </h4>
                </p>
              )}
              {data.userHigh && data.userHigh !== null ? (
                <p className="filltxt">
                  Visina: <h4 className="fillTxtData"> {data.userHigh} </h4>
                </p>
              ) : (
                <p>
                  Visina: <h4 className="fillTxtData"> {displayHigh} </h4>
                </p>
              )}
            </Row>
          </Col>
        </Row>
        <Template1 title={title1} color={colorN} />
        <Template2 title={title2} />
        <Template3 title={title3} color={colorN} />
        <Template4 title={title4} /> 
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Osnovne informacije</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Ime i prezime:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ime prezime"
                name="name"
                value={nameAndSurname}
                onChange={(e) => setNameAndSurname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Dob:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Dob"
                name="years"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </Form.Group>
            <div className="selectSex">
              <Form.Label className="formLabelDesc">Spol:</Form.Label>
              <Form.Select
                className="formSelectSex"
                aria-label="Default select example"
                name="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option>Odaberi spol</option>
                <option value="Ž">Ž</option>
                <option value="M">M</option>
              </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Visina(cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Visina"
                name="high"
                value={high}
                onChange={(e) => setHigh(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="btnCloseSave"
          >
            Zatvori
          </Button>
          {enabled ? (
            <Button onClick={onUpdate} className="btnCloseSave">
              Spremi promjene
            </Button>
          ) : (
            <Button
              disabled
              className="btnCloseSave"
              style={{
                cursor: "no-drop",
                backgroundColor: "green",
                borderColor: "green",
              }}
            >
              Spremi promjene
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mjerenja;
