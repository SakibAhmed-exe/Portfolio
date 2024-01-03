import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a curious person who has always been passionate about technology, building things, and problem solving 
              <br />
              <br /> I'm fluent in
              <i>
                <b className="purple"> Java, Python, and JavaScript</b>
              </i>
              <br />
              <br /> I also have experience with 
              <i>
                <b className="purple"> AWS Services (S3, Lambda, EC2, API Gateway, CloudWatch) </b> 
              </i>
                and have worked with large codebases and deployed high-scale production code in a CI/CD environment
              <br />
              <br />
              In my freetime, I have built web applications with 
              <i>
              <b className="purple"> React</b> 
              </i>
                , created and trained classification and regression models with 
              <i>
                <b className="purple"> Neural Networks, Dimensionality Reduction, and Clustering</b>
              </i>
                , and developed iOS projects with 
              <i>
                <b className="purple"> Swift </b> 
              </i>  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SakibAhmed-exe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sakibahmed-exe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
