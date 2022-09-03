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
      mealname: "Pavin doručak",
      ingredients: [
        "zobene pahuljice, 3 žlice",
        <br />,
        "chia sjemenke, 1 žlica",
        <br />,
        "lanene sjemenke, 1 žlica",
        <br />,
        "med, 1 čajna žlica",
        <br />,
        "mljeveni bademi, 2 žlice",
        <br />,
        "kakao, 1 čajna žlica",
        <br />,
        "mlijeko, 1 šalica",
      ],
      prepare: `Sve sastojke pomiješati u zdjelici te prekriti mlijekom. Ostaviti u hladnjaku preko noći da omekša. Konzumirati ujutro. Po želji
      možete dodati umjesto kakaa začine poput cimeta, rogača ili suho sjeckano voće.`,
      mealImg: require("../../../images/pavin.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["jabuka, 1 komad"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/apple.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Narančasto varivo",
      ingredients: [
        "varivo, 1 tanjur",
        <br />,
        "zelena salata, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Na maslinovom ulju prodinstati luk i češnjak. Potom dodati slanutak, tikvu i batat narezane na kockice. Potom dodati pasiranu
      rajčicu i začine poput soli, papra i origana. Podlijevati vodom te kuhati dok povrće ne omekša, a varivo ne zgusne.`,
      mealImg: require("../../../images/orangechickpeas.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Suhe marelice",
      ingredients: [
        "suhe marelice, 4 komada",
        <br />,
        "kefir, 1 šalica",
      ],
      prepare: `Pomiješati usitnjene marelice s kefirom.`,
      mealImg: require("../../../images/yogo.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Omlet s mladim sirom",
      ingredients: [
        "integralni kruh, 2 kriške",
        <br />,
        "jaje, 2 komada",
        <br />,
        "mladi sir, 50 g",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Na par kapi maslinovog ulja stavite 
      razmućena jajima te kuhajte na laganoj vatri uz stalno miješanje dok se jaja ne stisnu.
      Mladi sir možete popeći s jajima ili poslužiti sa strane. Poslužite na prepečenom integralnom kruhu. `,
      mealImg: require("../../../images/cheeseomelette.jpg"),
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
                    <h2 className="Name2">{item.name}</h2>
                  </Row>
                  <Row>
                    <h2 className="MealName">{item.mealname}</h2>
                  </Row>
                  <Row className="IngredientsCard">
                    <Row style={{ marginLeft: "20px", width: "fit-content" }}>
                      <figure className="position-relative">
                        <img
                          className="card-img"
                          src={require("../../../images/IngRBgreen.png")}
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
