// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import scribble from "../../../assets/images/scribble.svg"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Ready-to-use components
import Cta from "../../ui/cta"
import Section from "../../styles/section"
import Outline from "../../ui/outline"

// Styles
const Services = styled.div`
  ul {
    list-style: none;
  }

  ul li:not(:first-child) {
    margin-top: 1.5rem;
  }

  p {
    margin-top: 2.5rem;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 100px;
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 100px;
  }
`

const Tagline = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
`

const ImgWithScribble = styled(GatsbyImage)`
  overflow: visible !important;

  :before {
    --width: 18rem;
    --height: 9rem;

    content: "";
    display: block;
    background: url(${scribble}) no-repeat center center / contain;
    height: var(--height);
    width: var(--width);
    position: absolute;
    top: -3rem;
    left: -5rem;
    z-index: 10;
  }

  @media screen and (max-width: 75em) {
    display: none;
  }
`

// Component
const Service = ({ text, imgSrc, imgAlt }) => {
  const image = getImage(imgSrc)
  return (
    <Fade delay={200}>
      <Section aside="Unser Service">
        <ServicesGrid>
          <ImgWithScribble image={image} alt={imgAlt} />
          <Services>
            <ul>
              <li>
                <Tagline>JAMStack &middot; Web Apps &middot; WordPress</Tagline>
                <Link to="/service/entwicklung">
                  <Outline as="h2">
                    <span>Entwicklung</span>
                  </Outline>
                </Link>
              </li>
              <li>
                <Tagline>UI & UX &middot; CI/CD &middot; Konzeption</Tagline>
                <Link to="/service/design">
                  <Outline as="h2">
                    <span>Design </span>
                  </Outline>
                </Link>
              </li>
              <li>
                <Tagline>Seo &middot; Performance &middot; Relaunch</Tagline>
                <Link to="/service/beratung">
                  <Outline as="h2">
                    <span>Beratung </span>
                  </Outline>
                </Link>
              </li>
            </ul>
            <p>{text}</p>
            <Cta to="/service">Unser Service</Cta>
          </Services>
        </ServicesGrid>
      </Section>
    </Fade>
  )
}

// Export
export default Service
