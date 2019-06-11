import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

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
                  <a href={post.frontmatter.url} target="_blank" rel="noopener noreferrer">
                    <h2>{post.frontmatter.title}</h2>
                    {post.frontmatter.description && <p>{post.frontmatter.description}</p>}
                  </a>
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
      query NewsArticlesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                url
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
