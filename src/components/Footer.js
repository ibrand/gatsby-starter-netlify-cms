import React from 'react'

import logo from '../assets/footer/DRUMLogo.png'
import facebook from '../assets/footer/facebook.svg'
import instagram from '../assets/footer/instagram.svg'
import twitter from '../assets/footer/twitter.svg'

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
          <a title="facebook" href="https://www.facebook.com/hashtag/institutionalizedBullying" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a title="twitter" href="https://twitter.com/search?q=%23institutionalizedBullying" target="_blank" rel="noopener noreferrer">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
            />
          </a>
          <a title="instagram" href="https://www.instagram.com/explore/tags/institutionalizedBullying/" target="_blank" rel="noopener noreferrer">
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
