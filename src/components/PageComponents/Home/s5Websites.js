import React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./s5Websites.scss"

const S5Websites = props => {
  return (
    <>
      {/*<section
        className="box-border leading-6 text-black border-0 border-gray-300 border-solid"
      >
        <div
          className="box-border flex flex-col items-center justify-center w-full px-10 py-2 mx-auto border-solid lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md md:px-10"
        >
          <img
            className="block object-cover h-auto max-w-full p-0 leading-6 text-black align-middle border-0 border-gray-300 rounded-lg lg:w-full bg-3d"
            alt="hero"
            src="https://d33wubrfki0l68.cloudfront.net/177525e6a3b9167133e766ff33f03d1b01c5d264/c73cf/assets/supershot.png"
          />
        </div>
      </section>
      <section
        className="box-border leading-6 text-black border-0 border-gray-300 border-solid"
      >
        <div
          className="box-border flex flex-col items-center justify-center w-full px-10 py-2 mx-auto border-solid lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl sm:max-w-screen-sm"
        >
          <img
            className="block object-cover h-auto max-w-full p-0 leading-6 text-black align-middle border-0 border-gray-300 rounded-lg lg:w-full bg-3d"
            alt="hero"
            src="https://d33wubrfki0l68.cloudfront.net/177525e6a3b9167133e766ff33f03d1b01c5d264/c73cf/assets/supershot.png"
          />
        </div>
      </section>*/}
<section >
  <Container>
    <Row>
      <Col>
    <img className="object-cover p-0 mx-auto rounded-lg lg:max-w-screen bg-3d" alt="hero" src="https://d33wubrfki0l68.cloudfront.net/177525e6a3b9167133e766ff33f03d1b01c5d264/c73cf/assets/supershot.png" loading="lazy" />
    </Col>
    </Row>
  </Container>
</section>


    </>
  )
}

export default S5Websites
