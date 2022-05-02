import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./style.css";

import Ponedjeljak from "./ponedjeljak";
import Utorak from "./utorak";
import Srijeda from "./srijeda";
import Cetvrtak from "./cetvrtak";
import Petak from "./petak";
import Subota from "./subota";
import Nedjelja from "./nedjelja";
import { Col, Row } from "react-bootstrap";

const Daysinweek = () => {
  const DaysInWeek = [
    {
      key: 1,
      dayTitle: "Ponedjeljak",
      path: "ponedjeljak",
    },
    {
      key: 2,
      dayTitle: "Utorak",
      path: "utorak",
    },
    {
      key: 3,
      dayTitle: "Srijeda",
      path: "srijeda",
    },
    {
      key: 4,
      dayTitle: "Četvrtak",
      path: "cetvrtak",
    },
    {
      key: 5,
      dayTitle: "Petak",
      path: "petak",
    },
    {
      key: 6,
      dayTitle: "Subota",
      path: "subota",
    },
    {
      key: 7,
      dayTitle: "Nedjelja",
      path: "nedjelja",
    },
  ];

  return (
    <>
      <div className="AllButton">
        <Row>
        {DaysInWeek.map((item) => {
          return (
            <Col className="ButtonCol">
            <div className="ButtonDiv" key={item.key}>
              <Link to={item.path} key={item.key} className="OneButton">
                {item.dayTitle}
              </Link>
            </div>
            </Col>
          );
        })}
        </Row>
        
      </div>

      <div>
        <Routes>
          <Route path={"/ponedjeljak"} element={<Ponedjeljak />} />
          <Route path={"/utorak"} element={<Utorak />} />
          <Route path={"/srijeda"} element={<Srijeda />} />
          <Route path={"/cetvrtak"} element={<Cetvrtak />} />
          <Route path={"/petak"} element={<Petak />} />
          <Route path={"/subota"} element={<Subota />} />
          <Route path={"/nedjelja"} element={<Nedjelja />} />
        </Routes>
      </div>
    </>
  );
};

export default Daysinweek;
