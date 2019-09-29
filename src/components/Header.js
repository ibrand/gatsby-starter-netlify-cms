import React from "react";
import PropTypes from 'prop-types'
import { Link } from "gatsby";
import NavigationItems from '../components/NavigationItems'

const Header = ({ navbarActiveClass, toggleNav }) => (
  <header className="header">
    <Link to="/" title="Homepage" className="homepage-link-text">
      <h2>End Institutionalized Bullying in Schools</h2>
    </Link>
    <span className="nav-items">
      <NavigationItems />
    </span>
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
