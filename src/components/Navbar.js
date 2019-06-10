import React from "react";
import { Link } from "gatsby";

const Navbar = ({ navbarActiveClass }) => (
  <nav
    className={`navbar ${navbarActiveClass}`}
    role="navigation"
    aria-label="main-navigation"
  >
  <div className="navbar-start has-text-centered">
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="/products">
      Products
    </Link>
    <Link className="navbar-item" to="/blog">
      Blog
    </Link>
    <Link className="navbar-item" to="/contact">
      Contact
    </Link>
    <Link className="navbar-item" to="/contact/examples">
      Form Examples
    </Link>
  </div>
  </nav>
);

export default Navbar;
