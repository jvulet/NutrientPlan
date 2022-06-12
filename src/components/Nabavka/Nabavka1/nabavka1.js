import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/rootReducer";
import { auth, db } from "../../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Nabavka1 = () => {
  const Category = [
    {
      key: 1,
      bgColor: "rgba(175, 158, 131, 0.4)",
      catImg: require("../../../images/bread.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Kruh, žitarice, sjemenke",
      AddProduct1: [
        {
          key: 11,
          productName: "heljdine pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 12,
          productName: "lanene sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 13,
          productName: "suncokret, sjeme, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 14,
          productName: "bučine sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 15,
          productName: "chia sjemenke, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 16,
          productName: "palenta, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 17,
          productName: "integralni kruh, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 18,
          productName: "integralni krekeri, 200g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 19,
          productName: "integralna riža, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],

      AddProduct3: [
        {
          key: 20,
          productName: "integralni fusilli, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 21,
          productName: "pirovo brašno, 1kg",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 22,
          productName: "kukuruzna tortilja, 250g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 23,
          productName: "zobene pahuljice, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
      AddProduct4: [
        {
          key: 24,
          productName: "leća, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 25,
          productName: "proso, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 26,
          productName: "kvinoja, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
        {
          key: 27,
          productName: "ječam, 500g",
          frColor: "rgba(175, 158, 131, 0.4)",
        },
      ],
    },
    {
      key: 2,
      bgColor: "rgba(58, 63, 73, 0.4)",
      catImg: require("../../../images/grape.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Voće",
      AddProduct1: [
        {
          key: 28,
          productName: "kruška, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 29,
          productName: "jabuka, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 30,
          productName: "banana. kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 31,
          productName: "naranča, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 32,
          productName: "mandarina, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 33,
          productName: "limun, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 34,
          productName: "kiwi, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 35,
          productName: "ananas, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 36,
          productName: "avokado, kom",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 37,
          productName: "maline, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 38,
          productName: "višnje, 400g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 39,
          productName: "badem, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
      AddProduct4: [
        {
          key: 40,
          productName: "orah, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 41,
          productName: "lješnjak, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 42,
          productName: "suhe marelice, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
        {
          key: 43,
          productName: "suhe brusnice, 200g",
          frColor: "rgba(58, 63, 73, 0.4)",
        },
      ],
    },
    {
      key: 3,
      bgColor: "rgba(15, 69, 30, 0.35)",
      catImg: require("../../../images/povrce.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Povrće",
      AddProduct1: [
        {
          key: 44,
          productName: "poriluk, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 45,
          productName: "češnjak, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 46,
          productName: "luk, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 47,
          productName: "mrkva, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 48,
          productName: "cikla, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 49,
          productName: "tikvica, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct2: [
        {
          key: 50,
          productName: "tikva, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 51,
          productName: "paprika, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 52,
          productName: "batat, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 53,
          productName: "krumpir, 1kg",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 54,
          productName: "prokulice, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 55,
          productName: "špinat, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct3: [
        {
          key: 56,
          productName: "rajčice, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 57,
          productName: "bijeli kupus, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 58,
          productName: "kiseli kupus, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 59,
          productName: "zelene mahune, 500g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 60,
          productName: "zelena salata, kom",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
      AddProduct4: [
        {
          key: 61,
          productName: "matovilac, 100g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 62,
          productName: "rikola, 100g",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 63,
          productName: "pelat, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 64,
          productName: "kukuruz, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
        {
          key: 65,
          productName: "grah, konzerva",
          frColor: "rgba(15, 69, 30, 0.35)",
        },
      ],
    },
    {
      key: 4,
      bgColor: "rgba(175, 172, 94, 0.4)",
      catImg: require("../../../images/mlijeko.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Mlijeko i mliječni proizvodi",
      AddProduct1: [
        {
          key: 66,
          productName: "mlijeko, 1l",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 67,
          productName: "kefir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 68,
          productName: "probiotik, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 69,
          productName: "acidofil, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct2: [
        {
          key: 70,
          productName: "zrnati sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 71,
          productName: "svježi sir, 200g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 72,
          productName: "skyr, 150g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct3: [
        {
          key: 73,
          productName: "sirni namaz, 100g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 74,
          productName: "maslac, 250g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
        {
          key: 75,
          productName: "skyrella, 125g",
          frColor: "rgba(175, 172, 94, 0.4)",
        },
      ],
      AddProduct4: [],
    },
    {
      key: 5,
      bgColor: "rgba(192, 95, 112, 0.3)",
      catImg: require("../../../images/meso.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Meso, riba, jaja",
      AddProduct1: [
        {
          key: 76,
          productName: "pileća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 77,
          productName: "pureća prsa, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 78,
          productName: "teletina, 500g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 79,
          productName: "oslić, kom",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 80,
          productName: "jaja, paket",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 81,
          productName: "pureća šunka, 100g",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
        {
          key: 82,
          productName: "tuna, konzerva",
          frColor: "rgba(192, 95, 112, 0.3)",
        },
      ],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 6,
      bgColor: "rgba(106, 36, 36, 0.3)",
      catImg: require("../../../images/namazi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Namazi",
      AddProduct1: [
        {
          key: 83,
          productName: "mermelada, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
        {
          key: 84,
          productName: "kikiriki maslac, 350g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
        {
          key: 85,
          productName: "hummus, 130g",
          frColor: "rgba(106, 36, 36, 0.3)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 7,
      bgColor: "rgba(175, 158, 131, 0.68)",
      catImg: require("../../../images/slatkisi.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Slatkiši",
      AddProduct1: [
        {
          key: 86,
          productName: "tamna čokolada, 150g",
          frColor: "rgba(175, 158, 131, 0.68)",
        },
        {
          key: 87,
          productName: "grancereale, zobeni keksi",
          frColor: "rgba(175, 158, 131, 0.68)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 8,
      bgColor: "rgba(44, 41, 32, 0.4)",
      catImg: require("../../../images/pica.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Pića",
      AddProduct1: [
        {
          key: 88,
          productName: "čaj od mente",
          frColor: "rgba(44, 41, 32, 0.4)",
        },
        {
          key: 89,
          productName: "zeleni čaj",
          frColor: "rgba(44, 41, 32, 0.4)",
        },
      ],
      AddProduct2: [],
      AddProduct3: [],
      AddProduct4: [],
    },
    {
      key: 9,
      bgColor: "rgba(74, 75, 22, 0.3)",
      catImg: require("../../../images/dodaci.jpg"),
      imhHeight: "190px",
      imWidth: "496px",
      ctgName: "Dodaci",
      AddProduct1: [
        {
          key: 90,
          productName: "cimet",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 91,
          productName: "peršin",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 92,
          productName: "med, 500g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 93,
          productName: "kakao, prah",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct2: [
        {
          key: 94,
          productName: "mljeveni rogač, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 95,
          productName: "maslinovo ulje, 1l",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 96,
          productName: "kokos, mrvice",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct3: [
        {
          key: 97,
          productName: "prašak za pecivo",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 98,
          productName: "smeđi šećer, 200g",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
        {
          key: 99,
          productName: "ekstrakt vanilije",
          frColor: "rgba(74, 75, 22, 0.3)",
        },
      ],
      AddProduct4: [],
    },
  ];

  const dispatch = useDispatch();

  const [product, setProduct] = useState("");
  const handleAddToCart = async (product) => {
    console.log(product.key);
    console.log(product.frColor);
    dispatch(addToCart(product));
    try {
      
      await setDoc(
        doc(db, "groceryList", `${auth.currentUser.uid}`),
        {
          productName: arrayUnion(...product),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="NabCont" fluid>
      <div className="div-title">
        <h1 className="NabavkaTitle">NABAVKA 1</h1>
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

export default Nabavka1;
