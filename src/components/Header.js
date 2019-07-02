import React from "react";
import PropTypes from 'prop-types'
import { Link } from "gatsby";

const Header = ({ navbarActiveClass, toggleNav }) => (
  <header className="header">
    <Link to="/" title="Logo">
      <p>End Institutional Bullying in Schools</p>
    </Link>
    {/* Hamburger menu */}
    <div
      className={`hamburger-menu ${navbarActiveClass}`}
      data-target="navMenu"
      onClick={() => toggleNav()}
    >
      <div className={`bar1`} />
      <div className={`bar2`} />
      <div className={`bar3`} />
    </div>
  </header>
);

Header.propTypes = {
  navbarActiveClass: PropTypes.string.isRequired,
  toggleNav: PropTypes.func.isRequired
}

export default Header;
