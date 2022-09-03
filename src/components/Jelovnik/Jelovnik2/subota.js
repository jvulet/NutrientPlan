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
      mealname: "Antioksidans napitak",
      ingredients: [
        "kiwi, 1 komad",
        <br />,
        "jabuka, polovica",
        <br />,
        "stabljika celera, polovica",
        <br />,
        "bučine sjemenke, 1 žlica",
      ],
      prepare: `Staviti navedene sastojke u blender, po želji dodati malo vode.`,
      mealImg: require("../../../images/celery.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Bademi",
      ingredients: ["bademi, 1 šaka"],
      prepare: `Možete uzeti i neko drugo orašasto voće u istoj 
      količini.`,
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
        "varivo od kelja i bulgura, 1 tanjur",
        <br />,
        "grill piletina, 1 file",
      ],
      prepare: `Kuhati kelj s porilukom na laganoj vatri, 
      zadnjih 20 minuta umiješati bulgur. Po potrebi podlijevati vodom.
       Poslužiti uz file piletine pečen na naglo.`,
      mealImg: require("../../../images/kalebulgur.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Muffini",
      ingredients: ["muffini, 2 komada", 
      <br />, 
      "zeleni čaj, 1 šalica"],
      prepare: `Vilicom zdrobiti 1 bananu i umiješati 3 jaja, 200 ml jogurta,
       200 ml mlijeka, 280 g pirova brašna, pola vrećine praška
        za pecivo, 150 g višanja, prstohvat soli, 3 žlice meda,
         50 g maslaca i aromu vanilije. 
      Dodati suhe sastojke, sve izmiješati mikserom i izliti 
      u kalupe za
      muffine. Peći oko 25 min na 180 stupnjeva. Količina
       je dovoljna za 15-20 muffina, ovisno o veličini kalupa.`,
      mealImg: require("../../../images/muffins.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Šarena salata od piletine",
      ingredients: [
        "piletina, 1 file",
        <br />,
        "kupus, 1 šalica",
        <br />,
        "ribana mrkva , 1 komad",
        <br />,
        "kukuruz, 4 žlice",
        <br />,
        "maslinovo ulje, 2 čajne žlice",
      ],
      prepare: `Pileći file natrgati vilicom na manje komade. Pomiješati zajedno s ostalim sastojcima te začiniti octom i maslinovim uljem. Umjesto
      kukuruza u salatu možete umiješati kuhanu kvinoju, kuskus ili bulgur.`,
      mealImg: require("../../../images/chickensalad.jpg"),
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

export default Subota;
