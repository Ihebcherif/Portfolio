import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import sdlGame from "../../Assets/Projects/sdlGame.png";
import sps from "../../Assets/Projects/sps.png";
import smartGarden from "../../Assets/Projects/smartGarden.png";
import efit from "../../Assets/Projects/efit.png";
import financialAnalysis from "../../Assets/Projects/financialAnalysis.png";
import lifeActuarial from "../../Assets/Projects/lifeActuarial.png";
import api from "../../Assets/Projects/api.png";
import ecct from "../../Assets/Projects/ecct.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecct}
              isBlog={false}
              title="E-CCT: Internship"
              description="Enhanced the Tunisian Accountants Association CCT website with dynamic menus tailored to user roles and privileges, improving access control and functionality."
              ghLink="."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="All People Invest (API)"
              description="An application for managing micro-insurance and micro-credit with financial simulators and customer tracking. Developed using UML for design, Spring Boot and Java for the backend, and Angular with TypeScript for the frontend, with GIT for version control."
           ghLink="https://github.com/Ihebcherif/MicroFinance-FrontEnd"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lifeActuarial}
              isBlog={false}
              title="Life Actuarial Project"
              description="Conducted actuarial risk modeling to evaluate risks and set insurance premiums using data analysis, Monte Carlo simulations, and mortality models, all implemented in R."
            ghLink="https://github.com/Ihebcherif/Life-Actuarial-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialAnalysis}
              isBlog={false}
              title="Financial Analysis Project"
              description="Managed a financial portfolio for the Tunisian stock market, calculating returns and risks using Value at Risk (VaR). Developed a simulation tool using Excel and VBA for enhanced analysis."
            ghLink="."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={efit}
              isBlog={false}
              title="E-FIT"
              description="A multiplatform app for purchasing sports equipment, creating events, and connecting with private coaches. Developed with HTML, CSS, JavaScript, PHP, Java, Symfony, Bootstrap, JavaFX, and Codename One, utilizing phpMyAdmin, Visual Studio Code, and GIT for version control."
            ghLink="https://github.com/Ihebcherif/EFIT-Web"
          

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartGarden}
              isBlog={false}
              title="Smart Garden"
              description="An automated irrigation system for small and large gardens that adjusts watering based on weather, conserving water while enhancing plant health. Developed using PIC16F84, MikroC, MPLAB, and C Assembler."
            ghLink="."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sps}
              isBlog={false}
              title="Qt-Arduino Project "
              description="Smart Printing System 'SPS', a desktop app for printing companies, centralizes data to boost profitability and performance, reducing costs. Includes Arduino-based ink level automation to streamline printing operations efficiently."
               ghLink="https://github.com/Ihebcherif/Qt-Project-Arduino"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sdlGame}
              isBlog={false}
              title="SDL Game"
              description="Developed a simple game in C using SDL 1.2, where player input was managed through an Arduino-based joystick. The game, designed for Ubuntu, leveraged SDL for graphics and user input, with joystick commands handled via serial communication for seamless in-game actions."
            ghLink="."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
