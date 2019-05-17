import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Img from "gatsby-image";

export const GalleryPageTemplate = ({
  galleryImgData
}) => (
  <div className="gallery">
    <div className="container">
      <h2 className="page-title">
        Gallery
      </h2>
      <div className="grid">
        {galleryImgData.map(( image, i ) => {
          const imageSizes = image.node.childImageSharp.sizes;
          return (
            <div className="gallery-img" key={i}>
              <Img
                alt="End institutional bullying gallery image"
                sizes={imageSizes}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
)

GalleryPageTemplate.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.object
  }),
}

const GalleryPage = ({ data }) => {
  const { edges: galleryImgData } = data.GalleryImgs
  return (
    <Layout>
      <GalleryPageTemplate galleryImgData={galleryImgData} />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.object
  }),
}

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


