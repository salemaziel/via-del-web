import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import SideNav from "react-simple-sidenav";
import FaqNav from "./FaqNav";

import navStyles from "./navbar.module.css";

import { LogoSquare } from "../images/index";

import { FaHome } from "react-icons/fa";

//then

const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "primary" : ""}
        variant="dark"
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/esp/home" >
              <img
                className={scroll ? "d-inline-block align-top" : "hide"}
                src={LogoSquare}
                alt="Logo"
                height="50"
              ></img>
            </Link>
            <Dropdown className={scroll ? "hide" : "show"}>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="d-inline-block align-top"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/home"
                  className={navStyles.pickLang}
                >
                  {" "}
                  <img
                    className="d-inline-block align-top"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                    alt="Logo"
                    height="40"
                  ></img>{" "}
                  English
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
              </Dropdown.Menu>
            </Dropdown>
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
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/quienes-somos" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/quienes-somos" active={false}>
                  Quienes Somos
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                as={Link}
                href="/services"
                to="/service"
                eventKey="services"
                title="Servicios"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/disenoweb">
                  {" "}
                  Diseño Web{" "}
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/listadosdedirectorio">
                  Listados De Directorio
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/marketingdecontenidos">
                  Marketing De Contenidos
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/marketingderedessociales">
                  Marketing De Redes Sociales
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/SEO"> S.E.O. </NavDropdown.Item>
              </NavDropdown>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/contacto" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/contacto" active={false}>
                  Contacto
                </Nav.Link>
              </Nav.Item>

              {/*<NavDropdown
                as={Link}
                href="/mas"
                to="/mas"
                eventKey="more"
                title="Más"
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
            <Nav className="mr-1"></Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
            }}
            items={[
              <Link className={navStyles.navItem} to="/esp/home">
                <FaHome />
              </Link>,
              <Link className={navStyles.navItem} to="/esp/quienes-somos">
                Quien Somos
              </Link>,
              <FaqNav
                items={[
                  {
                    question: "Servicios",
                    answer: "",
                    listItem1: "",
                    listItem2: "",
                    linkTitle1: "Content Marketing",
                    link1: "/services/contentmarketing",
                    linkTitle2: "Directory Listings",
                    link2: "/services/directorylistings",
                    linkTitle3: "Social Media Marketing",
                    link3: "/services/socialmediamarketing",
                    linkTitle4: "Webservice Automation",
                    link4: "/services/webserviceautomation",
                    linkTitle5: "Website Design",
                    link5: "/services/websitedesign",
                  },
                ]}
              />,
              <Link className={navStyles.navItem} to="/esp/home#">
                Quien Ayudamos
              </Link>,
              <a
                rel="nofollow noreferrer"
                target="_blank"
                href="https://app.viadelweb.com"
                className={navStyles.navItem}
              >
                Client Login
              </a>,              
               <Nav.Item to="/esp/contacto" className={navStyles.navItem}>
               <Button
                 secondary
                 as={Link}
                 to="/esp/contacto"
                 className={navStyles.CTAButton}
                 active={false}
               >
                 Contacto
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
  );
};

export default NavbarCustom;
