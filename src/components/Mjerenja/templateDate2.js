import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { auth, db } from "../firebase";

const TemplateDate2 = () => {

  const [showdate, setShowdate] = useState(false);

  const [date, setDate] = useState("");
  const [displayDate, setDatum] = useState("");
  const [UserDate, showDate] = useState(true);

  const [enabledd, setEnabledd] = useState(false);

  const [data, setData] = useState([]);

  const handleShowDate = () => setShowdate(true);

  const handleCloseDate = () => {
    setShowdate(false);
    setDate("");
  };

  const onUpdateDate = async () => {
    const docRef = doc(db, "AfterFirstDate", `${auth.currentUser.uid}`);
    const docSnap = await getDoc(docRef);

    await setDoc(doc(db, "AfterFirstDate", `${auth.currentUser.uid}`), {
      userDate: date,
    });

    if (date !== "") {
      setDatum(date || data.userDate);
      showDate(false);
    }
    if (date === "") {
      alert("Please, fill all fields!");
      setShowdate(true);
      setEnabledd(false);
    } else {
      setShowdate(false);
      setDate("");
      setEnabledd(true);
      window.location.reload(false);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (currentUser) => {
      const docRef = doc(db, "AfterFirstDate", `${auth.currentUser.uid}`);
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
    if (date === "") {
      setEnabledd(false);
    } else {
      setEnabledd(true);
    }
  }, [date]);

  return (
    <>
      <Row className="dateRow">
        <FontAwesomeIcon
          className="faPencil-icon"
          icon={faPencil}
          size="lg"
          color="white"
          onClick={handleShowDate}
          style={{ cursor: "pointer", paddingTop: "3%"  }}
        />
        {data.userDate && data.userDate !== null ? (
          <p className="filltxtDate">
            <h4 className="dateTxt">Datum:</h4> <h4 className="dateTxtValue"> {data.userDate} </h4>
          </p>
        ) : (
          <p className="filltxtDate">
            <h4 className="dateTxt">Datum:</h4> <h4 className="dateTxtValue"> {displayDate} </h4>
          </p>
        )}
      </Row>

      <Modal show={showdate} onHide={handleCloseDate}>
        <Modal.Header closeButton>
          <Modal.Title>Odaberite datum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Datum:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDate}>
            Zatvori
          </Button>
          {enabledd ? (
            <Button onClick={onUpdateDate} className="saveButton">
              Spremi promjene
            </Button>
          ) : (
            <Button
              disabledd
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

export default TemplateDate2;
