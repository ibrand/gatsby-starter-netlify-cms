import React from "react";
import { Link } from "gatsby";

const Navbar = ({ navbarActiveClass }) => (
  <nav
    className={`navbar ${navbarActiveClass}`}
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
        <Link to="/news">
          Media Coverage
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
);

export default Navbar;
