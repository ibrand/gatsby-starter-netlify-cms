import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const NewsTemplate = ({
  html,
  title,
  tags,
  helmet,
}) => {
  return (
    <section className="post">
      {helmet || ''}
      <div className="container">
        <h2 className="page-title">{title}</h2>
        <span className="subtitle flex-item" dangerouslySetInnerHTML={{__html: html}}></span>
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

NewsTemplate.propTypes = {
  html: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const news = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NewsTemplate
        html={post.html}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
      />
    </Layout>
  )
}

news.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default news

export const pageQuery = graphql`
  query NewsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
    }
  }
`
