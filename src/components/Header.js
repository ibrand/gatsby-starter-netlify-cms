import React from "react";
import PropTypes from 'prop-types'
import { Link } from "gatsby";

const Header = ({ navbarActiveClass, toggleHamburger }) => (
  <header className="header">
    <Link to="/" title="Logo">
      <p>End Institutional Bullying</p>
    </Link>
    {/* Hamburger menu */}
    <div
      className={`hamburger-menu ${navbarActiveClass}`}
      data-target="navMenu"
      onClick={() => toggleHamburger()}
    >
      <div className={`bar1`} />
      <div className={`bar2`} />
      <div className={`bar3`} />
    </div>
  </header>
);

Header.propTypes = {
  navbarActiveClass: PropTypes.string.isRequired,
  toggleHamburger: PropTypes.func.isRequired
}

export default Header;
