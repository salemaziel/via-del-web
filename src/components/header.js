import React from "react";
import PropTypes from "prop-types";
import NavbarNew from "./NavbarNew";


const Header = ({ siteTitle }) => (
  <>
  <header className="fixed w-full h-auto"
  style={{
    zIndex: '99'
  }}>
      <NavbarNew />
      </header>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
