import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Section from "../components/styles/section"
import Container from "../components/styles/container"

const ImpressumPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 353 }) {
        title
        metadata {
          description
        }
        textField {
          text
        }
      }
    }
  `)

  const Content = styled.div`
    h2 {
      padding: 2rem 0 1rem 0;
    }
    h3 {
      padding: 2rem 0 1rem 0;
      color: var(--nets-court);
    }
    ul {
      transform: translateX(15px);
      padding: 1rem 0;
    }
  `

  return (
    <Layout>
      <Seo title={page.title} description={page.metadata.description} />
      <Section>
        <Container>
          <Content
            dangerouslySetInnerHTML={{
              __html: page.textField.text,
            }}
          ></Content>
        </Container>
      </Section>
    </Layout>
  )
}

export default ImpressumPage
