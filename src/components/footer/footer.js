import React from "react";
import "./style.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Container className="FooterCont" fluid>
        <Row className="grayRow"></Row>
        <Row className="footerRow">
          <Col className="FImColFooter" xs={3} md={3} lg={3}>
            <Row className="middleRow">
              <Row className="footerHeadRow">
                <p className="footerHead">PRATITE NAS!</p>
              </Row>
              <Row className="pngIconRow">
                <Image
                  className="fi-png"
                  src={require("../../images/facebook_icon.png")}
                  alt="category"
                  onClick={() =>
                    openInNewTab("https://www.facebook.com/nutrient.hr/")
                  }
                  style={{ cursor: "pointer" }}
                />
                <Image
                  className="fi-png"
                  src={require("../../images/instagram_icon.png")}
                  alt="category"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/nutrient.hr/")
                  }
                  style={{ cursor: "pointer" }}
                />
              </Row>
            </Row>
          </Col>

          <Col className="SImColFooter" xs={4} md={4} lg={4}>
            <Row className="middleRow">
              <Row className="footerHeadRow">
                <p className="footerHead">KONTAKT</p>
              </Row>
              <Row>
                <p className="contactTxt">
                  mob: +385 98 965 3652 (Marija)<br></br> e-mail:
                  info@nutrient.hr
                </p>
              </Row>
            </Row>
          </Col>
          <Col className="TImColFooter" xs={5} md={5} lg={5}>
            <Row className="middleRow">
              <Row className="footerHeadRow">
                <p className="footerHead">USLUGE</p>
              </Row>
              <Row>
                <p className="contactTxt">Nutricionističko savjetovanje</p>
                <p className="contactTxt">
                  Izrada individualnog plana prehrane
                </p>
                <p className="contactTxt">Izrada prehrambenih smjernica</p>
                <p className="contactTxt">Nutricionističko praćenje</p>
                <p className="contactInfoTxt">
                  Naš cilj je na temelju znanosti i iskustva<br></br> pomoći
                  osobama u regulaciji tjelesne mase,<br></br> poboljšati
                  zdravlje, ostvariti zdrav odnos<br></br> prema hrani uz
                  minimalno odricanja.
                </p>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row className="grayRowEnd"></Row>
      </Container>
    </>
  );
};

export default Footer;
