import React from 'react'

import Layout from '../../components/Layout'
import Resources from '../../components/Resources'

export const ResourcesPageTemplate = () => (
  <section className="resources">
    <div className="container">
      <h2 className="page-title">Resources</h2>
      <Resources />
    </div>
  </section>
)

const ResourcesPage = () => {
  return (
    <Layout>
      <ResourcesPageTemplate />
    </Layout>
  )
}

export default ResourcesPage
