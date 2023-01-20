// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

//Step 2: Define component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
      alt ="Guards"
      src="../images/guards.jpg"
    />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

// Step 3: Export component
export default IndexPage


