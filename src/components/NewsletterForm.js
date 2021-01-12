import React from "react"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
//import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function NewsletterForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <>
      <form
        name="NewsletterForm"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="NewsletterForm" />

        {/*<Form.Row>
          {/*<Col>*/}
            {/*<Form.Group>
              <label style={{ display: "none" }} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </Form.Group>*/}
        {/*  </Col> 
          <Col>*/}
          {/*  <Form.Group>
              <label htmlFor="name" style={{ display: "none" }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                required
                onClick={handleChange}
              />
            </Form.Group>
          </Col> * /}
          </Form.Row>*/}

        <Form.Row>
          <Col>
          <Form.Group>
              <label htmlFor="email" style={{ display: "none" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
                style={{
                  border: '1px solid white',
                  color: 'white',
                  fontSize: '1.3rem'
                }}
              />
            </Form.Group>
        </Col> 
          {/*<Col>*/}
          </Form.Row>


        {/*<Form.Row>
            <Form.Group>
              <label htmlFor="textarea" style={{ display: "none" }}>
                Message
              </label>
              <input
                type="textarea"
                name="message"
                id="message"
                placeholder="Message"
                onChange={handleChange}
              />
            </Form.Group>
       {/* </Col> * /}
        </Form.Row>*/}

        <Form.Group>
          <ul className="actions">
            <li style={{listStyle: 'none'}}>
              <button
                type="submit"
                value="Send Message"
                className="special"
                onChange={handleSubmit}
              >
                Submit{" "}
              </button>
            </li>
          </ul>
        </Form.Group>
      </form>
    </>
  )
}
