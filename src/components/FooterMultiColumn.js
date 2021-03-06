import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import "./FooterMultiColumn.scss";

import FBSVG from "../images/icon-facebook.svg"
import TwitterSVG from "../images/icon-twitter.svg"
import IGSVG from "../images/icon-instagram.svg"
import LinkedIn from "../images/icon-linkedin.svg"

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
                  loading="lazy"
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

                <Col xs={7} md={6} className="mt-3 md:mt-0">
                  <h5>Menu</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/services/website-design">Web Design</Link>
                    </li>
                    <li>
                      <Link to="/services/graphic-design">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/services/digital-marketing">Digital Marketing</Link>
                    </li>

                  </ul>
                </Col>
                <Col xs={5} md={6} className="px-0 mt-3 md:mt-0">
                  <h5>Social</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/viadelweb/"
                      >
                        <img
                          src={FBSVG}
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/viadelweb"
                      >
                        <img
                          src={IGSVG}
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/ViaDelWeb"
                      >
                        <img
                          src={TwitterSVG}
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/company/viadelweb"
                      >
                        <img
                          src={LinkedIn}
                          alt="LinkedIn"
                        />
                        LinkedIn
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
