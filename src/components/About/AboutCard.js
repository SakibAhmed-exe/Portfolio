import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Sakib Ahmed </span>
            from <span className="purple"> New York, NY.</span>
            <br />
            I'm a recent graduate from New York University with an undergraduate degree in Computer Science and Economics. I've also interned at Amazon as a Software Development Engineer and have experience with full stack development, agile environments, and working on large scalable services.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Eating New Foods
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be motivated by Impact not by Perception"{" "}
          </p>
          <footer className="blockquote-footer">Sakib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
