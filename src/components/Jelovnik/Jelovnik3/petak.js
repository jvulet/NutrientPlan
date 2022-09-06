import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Petak = () => {
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
      mealname: "Zobena kaša s višnjama",
      ingredients: [
        "zobene pahuljice, 4 žlice",
        <br />,
        "mlijeko, 1 čaša",
        <br />,
        "višnje, pola šalice",
      ],
      prepare: `Zagrijati mlijeko, dodati zobene pahuljice i mlijeko. Kad se smjesa sgusne umiješati
       višnje.`,
      mealImg: require("../../../images/cherryoatmeal.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Energetska pločica",
      ingredients: ["energetska pločica, 1 komad"],
      prepare: `Konzumirati pločice koje su pripremeljene u ponedjeljak za međuobrok.`,
      mealImg: require("../../../images/energybar.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Srdele s blitvom",
      ingredients: [
        "srdela, 5 komada",
        <br />,
        "blitva, 1 šalica",
        <br />,
        "bob, pola šalice",
        <br />,
        "krumpir, 1 komad",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Skuhati zajedno bob, blitvu i krompir. Srdele ispeći na grill tavi premazanoj s maslinovim uljem.`,
      mealImg: require("../../../images/sardines.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Smoothie",
      ingredients: [
        "skyr, 3 žlice",
        <br />,
        "banana, 1 komad",
        <br />,
        "kurkuma, pola čajne žlice",
      ],
      prepare: `U blenderu pomiješati sve sastojke. Miksati dok se ne pretvori u jednoličnu smjesu.`,
      mealImg: require("../../../images/kurkuma.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Pašteta od tune",
      ingredients: [
        "juha od bundeve, 1 tanjur",
        <br />,
        "integralni kruh, 2 kriške",
        <br />,
        "pašteta od tune, 2 žlice",
      ],
      prepare: `U sjeckalicu ili blender stavite tunu, dodajte krem sir, senf, limunov sok, kapare, kisele
      krastavce i začine pa sve izmiksajte u finu, mazivu paštetu. Probajte paštetu pa prema potrebi dodatno začinite solju, paprom i
      limunovim sokom.`,
      mealImg: require("../../../images/tunapate.jpg"),
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

export default Petak;