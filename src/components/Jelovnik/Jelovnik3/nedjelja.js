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
      mealname: "Drugačija jaja",
      ingredients: [
        "jaja, 2 komada",
        <br />,
        "avokado, 1/4 komada",
        <br />,
        "limunov sok, 2 žlice",
        <br />,
        "začinsko bilje, prstohvat",
        <br />,
        "špinat, 1 šaka",
      ],
      prepare: `Skuhajte jaja pa ih izrežite na 8 dijelova. Avokado ogulite i narežite na kockice. Pomiješajte jaja i avokado u posuditi pa im dodajte
      začinsko bilje (peršin, vlasac) te zalijte cijeđenim limunovim sokom. Promiješajte prije konzumacije. Poslužite s mladim špinatom.`,
      mealImg: require("../../../images/differenteggs.jpg"),
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
      mealname: "Junetina u saftu",
      ingredients: [
        "junetina u saftu, 1 tanjur",
        <br />,
        "palenta, 1 šalica",
        <br />,
        "cikla, 1 šalica",
      ],
      prepare: `Popržiti luk i mrkvu, zatim dodati junetinu i temeljac. Kauhati dok meso ne omekša u potpunosti. 
      Začiniti po želji.`,
      mealImg: require("../../../images/junetina.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Slatki griz",
      ingredients: [
        "kruška, 1 komad",
        <br />,
        "brusnice, 1 žlica",
        <br />,
        "orah, 5 polovica",
      ],
      prepare: `Krušku naribati te posuti sušenim grožđicama i nasjeckanim orasima.`,
      mealImg: require("../../../images/sweetbite.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Batat brownie",
      ingredients: [
        "batat brownie, 2 komada",
        <br />,
        "kefir, 1 čaša"
      ],
      prepare: `Zagrijte pećnicu na 180 stupnjeva. Manju tepsiju obložite papirom za pečenje,a zatim
      lagano premažite uljem. 
      Stavite neoguljeni batat u mikrovalnu pećnicu i pecite na jakoj temperaturi 7 do 10 minuta ili dok potpuno ne omekša. Kada se
      dovoljno ohladi za rukovanje, izvadite 2 šalice batata i zgnječite ga. Umutite maslinovo ulje dok se ne sjedini, 
      zatim umiješajte med i ekstrakt vanilije. Umutite jaja.
      U posebnoj posudi pomiješajte integralno brašno, kakao prah, cimet, muškatni oraščić, prašak za pecivo i sol. Dodajte suhe
      sastojke mokrim sastojcima i lagano miješajte dok se sastojci ne sjedine. Ubacite komadiće čokolade.
      U pripremljenu tepsiju prebacite smjesu i zagladite ju. Pecite 25-30 minuta.`,
      mealImg: require("../../../images/brownie.jpg"),
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