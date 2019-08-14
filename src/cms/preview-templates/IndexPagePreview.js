import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const image = '../../img/homepage-banner.png'
  const srcSet = getAsset(image)
  if (data) {
  console.log('data', data)
    return (
      <IndexPageTemplate
        description={data.description}
        bannerImgSizes={srcSet}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
