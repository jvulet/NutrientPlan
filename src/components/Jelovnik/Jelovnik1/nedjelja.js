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
      mealname: "Zeleni smoothie",
      ingredients: [
        "zobene pahuljice, 5 žlica",
        <br />,
        "jabuka, 1 komad",
        <br />,
        "kiwi, 1 komad",
        <br />,
        "mlijeko, 1 čaša"
      ],
      prepare: `Sve sastojke prebaciti u blender i dobro usitniti.`,
      mealImg: require("../../../images/greensmoothie.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Integralni keksi",
      ingredients: [
        "grancereale, 5 komada",
        <br/>,
        "zeleni čaj, 1 šalica",
      ],
      prepare: `Piti nezaslađeni čaj, po želji dodati par kapi limuna.`,
      mealImg: require("../../../images/grancereale.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Kuhana teletina",
      ingredients: [
        "kuhana teletina, 1 file",
        <br />,
        "kiseli kupus, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
        <br />,
        "restani krumpir, 1 kacijola",
      ],
      prepare: `Na laganoj vatri 2 sata kuhati teletinu s povrćem po želji. Kiseli kupus začiniti s maslinovim uljem. Kao prilog poslužiti restani krumpir.`,
      mealImg: require("../../../images/boiledbeef.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Banana kruh",
      ingredients: [
        "smeđi šećer, 100 g",
        <br />,
        "banane, 3 komada",
        <br />,
        "maslac, 120 g",
        <br />,
        "pirovo brašno, 200 g",
        <br />,
        "prašak za pecivo, 1 paketić",
        <br />,
        "mlijeko, 75 ml",
        <br />,
        "jaje, 1 komad",
      ],
      prepare: `Zagrijte pećnicu na 190°C/ventilator 170°C. Dobro promiješajte navedene sastojke te ulijte smjesu u kalup. Pecite u zagrijanoj
      pećnici 40 minuta ili dok čačkalica umetnuta u sredinu štruce ne izađe čista.
      Nakon 30 minuta što se kruh peče, po površini možete dodajte nasjeckanu tamnu čokoladu (oko 50 g).
      Stavite na rešetku i ostavite da se potpuno ohladi. `,
      mealImg: require("../../../images/bananabread.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Tortilja",
      ingredients: [
        "kukuruzna tortilja, 1 komad",
        <br />,
        "sirni namaz, 1 žlica",
        <br />,
        "crvena paprika, pola komada",
        <br />,
        "matovilac, 1 šaka",
        <br />,
        "jogurt, 1 čaša",
      ],
      prepare: `Tortilju namazati sirnim namazom te napuniti povrćem. Dobro zamotati te poslužiti s probiotičkim jogurtom.`,
      mealImg: require("../../../images/wrap.jpg"),
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

export default Nedjelja;
