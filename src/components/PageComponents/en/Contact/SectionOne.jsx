import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import ContactForm from './contactForm'



const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <div className="w-full pl-6 lg:w-3/4">
    <header className="major">
      <h2>Contact Us</h2>
    </header>
    {/* Content */}
    <div className="content">
      {/*<h3>Dolore Amet Consequat</h3>*/}
      <p>We’re available weekdays, and if you shoot us an email, we’re guaranteed to respond within 24 hours.</p>
      <p> If you have questions or want to catch up, let us know!</p>

    <br />
      <ContactForm />
    </div>
    </div>
        <LSidebar />

  </div>
</section>

)

export default SectionOne