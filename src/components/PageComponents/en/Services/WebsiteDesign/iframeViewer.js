import React from 'react'
import Row from "react-bootstrap/Row"
import './iframeViewer.scss'
import Container from 'react-bootstrap/Container'


const IframeViewer = (props) => {

    return(
        <>
        <div className="viewer py-5 lg:py-5" >
            <iframe src="https://1page-promotional.rblart.design" frameborder="0" width="100%" height="100%"  ></iframe>
            <iframe src="https://spartan-plumbing.netlify.app" frameborder="0" width="100%" height="100%"></iframe>
            <iframe src="https://ecommerce-demo.rblart.design" frameborder="0" width="100%" height="100%"></iframe>
            {/*<iframe src="https://ecommerce-demo2.rblart.design" frameborder="0" width="100%" height="100%"></iframe>*/}
        </div>


        </>
    )
}

export default IframeViewer