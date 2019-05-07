import React from 'react'

import logo from '../img/DRUMLogo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a href="https://drumnyc.org" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="DRUM Logo"
              className="logo"
            />
          </a>
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
