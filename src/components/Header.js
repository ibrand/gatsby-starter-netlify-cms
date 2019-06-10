import React from "react";
import Navbar from "./Navbar";
import { Link } from "gatsby";

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navbarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the header accordingly
        this.state.active
          ? this.setState({
              navbarActiveClass: "is-active"
            })
          : this.setState({
              navbarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <header className="header">
        <Link to="/" title="Logo">
          <p>End Institutional Bullying</p>
        </Link>
        {/* Hamburger menu */}
        <div
          className={`hamburger-menu ${this.state.navbarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <div className={`bar1`} />
          <div className={`bar2`} />
          <div className={`bar3`} />
        </div>
        <Navbar navbarActiveClass={this.state.navbarActiveClass} />
      </header>
    );
  }
};

export default Header;
