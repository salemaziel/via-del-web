import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
//import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import SideNav from "react-simple-sidenav"
//import NavItem from "react-bootstrap/NavItem";
//import NavLink from "react-bootstrap/NavLink";

import FaqNav from "./FaqNav"

import navStyles from "./navbar.module.css"
import { LogoHorizWhite } from "../images/index"

import { FaHome } from "react-icons/fa"

//then

const NavbarCustomEN = props => {
  const [showNav, setShowNav] = useState()
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [])

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "primary" : ""}
        variant="dark"
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                /*className={scroll ? "d-inline-block align-top navLogo" : "hide"}*/
                className={
                  scroll
                    ? "d-inline-block inline-block align-top navLogo"
                    : "d-inline-block inline-block align-top navLogo"
                }
                src={LogoHorizWhite}
                alt="Via Del Web Logo"
              ></img>
            </Link>
            {/*<Dropdown className={scroll ? "hide" : "show"}>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="align-top d-inline-block"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/esp/home"
                  className={navStyles.pickLang}
                >
                  {" "}
                  <img
                    className="align-top d-inline-block"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                    alt="Logo"
                    height="40"
                  ></img>{" "}
                  Español
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>* /}
              </Dropdown.Menu>
            </Dropdown>*/}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto"
              defaultActiveKey="/"
              onSelect={selectedKey => navigate(`${selectedKey}`)}
            >
              {/*<Nav.Item
                to="/services/website-design"
                className={navStyles.navItem}
              >
                <Nav.Link
                  as={Link}
                  to="/services/website-design"
                  active={false}
                >
                  Web Design
                </Nav.Link>
              </Nav.Item>*/}

              <NavDropdown
                as={Link}
                href="/services"
                to="/service"
                eventKey="services"
                title="Services"
                id="nav-dropdown-about"
                className="mr-6 font-medium"
              >
                {/*<NavDropdown.Item eventKey="/services/contentmarketing">
                  Content Marketing
          </NavDropdown.Item>*/}

                <NavDropdown.Item eventKey="/services/digital-marketing">
                  Digital Marketing
                </NavDropdown.Item>

                {/*<NavDropdown.Item eventKey="/services/directorylistings">
                  Directory Listings
        </NavDropdown.Item>*/}

                <NavDropdown.Item eventKey="/services/graphic-design">
                  Graphic Design
                </NavDropdown.Item>

                {/*<NavDropdown.Item eventKey="/services/socialmediamarketing">
                  Social Media Marketing
      </NavDropdown.Item>*/}
                {/*<NavDropdown.Item eventKey="/services/web-automation">
                  {" "}
                  Webservice Automation{" "}
    </NavDropdown.Item>*/}
                {/*<NavDropdown.Item eventKey="/services/shopify">
                  {" "}
                  Shopify{" "}
  </NavDropdown.Item>*/}
                <NavDropdown.Item eventKey="/services/website-design">
                  {" "}
                  Website Design{" "}
                </NavDropdown.Item>
                {/*<NavDropdown.Item eventKey="/services/wordpress">
                  {" "}
                  Wordpress{" "}
</NavDropdown.Item>*/}
              </NavDropdown>

              <Nav.Item to="/about" className="mr-6">
                <Nav.Link as={Link} to="/about" active={false} className="font-medium no-underline border-b-0">
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/industries" className="mr-6">
                <Nav.Link as={Link} to="/industries" active={false} className="font-medium no-underline border-b-0">
                  Who We Help
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/blog" className="mr-6">
                <Nav.Link as={Link} to="/blog" active={false} className="font-medium no-underline border-b-0">
                  Blog
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              {/*<Nav.Item to="/servicios" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/servicios" active={false}>
                  Services
                </Nav.Link>
        </Nav.Item>*/}

              {/*<Nav.Item className={navStyles.navItem}>
                <a
                  href="https://app.viadelweb.com"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="nav-link"
                >
                  Client Login
                </a>
      </Nav.Item>*/}

              {/*<NavDropdown
                as={Link}
                href="/more"
                to="/more"
                eventKey="more"
                title="More"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <Nav className="mr-0">
              <Nav.Item to="/contact" className="mr-6">
                <Button
                  secondary
                  as={Link}
                  to="/contact"
                  className={navStyles.CTAButton}
                  active={false}
                >
                  Contact Us
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div className="items-center content-center justify-center"
              >
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
              padding: "1rem",
            }}
            items={[
              <Link className="mr-6" to="/">
                <FaHome className="inline-block"/>
              </Link>,
              <FaqNav
                items={[
                  {
                    question: "Services",
                    answer: "",
                    listItem1: "",
                    listItem2: "",
                    linkTitle1: "Digital Marketing",
                    link1: "/services/digital-marketing",
                    linkTitle2: "Graphic Design",
                    link2: "/services/graphic-design",
                    linkTitle3: "Website Design",
                    link3: "/services/website-design",
                  },
                ]}
              />,
              <Link className="mr-6" to="/about">
                About Us
              </Link>,
              <Link className="mr-6" to="/blog">
                Blog
              </Link>,

              <a
                rel="nofollow noreferrer"
                target="_blank"
                href="https://app.viadelweb.com"
                className="mr-6"
              >
                Client Login
              </a>,
              <Nav.Item to="/contact" className="mr-6">
                <Button
                  secondary
                  as={Link}
                  to="/contact"
                  className={navStyles.CTAButton}
                  active={false}
                >
                  Contact Us
                </Button>
              </Nav.Item>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
            }}
            navStyle={{
              width: "70%",
              background: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
              color: "inherit",
              maxHeight: "100vh",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarCustomEN
