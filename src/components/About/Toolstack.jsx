import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea />
      </Col>
    </Row>
  );
}

export default Toolstack;