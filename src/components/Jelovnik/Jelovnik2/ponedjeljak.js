import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Ponedjeljak = () => {
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
      mealname: "Krekeri sa zrnatim sirom",
      ingredients: [
        "zrnati sir, 3 žlice",
        <br />,
        "mix sjemenki, 1 žlica",
        <br />,
        "kruška, 1 komad",
        <br />,
        "integralni krekeri, 3 komada",
      ],
      prepare: `Sastojke posložiti na integralne krekere. Sjemenke po želji kratko tostirati.`,
      mealImg: require("../../../images/cottage.jpg"),
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
      mealname: "Puretina s prosom",
      ingredients: [
        "gusta juha od tikve, 1 tanjur",
        <br />,
        "puretina s prosom, 1 tanjur",
      ],
      prepare: `Na maslinovom ulju kratko prepržiti pureća prsa izrezana na manje komade. Kad meso pozlati, dodati luk i češnjak. Dinstati dok
      kapula ne postane staklena. Potom dodati poriluk narezan na manje kolutove. Dodati začine po želji (sol, papar, peršin, kurkuma).
      Dinstati dok poriluk ne uvene. Potom umiješati sirovo proso. Dobro izmiješati te podliti vodom. Kuhati dok proso ne omekša.`,
      mealImg: require("../../../images/millet.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Desert pun energije",
      ingredients: [
        "griz, 2 žlice",
        <br />,
        "banana, pola komada",
        <br />,
        "mlijeko, 1.5 dcl",
        <br />,
        "lješnjaci, 15 komada",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `Bananu zgnječiti vilicom te pomiješati s medom, grizom i mlijekom u manjoj posudi. Kuhati na laganoj vatri miješajući dok se
      smjesa ne zgusne. Uz to poslužite tostirane lješnjake. Također, lješnjake možete samljeti te ih dodati u smjesu za vrijeme kuhanja.`,
      mealImg: require("../../../images/semolina.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Grčka salata",
      ingredients: [
        "feta sir, 2 kocke",
        <br />,
        "krastavac, polovica",
        <br />,
        "luk, polovica",
        <br />,
        "kukuruz, 3 žlice",
        <br />,
        "rikola, 1 šaka",
      ],
      prepare: `Krastavac salatar i ljubičasti luk narežite na kriške. 
      Začinite solju, paprom, vlascem te maslinovim uljem.`,
      mealImg: require("../../../images/greek.jpg"),
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

export default Ponedjeljak;
