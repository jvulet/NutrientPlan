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
      mealname: "Zeleni smoothie",
      ingredients: [
        "ražene pahuljice, 5 žlice",
        <br />,
        "kiwi, 1 komad",
        <br />,
        "jabuka, 1 komad",
        <br />,
        "mlijeko, 1 čaša",
        <br />,
        "spirulina, pola čajne žlice",
      ],
      prepare: `U blenderu pomiješati sve sastojke. Miksati dok se ne pretvori u jednoličnu smjesu.`,
      mealImg: require("../../../images/greensmoothie.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["bademi, 1 šaka"],
      prepare: `Možete izabrati bilo koje drugo orašasto voće umjesto navedenog.`,
      mealImg: require("../../../images/almond.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Varivo",
      ingredients: [
        "cikla, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
        <br />,
        "varivo, 1 tanjur",
      ],
      prepare: `Na maslinovom ulju kratko prepržiti luk i puretinu. Potom dodati kvinoja mješavinu, pasiranu rajčicu i začine po želji. Sve dobro
      izmiješati, a zatim dodati i 1 čašu vode. Kuhati oko 10 minuta uz stalno miješanje dok se meso ne skuha. Po potrebi dolijevati s još
      vode prilikom kuhanja.`,
      mealImg: require("../../../images/quinoa.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Voćka po izboru",
      ingredients: ["klementine, 2 komada"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/mandarina.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Slanutak salata",
      ingredients: [
        "slanutak, 1 šalica",
        <br />,
        "feta sir, 2 kocke",
        <br />,
        "krastavac, pola komada",
        <br />,
        "luk, pola komada",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `U jednoj zdjeli izmješati gore navedene sastojke. Začiniti solju i maslinovim uljem.`,
      mealImg: require("../../../images/slanutaksalata.jpg"),
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
                      <h2 className="PrepareHeading" onClick={displayMore}>
                        PRIPREMA
                      </h2>
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
