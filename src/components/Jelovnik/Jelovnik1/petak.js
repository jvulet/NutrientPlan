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
      mealname: "Chia puding",
      ingredients: [
        "chia sjemenke, 1 žlica",
        <br />,
        "kokos mrvice, 1 žlica",
        <br />,
        "med, 1 žlica",
        <br />,
        "mlijeko, 1 dcl",
        <br />,
        "kakao u prahu, 1 čajna žlica",
        <br />,
        "maline, pola šalice",
      ],
      prepare: `Maline najprije dobro operite, a ako imate kupovne pustite da se odmrznu. Dio malina odvojite kako biste mogli ukrasiti puding.
      Preostale maline stavite u visoku posudu, dodajte mlijeko i izmiksajte. Smjesu procijedite kroz sito te pomiješajte s chia
      sjemenkama, kakaom, kokosom i medom. Puding izlijte u čašu te ukrasite malinama.`,
      mealImg: require("../../../images/chiapuding.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Lješnjak i jogurt",
      ingredients: [
        "lješnjak, 1 šaka",
        <br />,
        "jogurt, 1 čaša",
      ],
      prepare: `Za bolji okus kratko tostirati lješnjake na tavi`,
      mealImg: require("../../../images/yogohazelnut.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Oslić s rižotom",
      ingredients: [
        "pečeni oslić, 1 file",
        <br />,
        "rižoto od tikve, 2 kacijole",
        <br />,
        "kuhana cikla, pola šalice",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Smrznuti file oslića začinite maslinovim uljem, češnjakom i peršinom te stavite peći u pećnicu oko 20 minuta. U međuvremenu
      pripremite rižoto od tikve. Na par kapi maslinova ulja prodinstajte luk i češnjak, a potom dodajte i narezane kocke tikve. Dinstajte
      par minuta na laganoj vatri, a potom dodajte i rižu. Kuhajte uz povremeno podlijevanje vodom dok ne tikva ne omekša, a riža ne
      bude kuhana. Pred kraj umiješajte peršin.`,
      mealImg: require("../../../images/butternutrice.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Nicecream",
      ingredients: [
        "banana, 1 komad",
        <br />,
        "ananas, pola šalice",
        <br />,
        "med, 1 žlica",
      ],
      prepare: `Voće narezati na manje komade te ih staviti u zamrzivač da se smrznu. Voće možete prethodno pripremiti ili kupiti već gotove
      smrznute smjese za smoothie. Smrznuto voće i med prebacite u blender te dobro izradite. Po potrebi možete dodati i jednu do dvije
      žlice mlijeka kako bi se voće lakše pretvorilo u kremu. Dobivenu kremu, odnosno voćni sladoled možete konzumirati odmah ili
      vratiti natrag u zamrzivač da se još stisne.`,
      mealImg: require("../../../images/nicecream.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Palenta sa skyrom",
      ingredients: [
        "kukuruztna krupica, 4 žlice",
        <br />,
        "skyr, 3 žlice",
        <br />,
        "suncokretove sjemenke, 1 žlica",
        <br />,
        "bučine sjemenke, 1 žlica",
      ],
      prepare: `4 žlice palente stavite kuhati u duplo više vode. Kada je palenta kuhana ostavite je po strani da se ohladi. U međuvremenu
      tostirajte sjemenke po izboru. Palentu poslužite sa skyrom i tostiranim sjemenkama.`,
      mealImg: require("../../../images/polenta.jpg"),
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

export default Petak;
