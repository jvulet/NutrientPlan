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
      mealname: "Kaša s borovnicama",
      ingredients: [
        "rižine pahuljice, 4 žlice",
        <br />,
        "mlijeko, 1 čaša",
        <br />,
        "borovnice, pola šalice",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `U uzavrelom mlijeku skuhati pahuljice, med i borovnice. Miješati na laganoj vatri dok se smjesa ne zgusne. Po želji začiniti cimetom
      ili ekstraktom vanilije.`,
      mealImg: require("../../../images/porridge.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Jogurt s grožđicama",
      ingredients: ["jogurt, 1 čaša",
      <br />,
      "grožđice, 1 žlica",
      ],
      prepare: `Pomiješati jogurt sa suhim voćem. Ukoliko 
      ne volite grožđice možete uzeti i neko drugo suho voće u istoj 
      količini.`,
      mealImg: require("../../../images/kiwi.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Brudet od oslića i palenta",
      ingredients: [
        "brudet od oslića, 1 tanjur",
        <br />,
        "palenta, 4 žlice",
        <br />,
        "kuhana cikla, 1 šalica",
      ],
      prepare: `Popržite na 
      maslinovom ulju sitno sjeckani češnjak i luk. Zatim dodajte mrkvu, celer i korijen peršina. Podlijte vinom te kuhajte 
      dok alkohol ne ispari. Uliti vode, dodajti sitnu ribu, list peršina i zrna papra pa kuhajte 10 minuta. Kao prilog skuhati palentu.`,
      mealImg: require("../../../images/fishpolenta.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Banana i lješnjaci",
      ingredients: [
        "banana, 1 komad",
        <br />,
        "lješnjak, 1 šaka",
      ],
      prepare: `Po želji tostirati lješnjake.`,
      mealImg: require("../../../images/yogo.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Sendvič od tunjevine",
      ingredients: [
        "integralni kruh, 1 kriška",
        <br />,
        "tuna, 1 konzerva",
        <br />,
        "zelena salata, 2 lista",
        <br />,
        "mrkva, 1 komad",
      ],
      prepare: `Od predloženih sastojaka složiti sendvič. 
      Uz to poslužiti štapiće mrkve.`,
      mealImg: require("../../../images/tunasandwich.jpg"),
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

export default Petak;