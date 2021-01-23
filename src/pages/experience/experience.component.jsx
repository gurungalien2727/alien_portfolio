import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Relevent Courses</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-2250: Computer Science I</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-2255: Computer Science II</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-3360: Concepts of Object Oriented Programming (Java)</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-3323: Data Strctures</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-3323: Data Strctures</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-3329: Analysis of Algorithm</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-4448: Operating Systems</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-4420: Database</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-4410: Machine Learning</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-4445: Data Communication and Networking</Card.Title>
             </Card.Header>
             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-4443: Web Development</Card.Title>
             </Card.Header>

             <Card.Header as="h12" className="d-flex justify-content-center flex-wrap">
              <Card.Title className="text-center">CS-3332: Software Engineering</Card.Title>
             </Card.Header>

             
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
