// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import scribble from "../../../assets/images/scribble.svg"

// Ready-to-use components
import CTA from "../../ui/cta"
import Section from "../../styles/section"
import Grid from "../../styles/grid"
import Outline from "../../ui/outline"
import Image from "../../img"

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

const Tagline = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
`

const ImgWithScribble = styled(Image)`
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
`

// Component
const Service = ({ text, imgSrc, imgAlt }) => (
  <Fade delay={200}>
    <Section aside="Unser Service">
      <Grid cols="1.2fr 1fr" gap="100">
        <ImgWithScribble fluid src={imgSrc} alt={imgAlt} />
        <Services>
          <ul>
            <li>
              <Tagline>JAMStack &middot; PWA &middot; WordPress</Tagline>
              <Link to="/service/entwicklung">
                <Outline as="h2">
                  <span>Entwicklung &rarr;</span>
                </Outline>
              </Link>
            </li>
            <li>
              <Tagline>UI & UX &middot; CI/CD &middot; Konzeption</Tagline>
              <Link to="/service/design">
                <Outline as="h2">
                  <span>Design &rarr;</span>
                </Outline>
              </Link>
            </li>
            <li>
              <Tagline>SEO &middot; Performance &middot; Relaunch</Tagline>
              <Link to="/service/beratung">
                <Outline as="h2">
                  <span>Beratung &rarr;</span>
                </Outline>
              </Link>
            </li>
          </ul>
          <p>{text}</p>
          <CTA to="/service">Unser Service</CTA>
        </Services>
      </Grid>
    </Section>
  </Fade>
)

// Export
export default Service
