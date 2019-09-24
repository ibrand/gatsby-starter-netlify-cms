import React from 'react'
import PropTypes from 'prop-types'
import { StoryTemplate } from '../../templates/story.js'

const StoryPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <StoryTemplate
        html={data.body}
        isPreview={true}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

StoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StoryPagePreview
