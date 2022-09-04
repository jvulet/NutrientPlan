import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../redux/rootReducer";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Nabavka3 = () => {
  const Category = [
    {
      key: 200,
      bgColor: "rgba(175, 158, 131, 0.4)",
      catImg: require("../../../images/bread.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Kruh, žitarice, sjemenke",
      AddProduct1: [
        {
          key: 210,
          productName: "heljdine pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 211,
          productName: "lanene sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 212,
          productName: "suncokret, sjeme, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 213,
          productName: "bučine sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 214,
          productName: "chia sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 215,
          productName: "palenta, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 216,
          productName: "integralni kruh, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 217,
          productName: "integralni krekeri, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 218,
          productName: "krušne mrvice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 219,
          productName: "kukuruzna tortilja, 250g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],

      AddProduct3: [
        {
          key: 220,
          productName: "integralni fusilli, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 221,
          productName: "pirovo brašno, 1kg",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 222,
          productName: "ražene pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 223,
          productName: "zobene pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 224,
          productName: "ječam, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct4: [
        {
          key: 225,
          productName: "kvinoja, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 226,
          productName: "proso, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 227,
          productName: "bulgur, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 228,
          productName: "griz, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
    },
    {
      key: 201,
      bgColor: "rgba(58, 63, 73, 0.4)",
      catImg: require("../../../images/grape.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Voće",
      AddProduct1: [
        {
          key: 229,
          productName: "kruška, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 230,
          productName: "jabuka, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 231,
          productName: "banana. kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 232,
          productName: "naranča, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 233,
          productName: "limun, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 234,
          productName: "klementina, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 235,
          productName: "višnje, 400g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 236,
          productName: "kiwi, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 237,
          productName: "avokado, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 238,
          productName: "datulje, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 239,
          productName: "orah, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },

        {
          key: 240,
          productName: "badem, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 241,
          productName: "indijski oraščić, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 242,
          productName: "suhe brusnice, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct4: [],
    },
    {
      key: 203,
      bgColor: "rgba(15, 69, 30, 0.35)",
      catImg: require("../../../images/povrce.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Povrće",
      AddProduct1: [
        {
          key: 243,
          productName: "blitva, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 244,
          productName: "špinat, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 245,
          productName: "luk, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 246,
          productName: "mrkva, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 247,
          productName: "cikla, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 248,
          productName: "češnjak, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct2: [
        {
          key: 249,
          productName: "tikva, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 250,
          productName: "paprika, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 251,
          productName: "batat, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 252,
          productName: "brokula, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 253,
          productName: "cvjetača, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 254,
          productName: "špinat, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct3: [
        {
          key: 255,
          productName: "krumpir, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 256,
          productName: "bob, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 257,
          productName: "rajčice, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 258,
          productName: "krastavac, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 259,
          productName: "zelena salata, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct4: [
        {
          key: 260,
          productName: "rikola, 100g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 261,
          productName: "bijeli kupus, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 262,
          productName: "slanutak, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 263,
          productName: "pelat, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 264,
          productName: "grašak, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
    },
    {
      key: 204,
      bgColor: "rgba(175, 172, 94, 0.4)",
      catImg: require("../../../images/mlijeko.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Mlijeko i mliječni proizvodi",
      AddProduct1: [
        {
          key: 265,
          productName: "mlijeko, 1l",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 266,
          productName: "kefir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 267,
          productName: "probiotik, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 268,
          productName: "kiselo mlijeko, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 269,
          productName: "skyr, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 270,
          productName: "svježi sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 271,
          productName: "feta sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 272,
          productName: "skyrella, kom",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 273,
          productName: "mladi sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 274,
          productName: "posni sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 275,
          productName: "parmezan, kom",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct4: [],
    },
    {
      key: 205,
      bgColor: "rgba(192, 95, 112, 0.3)",
      catImg: require("../../../images/meso.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Meso, riba, jaja",
      AddProduct1: [
        {
          key: 276,
          productName: "pileća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 277,
          productName: "pureća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 278,
          productName: "junetina, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 279,
          productName: "srdele, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 280,
          productName: "jaja, paket",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 281,
          productName: "pureća šunka, 100g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 282,
          productName: "tuna, konzerva",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 206,
      bgColor: "rgba(106, 36, 36, 0.3)",
      catImg: require("../../../images/namazi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Namazi",
      AddProduct1: [
        {
          key: 283,
          productName: "mermelada, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
        {
          key: 284,
          productName: "kikiriki maslac, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
        {
          key: 285,
          productName: "pesto genovese, 200g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 207,
      bgColor: "rgba(175, 158, 131, 0.68)",
      catImg: require("../../../images/slatkisi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Slatkiši",
      AddProduct1: [{
        key: 286,
        productName: "tamna čokolada, 200g",
        frColor: "rgba(106, 36, 36, 0.3)",
      },],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 208,
      bgColor: "rgba(44, 41, 32, 0.4)",
      catImg: require("../../../images/pica.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Pića",
      AddProduct1: [
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 209,
      bgColor: "rgba(74, 75, 22, 0.3)",
      catImg: require("../../../images/dodaci.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Dodaci",
      AddProduct1: [
        {
          key: 287,
          productName: "cimet",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 289,
          productName: "peršin",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 290,
          productName: "med, 500g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 291,
          productName: "kakao, prah",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 292,
          productName: "kapari, 60g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 293,
          productName: "suhi kvasac, kom",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 294,
          productName: "maslinovo ulje, 1l",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 295,
          productName: "kokosovo ulje, 500g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 296,
          productName: "kokos, mrvice",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 297,
          productName: "vlasac, paket",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct3: [
        {
          key: 298,
          productName: "prašak za pecivo",
          frColor: "rgba(74, 75, 22, 0.3)",
        },

        {
          key: 299,
          productName: "ekstrakt vanilije",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 300,
          productName: "crvena paprika, paket",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 301,
          productName: "kurkuma, paket",
          frColor: "rgba(74, 75, 22, 0.3)",
        },

        {
          key: 302,
          productName: "origano, paket",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct4: [
        {
          key: 303,
          productName: "papar, paket",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 304,
          productName: "spirulina, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 305,
          productName: "senf, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 306,
          productName: "smeđi šećer, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
    },
  ];

  const dispatch = useDispatch();
  let cart = useSelector((state) => state.product);

  console.log(cart);

  const handleAddToCart = async (product) => {
    dispatch(addToCart(product));
  };

  useEffect(async () => {
    const docRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await setDoc(docRef, cart);
  }, [cart]);

  return (
    <Container className="NabCont" fluid>
      <div className="div-title">
        <h1 className="NabavkaTitle">NABAVKA 3</h1>
        <p className="instruction-txt">
          Dodaj namirnice na svoj popis za kupovinu:
        </p>
      </div>
      {Category.map((item, index) => {
        return (
          <>
            <Container key={index} className="CatContainer" fluid>
              <Row className="rowCat">
                <Col className="first-column" xs={6} md={6} lg={4}>
                  <Row>
                    <p
                      className="typeName"
                      style={{
                        backgroundColor: item.bgColor,
                        borderRadius: "5px",
                      }}
                    >
                      {item.ctgName}
                    </p>
                  </Row>
                  <Image
                    className="cat-img"
                    src={item.catImg}
                    alt="category"
                    style={{ height: item.imhHeight, width: item.imWidth }}
                    fluid
                  />
                </Col>

                <Col
                  className="sec-column"
                  xs={6}
                  md={6}
                  lg={8}
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Row>
                    <Col xs={3} md={3} lg={3} className="txt-col1">
                      {item.AddProduct1.map((it, ind) => {
                        return (
                          <>
                            <Row key={ind} className="row-item">
                              <p className="product-name">{it.productName}</p>
                              <FontAwesomeIcon
                                className="circleplus-icon"
                                icon={faCirclePlus}
                                color={"#1f1f1f"}
                                size={"sm"}
                                onClick={() => {
                                  /* console.log(item.AddProduct1[ind]); */
                                  handleAddToCart(item.AddProduct1[ind]);
                                }}
                              />
                            </Row>
                          </>
                        );
                      })}
                    </Col>

                    <Col xs={3} md={3} lg={3} className="txt-col2">
                      {item.AddProduct2.map((it, ind) => {
                        return (
                          <>
                            <Row key={ind} className="row-item">
                              <p className="product-name">{it.productName}</p>
                              <FontAwesomeIcon
                                className="circleplus-icon"
                                icon={faCirclePlus}
                                color={"#1f1f1f"}
                                size="m"
                                onClick={() => {
                                  handleAddToCart(item.AddProduct2[ind]);
                                }}
                              />
                            </Row>
                          </>
                        );
                      })}
                    </Col>

                    <Col xs={3} md={3} lg={3} className="txt-col3">
                      {item.AddProduct3.map((it, ind) => {
                        return (
                          <>
                            <Row key={ind} className="row-item">
                              <p className="product-name">{it.productName}</p>
                              <FontAwesomeIcon
                                className="circleplus-icon"
                                icon={faCirclePlus}
                                color={"#1f1f1f"}
                                size="sm"
                                onClick={() => {
                                  handleAddToCart(item.AddProduct3[ind]);
                                }}
                              />
                            </Row>
                          </>
                        );
                      })}
                    </Col>
                    <Col xs={3} md={3} lg={3} className="txt-col4">
                      {item.AddProduct4.map((it, ind) => {
                        return (
                          <>
                            <Row key={ind} className="row-item">
                              <p className="product-name">{it.productName}</p>
                              <FontAwesomeIcon
                                className="circleplus-icon"
                                icon={faCirclePlus}
                                color={"#1f1f1f"}
                                size="m"
                                onClick={() => {
                                  handleAddToCart(item.AddProduct4[ind]);
                                }}
                              />
                            </Row>
                          </>
                        );
                      })}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </>
        );
      })}
    </Container>
  );
};

export default Nabavka3;
