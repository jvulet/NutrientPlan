import { faFilePdf, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { removeFromCart } from "../../redux/rootReducer";

import * as React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { auth, db } from "../firebase";
import { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";

const List = () => {
  const dispatch = useDispatch();

  let cart = useSelector((state) => state.product);

  const handleRemoveFromCart = async (product) => {
    dispatch(removeFromCart(product));
  };

  console.log(cart);

  useEffect(async () => {
    if (cart.items.length > 0) {
      const docRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
      await updateDoc(docRef, cart);
    }
  }, [cart]);
  
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <>
    <PDFExport ref={pdfExportComponent} >
      <Container className="ListCont" fluid>
        <h1 className="listTitle">POPIS ZA KUPNJU</h1>
        <Container className="descCont">
          <Row>
            <Col className="colListD1" lg={8}>
              <p className="listD">NAMIRNICE</p>
            </Col>
            <Col className="colListD2" lg={2}>
              <p className="listD">KOLIČINA</p>
            </Col>
            <Col className="colListD3" lg={2}>
              <p className="listD">UKLONI</p>
            </Col>
          </Row>
          <hr className="horizontalLine" />
        </Container>

        <Container className="nabavkaCont">
          {cart.items.map((item, index) => {
            return (
              <>
                <Row>
                  <Col className="colListD1" lg={8}>
                    <p
                      className="namirnicaName"
                      key={index}
                      style={{ backgroundColor: item.frColor }}
                    >
                      {item.productName}
                    </p>
                  </Col>
                  <Col className="colListD2" lg={2}>
                    <p className="namirnicaQuantity" key={index}>
                      {item.cartQuantity}
                    </p>
                  </Col>
                  <Col className="colListD3"lg={2}>
                    <FontAwesomeIcon
                      className="xIcon"
                      icon={faXmark}
                      color={"#1f1f1f"}
                      size="m"
                      onClick={() => handleRemoveFromCart(item)}
                    />
                  </Col>
                </Row>
              </>
            );
          })}
        </Container>
      </Container>
      </PDFExport>
      <Container className="ListCont" fluid>
      <FontAwesomeIcon
              className="pdf-icon"
              icon={faFilePdf}
              size="3x"
              onClick={exportPDFWithComponent}
            />
      </Container>
    </>
  );
};

export default List;
