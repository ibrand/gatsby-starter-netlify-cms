import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image";

export const AboutPageTemplate = ({
 html,
 bannerImgSizes
}) => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="page-title">About the Campaign</h2>
        <span dangerouslySetInnerHTML={{__html: html}}></span>
      </div>
      <div className="image-wrapper">
        <Img
          sizes={bannerImgSizes}
          alt="Banner with drawing of protestors in it"
        />
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  html: PropTypes.string,
  bannerImgSizes: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { sizes: bannerImgSizes } = data.bannerImg.childImageSharp

  return (
    <Layout>
      <AboutPageTemplate
        html={data.markdownRemark.html}
        bannerImgSizes={bannerImgSizes}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string
    }),
    bannerImgSizes: PropTypes.object
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
    bannerImg: file(absolutePath: { regex: "/group.png/" }) {
      childImageSharp {
        sizes(maxHeight: 350) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
