import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image";
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const StoryTemplate = ({
  html,
  helmet,
  isPreview = false,
  imageSizes
}) => {
  return (
    <section className="post">
      {helmet || ''}
      <div className="container">
        <h2 className="page-title">Institutionalized Bullying is...</h2>
        {imageSizes ?
          <span className="accompanying-img">
            <Img
              alt="End institutionalized bullying gallery image" fluid={imageSizes}
              imgStyle={{height: 'auto', objectPosition: 'bottom'}}
            />
          </span> : ''}
        {isPreview ? <div className="preview-padding"></div> : ''}
        <span className="flex-item" dangerouslySetInnerHTML={{__html: html}}></span>
      </div>
    </section>
  )
}

StoryTemplate.propTypes = {
  html: PropTypes.string,
  helmet: PropTypes.object,
}

const Story = ({ data }) => {
  const { markdownRemark: post } = data
console.log(post.frontmatter.image);
  return (
    <Layout>
      <StoryTemplate
        html={post.html}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${truncate(htmlToString(post.html), 10)}`}</title>
            <meta
              name="description"
              content={`${truncate(htmlToString(post.html), 50)}`}
            />
          </Helmet>
        }
        imageSizes={post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid : ''}
      />
    </Layout>
  )
}

function htmlToString(inputHtml) {
  return inputHtml.replace(/<[^>]+>/g, '');
}

function truncate(input, lengthOfOutput) {
  if (input.length > lengthOfOutput)
    return input.substring(0,lengthOfOutput) + '...';
  else
    return input;
};

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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
