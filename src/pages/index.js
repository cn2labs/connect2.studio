import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    wpcontent: { page },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "cG9zdDoy") {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{page.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
