import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Img from "gatsby-image";
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

export default class GalleryPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      selectedImageSizes: null,
    }
  }

  render() {
    const { selectedImageSizes, showLightbox } = this.state;
    return (
      <StaticQuery
        query={graphql`
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
        `}
        render={data => (
          <div className="gallery">
            <div className="container">
              <h2 className="page-title">
                Gallery
              </h2>
              <div className="grid">
                {data.GalleryImgs.edges.map((image, i) => {
                  const imageSizes = image.node.childImageSharp.sizes;
                  return (
                    <div
                      className="gallery-img"
                      key={i}
                      onClick={() => this.setState({ showLightbox: true, selectedImageSizes: imageSizes })}
                    >
                      <Img
                        alt="End institutional bullying gallery image"
                        sizes={imageSizes}
                      />
                    </div>
                  );
                })}
              </div>
              {showLightbox && (
                <Dialog>
                  <Img sizes={selectedImageSizes} />
                  <button type="button" onClick={() => this.setState({ showLightbox: false })}>
                    Close
                  </button>
                </Dialog>
              )}
            </div>
          </div>
        )}
      />
    );
  }
}

GalleryPageTemplate.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.object
  }),
}
//
// const GalleryPage = ({ data }) => {
//   const { edges: galleryImgData } = data.GalleryImgs
//   return (
//     <Layout>
//       <GalleryPageTemplate galleryImgData={galleryImgData} />
//     </Layout>
//   )
// }
//
// GalleryPage.propTypes = {
//   data: PropTypes.shape({
//     edges: PropTypes.object
//   }),
// }

// export default GalleryPage


