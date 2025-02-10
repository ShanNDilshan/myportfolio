import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              
              isBlog={false}
              title="FOT-MAIL-TRACK"
              description="A Letter Tracking System Developed For Japura Postal Unit, Contributed From The Requirement Gathering phase To The Finish Application. Used Technologies "
              ghLink="https://github.com/FOT-MAIL-TRACK"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="SL-Taxi"
              description="Ride Sharing Application Developed with Flutter Firebase and Google Map API's"
              ghLink="https://github.com/ProjectZ10nX"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Chat App"
              description="Chat Web Application Created With React, Node.js, and Express.js"
              ghLink="https://github.com/ShanNDilshan/chatapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Progress Tracker"
              description="Progress Tracker App Created with Flutter, Dart."
              ghLink="https://github.com/ShanNDilshan/progressTrackerApp"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Brain Tumor Detector"
              description="Created a Deep Learning Model to Identify Brain Tumors."
              ghLink="https://github.com/ShanNDilshan/BrainTumor"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="MoneyX"
              description="Developed a Currency Converter web application Using React"
              ghLink="https://github.com/ShanNDilshan/moneyx"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
