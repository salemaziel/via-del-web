import React from "react"
import Button from "react-bootstrap/Button"
import Section from "../../Section"

import {Link} from "gatsby"

import {
  FaCheckCircle
} from "react-icons/fa"

import "./PricingCards.scss"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PricingCards = props => {
  return (
    <>
      <Section
       bg=""
       bgImage=""
       bgImageOpacity=""
       size="md"
       className="pricing-section">
        <div className="pricing pricing-palden">
          <div className="pricing-item">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlSpace="preserve"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                />
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="pricing-title">Starter</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>2000
              </div>
              <div className="pricing-price">
                  <span className="pricingMonthly">or </span>
                <span className="pricing-currency">$</span><span className="pricingMonthly">150</span>
                <span className="pricing-period">/ mo</span>
              </div>

            </div>
            <ul className="pricing-feature-list">
              <li className="pricing-feature">
                <FaCheckCircle className="FaCheck"/>
                Custom Single Page Website</li>
                <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Mobile-optimized Responsive Design</li>

              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Business-Specific Functionality *</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>SSL Certificate</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Managed Hosting</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Website Backups</li>

              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Essentials SEO</li>

            </ul>
            <Button as={Link} to="/contact" className="pricing-action">Choose plan</Button>
          </div>
          <div className="pricing-item pricing__item--featured">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlSpace="preserve"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                />
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="pricing-title">Business</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>3500
              </div>
              <div className="pricing-price">
                  <span className="pricingMonthly">or </span>
                <span className="pricing-currency">$</span><span className="pricingMonthly">250</span>
                <span className="pricing-period">/ mo</span>
              </div>

            </div>
            <ul className="pricing-feature-list">
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Custom Designed 5-7 Page Website</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Mobile-optimized Responsive Design</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Business-Specific Functionalities *</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Blog Functionality with CMS</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Website Backups</li>

              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Google My Business Setup </li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Managed Hosting</li>

              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Premium SEO</li>

            </ul>
            <Button as={Link} to="/contact" className="pricing-action ">Choose plan</Button>
          </div>
          <div className="pricing-item">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlSpace="preserve"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                />
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="pricing-title">Advanced</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>4500
              </div>
              <div className="pricing-price">
                  <span className="pricingMonthly">or </span>
                <span className="pricing-currency">$</span><span className="pricingMonthly">350</span>
                <span className="pricing-period">/ mo</span>
              </div>

            </div>
            <ul className="pricing-feature-list">

            <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Custom Designed 8+ Page Website</li>
            <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Mobile-optimized Responsive Design</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Business-Specific Functionalities *</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Blog Functionality with CMS</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Website Backups</li>

              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Google My Business Setup </li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Managed Hosting</li>

              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Digital Marketing Consultations</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Advanced SEO</li>

            </ul>
            <Button as={Link} to="/contact" className="pricing-action">Choose plan</Button>
          </div>
          <Container className="mx-auto my-3">
            <Row className="px-5 py-2">
              <Col>
              
              <p className="small font-weight-light">
                 <strong>*</strong>  A Business-Specific functionality is a tool built into your website that is useful to your specific business.<Link to="/about#businessfunction" className="underline"> Check our FAQ's to  learn more about these website business functions.

                  </Link>
                
              </p>              </Col>
            </Row>
          </Container>
        </div>
        <Container>
            <Row>
              <Col>

              </Col>
            </Row>
          </Container>

      </Section>
    </>
  )
}

export default PricingCards
