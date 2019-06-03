import React from 'react'

import Layout from '../../components/Layout'
import Stories from '../../components/Stories'

export default class ReadStoriesPage extends React.Component {
  render() {
    return(
      <Layout>
      <section className="read-stories">
        <div className="container">
          <h2 className="page-title">Read Stories</h2>
          <div className="scroll-container">
            <Stories />
          </div>
        </div>
      </section>
      </Layout>
    )
  }
}