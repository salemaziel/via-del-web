import React from 'react'

//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import './banner.css'

const Banner = (props) => {

return (
    <section className="BannerSection"
    style={{
        "--image": `url(${props.bgImage})`,
        height: `${props.height}`
    }}
    >


    </section>
)
}

export default Banner