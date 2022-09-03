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
      mealname: "Raženi kruh sa namazom",
      ingredients: [
        "raženi kruh sa sjemenkama, 2 kriške",
        <br />,
        "kikirikijev maslac, 1 žlica",
        <br />,
        "mermelada, 1 žlica",
        <br />,
        "čaj od mente, 1 šalica",
      ],
      prepare: `Na dvije tanke kriške namazati kikirikijev maslac i mermeladu. Poslužiti uz topli čaj od mente.`,
      mealImg: require("../../../images/ryebread.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["naranča, 1 komad"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/orange.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Rižoto od plodova mora",
      ingredients: [
        "rižoto, 1 tanjur",
        <br />,
        "kupus salata, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Na 2 žlice maslinovog ulja kratko prepržite luk, a potom mu dodajte i plodove mora. Podliti bijelim vinom, lagano kuhati dok alkohol ne ispari. 
      Dodati rižu. Kuhati još 20 minuta uz stalno podlijevanje vrućom vodom. Pred kraj dodati žlicu maslinova ulja i nasjeckanog peršina. Poslužiti uz kupus salatu.`,
      mealImg: require("../../../images/searisoto.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Energetske bombice",
      ingredients: [
        "energetske bombice, 3 komada",
        <br />,
        "kiselo mlijeko, 1 šalica",
      ],
      prepare: `Fino samljeti 100 g oraha pa ih pomiješati s 75 g grožđica, 1 žlicom mljevenog lana, 1 žlicom meda i 2 žlice maslaca od kikirikija. Oblikovati kuglice pa ih
      uvaljati u kokosovo brašno. Premjestiti kuglice u kutiju s poklopcem i čuvati ih u hladnjaku.
      Od ove smjese dobijete otprilike 10 bombica`,
      mealImg: require("../../../images/energyballs.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Salata od bijelog graha",
      ingredients: [
        "bijeli grah, 1 šalica",
        <br />,
        "paprika, 1 komad",
        <br />,
        "rikola, 1 šaka",
        <br />,
        "češnjak, 1 češanj",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Navedene sastojke isjeckati i pomiješati, začiniti s maslinovim uljem.`,
      mealImg: require("../../../images/whitebeans.jpg"),
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

export default Srijeda;