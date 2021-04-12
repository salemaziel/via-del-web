import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Clients(props) {
  return (
    <div className="justify-center inline-block justify-content-center lg:flex ">
      {props.items.map((item, index) => (
        <Col md="auto" className="px-4 py-3" key={index}>
          <div className="align-bottom">
            <img src={item.image} width={item.width} alt={item.name} />
          </div>
        </Col>
      ))}
    </div>
  );
}

export default Clients;
