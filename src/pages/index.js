import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Mahendra's Gatsby site.</p>
    <p>Now go build something your own site from <a href="https://www.gatsbyjs.org/docs/" target="_blank">here</a>.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
