import React from 'react'
import {
FaFacebook,
FaTwitter,
FaLinkedin,
FaInstagram
} from 'react-icons/fa'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <section>
                  {/**<p className="mb-2">Phone</p>
                   <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="followus">Email</h4>
                  <p className="followus">
                    <a href="mailto:contact@viadelweb.com">
                    contact@viadelweb.com
                    </a>
                  </p>
                <h4 className="followus">Follow Us</h4>
                <div className="followus">
                  <a href="https://instagram.com/viadelweb" rel="noopener noreferrer" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com/company/viadelweb" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.facebook.com/viadelweb/" rel="noopener noreferrer" target="_blank">
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