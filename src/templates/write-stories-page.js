import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Img from "gatsby-image";

export const WriteStoriesPageTemplate = () => (
  <div className="homepage">
    <div className="banner-wrapper">
      <Img
        sizes={bannerImgSizes}
        alt="Banner with drawing of protestors in it"
      />
    </div>
    <div className="container">
      <h1 className="title">{heading}</h1>
      <div className="flex-container">
        <p className="subtitle">{description}</p>
        <Link className="read-more btn" to="/about">
          <div>Read More</div>
        </Link>
      </div>
      <div className="flex-container cta-container">
        <Link className="cta btn" to="/read-stories"><div><h2>read<br/>stories</h2></div></Link>
        <Link className="cta btn" to="/write-stories"><div><h2>write<br/>stories</h2></div></Link>
        <Link className="cta btn" to="/gallery"><div><h2>view<br/>gallery</h2></div></Link>
      </div>
    </div>
  </div>
)

const WriteStoriesPage = () => {
  return (
    <Layout>
      <WriteStoriesPageTemplate />
    </Layout>
  )
}

export default WriteStoriesPage
