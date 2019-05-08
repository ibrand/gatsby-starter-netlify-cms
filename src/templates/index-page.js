import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
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
