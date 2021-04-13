import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import Avatar from "./Avatar";
import "./TeamBios2.scss";

function TeamBios2(props) {
  return (
    <Row className="justify-center justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="flex items-stretch py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card>
            <AspectRatio ratio={3 / 1}>
              <Image src={item.headerImage} fluid={true} />
            </AspectRatio>
            <Card.Body className="flex flex-col items-center p-4 text-center d-flex flex-column align-items-center">
              <div className="TeamBios2__avatar-wrapper">
                <Avatar src={item.avatarImage} alt={item.name} size="128px" />
              </div>
              <h6 className="mt-3 mb-2 font-bold font-weight-bold">{item.name}</h6>
              <small>{item.role}</small>
              <Card.Text className="mt-4">{item.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamBios2;
