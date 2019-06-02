import React from 'react'

import Layout from '../../components/Layout'

export default class ReadStoriesPage extends React.Component {
  render() {
    return(
      <Layout>
      <section className="read-stories">
        <div className="container">
          <h2 className="page-title">Read Stories</h2>
          <div className="scroll-container">
            <div className="bubble-container"><div className="left bubble">hello</div></div>
            <div className="bubble-container"><div className="right bubble">hello</div></div>
            <div className="bubble-container"><div className="left bubble">hello</div></div>
            <div className="bubble-container"><div className="right bubble">hello</div></div>
          </div>
        </div>
      </section>
      </Layout>
    )
  }
}