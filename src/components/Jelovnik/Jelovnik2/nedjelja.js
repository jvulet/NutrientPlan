import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Nedjelja = () => {
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
      mealname: "Domaći čokolino",
      ingredients: [
        "zobene pahuljice, 4 žlice",
        <br />,
        "mlijeko, 1 čaša",
        <br />,
        "med, 1 čajna žlica",
        <br />,
        "kakao u prahu, 1 čajna žlica",
        <br />,
        "lješnjak, 10 komada",
      ],
      prepare: `Zagrijati mlijeko, dodati zobene pahuljice, 
      med i kakao u prahu. Kad se smjesa sgusne umiješati
       mljevene lješnjake.`,
      mealImg: require("../../../images/chocooatmeal.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["Jabuka, 1 komad"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/apple.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Svinjski kare",
      ingredients: [
        "juha od brokule, 1 tanjur",
        <br />,
        "svinjski kare, 1 komad",
        <br />,
        "kuhana cvjetača, 1 šalica",
        <br />,
        "kuhani batat, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Napraviti gustu juhu od brokule. Meso ispeći
      u pećnici ili na tavi, ovisno o debljini. Kao prilog skuhati
      batat i cvjetaču, začiniti s maslinovim uljem.`,
      mealImg: require("../../../images/pork.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Zapečena kruška",
      ingredients: [
        "kruška, 1 komad",
        <br />,
        "med, 2 čajne žlice",
        <br />,
        "orah, 10 polovica",
      ],
      prepare: `Krušku prepoloviti te izdubiti sredinu. Položiti ju na papir za pečenje te svaku polovicu premazati medom, cimetom te posuti
      nasjeckanim orasima. Peći u pećnici dok ne omekša.`,
      mealImg: require("../../../images/bakedpear.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Salata od špinata",
      ingredients: [
        "integralni kruh, 2 kriške",
        <br />,
        "jaje, 2 komada",
        <br />,
        "špinat, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Špinat očistiti, oprati i kuhati ga kratko u malo vode. Tada špinat ocijediti, dodati mu ulje, ocat, papar, sjeckani peršinov list i češnjak
      i sve lagano izmiješati. Pomiješati s kolutima tvrdo kuhanih jaja.`,
      mealImg: require("../../../images/spinachsalad.jpg"),
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

export default Nedjelja;