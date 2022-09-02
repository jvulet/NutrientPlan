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
      mealname: "Zrnati sir s pekmezom",
      ingredients: [
        "integralni kruh sa sjemenkama, 2 kriške",
        <br />,
        "svježi sir, 3 žlice",
        <br />,
        "mermelada, 1 žlica",
      ],
      prepare: `Na dvije tanke kriške namazati svježi sir i mermeladu.`,
      mealImg: require("../../../images/breadjam.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["kiwi, 2 komada"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/kiwi.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Piletina s povrćem iz woka",
      ingredients: [
        "piletina s povrćem iz woka, 1 tanjur",
        <br />,
        "zelena salata, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Na 2 žlice maslinovog ulja kratko prepržite luk, a potom mu dodajte i pileća prsa narezana na kockice. Sve dinstajte dok
      meso ne poprimi zlatnu boju. U međuvremenu paprike narežite na manje trakice, tikvice na kockice, a mrkve na tanje kolutove. Sve
      zajedno s kivinojom dodajte mesu. Dobro izmiješajte da se svi sokovi prožmu, a potom podlijte vodom. Po želji dodajte začine
      poput češnjaka, crvene paprike, origana. Kuhajte uz povremeno podlijevanje dok povrće ne omekša, a kvinoja bude kuhana.`,
      mealImg: require("../../../images/chickenrice.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Tamna čokolada",
      ingredients: [
        "tamna čokolada, 1 red",
        <br />,
        "bademi, 1 šaka",
      ],
      prepare: `Po želji rastopiti tamnu čokoladu i tostirati bademe.`,
      mealImg: require("../../../images/darkchoco.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Avo sendvič",
      ingredients: [
        "integralni kruh, 2 kriške",
        <br />,
        "jaje, 2 komada",
        <br />,
        "namaz od avokada, 1 žlica",
        <br />,
        "cijeđeni sok, 1 naranča",
      ],
      prepare: `Avokado očistite i vilicom usitnite u pire. Potom mu dodajte ulje, limunov sok, nasjeckani peršin, protisnuti češnjak te
      začine poput soli i papra. Sve dobro usitnite vilicom.`,
      mealImg: require("../../../images/avotoast.jpg"),
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

export default Utorak;
