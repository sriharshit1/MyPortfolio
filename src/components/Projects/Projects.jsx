import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../assets/Projects/emotion.png";
import hirex from "../../assets/Projects/HireX.png";
import authify from "../../assets/Projects/Authify.png";
import quiz from "../../assets/Projects/Quiz.png";
import quote from "../../assets/Projects/Quote.png";
import game from "../../assets/Projects/Game.png";

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
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Personalize learning platform to brush up your basics."
              ghLink="https://github.com/sriharshit1/Language-Quiz"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Rock Paper Scissor"
              description="If someone is getting bored and want something to do then they love this game as you have to predict and win which is quite interesting."
              ghLink="https://github.com/sriharshit1/Game.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirex}
              isBlog={false}
              title="HireX.io"
              description="HireX is a modern job portal designed to simplify hiring and job searching. It connects talented professionals with top companies through a seamless and user-friendly platform. "
              ghLink="https://github.com/sriharshit1/JobPortal"
              demoLink="https://hirex-o8sd.onrender.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authify}
              isBlog={false}
              title="Authify.io"
              description="Authify is a secure authentication platform designed to protect modern applications with ease. It offers powerful features like user registration, login, email verification, JWT-based authentication, and role-based access control. With a focus on simplicity and security, Authify helps developers integrate robust authentication into their apps while providing users with a smooth and reliable experience."
              ghLink="https://github.com/sriharshit1/Authify"
              demoLink="https://authify-ne6v.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Quote Generator"
              description="InspireMe is a simple and elegant app that generates random motivational, life, and love quotes to uplift your day. With a clean interface and endless inspiration, it’s your daily dose of positivity in just one click."
              ghLink="https://github.com/sriharshit1/Quote-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Harshit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;