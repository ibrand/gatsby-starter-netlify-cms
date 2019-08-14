import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Img from "gatsby-image";

export const IndexPageTemplate = ({
  description,
  bannerImgSizes
}) => (
  <div className="homepage">
    <div className="banner-wrapper">
      <Img
        sizes={bannerImgSizes}
        alt="Banner with drawing of protestors in it"
      />
    </div>
    <div className="container">
      <h1 className="title">What is Institutional Bullying?</h1>
      <div className="flex-container">
        <span className="subtitle flex-item" dangerouslySetInnerHTML={{__html: description}}></span>
        <Link className="read-more btn flex-item" to="/about">
          <div>Read More</div>
        </Link>
      </div>
      <div className="flex-container cta-container">
        <Link className="cta btn flex-item flex-container" to="/read-stories"><h2>read<br/>stories</h2></Link>
        <Link className="cta btn flex-item flex-container" to="/write-stories"><h2>write<br/>stories</h2></Link>
        <Link className="cta btn flex-item flex-container" to="/gallery"><h2>view<br/>gallery</h2></Link>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  bannerImgSizes: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { sizes: bannerImgSizes } = data.bannerImg.childImageSharp

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        bannerImgSizes={bannerImgSizes}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    bannerImgSizes: PropTypes.object
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
      }
    },
     bannerImg: file(relativePath: { eq: "homepage-banner.png" }) {
        childImageSharp {
          sizes(maxHeight: 750) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
`
