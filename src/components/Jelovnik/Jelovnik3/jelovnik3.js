import React from "react";
import { Container } from "react-bootstrap";
import Daysinweek from "./daysinweek";
import "./style.css";

const Jelovnik3 = () => {
  return (
    <>
      <Container className="FirstContainer" fluid>
        <h1 className="FirstTitle">3. JELOVNIK</h1>
        <Daysinweek />
      </Container>
    </>
  );
};

export default Jelovnik3;
