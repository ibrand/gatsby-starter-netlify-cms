import React from "react";
import { Link } from "gatsby";

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      headerActiveClass: ""
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
              headerActiveClass: "is-active"
            })
          : this.setState({
              headerActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="header is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Link to="/" title="Logo">
          <p>End Institutional Bullying</p>
        </Link>
        {/* Hamburger menu */}
        <div
          className={`hamburger-menu ${this.state.headerActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <div className={`bar1`} />
          <div className={`bar2`} />
          <div className={`bar3`} />
        </div>
      </nav>
    );
  }
};

export default Header;
