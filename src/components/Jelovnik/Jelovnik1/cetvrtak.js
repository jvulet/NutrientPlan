import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Cetvrtak = () => {
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
      mealname: "Zobena kaša",
      ingredients: [
        "zobene pahuljice, 5 žlica",
        <br />,
        "voda, 1 šalica",
        <br />,
        "mrkva, 1 komad",
        <br />,
        "orah, 10 polovica",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `U 1 šalici uzavrele vode skuhajte zobene pahuljice. Kuhajte na laganoj vatri oko 3 minute dok se kaša ne počne zgušnjavati. U
      međuvremenu naribajte mrkvu te nasjeckajte orahe. Pred kraj, u kašu umiješajte med i mrkvu te kuhajte dok se kaša ne zgusne.
      Prije posluživanja, kašu pospite nasjeckanim orasima. Također orahe možete samljeti te ubaciti u kašu zajedno s mrkvom i
      medom.`,
      mealImg: require("../../../images/carrotoatmeal.jpg"),
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
      mealname: "Piletina grill",
      ingredients: [
        "gusta juha od mrkve, 1 tanjur",
        <br />,
        "pileća prsa, 1 file",
        <br />,
        "prokulice, 8 komada",
        <br />,
        "batat, 1 komad",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Napraviti gustu juhu od mrkve. Skuhati povrće, začiniti s maslinovim uljem, servirati uz piletinu.`,
      mealImg: require("../../../images/prokulice.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Voćna salata",
      ingredients: [
        "klementina, 1 komad",
        <br />,
        "kiwi, 1 komad",
        <br />,
        "suhe brusnice, 1 žlica",
      ],
      prepare: `Isjeckati 3 različite voćke po želji.`,
      mealImg: require("../../../images/fruitsalad.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Krekeri s hummusom",
      ingredients: [
        "gusta juha od mrkve, 1 tanjur",
        <br />,
        "integralni krekeri, 4 komada",
        <br />,
        "hummus, 2 žlice",
      ],
      prepare: `Podgrijati juhu od mrkve. Ako želite namaz od slanutka (hummus) možete sami napraviti u blenderu ili kupiti gotovi.`,
      mealImg: require("../../../images/hummus.jpg"),
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
                    <h2 className="Name">{item.name}</h2>
                  </Row>
                  <Row>
                    <h2 className="MealName">{item.mealname}</h2>
                  </Row>
                  <Row className="IngredientsCard">
                    <Row style={{ marginLeft: "20px", width: "fit-content" }}>
                      <figure className="position-relative">
                        <img
                          className="card-img"
                          src={require("../../../images/IngRB3.png")}
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

export default Cetvrtak;
