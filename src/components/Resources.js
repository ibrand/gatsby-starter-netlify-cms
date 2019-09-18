import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Resources extends React.Component {
  render() {
    const { toolkit, videos, endorsers } = this.props.data
    const toolkit_resources = toolkit.edges.length > 0 ? toolkit.edges : '';
    const video_resources = videos.edges.length > 0 ? videos.edges : '';
    const endorser_resources = endorsers.edges.length > 0 ? endorsers.edges : '';

    return (
      <React.Fragment>
        {toolkit_resources &&
        <section className="resource-container">
          <h2>Toolkit:</h2>
          <ul>
            {toolkit_resources.map(({node: post}, index) => (
              <li className="resource" key={post.id}>
                <a href={post.frontmatter.resource.publicURL} target="_blank" rel="noopener noreferrer" key={post.id}>
                  {post.frontmatter.title}
                </a>
              </li>
            ))
            }
          </ul>
        </section>}
        {video_resources &&
        <section className="resource-container">
          <h2>Videos:</h2>
          <ul>
            {video_resources.map(({ node: post }, index) => (
            <li className="video-resource" key={post.id}>
              <strong className="video-text" key={post.id}>
                {post.frontmatter.title}
              </strong>
              <iframe title={post.frontmatter.title} src={post.frontmatter.url} width="200px"/>
            </li>
          ))
          }
          </ul>
        </section>}
        {endorser_resources &&
        <section className="resource-container">
          <h2>Endorsers:</h2>
          <ul>
            {endorser_resources.map(({ node: post }, index) => (
              <li className="resource" key={post.id}>
                <a key={post.id} href={post.frontmatter.url} target="_blank" rel="noopener noreferrer">{post.frontmatter.title}</a>
              </li>
            ))
            }
          </ul>
        </section>}
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
            url: PropTypes.string,
            date: PropTypes.string.isRequired,
            resource: PropTypes.string,
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
                date(formatString: "MMMM DD, YYYY")
                category
                resource {
                  publicURL
                }
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
                url
                date(formatString: "MMMM DD, YYYY")
                category
              }
            }
          }
        },
        endorsers: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "resource" }, category: {eq: "endorsers"} } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
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
