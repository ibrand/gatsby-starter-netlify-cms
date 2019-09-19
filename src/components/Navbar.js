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
        <p>End Institutionalized Bullying in Schools</p>
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
        <Link to="/submit-personal-story">
          Submit Personal Story
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
);

export default Navbar;
