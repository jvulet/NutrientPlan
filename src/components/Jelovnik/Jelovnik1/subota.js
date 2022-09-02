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
      mealname: "Proteinske palačinke",
      ingredients: [
        "zobene pahuljice, 5 žlica",
        <br />,
        "svježi sir, 4 žlice",
        <br />,
        "bjelanjak, 3 komada",
        <br />,
        "kikirikijev maslac, 1 žlica"
      ],
      prepare: `Pomiješajte sitne zobene pahuljice, svježi sir i bjelanjke dok smjesa nije jednolična i tekuća. Pecite kao klasične palačinke na par kapi ulja. Po želji u
      palačinke možete umiješati i cimet ili rogač.`,
      mealImg: require("../../../images/pancake.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: [
        "kruška, 1 komad"
      ],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/pear.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Puretina na talijanski",
      ingredients: [
        "puretina na talijanski, 1 kacijola",
        <br />,
        "integralna tjestenina, 2 kacijole",
        <br />,
        "bijeli kupus, 1 šalice",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Na maslinovom ulju kratko prodinstajte luk, a potom i pureća prsa narezana na kockice. Potom dodajte pelate i tikvicu
      narezanu na kockice. Kuhajte na laganoj vatri dok povrće ne omekša i voda ispari. Tokom kuhanja dodajte začine po želji poput
      češnjaka, peršina i origana. Poslužite s integralnom tjesteninom.`,
      mealImg: require("../../../images/italianpasta.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Kremica od sira i višanja",
      ingredients: [
        "skyr, 3 žlice",
        <br />,
        "višnje, pola šalice",
        <br />,
        "med, 1 žlica",
      ],
      prepare: `Sve sastojke prebacite u blender i usitnite dok ne dobijete jednoličnu smjesu. Također, Sve sastojke možete konzumirati i cjelovite
      bez prethodnog usitnjavanja.`,
      mealImg: require("../../../images/cherrycream.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Omlet sa špinatom",
      ingredients: [
        "jaje, 2 komada",
        <br />,
        "špinat, 1 šalica",
        <br />,
        "poriluk, 1 komad",
        <br />,
        "maslinovo ulje, 1 žlica",
        <br />,
        "integralni kruh, 2 kriške",
      ],
      prepare: `Na par kapi maslinovog ulja kratko prodinstajte poriluk narezan na tanke kolutove, a potom i špinat. Dinstajte dok špinat ne uvene.
      Povrće potom prelijte razmućenim jajima te kuhajte na laganoj vatri uz stalno miješanje dok se jaja ne stisnu. Poslužite na
      prepečenom integralnom kruhu.`,
      mealImg: require("../../../images/spomelet.jpg"),
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

export default Subota;
