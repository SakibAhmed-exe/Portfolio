import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRedux,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import {
  FaReact,
} from "react-icons/fa";

function Librarystack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
    </Row>
  );
}

export default Librarystack;
