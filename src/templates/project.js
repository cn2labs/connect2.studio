/**
 * This template is used for *every* project detail page
 */

import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/styles/container"
import Outline from "../components/ui/outline"

const ProjectStyles = styled.div`
  p,
  ul,
  blockquote {
    margin: 25px 0;
  }

  blockquote p {
    margin: 10px 0;
    font-style: italic;
  }

  blockquote small {
    font-family: var(--headline-font);
    color: var(--nets-court);
    font-size: 1.2rem;
  }

  ul {
    list-style: square inside;
    color: var(--mommys-blonde-boy);
  }

  img {
    margin: 1.5rem 0;
  }

  /* Width in PX > 920px */
  /* ==== = BIG = ==== */
  @media only screen and (min-width: 62em) {
    blockquote p {
      margin: 10px 0;
      text-align: right;
      max-width: 550px;
    }

    blockquote small {
      text-align: right;
    }
  }
`

const ProjectLink = styled.p`
  font-family: var(--headline-font);
  font-size: 1.5rem;
  color: var(--candy-strawberrys);
`

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.wpProject
  const { project_fields: details } = project

  return (
    <Layout>
      <Seo title={project.title} />
      <Container>
        <ProjectStyles>
          {/* Project title */}
          <Outline as="h1">
            <span>{project.title}</span>
          </Outline>
          {/* Description text */}
          <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
          <div className="flex vertical bg-horizontal between v-start">
            {/* Project categories */}
            <ul>
              {details.categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>

            {/* Client quote */}
            {details.recommendation.quote ? (
              <blockquote className="flex vertical v-start bg-v-end">
                <div
                  dangerouslySetInnerHTML={{
                    __html: details.recommendation.quote,
                  }}
                ></div>
                <small>&ndash; {details.recommendation.author}</small>
              </blockquote>
            ) : null}
          </div>

          {/* Link to the project */}
          {details.link ? (
            <ProjectLink>
              <strong>Zum Projekt:</strong>{" "}
              <a
                href={details.link}
                title="Projekt anschauen"
                target="_blank"
                rel="noreferrer"
              >
                {details.link}
              </a>
            </ProjectLink>
          ) : null}
          {/* Project images */}
          {details.images.map((img, index) => {
            const image = getImage(img.localFile)
            return <GatsbyImage key={index} image={image} alt={img.altText} />
          })}

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
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
