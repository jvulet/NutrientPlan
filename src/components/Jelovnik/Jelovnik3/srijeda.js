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
      mealname: "Energetska pločica",
      ingredients: ["energetska pločica, 1 komad", <br />, "kefir, 1 čaša"],
      prepare: `Konzumirati pločice koje su pripremeljene u ponedjeljak za međuobrok.`,
      mealImg: require("../../../images/energybar.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Integralni krekeri",
      ingredients: ["Jabuka, 1 komad", 
      <br />, 
      "integralni krekeri, 3 komada"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/crackers.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Šarena salata",
      ingredients: [
        "piletina, 1 file",
        <br />,
        "tikva, 1 šalica",
        <br />,
        "kuhana cvjetača, 1 šalica",
        <br />,
        "tjestenina, pola šalice",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Piletinu i povrće narezati na manje komade. Začiniti maslinovim uljem i začinima po želji (sol, papar, češnja, crvena paprika,
        origano) te peći u pećnici na 180 stupnjeva dok meso ne bude gotovo. U međuvremenu skuhati tjesteninu. Sve zajedno prebaciti u
        zdjelu, dodati rikolu i ocat te dobro promiješati.`,
      mealImg: require("../../../images/macaronisalad.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Raffaello puding",
      ingredients: [
        "chia sjemenke, 2 žlice",
        <br />,
        "kokos, 1 žlica",
        <br />,
        "med, 1 čajna žlica",
        <br />,
        "mlijeko, pola šalice",
        <br />,
        "badem, 5 komada",
      ],
      prepare: `Sve sastojke pomiješati u zdjelici i ostaviti u hladnjaku dok sjemenke ne nabubre.`,
      mealImg: require("../../../images/raffaello.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Fritata",
      ingredients: [
        "parmezan, 1 žlica",
        <br />,
        "jaje, 2 komada",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `U zdjeli razmutiti dva jaja s 1 žlicom vode. Potom dodati parmezan te začinsko bilje (vlasac, peršin, origano, papar). Sve dobro
      izmiješati te izliti na dobro ugrijanu tavu premazanu maslinovim uljem. Smanjiti vatru i pustiti da se peče otprilike dvije minute.
      Nakon toga početi odizati krajeve kako bi preostala smjesa jaja mogla iscuriti ispod. Peći fritatu još par minuta, dok se ne stisne, ali
      pripaziti da u sredini i dalje bude kremasta.`,
      mealImg: require("../../../images/fritata.jpg"),
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

export default Srijeda;
