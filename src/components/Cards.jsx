import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./Cards.scss";
import {Link} from 'gatsby'

function Cards(props) {
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
         
          <Card style={{borderColor: '#217ebd'}} >
            <AspectRatio ratio={3 / 1}>
              <Image src={item.headerImage} fluid={true} />
            </AspectRatio>
            <Card.Body className="flex flex-col items-center p-4 text-center d-flex flex-column align-items-center ">
            <div className="Cards__avatar-wrapper">
                <Image src={item.iconImage} alt={item.stepTitle} height="128px" />
              </div>
              <h6 className="mt-3 mb-2 font-bold font-weight-bold">{item.stepNumber}</h6>
              <p style={{color: '#217ebd'}} className="text-2xl font-bold font-weight-bold">{item.stepTitle}</p>
              <Card.Text className="mt-2">{item.stepDescription}</Card.Text>
              <Card.Text className="" >
              <Link to={item.link} className="font-bold"  style={{color: '#217ebd', fontWeight: 'bolder'}}>{item.linkText} → </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
