import React from "react"
import "./s1Hero.css"
import {navigate} from "gatsby"

const S1Hero = (props) =>{
    return(
        <>
<section className="text-gray-700 body-font heroBG">
  <div className="container px-8 py-48 mx-auto lg:px-4">
    <div className="flex flex-col w-full mb-12 text-center lg:text-center">
      {/*<h2 className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">a great
        header right here</h2>*/}
      <h1 className="mb-6 text-2xl font-semibold tracking-normal text-white text-shadow sm:text-5xl title-font text-shadow-black">
        Your Website <br className="md:hidden" /> is who you are online.</h1>
      <p className="mx-auto text-base text-xl font-medium leading-relaxed text-gray-200 text-shadow-black lg:w-2/3">Show the world your best side.</p>
    </div>
    <div className="flex justify-center lg:justify-center">
      <button 
      className="inline-flex px-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-primary hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
      onClick = {() => {
        navigate('/contact');
      }}
      >Contact</button>
      <button className="inline-flex items-center px-6 ml-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Button</button>
    </div>
  </div></section>

        </>
    )
}

export default S1Hero