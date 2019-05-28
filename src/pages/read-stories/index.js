import React from 'react'

import Layout from '../../components/Layout'

export default class ReadStoriesPage extends React.Component {
  render() {
    return(
      <Layout>
      <section className="read-stories">
        <div className="container">
          <h2 className="page-title">Read Stories</h2>
          <div className="bubble">hello</div>
          <div className="right bubble"><p>hello</p></div>
        </div>
      </section>
      </Layout>
    )
  }
}