import React from "react"

import Section from "./Section"

import {
  FaCheckCircle
} from "react-icons/fa"

import "./PricingCards.scss"

const PricingCards = props => {
  return (
    <>
      {/*
      <section id="prices" className="section ">
        <div className="container">
          <div className="price-box">
            <h2>Standard</h2>
            <span>5 PAGES</span>
            <h3>150</h3>
            <ul>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Unlimited Edits
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Includes Hosting
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                24/7 Customer Service
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Lifetime Updates
              </li>
            </ul>
            <button
              className="button-solid"
              onclick="location.href='/html/contact.html'"
              type="button"
            >
              CONTACT US
            </button>
          </div>
          <div className="price-box">
            <h2>Standard + Blogging</h2>
            <span>STARTING AT</span>
            <h3>275</h3>
            <ul>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                1000 Word Post
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Keyword Analysis
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Written By an SEO Specialist
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Helps Boost SEO
              </li>
            </ul>
            <p>
              *If you choose to write your own blog content, the rate drops to{" "}
              <span>$175/mo.</span>
            </p>
            <button
              className="button-solid services-button"
              onclick="location.href='/html/contact.html'"
              type="button"
            >
              CONTACT US
            </button>
          </div>
          <div className="price-box">
            <h2>Logos &amp; Graphic Design</h2>
            <span>STARTING AT</span>
            <h3>350</h3>
            <ul>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                2 revisions
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                All File Formats
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Light &amp; Dark Versions
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg"
                  alt
                />{" "}
                Horizontal &amp; Vertical
              </li>
            </ul>
            <button
              className="button-solid services-button"
              onclick="location.href='/html/contact.html'"
              type="button"
            >
              CONTACT US
            </button>
          </div>
        </div>
    </section>*/}
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
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Business-Specific Functionality</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>SSL Certificate</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Managed Hosting</li>
              <li className="pricing-feature"> <FaCheckCircle className="FaCheck"/>Essentials SEO</li>

            </ul>
            <button className="pricing-action">Choose plan</button>
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
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Custom Designed 5-7 Page Website</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Business-Specific Functionalities</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Blog Functionality with CMS</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Google My Business Setup </li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Premium SEO</li>

            </ul>
            <button className="pricing-action">Choose plan</button>
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
            <li className="pricing-feature"><FaCheckCircle className="FaCheck"/>Everything in Business Plan</li>
            <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Custom Designed 10+ Page Website</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Digital Marketing Consultations</li>
              <li className="pricing-feature"><FaCheckCircle className="FaCheck"/> Advanced SEO</li>

            </ul>
            <button className="pricing-action">Choose plan</button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PricingCards
