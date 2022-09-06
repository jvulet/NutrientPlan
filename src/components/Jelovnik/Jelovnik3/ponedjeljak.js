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
      mealname: "Heljdina kaša",
      ingredients: [
        "heljdine pahuljice, 5 žlica",
        <br />,
        "narančin sok, 1 čaša",
        <br />,
        "med, 1 čajna žlica",
      ],
      prepare: `Iscijediti sok od naranče te ga zagrijati do vrenja. Potom u njemu skuhati med i heljdine pahuljice. Kuhati uz stalno miješanje, na
      laganoj vatri oko 5 minuta.`,
      mealImg: require("../../../images/buckwheat.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 2,
      name: "UŽINA",
      mealname: "Voćka po izboru",
      ingredients: ["Banana, 1 komad"],
      prepare: `Možete izabrati bilo koju voćku umjesto navedene.`,
      mealImg: require("../../../images/banana.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 3,
      name: "RUČAK",
      bgColor: "#c4c4c4",
      mealname: "Varivo",
      ingredients: [
        "varivo, 1 tanjur",
        <br />,
        "zelena salata, 1 šalica",
        <br />,
        "maslinovo ulje, 1 čajna žlica",
      ],
      prepare: `Pileća prsa prvo isfiletirati, a potom ih narezati a manje trakice. Prepržiti ih na maslinovom ulju dok ne dobiju zlatnu boju. Potom
      dodati bulgur mješavinu i začine po želji (sol, papar, crvena paprika, češnjak). Dobro izmiješati te podliti vodom. Kuhati na laganoj
      vatri uz povremeno miješanje oko 10 minuta.
      Poslužiti uz zelenu salatu.`,
      mealImg: require("../../../images/bulgur.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 4,
      name: "MEĐUOBROK",
      mealname: "Sirova pločica",
      ingredients: [
        "energetska pločica, 1 komad",
        <br />,
        "probiotik, 1 čaša",
      ],
      prepare: `Datulje, bademe, orahe, kakao i sol stavite u blender te grubo sameljite. Potom dodajte kokos i ekstrakt vanilije. Ponovno smjesu
      izradite u blenderu, dodavajući žlicu po žlicu vode, sve dok ne dobijete vlažnu, ali ne i ljepljivu smjesu. Potom smjesu prebacite na
      manji pleh prekriven masnim papirom i utisnite. Ostavite da se hladi u hladnjaku sat vremena prije posluživanja. Ovako
      pripremljene pločice možete pospremiti u hladnjak i čuvati do 7 dana.`,
      mealImg: require("../../../images/energybar.jpg"),
      imhHeight: "320px",
      imWidth: "246px",
    },
    {
      key: 5,
      name: "VEČERA",
      bgColor: "#c4c4c4",
      mealname: "Punjena tortilja",
      ingredients: [
        "tortilja, 1 komad",
        <br />,
        "svježi sir, 3 žlice",
        <br />,
        "pureća šunka, 2 kriške",
        <br />,
        "zelena salata, 2 lista",
        <br />,
        "mrkva, 1 komad",
      ],
      prepare: `Tortilju kratko prepržiti na tavi, a potom ju napuniti predloženim sastojcima. Zarolati i poslužiti. Također, ovaj obrok možete
      pripremiti prije treninga, zamotati tortilju u alu foliju te ju pospremiti u hladnjak.`,
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

export default Ponedjeljak;