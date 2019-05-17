import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/Layout";

export const GalleryPageTemplate = ({
  images
}) => (
  <div className="columns is-multiline">
    {images &&
    images.map(({ node: image }) => (
      <div className="is-parent column is-6" key={image.id}>
        <Img fluid={image.childImageSharp.fluid} />
      </div>
    ))}
  </div>
)

// GalleryPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // })
// }

const GalleryPage = ({ data }) => {
  console.log(data.protestors.childImageSharp.fluid)
  return (
    <Layout>
      <GalleryPageTemplate
        images={data.protestors.childImageSharp.fluid}
      />
    </Layout>
  )
}

// GalleryPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default GalleryPage

export const galleryPageQuery = graphql`{
  protestors: file(relativePath: {eq: "protestors.PNG"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


