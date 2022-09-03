import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../redux/rootReducer";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Nabavka2 = () => {
  const Category = [
    {
      key: 100,
      bgColor: "rgba(175, 158, 131, 0.4)",
      catImg: require("../../../images/bread.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Kruh, žitarice, sjemenke",
      AddProduct1: [
        {
          key: 111,
          productName: "rižine pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 112,
          productName: "lanene sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 113,
          productName: "suncokret, sjeme, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 114,
          productName: "bučine sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 115,
          productName: "chia sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 116,
          productName: "palenta, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 117,
          productName: "integralni kruh, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 118,
          productName: "integralni krekeri, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 119,
          productName: "integralna riža, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],

      AddProduct3: [
        {
          key: 120,
          productName: "integralni fusilli, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 121,
          productName: "pirovo brašno, 1kg",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 122,
          productName: "granola, Boom Box, 300g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 123,
          productName: "zobene pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct4: [
        {
          key: 124,
          productName: "leća, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 125,
          productName: "proso, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 126,
          productName: "bulgur, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 127,
          productName: "griz, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
    },
    {
      key: 101,
      bgColor: "rgba(58, 63, 73, 0.4)",
      catImg: require("../../../images/grape.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Voće",
      AddProduct1: [
        {
          key: 128,
          productName: "kruška, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 129,
          productName: "jabuka, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 130,
          productName: "banana. kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 131,
          productName: "naranča, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 132,
          productName: "borovnice, paket",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 133,
          productName: "višnje, 400g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 134,
          productName: "kiwi, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 135,
          productName: "grožđice, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 136,
          productName: "orah, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 137,
          productName: "lješnjak, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 138,
          productName: "badem, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 139,
          productName: "suhe marelice, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct4: [],
    },
    {
      key: 103,
      bgColor: "rgba(15, 69, 30, 0.35)",
      catImg: require("../../../images/povrce.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Povrće",
      AddProduct1: [
        {
          key: 140,
          productName: "poriluk, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 141,
          productName: "češnjak, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 142,
          productName: "luk, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 143,
          productName: "mrkva, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 144,
          productName: "cikla, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 145,
          productName: "kelj, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct2: [
        {
          key: 146,
          productName: "tikva, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 147,
          productName: "paprika, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 148,
          productName: "batat, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 149,
          productName: "brokula, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 150,
          productName: "cvjetača, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 151,
          productName: "špinat, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct3: [
        {
          key: 152,
          productName: "bijeli kupus, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 153,
          productName: "celer, korijen, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 154,
          productName: "celer, stabljika, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 155,
          productName: "krastavac, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 156,
          productName: "zelena salata, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct4: [
        {
          key: 157,
          productName: "rikola, 100g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 158,
          productName: "slanutak, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 159,
          productName: "pelat, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 160,
          productName: "kukuruz, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 161,
          productName: "grah, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
    },
    {
      key: 104,
      bgColor: "rgba(175, 172, 94, 0.4)",
      catImg: require("../../../images/mlijeko.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Mlijeko i mliječni proizvodi",
      AddProduct1: [
        {
          key: 162,
          productName: "mlijeko, 1l",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 163,
          productName: "kefir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 164,
          productName: "probiotik, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 165,
          productName: "kiselo mlijeko, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 166,
          productName: "zrnati sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 167,
          productName: "feta sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 168,
          productName: "mladi sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 169,
          productName: "sirni namaz, 100g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 170,
          productName: "maslac, 250g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct4: [],
    },
    {
      key: 105,
      bgColor: "rgba(192, 95, 112, 0.3)",
      catImg: require("../../../images/meso.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Meso, riba, jaja",
      AddProduct1: [
        {
          key: 171,
          productName: "pileća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 172,
          productName: "pureća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 173,
          productName: "svinjski kare, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 174,
          productName: "oslić, kom",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 175,
          productName: "jaja, paket",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 176,
          productName: "pureća šunka, 100g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 177,
          productName: "tuna, konzerva",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 178,
          productName: "plodovi mora, 300g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 106,
      bgColor: "rgba(106, 36, 36, 0.3)",
      catImg: require("../../../images/namazi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Namazi",
      AddProduct1: [
        {
          key: 179,
          productName: "mermelada, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
        {
          key: 180,
          productName: "kikiriki maslac, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 107,
      bgColor: "rgba(175, 158, 131, 0.68)",
      catImg: require("../../../images/slatkisi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Slatkiši",
      AddProduct1: [],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 108,
      bgColor: "rgba(44, 41, 32, 0.4)",
      catImg: require("../../../images/pica.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Pića",
      AddProduct1: [
        {
          key: 181,
          productName: "čaj od mente",
          frColor: "rgba(44, 41, 32, 0.4)",
        },
        {
          key: 182,
          productName: "zeleni čaj",
          frColor: "rgba(44, 41, 32, 0.4)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 109,
      bgColor: "rgba(74, 75, 22, 0.3)",
      catImg: require("../../../images/dodaci.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Dodaci",
      AddProduct1: [
        {
          key: 183,
          productName: "cimet",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 184,
          productName: "peršin",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 185,
          productName: "med, 500g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 186,
          productName: "kakao, prah",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 187,
          productName: "mljeveni rogač, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 188,
          productName: "maslinovo ulje, 1l",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 189,
          productName: "kokos, mrvice",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
            key: 190,
            productName: "smeđi šećer, 200g",
            frColor: "rgba(74, 75, 22, 0.3)",
          },
      ],
      AddProduct3: [
        {
          key: 191,
          productName: "prašak za pecivo",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
       
        {
          key: 192,
          productName: "ekstrakt vanilije",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
            key: 193,
            productName: "kurkuma, paket",
            frColor: "rgba(74, 75, 22, 0.3)",
          },
         
          {
            key: 194,
            productName: "origano, paket",
            frColor: "rgba(74, 75, 22, 0.3)",
          },
      ],
      AddProduct4: [],
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
        <h1 className="NabavkaTitle">NABAVKA 2</h1>
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

export default Nabavka2;
