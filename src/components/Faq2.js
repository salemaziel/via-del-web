import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Faq2.scss";

function Faq2(props) {
  return (
    <Row className="pt-4">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} key={index}>
          <article className="Faq2__faq-item">
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </article>
        </Col>
      ))}
    </Row>
  );
}

export default Faq2;
