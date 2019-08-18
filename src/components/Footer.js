import React from 'react'

import logo from '../img/footer/DRUMLogo.png'
import facebook from '../img/footer/facebook.svg'
import instagram from '../img/footer/instagram.svg'
import twitter from '../img/footer/twitter.svg'

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
          <a title="facebook" href="https://www.facebook.com/hashtag/institutionalBullying" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a title="twitter" href="https://twitter.com/search?q=%23institutionalBullying" target="_blank" rel="noopener noreferrer">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
            />
          </a>
          <a title="instagram" href="https://www.instagram.com/explore/tags/institutionalBullying/" target="_blank" rel="noopener noreferrer">
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
