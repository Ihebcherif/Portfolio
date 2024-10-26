import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiPython,
  DiPhp,
  DiJavascript1,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiC,
  SiCsharp,
  SiTypescript,
  SiSpringboot,
  SiAngular,
  SiDotnet,
  SiSymfony,
  SiMysql,
  SiOracle,
  SiMicrosoftsqlserver,
  SiR,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // Placeholder for PLSQL, Qt, JavaFX, Codename One

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC /> {/* C */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* C++ */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp /> {/* C# */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /> {/* PHP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR /> {/* R */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>

      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony /> {/* Symfony */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /> {/* Spring Boot */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular /> {/* Angular */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> {/* .NET */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* Placeholder for JavaFX, Qt, Codename One */}
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /> {/* Oracle */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver /> {/* SQL Server */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* Placeholder for PLSQL */}
      </Col>
    </Row>
  );
}

export default Techstack;
