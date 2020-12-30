import React from 'react'
import { Link } from 'gatsby'



import {
FaFacebook,
FaTwitter,
FaLinkedin
} from 'react-icons/fa'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <section>
                  {/**<p className="mb-2">Phone</p>
                   <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="followus">Email</h4>
                  <p className="followus">
                    <a href="mailto:salem@viadelweb.com">
                    salem@viadelweb.com
                    </a>
                  </p>
                <h4 className="followus">Follow Us</h4>
                <div className="followus">
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com">
                    <FaLinkedin />
                  </a>
                  <a href="https://facebook.com">
                    <FaFacebook />
                  </a>
                </div>
        <footer>

        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar