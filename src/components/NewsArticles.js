import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class NewsArticles extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="news-container" key={post.id}>
              <div className={ this.chooseBubbleSide(index) }>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    <h2>{post.frontmatter.title}</h2>
                    <p>{post.excerpt}</p>
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

NewsArticles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsArticlesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
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
    render={(data, count) => <NewsArticles data={data} count={count} />}
  />
)
