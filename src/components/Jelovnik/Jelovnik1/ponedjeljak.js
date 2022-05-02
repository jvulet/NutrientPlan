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
      mealname: "Zobena kaša s kruškom",
      ingredients: [
        "zobene pahuljice, 5 žlica",
        <br />,
        "mlijeko, 1 šalica",
        <br />,
        "kruška, 1 komad",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `U uzavrelom mlijeku skuhajte zobene pahuljice. Kuhajte na laganoj vatri oko 5 minuta dok se smjesa ne zgusne. Pred kraj umiješajte med i
krušku. Krušku ogulite, te narežite na manje kocke ili naribajte. Okus kaše možete dodatno obogatiti dodatkom cimeta ili rogača.`,
      mealImg: require("../../../images/zobenaskruskom.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Bademi i kefir",
      ingredients: ["bedemi, 1 šaka", <br />, "kefir, 1 čaša"],
      prepare: `Po želji dodati začine u kefir.`,
      mealImg: require("../../../images/kefirbademi.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Varivo",
      ingredients: [
        "leća, 1 šalica",
        <br />,
        "poriluk, 1 komad",
        <br />,
        "proso, 1 šalica",
      ],
      prepare: `Otprilike 30 minuta u uzavreloj vodi kuhajte poriluk, leću i proso. 
      1 porcija su 3 kacijole.`,
      mealImg: require("../../../images/lecaproso.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Energetski smoothie",
      ingredients: [
        "zobene pahuljice, 2 žlice",
        <br />,
        "banana, pola komada",
        <br />,
        "lanene sjemenke, 1 žlica",
        <br />,
        "sok 1 naranče",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `Zobene pahuljice preliti s 3 žlice tople vode i ostaviti da se namoče dok ne pripremite ostale sastojke. U međuvremenu iscijedite
      naranču te narežite bananu, Sve sastojke prebacite u blender zajedno sa sjemenkama i pahuljicama te miješajte dok ne dobijete
      jednoličnu smjesu.`,
      mealImg: require("../../../images/smoothiebanana.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Caprese salata",
      ingredients: [
        "skyrella, 1 komad",
        <br />,
        "rajčica, 1 komad",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
        <br />,
        "integralni kruh, 1 kriška",
      ],
      prepare: `Skyrellu i rajčicu narežite na kriške. 
      Začinite solju, paprom, vlascem te maslinovim uljem. Poslužite s kriškom integralnog kruha.`,
      mealImg: require("../../../images/caprese.jpg"),
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
                      <h2 className="PrepareHeading">PRIPREMA</h2>
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
