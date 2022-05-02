import React from "react";
import { Container } from "react-bootstrap";
import Daysinweek from "./daysinweek";
import "./style.css";

const Jelovnik1 = () => {
  return (
    <>
      <Container className="FirstContainer" fluid>
        <h1 className="FirstTitle">1. JELOVNIK</h1>
        <Daysinweek />
      </Container>
    </>
  );
};

export default Jelovnik1;
