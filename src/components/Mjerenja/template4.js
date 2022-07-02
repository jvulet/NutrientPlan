import { faCamera, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { auth, db } from "../firebase";
import TemplateDate4 from "./templateDate4";
import { useAuth } from "../firebase";
import TemplateImage4 from "./templateImg4";

const Template4 = (props) => {
  const [show, setShow] = useState(false);

  const [weight, setWeight] = useState("");
  const [weightIndex, setWeightIndex] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [arm, setArm] = useState("");
  const [leg, setLeg] = useState("");
  const [visFat, setVisFat] = useState("");
  const [muscles, setMuscles] = useState("");
  const [fat, setFat] = useState("");

  const [displayWeight, setTez] = useState("");
  const [displayWeightIndex, setIndTez] = useState("");
  const [displayWaist, setStruk] = useState("");
  const [displayHips, setKuk] = useState("");
  const [displayArm, setRuka] = useState("");
  const [displayLeg, setNoga] = useState("");
  const [displayVisFat, setVisMast] = useState("");
  const [displayMuscles, setMisici] = useState("");
  const [displayFat, setMast] = useState("");

  //display from db user info
  const [UserWeight, showWeight] = useState(true);
  const [UserWeightIndex, showWeightIndex] = useState(true);
  const [UserWaist, showWaist] = useState(true);
  const [UserHips, showHips] = useState(true);
  const [UserArm, showArm] = useState(true);
  const [UserLeg, showLeg] = useState(true);
  const [UserVisFat, showVisFat] = useState(true);
  const [UserMuscles, showMuscles] = useState(true);
  const [UserFat, showFat] = useState(true);

  const [enabled, setEnabled] = useState(false);

  const [data, setData] = useState([]);

  const handleShowFill = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setWeight("");
    setWeightIndex("");
    setWaist("");
    setHips("");
    setArm("");
    setLeg("");
    setVisFat("");
    setMuscles("");
    setFat("");
  };

  const onUpdate = async () => {
    //console.log(uid)
    const docRef = doc(db, "AfterThird", `${auth.currentUser.uid}`);
    const docSnap = await getDoc(docRef);

    /* console.log(docSnap.data()); */

    await setDoc(doc(db, "AfterThird", `${auth.currentUser.uid}`), {
      userWeight: weight,
      userWeightIndex: weightIndex,
      userWaist: waist,
      userHips: hips,
      userArm: arm,
      userLeg: leg,
      userVisFat: visFat,
      userMuscles: muscles,
      userFat: fat,
    });

    if (
      weight !== "" ||
      weightIndex !== "" ||
      waist !== "" ||
      hips !== "" ||
      arm !== "" ||
      leg !== "" ||
      visFat !== "" ||
      muscles !== "" ||
      fat !== ""
    ) {
      setTez(weight || data.userWeight);
      showWeight(false);

      setIndTez(weightIndex || data.userWeightIndex);
      showWeightIndex(false);

      setStruk(waist || data.userWaist);
      showWaist(false);

      setKuk(hips || data.userHips);
      showHips(false);

      setRuka(arm || data.userArm);
      showArm(false);

      setNoga(leg || data.userLeg);
      showLeg(false);

      setVisMast(visFat || data.userVisFat);
      showVisFat(false);

      setMisici(muscles || data.userMuscles);
      showMuscles(false);

      setMast(fat || data.userFat);
      showFat(false);
    }
    if (
      weight === "" ||
      weightIndex === "" ||
      waist === "" ||
      hips === "" ||
      arm === "" ||
      leg === "" ||
      visFat === "" ||
      muscles === "" ||
      fat === ""
    ) {
      alert("Please, fill all fields!");
      setShow(true);
      setEnabled(false);
    } else {
      setShow(false);
      setEnabled(true);
      setWeight("");
      setWeightIndex("");
      setWaist("");
      setHips("");
      setArm("");
      setLeg("");
      setVisFat("");
      setMuscles("");
      setFat("");
      window.location.reload(false);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (currentUser) => {
      const docRef = doc(db, "AfterThird", `${auth.currentUser.uid}`);
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
    if (
      (weight &&
        weightIndex &&
        waist &&
        hips &&
        arm &&
        leg &&
        visFat &&
        muscles &&
        fat) === ""
    ) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [weight, weightIndex, waist, hips, arm, leg, visFat, muscles, fat]);

  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  

  return (
    <>
      <Container>
        <Row className="fillRow" style={{ backgroundColor: props.color }}>
          <Col
            className="TempFirColumn"
            xs={5}
            md={5}
            lg={5}
            onClick={handleShowFill}
            style={{ cursor: "pointer" }}
          >
            <Row className="IconRow">
              <FontAwesomeIcon
                className="faPencil-icon"
                icon={faPencil}
                size="lg"
                color="white"
              />
              <p className="instructionTxt">{props.title}</p>
            </Row>
            <Row className="InputRow">
              {data.userWeight && data.userWeight !== null ? (
                <p className="filltxt">
                  Tjelesna masa: <h4 className="fillTxtData"> {data.userWeight} </h4>
                </p>
              ) : (
                <p>
                  Tjelesna masa: <h4 className="fillTxtData"> {displayWeight} </h4>
                </p>
              )}
              {data.userWeightIndex && data.userWeightIndex !== null ? (
                <p className="filltxt">
                  Indeks tjelesne mase: <h4 className="fillTxtData"> {data.userWeightIndex} </h4>
                </p>
              ) : (
                <p>
                  Indeks tjelesne mase: <h4 className="fillTxtData"> {displayWeightIndex} </h4>
                </p>
              )}
              <p> </p>
              {data.userWaist && data.userWaist !== null ? (
                <p className="filltxt">
                  Struk(cm): <h4 className="fillTxtData"> {data.userWaist} </h4>
                </p>
              ) : (
                <p>
                  Struk(cm): <h4 className="fillTxtData"> {displayWaist} </h4>
                </p>
              )}
              {data.userHips && data.userHips !== null ? (
                <p className="filltxt">
                  Kukovi(cm): <h4 className="fillTxtData"> {data.userHips} </h4>
                </p>
              ) : (
                <p>
                  Kukovi(cm): <h4 className="fillTxtData"> {displayHips} </h4>
                </p>
              )}
              {data.userArm && data.userArm !== null ? (
                <p className="filltxt">
                  Opseg nadlaktice(cm): <h4 className="fillTxtData"> {data.userArm} </h4>
                </p>
              ) : (
                <p>
                  Opseg nadlaktice(cm): <h4 className="fillTxtData"> {displayArm} </h4>
                </p>
              )}
              {data.userLeg && data.userLeg !== null ? (
                <p className="filltxt">
                  Opseg bedra(cm): <h4 className="fillTxtData"> {data.userLeg} </h4>
                </p>
              ) : (
                <p>
                  Opseg bedra(cm): <h4 className="fillTxtData"> {displayLeg} </h4>
                </p>
              )}
              <p> </p>

              {data.userVisFat && data.userVisFat !== null ? (
                <p className="filltxt">
                  Viscelarna mast: <h4 className="fillTxtData"> {data.userVisFat} </h4>
                </p>
              ) : (
                <p>
                  Viscelarna mast: <h4 className="fillTxtData"> {displayVisFat} </h4>
                </p>
              )}
              {data.userMuscles && data.userMuscles !== null ? (
                <p className="filltxt">
                  Mišićna masa(%): <h4 className="fillTxtData"> {data.userMuscles} </h4>
                </p>
              ) : (
                <p>
                  Mišićna masa(%): <h4 className="fillTxtData"> {displayMuscles} </h4>
                </p>
              )}
              {data.userFat && data.userFat !== null ? (
                <p className="filltxt">
                  Masna masa(%): <h4 className="fillTxtData"> {data.userFat} </h4>
                </p>
              ) : (
                <p>
                  Masna masa(%): <h4 className="fillTxtData"> {displayFat} </h4>
                </p>
              )}
            </Row>
          </Col>
          <Col className="TempSecColumn" xs={5} md={5} lg={5}>
            <TemplateDate4></TemplateDate4>
            <TemplateImage4></TemplateImage4>
            {/* <FontAwesomeIcon
              className="faCamera-icon"
              icon={faCamera}
              size="2xl"
              style={{ cursor: "pointer" }}
            />
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>
              Upload
            </button>
            <img src={photoURL} alt="Avatar" className="avatar" /> */}
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Tjelesna masa(kg):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Tjelesna masa"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Indeks tjelesne mase(kg/m2):</Form.Label>
              <Form.Control
                type="number"
                placeholder="BMI"
                name="weightIndex"
                value={weightIndex}
                onChange={(e) => setWeightIndex(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Struk(cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Opseg struka"
                name="waist"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Kukovi(cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Opseg kukova"
                name="hips"
                value={hips}
                onChange={(e) => setHips(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Opseg nadlaktice(cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Opseg nadlaktice"
                name="arm"
                value={arm}
                onChange={(e) => setArm(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Opseg bedra(cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Opseg bedra"
                name="leg"
                value={leg}
                onChange={(e) => setLeg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Viscelarna mast(nivo):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nivo viscelarne masti"
                name="viscelarFat"
                value={visFat}
                onChange={(e) => setVisFat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Mišićna masa(%):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Postotak mišićne mase"
                name="muscles"
                value={muscles}
                onChange={(e) => setMuscles(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="formLabelDesc">Masna masa(%):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Postotak masne mase"
                name="fat"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zatvori
          </Button>
          {enabled ? (
            <Button onClick={onUpdate} className="saveButton">
              Spremi promjene
            </Button>
          ) : (
            <Button
              disabled
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

export default Template4;
