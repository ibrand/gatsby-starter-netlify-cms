import React, { Component } from "react"
import Img from "gatsby-image"

const GalleryImages = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const galleryImgs = this.props.galleryImgData
    return (
      <div className="grid">
        {galleryImgs.map(image => {
          const imageSizes = image.node.childImageSharp.sizes;
          return (
              <div className="gallery-img">
                <Img
                  alt="End institutional bullying gallery image"
                  sizes={imageSizes}
                />
              </div>
          );
        })}
      </div>
    );
  }
}
export default GalleryImages