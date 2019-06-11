import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from "./Navbar";
import Header from './Header'
import Footer from '../components/Footer'
import './all.sass'
import {graphql, StaticQuery} from "gatsby";

const Layout = class extends React.Component {
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
    const children = this.props.children
    return (
      <StaticQuery
        query={graphql`
           query SITE_METADATA_QUERY {
              site {
                siteMetadata {
                  title
                  description
                }
              }
           }
        `}
        render={data => (
          <>
          <Helmet>
            <html lang="en"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
            <meta name="description" content={data.site.siteMetadata.description}/>

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff"/>

            <meta property="og:type" content="business.business"/>
            <meta property="og:title" content={data.site.siteMetadata.title}/>
            <meta property="og:url" content="/"/>
            <meta property="og:image" content="/img/og-image.jpg"/>
          </Helmet>
          <div className="site">
            <Navbar navbarActiveClass={this.state.navbarActiveClass} />
            <Header navbarActiveClass={this.state.navbarActiveClass} toggleHamburger={this.toggleHamburger} />
            <div className="site-content">{children}</div>
            <Footer/>
          </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout