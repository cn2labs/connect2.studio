import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Section from "../styles/section"
import Outline from "../ui/outline"
import Cta from "../ui/cta"

const ProjectStyles = styled.div`
  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  ul {
    margin-top: 1rem;
    list-style: circle inside;
  }

  strong {
    color: var(--almost-white);
  }

  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    &:not(:last-child) {
      margin-bottom: 20rem;
    }
    > div > div:first-child {
      margin-top: 0;
      align-items: center;
    }
  }
`

const ProjectText = styled.div`
  margin: 2rem 0;
`

const ProjectCategories = styled.div`
  span {
    font-style: italic;
  }
`

const Project = ({ project }) => {
  const detailsLink = slugify(project.title, { lower: true })

  const image = getImage(project.project_fields.images[0].localFile)

  return (
    <ProjectStyles>
      <Fade>
        <div className="flex vertical v-start bg-grid-appear gap-5 bg-col-2">
          <div>
            <Outline>
              <Link to={detailsLink}>{project.title}</Link>
            </Outline>
            <ProjectText
              dangerouslySetInnerHTML={{ __html: project.excerpt }}
            ></ProjectText>
            <ProjectCategories>
              <p>
                <strong>Das haben wir gemacht:</strong>
                <br />
                {project.project_fields.categories.map((category, index) => (
                  <span key={index}>
                    {category}
                    {index === project.project_fields.categories.length - 1
                      ? "."
                      : ","}{" "}
                  </span>
                ))}
              </p>
            </ProjectCategories>
            <Cta to={detailsLink}>Details</Cta>
          </div>
          {project.project_fields.images ? (
            <GatsbyImage
              image={image}
              alt={project.project_fields.images[0].altText}
            />
          ) : null}
        </div>
      </Fade>
    </ProjectStyles>
  )
}

const Projects = () => {
  // Get all projects from WordPress
  const data = useStaticQuery(graphql`
    {
      allWpProject(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          excerpt
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
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allWpProject.nodes

  return (
    <Section aside="Hall of fame">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </Section>
  )
}

export default Projects
