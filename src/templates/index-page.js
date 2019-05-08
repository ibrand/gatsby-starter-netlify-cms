import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import header from '../img/protest.svg'

export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="homepage">
    <img src={header} alt="Banner with drawing of protestors in it"
         style={{
           width: `100%`,
           margin: `auto`,
           height: `400px`,
           marginTop: `-30px`,
           background: `transparent`
         }}
    />
    <div className="container">
      <h1 className="title">{mainpitch.title}</h1>
      <h3 className="subtitle">{mainpitch.description}</h3>
    </div>
    <BlogRoll />
    <Link className="btn" to="/blog">
      Read more
    </Link>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
