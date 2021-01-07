import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import "./FooterMultiColumn.scss";

function FooterMultiColumn(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Link to="/">
              <div>
                <img
                  className="FooterMultiColumn__logo"
                  src={props.logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {props.description && (
              <p className="FooterMultiColumn__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterMultiColumn__copyright">{props.copyright}</p>
            )}
          </Col>
          <Col xs={12} md={8} lg={{ span: 6, offset: 2 }}>
            <div className="FooterMultiColumn__menus">
              <Row>
                <Col xs={4} md={4} className="mt-3 mt-md-0">
                  <h5>Product</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={4} md={4} className="mt-3 mt-md-0">
                  <h5>Company</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://medium.com"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={4} md={4} className="mt-3 mt-md-0">
                  <h5>Social</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-instagram.svg"
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FooterMultiColumn;
