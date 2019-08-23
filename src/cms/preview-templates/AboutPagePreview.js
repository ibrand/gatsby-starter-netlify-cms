import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
console.log(data);
  if (data) {
    return (
      <AboutPageTemplate
        html={data.body}
        bannerImgSizes={{'':''}}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
