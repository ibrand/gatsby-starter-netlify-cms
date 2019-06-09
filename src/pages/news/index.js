import React from 'react'

import Layout from '../../components/Layout'
import NewsArticles from '../../components/NewsArticles'

export const NewsPageTemplate = () => (
  <section className="news">
    <div className="container">
      <h2 className="page-title">Media Coverage</h2>
      <div className="scroll-container">
        <NewsArticles />
      </div>
    </div>
  </section>
)

const NewsPage = () => {
  return (
    <Layout>
      <NewsPageTemplate />
    </Layout>
  )
}

export default NewsPage