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
  imageSizes,
  who,
  location,
  date
}) => {
  return (
    <section className="post">
      {helmet || ''}
      <div className="container flex-container">
        <h2 className="page-title">Institutionalized Bullying is...</h2>
        {imageSizes ?
          <span className="accompanying-img flex-item">
            <Img
              alt="End institutionalized bullying gallery image" fluid={imageSizes}
              imgStyle={{height: 'auto', objectPosition: 'bottom'}}
            />
          </span> : ''}
        {isPreview ? <div className="preview-padding"></div> : ''}
        <div className={imageSizes ? "flex-container-column" : 'text-container'}>
          { date ? <p className="story-info flex-item">{date}</p> : ''}
          { location ? <p className="story-info flex-item">{location}</p> : ''}
          { who ? <p className="story-info flex-item">{who}</p> : ''}
          <div className="flex-item story-html" dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
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
        date={post.frontmatter.date ? post.frontmatter.date : ''}
        location={post.frontmatter.location ? post.frontmatter.location : ''}
        who={post.frontmatter.who ? post.frontmatter.who : ''}
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

// Future frontmatter
// frontmatter {
//   date(formatString: "MMMM DD, YYYY")
//   location
//   who
//   image {
//     childImageSharp {
//       fluid {
//       ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }

export const pageQuery = graphql`
  query StoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        location
        who
      }
    }
  }
`
