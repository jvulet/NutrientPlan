import React from "react";
import { Container } from "react-bootstrap";
import Daysinweek from "./daysinweek";
import "./style.css";

const Jelovnik2 = () => {
  return (
    <>
      <Container className="FirstContainer" fluid>
        <h1 className="FirstTitle">2. JELOVNIK</h1>
        <Daysinweek />
      </Container>
    </>
  );
};

export default Jelovnik2;
