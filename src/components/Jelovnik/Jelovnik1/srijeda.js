import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Srijeda = () => {
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
      mealname: "Sendvič od pureće šunke",
      ingredients: [
        "integralni kruh sa sjemenkama, 2 kriške",
        <br />,
        "maslac, 2 čajne žlice",
        <br />,
        "pureća šunka, 2 kriške",
        <br />,
        "zelena salata, 2 lista",
        <br />,
        "acidofil, 1 čaša",
      ],
      prepare: `Na dvije tanke kriške posložiti navedene sastojke. Acidofil poslužiti sa strane.`,
      mealImg: require("../../../images/turkeytoast.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["mandarina, 2 komada"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/mandarina.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Varivo",
      ingredients: [
        "varivo od mahunarki i ječma, 1 tanjur",
        <br />,
        "kuhana cikla, pola šalice",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Otprilike 30 minuta u uzavreloj vodi kuhajte ječam. Zadnjih 15 minuta ubaciti smrznute zelene mahunarke.`,
      mealImg: require("../../../images/orzo.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Energetska pločica",
      ingredients: [
        "energetska pločica, 1 komad",
        <br />,
        "čaj od mente, 1 šalica",
        <br />,
        "suhe marelice, 4 komada",
      ],
      prepare: `Heljdine pahuljice, krupno nasjeckano orašasto voće i sjemenke tostirati u pećnici između 5 i 10 minuta. Smjesu ostaviti po strani
      da se hladi. Po želji možete umiješati i prstohvat soli. U međuvremenu rastopiti med, a zatim ga umiješati u ohlađenu smjesu
      pahuljica i orašastog voća. Smjesu prebaciti u manji pleh za pečenje prekriven masnim papirom i ravnomjerno utisnuti. Ostaviti da
      se hladi i stisne pola sata do sat vremena.`,
      mealImg: require("../../../images/energybar.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Salata od tunjevine",
      ingredients: [
        "tuna, 1 konzerva",
        <br />,
        "kukuruz, 3 žlice",
        <br />,
        "grah, 3 žlice",
        <br />,
        "rikola, 1 šaka",
        <br />,
        "rajčica, 1 komad",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Kukuruz i grah isprati pod mlazom vode kako bi uklonili višak soli i salamure. Potom sve sastojke prebacite u zdjelu i dobro
      promiješajte. Salatu dodatno obogatite, češnjakom, lukom, peršinom i drugim začinima.`,
      mealImg: require("../../../images/tunasalad.jpg"),
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

export default Srijeda;
