import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJava,
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiDocker,
} from "react-icons/di";
import {
    SiKotlin,
    SiMysql,
    SiApachekafka,
    SiApachemaven,
    SiSpring,
    

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;