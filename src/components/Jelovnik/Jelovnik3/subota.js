import React, { useState } from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Subota = () => {
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
      mealname: "Kikiriki tost",
      ingredients: [
        "integralni kruh, 1 kriška",
        <br />,
        "kikirikijev maslac, 1 žlica",
        <br />,
        "banana, 1 komad",
      ],
      prepare: `Na kruh namazati kikiriki maslac. Bananu narezati na kolutiće
      pa posložiti na vrh.`,
      mealImg: require("../../../images/kikirikitost.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Acidofil",
      ingredients: ["acidofil, 1 čaša"],
      prepare: `Umjesto acidofila možete uzeti kefir, kiselo mlijeko ili probiotik.`,
      mealImg: require("../../../images/yogo.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Polpete od prosa",
      ingredients: [
        "juha od brokule, 1 tanjur",
        <br />,
        "piletina, 1 file",
        <br />,
        "polpete od prosa, 2 komada",
      ],
      prepare: `U duplo više vode skuhati proso sa začinima. Po potrebi dodati još vode. Za skuhati proso potrebno je oko 8 minuta, odnosno dok
      ne dobijete gustu smjesu. Ostaviti kuhani proso po strani da se ohladi tako da ga možete rukom oblikovati u polpete. U
      međuvremenu narezati mladi sir na kockice ili ga naribati. Sjemenke tostirati za bolji okus. Sve zajedno pomiješati. Dodati 1-2 žlice
      krušnih mrvica. Smjesu oblikovati među rukama u 8 polpeta. Staviti ih na masni papir te peći u pećnici na 180 stupnjeva oko 10
      minuta sa svake strane.`,
      mealImg: require("../../../images/polpete.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Voćka po izboru",
      ingredients: ["kiwi, 2 komada"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/kiwi.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Palačinke",
      ingredients: [
        "palačinke, 4 komada",
        <br />,
        "mermelada, 1 žlica",
      ],
      prepare: `Jednu šalicu mlake vode pomiješati sa šećerom i kvascem pa pustiti par minuta da se poveže. U blenderu izmiješati drugu šalicu
      vode, šalicu griza, koricu naranče, sok od naranče ili jabuke i prstohvat soli. Dodati u blender i smjesu s kvascem te dobivenu
      smjesu ostavite 30 minuta. Peći na kokosovom ulju, na vrućoj tavici po 2 minute sa svake strane.`,
      mealImg: require("../../../images/pancakes.jpg"),
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

export default Subota;
