import React from "react"
import { Col, Row, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"
import CalendlyButton from "./CalendlyButtonEN"
import "./SectionWaves.scss"

const SectionWavesEN = props => {
  return (
    <section className="SectionWaves">
      <div className="header">
        <div className="flex inner-header">
          {/*<svg version="1.1" className="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
      <path fill="#FFFFFF" stroke="#000000" strokeWidth={10} strokeMiterlimit={10} d="M57,283" />
      <g>
        <path fill="#fff" d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7      c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2    c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
      </g>
    </svg>*/}
          {/*<h1>Simple CSS Waves</h1>*/}
          <div className="container flex flex-col items-center justify-center px-3 py-24 mx-auto">
            <div className="w-full text-center lg:pt-10 lg:mt-8 lg:w-2/3">
              <div className="flex flex-col pt-16 pb-24 md:pb-20 lg:py-8">
                <span className="mb-8 text-4xl font-medium title-font sm:text-4xl headline">
                  {" "}
                  {props.headline}
                </span>
                <span className="mt-8 leading-relaxed"> {props.subtitle}</span>
              </div>
              <div className="flex justify-between py-4">
                <Link
                  to="/about"
                  className="px-4 py-3 text-white border-white d-inline-block rounded-2xl "
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  id="work"
                  className="px-4 py-3 font-sans text-blue-600 bg-white rounded-lg d-inline-block"
                >
                  Work with Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*Waves Container*/}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default SectionWavesEN
