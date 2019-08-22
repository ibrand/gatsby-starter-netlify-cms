import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Resources extends React.Component {
  render() {
    const { toolkit, videos } = this.props.data
    const { edges: toolkit_resources } = toolkit
    const { edges: video_resources } = videos

    return (
      <React.Fragment>
        <section className="resource-container">
          <h2>Toolkit:</h2>
          <ul>
          {toolkit_resources &&
          toolkit_resources.map(({ node: post }, index) => (
            <li  className="resource" key={post.id}>
              <a href={post.frontmatter.url} target="_blank" rel="noopener noreferrer"  key={post.id}>
                {post.frontmatter.title}
              </a>
            </li>
          ))
          }
          </ul>
        </section>
        <section className="resource-container">
          <h2>Videos:</h2>
          <ul>
          {video_resources &&
          video_resources.map(({ node: post }, index) => (
            <li  className="resource" key={post.id}>
              <div className="video-text">
              <strong key={post.id}>
                {post.frontmatter.title}
              </strong>
              {post.frontmatter.description && <p>{post.frontmatter.description}</p>}
              </div>
              <iframe src={post.frontmatter.url}/>
            </li>
          ))
          }
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

Resources.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            url: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }),
        }),
      })),
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ResourcesQuery {
        toolkit: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "resource" }, category: {eq: "toolkit"} } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                url
                date(formatString: "MMMM DD, YYYY")
                category
              }
            }
          }
        },
        videos: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "resource" }, category: {eq: "videos"} } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                url
                date(formatString: "MMMM DD, YYYY")
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Resources data={data} count={count} />}
  />
)
