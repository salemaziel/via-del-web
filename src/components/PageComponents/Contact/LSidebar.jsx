import React from "react"
//import { Link } from 'gatsby'

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const LSidebar = () => (
  <>
    <div className="sidebar">
      <section>
        {/**<p className="mb-2">Phone</p>
                   <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
        <h4 className="followus">Email</h4>
        <p className="followus">
          <a
            className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-blue-700 rounded shadow outline-none active:bg-pink-600 hover:shadow-md hover:bg-blue-500 hover:text-white focus:outline-none sm:mr-2"
            href="#mailgo"
            data-address="contact"
            data-domain="viadelweb.com"
            data-subject="Hey, let's connect!"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@viadelweb.com
          </a>
        </p>
        <h4 className="followus">Follow Us</h4>
        <div className="followus">
          <a
            href="https://twitter.com/viadelweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/company/viadelweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/viadelweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <footer></footer>
      </section>
      <hr />
    </div>
  </>
)

export default LSidebar
