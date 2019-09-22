import React from 'react'

import Layout from '../../components/Layout'
import Stories from '../../components/Stories'
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ReadStoriesPageTemplate = class extends React.Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef()
    this.state = {
      variableParentOverflow: 'scroll',
      variableChildOverflow: 'hidden',
      touchScrollStartingValue: 0
    };
  }

  componentDidMount() {
    window.addEventListener('touchstart', this.handleTouchScrollStart)
    window.addEventListener('touchmove', this.handleTouchScrollMove)
    window.addEventListener('mousewheel', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchScrollStart)
    window.removeEventListener('touchmove', this.handleTouchScrollMove)
    window.removeEventListener('mousewheel', this.handleScroll)
  }

  handleScroll = (e) => {
    this.scrollContainerRef.current.scrollTop = this.scrollContainerRef.current.scrollTop + e.deltaY
  }

  handleTouchScrollStart = (e) => {
    this.state.touchScrollStartingValue = e.touches[0].pageY
  }

  handleTouchScrollMove = (e) => {
    let offset = this.state.touchScrollStartingValue - e.touches[0].pageY
    this.scrollContainerRef.current.scrollTop = this.scrollContainerRef.current.scrollTop + offset
  }

  render() {
    return (
      <section
        className="read-stories"
        style={{overflow: this.state.variableParentOverflow}}
      >
      <div className="container">
        <h2 className="page-title">Read Stories</h2>
        <div
          className="scroll-container"
          style={{overflow: this.state.variableChildOverflow}}
          ref={this.scrollContainerRef}
        >
          <Stories />
          <div className="image-container img-right">
            <Img
              alt="End institutionalized bullying gallery image"
              sizes={this.props.readStoriesImgData[0].node.childImageSharp.sizes}
            />
          </div>
          <div className="image-container img-left">
            <Img
              alt="End institutionalized bullying gallery image"
              sizes={this.props.readStoriesImgData[1].node.childImageSharp.sizes}
            />
          </div>
        </div>
      </div>
    </section>
    )
  }
}

ReadStoriesPageTemplate.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.object
  }),
}

const ReadStoriesPage = ({ data }) => {
  const { edges: readStoriesTallImgData } = data.ReadStoriesTallImgs
  const { edges: readStoriesWideImgData } = data.ReadStoriesWideImgs
  let index = 0
  let key
  let readStoriesImgData = {}
  for (key in readStoriesTallImgData) {
    readStoriesImgData[index] = Object.assign({}, readStoriesTallImgData[key])
    index++
  }
  for (key in readStoriesWideImgData) {
    readStoriesImgData[index] = Object.assign({}, readStoriesWideImgData[key])
    index++
  }
  return (
    <Layout>
      <ReadStoriesPageTemplate readStoriesImgData={readStoriesImgData} />
    </Layout>
  )
}

export default ReadStoriesPage

export const query = graphql`
  query ReadStoriesPageTemplate {
    ReadStoriesTallImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/read-stories/tall.*.(jpg|JPG|png|PNG)/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 200, maxHeight: 320) {
              ...GatsbyImageSharpSizes
            } 
          }
        }
      }
    }
    ReadStoriesWideImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/read-stories/wide.*.(jpg|JPG|png|PNG)/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 650, maxHeight: 650) {
              ...GatsbyImageSharpSizes
            } 
          }
        }
      }
    }
  }`;
