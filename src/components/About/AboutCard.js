import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ShanuKa Dilshan </span>
            from <span className="purple"> Colombo, Sri Lanka.</span>
            <br />
            I am currently a BICT undergraduate Specialized in Software Technology at University of Sri Jayewardenepura.
            <br />
          
            <br />
            <br />
            
          </p>
         

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
