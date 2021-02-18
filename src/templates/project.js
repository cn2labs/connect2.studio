/**
 * This template is used for *every* project detail page
 */

import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/styles/container"
import Image from "../components/img"
import Outline from "../components/ui/outline"

const ProjectStyles = styled.div`
  p,
  ul,
  blockquote {
    margin: 25px 0;
  }

  blockquote p {
    margin: 10px 0;
  }

  blockquote small {
    font-style: italic;
  }

  ul {
    list-style: square inside;
  }
`

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.wpProject
  const { project_fields: details } = project

  return (
    <Layout>
      <SEO title={project.title} />
      <Container>
        <ProjectStyles>
          {/* Project title */}
          <Outline as="h1">
            <span>{project.title}</span>
          </Outline>
          {/* Description text */}
          <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
          {/* Link to the project */}
          {details.link ? (
            <p>
              <strong>Zum Projekt:</strong>{" "}
              <a
                href={details.link}
                title="Projekt anschauen"
                target="_blank"
                rel="noreferrer"
              >
                {details.link}
              </a>
            </p>
          ) : null}
          {/* Project categories */}
          <ul>
            {details.categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          {/* Client quote */}
          {details.recommendation.quote ? (
            <blockquote>
              <div
                dangerouslySetInnerHTML={{
                  __html: details.recommendation.quote,
                }}
              ></div>
              <small>&ndash; {details.recommendation.author}</small>
            </blockquote>
          ) : null}
          {/* Project images */}
          {details.images.map((img, index) => (
            <Image
              key={index}
              fluid
              src={img.localFile.childImageSharp.fluid}
              alt={img.altText}
            />
          ))}

          {/* Back link */}
          <p>
            <Link to="/projekte">Zurück zur Übersicht</Link>
          </p>
        </ProjectStyles>
      </Container>
    </Layout>
  )
}

// Query the project data from WordPress
export const query = graphql`
  query Project($id: Int) {
    wpProject(databaseId: { eq: $id }) {
      title
      content
      project_fields {
        link
        categories
        recommendation {
          author
          quote
        }
        images {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
