import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Iheb Cherif</span>, a 24-year-old from <span className="purple">Tunisia</span>.
            <br />
            I completed my high school diploma in Experimental Sciences in 2019, and I have been an engineering student at ESPRIT in Tunisia since 2020.
            <br />
            Currently, I am part of an exchange program in Computer Science and Finance at Hochschule Schmalkalden in Germany.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Going out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I always strive to learn new things and create better solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Iheb Cherif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
