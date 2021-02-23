// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

// Ready-to-use components
import CTA from "../../ui/cta"
import Outline from "../../ui/outline"
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

  h2 {
    font-size: 4rem;
  }

  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    h2 {
      font-size: 10rem;
    }
  }
`

const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 30rem;
  display: grid;
  place-items: center;

  :hover a {
    -webkit-text-stroke: 0 none;
    color: var(--mommys-blonde-boy);
    text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
  }
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    height: 72rem;
  }
`

// Component
const Team = ({ text, bg }) => (
  <Fade>
    <Section aside="Unser Team">
      <TeamStyles>
        <StyledBackground Tag="div" fluid={bg}>
          <Outline as="h2" looksLike="h1">
            <Link to="/team">Crewlove</Link>
          </Outline>
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
