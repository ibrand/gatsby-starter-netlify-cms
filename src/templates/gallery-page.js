import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout"
import GalleryImages from "../components/GalleryImages"

// GalleryPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // })
// }

const GalleryPage = ({ data }) => {
  const { edges: galleryImgData } = data.GalleryImgs
  console.log(galleryImgData)
  return (
    <Layout>
      <div className="gallery">
        <div className="container">
          <h2 className="page-title">
            Gallery
          </h2>
          <GalleryImages galleryImgData={galleryImgData} />
        </div>
      </div>
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

export const query = graphql`
  query GalleryPageTemplate {
    GalleryImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/gallery/.*.(jpg|JPG|png|PNG)/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpSizes
            } 
          }
        }
      }
    }
  }
`;


