// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

// Ready-to-use components
import CTA from "../../ui/cta"
import Section from "../../styles/section"

// Styles
const TeamStyles = styled.div`
  div {
    margin-top: 6rem;
  }

  p {
    margin: 2rem auto 0;
    max-width: 70ch;
  }
`

const TeamTitle = styled.h2`
  font-size: 10rem;
`

const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 60rem;
  display: grid;
  place-items: center;

  :hover .is-outlined a {
    -webkit-text-stroke: 0 none;
    color: var(--mommys-blonde-boy);
    text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
  }
`

// Component
const Team = ({ text, bg }) => (
  <Fade>
    <Section aside="Hello there">
      <TeamStyles>
        <StyledBackground Tag="div" fluid={bg}>
          <TeamTitle className="is-outlined ta-center">
            <Link to="/team">Die Crew</Link>
          </TeamTitle>
        </StyledBackground>
        <div className="ta-center">
          <p>{text}</p>
          <CTA to="/team">Unser Team</CTA>
        </div>
      </TeamStyles>
    </Section>
  </Fade>
)

// Export
export default Team
