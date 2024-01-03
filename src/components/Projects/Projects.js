import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter from "../../Assets/Projects/twitter.png";
import tip from "../../Assets/Projects/tip.png";
import cshell from "../../Assets/Projects/cshell.png";
import pinkbird from "../../Assets/Projects/pinkbird.png";
import flix from "../../Assets/Projects/flix.png";
import capstone from "../../Assets/Projects/capstone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinkbird}
              isBlog={false}
              title="PinkBird"
              description="PinkBird is a web application that offers users the ability to scan the barcode of a product and recieve the Pink Tax associated with products."
              ghLink="https://github.com/SakibAhmed-exe/PinkBird"
              demoLink="https://pinkbird-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstone}
              isBlog={false}
              title="Machine Learning Capstone Project"
              description="A logistic regression model with factor analysis of mixed data (FAMD) dimensionality reduction and clustering that predicts the genre of a song. The data set is from an API released by Spotify that reports the audio features of its songs, such as “tempo” or “energy”. For this model we use the features of 50k randomly picked songs to predict the genre that the song belongs to."
              ghLink="https://github.com/SakibAhmed-exe/Machine-Learning-Classification-Model-Capstone-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cshell}
              isBlog={false}
              title="Custom C Shell"
              description="A custom Linux shell that supports system calls, I/O redirection, signal handling, and custom commands, written in C."
              ghLink="https://github.com/SakibAhmed-exe/Custom-C-Shell"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter"
              description="A clone of the Twitter app that allows users to log in and read, create, and interact with tweets."
              ghLink="https://github.com/SakibAhmed-exe/Twitter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flix}
              isBlog={false}
              title="Flix"
              description="A movie browsing app that lets users view and scroll through a list of movies."
              ghLink="https://github.com/SakibAhmed-exe/Flix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tip}
              isBlog={false}
              title="Tip Calculator"
              description="A tip calculator that allows user to enter a bill amount, choose a tip percentage, and see the tip and total values."
              ghLink="https://github.com/SakibAhmed-exe/TipCalculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
