import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const StoryTemplate = ({
  html,
  tags,
  helmet,
}) => {
  return (
    <section className="post">
      {helmet || ''}
      <div className="container">
        <h2 className="page-title">Institutional Bullying is...</h2>
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

StoryTemplate.propTypes = {
  html: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Story = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <StoryTemplate
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
        tags={post.frontmatter.tags}
      />
    </Layout>
  )
}

Story.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Story

export const pageQuery = graphql`
  query StoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
