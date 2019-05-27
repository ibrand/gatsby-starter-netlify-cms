import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from "gatsby-image";

export const AboutPageTemplate = ({
 title,
 content,
 contentComponent,
 bannerImgSizes
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="about">
      <div className="container">
          <h2 className="page-title">
            {title}
          </h2>
          <PageContent className="content" content={content} />
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  bannerImgSizes: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { sizes: bannerImgSizes } = data.bannerImg.childImageSharp

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        bannerImgSizes={bannerImgSizes}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
    bannerImgSizes: PropTypes.object
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    bannerImg: file(relativePath: { eq: "about-page-group.png" }) {
      childImageSharp {
        sizes(maxHeight: 350) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
