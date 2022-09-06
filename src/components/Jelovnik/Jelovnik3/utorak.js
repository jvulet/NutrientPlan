import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Utorak = () => {
  const [isOpen, setOpen] = useState(false);
  const [changeIcon, setIcon] = useState(faAngleDown);

  const displayMore = () => {
    //console.log(isOpen)
    setOpen(!isOpen);
    setIcon(changeIcon === faAngleDown ? faAngleUp : faAngleDown);
  };

  const Daymeals = [
    {
      key: 1,
      name: "DORUČAK",
      bgColor: "#c4c4c4",
      mealname: "Čokoladni smoothie",
      ingredients: [
        "indijski orščić, 1 šaka",
        <br />,
        "mlijeko, 1 čaša",
        <br />,
        "kakao, 1 čajna žlica",
        <br />,
        "datulja, 6 komada",
      ],
      prepare: `U blenderu pomiješati sve sastojke. Miksati dok se ne pretvori u jednoličnu smjesu.`,
      mealImg: require("../../../images/datesmoothie.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["Kruška, 1 komad"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/pear.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Ječmoto od gljiva",
      ingredients: [
        "varivo, 1 tanjur",
        <br />,
        "kupus, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Luk i gljive kratko propirajati na maslinovom ulju, dodati ječam i grašak. Kuhati pola sata
      uz povremeno dolijevanje vruće vode.`,
      mealImg: require("../../../images/jecam.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Voćka po izboru",
      ingredients: [
        "kiwi, 2 komada",
        <br />,
      ],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/kiwi.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Sendvič",
      ingredients: [
        "integralni kruh, 2 kriške",
        <br />,
        "pesto genovese, 1 žlica",
        <br />,
        "skyrella, 1 komad",
        <br />,
        "rajčica, 1 komad",
      ],
      prepare: `Kruh namazati pestom, ostale sastojke usitniti i posložiti na kruh.`,
      mealImg: require("../../../images/pesto.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
  ];

  return (
    <div className="PonContainer">
      {Daymeals.map((item, index) => {
        return (
          <>
            <Container
              key={index}
              className="RContainer"
              style={{ backgroundColor: item.bgColor }}
              fluid
            >
              <Row className="rowMeal">
                <Col className="column1" xs={4} lg={6}>
                  <Row>
                    <h2 className="Name3">{item.name}</h2>
                  </Row>
                  <Row>
                    <h2 className="MealName">{item.mealname}</h2>
                  </Row>
                  <Row className="IngredientsCard">
                    <Row style={{ marginLeft: "20px", width: "fit-content" }}>
                      <figure className="position-relative">
                        <img
                          className="card-img"
                          src={require("../../../images/IngRBpink.png")}
                          alt="Card image"
                        />
                        <div className="card-txt">
                          <figcaption className="IngredientsHeading">
                            SASTOJCI:
                          </figcaption>
                          <figcaption className="Ingredients">
                            {item.ingredients}
                          </figcaption>
                        </div>
                      </figure>
                    </Row>
                  </Row>
                </Col>

                <Col className="column2" xs={4} lg={4}>
                  <Image
                    className="meal-img"
                    src={item.mealImg}
                    alt="Meal"
                    style={{ height: item.imhHeight, width: item.imWidth }}
                  />
                </Col>
                <Row className="PrepareCard">
                  <Col xs={6}>
                    <div className="prepareHead-div">
                      <h2 className="PrepareHeading" onClick={displayMore}>PRIPREMA</h2>
                      <FontAwesomeIcon
                        className="readmore-icon"
                        icon={changeIcon}
                        color={"black"}
                        size="lg"
                        onClick={displayMore}
                      />
                    </div>
                    {isOpen && (
                      <div className="prepareTxt-div">
                        <p className="prepare-txt">{item.prepare}</p>
                      </div>
                    )}
                  </Col>
                </Row>
              </Row>
            </Container>
          </>
        );
      })}
    </div>
  );
};

export default Utorak;