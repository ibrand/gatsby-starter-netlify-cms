import React from "react";
import NavigationItems from "./NavigationItems"

const Navbar = ({ navbarActiveClass }) => (
  <nav
    className={`navbar ${navbarActiveClass}`}
    role="navigation"
    aria-label="main-navigation"
  >
    <NavigationItems />
  </nav>
);

export default Navbar;
