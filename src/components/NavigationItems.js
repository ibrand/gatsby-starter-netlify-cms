import {Link} from "gatsby";
import React from "react";

const NavigationItems = () => (
  <>
  <ul>
    <li className="list-header">
      <Link to="/">
        End Institutionalized Bullying in Schools
      </Link>
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
      <Link to="/resources">
        Resources
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
      <Link to="/contact">
        Contact
      </Link>
    </li>
    <a href="https://drum.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=13" target="_blank" rel="noopener noreferrer" className="donate-button">Donate</a>
  </ul>
  </>
)

export default NavigationItems
