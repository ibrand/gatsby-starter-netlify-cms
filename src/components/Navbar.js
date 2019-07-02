import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    let clickIsInsideNav = this.props.navRef.current.contains(e.target);
    if (!clickIsInsideNav) {
      // close nav
      this.props.toggleNav();
    }
  }

  render() {
      return (
        <nav
          className={`navbar ${this.props.navbarActiveClass}`}
          role="navigation"
          aria-label="main-navigation"
        >
          <ul>
            <li>
              <Link className="list-header" to="/">
              DRUM
              </Link>
              <p>End Institutional Bullying</p>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/read-stories">
                Read Stories
              </Link>
            </li>
            <li>
              <Link to="/write-stories">
              Write Stories
              </Link>
            </li>
            <li>
              <Link to="/gallery">
              Gallery
              </Link>
            </li>
            <li>
              <Link to="/news">
              Media Coverage
              </Link>
            </li>
            <li>
              <Link to="/resources">
              Resources
              </Link>
            </li>
            <li>
              <Link to="/contact">
              Contact
              </Link>
            </li>
          <a href="https://drum.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=13" className="donate-button">Donate</a>
        </ul>
      </nav>
    )}
};

export default Navbar;
