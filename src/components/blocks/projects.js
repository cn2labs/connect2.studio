import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

import Section from "../styles/section"
import Grid from "../styles/grid"
import Outline from "../ui/outline"
import Image from "../img"
import CTA from "../ui/cta"

const ProjectStyles = styled.div`
  &:not(:last-child) {
    margin-bottom: 20rem;
  }

  ul {
    margin-top: 1rem;
    list-style: circle inside;
  }

  strong {
    color: #fff;
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

const makeUrl = title => slugify(title, { lower: true })

const Project = ({ project }) => (
  <ProjectStyles>
    <Grid cols="2" gap="80">
      <div>
        <Outline>
          <span>{project.title}</span>
        </Outline>
        <ProjectText
          dangerouslySetInnerHTML={{ __html: project.excerpt }}
        ></ProjectText>
        <ProjectCategories>
          <p>
            <strong>Das haben wir gemacht:</strong>
            <br />
            {project.project_fields.categories.map((category, index) => (
              <span>
                {category}
                {index === project.project_fields.categories.length - 1
                  ? "."
                  : ","}{" "}
              </span>
            ))}
          </p>
        </ProjectCategories>
        <CTA to={`/projekte/${makeUrl(project.title)}`}>Details</CTA>
      </div>
      {project.project_fields.images ? (
        <Image
          fluid
          src={project.project_fields.images[0].localFile.childImageSharp.fluid}
          alt={project.project_fields.images[0].altText}
        />
      ) : null}
    </Grid>
  </ProjectStyles>
)

const Projects = () => {
  // Get all projects from WordPress
  const data = useStaticQuery(graphql`
    {
      allWpProject {
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
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
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
