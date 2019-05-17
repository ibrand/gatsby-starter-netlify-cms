import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import header from '../img/protestors.png'
import Img from "gatsby-image";

export const IndexPageTemplate = ({
  heading,
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

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  bannerImgSizes: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { sizes: bannerImgSizes } = data.bannerImg.childImageSharp
  console.log('bannerImgSizes ', bannerImgSizes)

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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        description
      }
    },
     bannerImg: file(relativePath: { eq: "protestors.png" }) {
        childImageSharp {
          sizes(maxHeight: 750) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
`
