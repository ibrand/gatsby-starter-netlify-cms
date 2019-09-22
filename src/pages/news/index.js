import React from 'react'

import Layout from '../../components/Layout'
import NewsArticles from '../../components/NewsArticles'

const NewsPageTemplate = class extends React.Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef()
    this.state = {
      variableParentOverflow: 'scroll',
      variableChildOverflow: 'hidden',
      touchScrollValue: 0
    };
  }

  componentDidMount() {
    window.addEventListener('touchstart', this.handleTouchScrollStart)
    window.addEventListener('touchmove', this.handleTouchScrollMove)
    window.addEventListener('mousewheel', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchScrollStart)
    window.removeEventListener('touchmove', this.handleTouchScrollMove)
    window.removeEventListener('mousewheel', this.handleScroll)
  }

  handleScroll = (e) => {
    this.scrollContainerRef.current.scrollTop = this.scrollContainerRef.current.scrollTop + e.deltaY
  }

  handleTouchScrollStart = (e) => {
    this.setState({touchScrollValue: e.touches[0].pageY})
  }

  handleTouchScrollMove = (e) => {
    let offset = this.state.touchScrollValue - e.touches[0].pageY
    let SLOW_SCROLL_FACTOR = 10;
    this.scrollContainerRef.current.scrollTop = this.scrollContainerRef.current.scrollTop + offset/ SLOW_SCROLL_FACTOR
  }

  render() {
    return (
      <section
        className="news"
        style={{overflow: this.state.variableParentOverflow}}
      >
        <div className="container">
          <h2 className="page-title">Media Coverage</h2>
          <div
            className="scroll-container"
            style={{overflow: this.state.variableChildOverflow}}
            ref={this.scrollContainerRef}
          >
            <NewsArticles />
          </div>
        </div>
      </section>
    )
  }
}

const NewsPage = () => {
  return (
    <Layout>
      <NewsPageTemplate />
    </Layout>
  )
}

export default NewsPage
