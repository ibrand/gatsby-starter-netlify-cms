import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../../components/Layout"
import Img from "gatsby-image";
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

export default class GalleryPage extends React.Component {
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
              filter: { relativePath: { regex: "/(jpg|JPG|png|PNG)/" }, sourceInstanceName: { eq: "images" } }
            ) {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    sizes(maxWidth: 850, maxHeight: 1024) {
                      ...GatsbyImageSharpSizes
                    } 
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
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
                  <DialogOverlay
                    onDismiss={() => this.setState({ showLightbox: false })}
                    style={{ background: "hsla(0, 0%, 0%, 0.80)" }}
                  >
                    <DialogContent
                      style={{ padding: "0px", width: "70vh" }}
                    >
                      <Img sizes={selectedImageSizes} />
                    </DialogContent>
                  </DialogOverlay>
                )}
              </div>
            </div>
          </Layout>
        )}
      />
    );
  }
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape(),
      })),
    }),
  }),
}
