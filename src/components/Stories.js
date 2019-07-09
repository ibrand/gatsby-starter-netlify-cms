import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Stories extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="bubble-container" key={post.id}>
              <div className={ this.chooseBubbleSide(index) }>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    <h2>{post.excerpt}</h2>
                  </Link>
              </div>
            </div>
          ))
        }
      </React.Fragment>
    )
  }

  chooseBubbleSide(index) {
    return index % 2 === 0 ? 'left bubble' : 'right bubble'
  }
}

Stories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StoriesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "story" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              html
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Stories data={data} count={count} />}
  />
)
