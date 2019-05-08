import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import header from '../img/protest-2.png'

export const IndexPageTemplate = ({
  mainpitch,
}) => (
  <div className="homepage">
    <img src={header} alt="Banner with drawing of protestors in it" className="banner"/>
    <div className="container">
      <h1 className="title">{mainpitch.title}</h1>
      <div className="flex-container">
        <p className="subtitle">{mainpitch.description}</p>
        <Link className="btn" to="/about">
          <a className="read-more">Read More</a>
        </Link>
      </div>
    </div>
    <BlogRoll />
    <Link className="btn" to="/blog">
      Read more
    </Link>
  </div>
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
      }
    }
  }
`
