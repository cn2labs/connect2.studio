// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

// Ready-to-use components
import CTA from "../../ui/cta"
import Section from "../../styles/section"
import Grid from "../../styles/grid"
import Image from "../../img"

// Styles
const Services = styled.div`
  ul {
    list-style: none;
  }

  p {
    margin-top: 2.5rem;
  }
`

const ServiceHeadline = styled.h2`
  font-size: 6rem;
`

// TODO: refactor to Outline component

// Component
const Service = ({ text, imgSrc, imgAlt }) => (
  <Fade>
    <Section aside="Unsere Leistungen">
      <Grid cols="1.2fr 1fr" gap="100">
        <Services>
          <ul>
            <li>
              <Link to="/leistungen/webentwicklung">
                <ServiceHeadline className="is-outlined">
                  <span>Entwicklung</span>
                </ServiceHeadline>
              </Link>
            </li>
            <li>
              <Link to="/leistungen/design">
                <ServiceHeadline className="is-outlined">
                  <span>Design</span>
                </ServiceHeadline>
              </Link>
            </li>
            <li>
              <Link to="/leistungen/beratung">
                <ServiceHeadline className="is-outlined">
                  <span>Beratung</span>
                </ServiceHeadline>
              </Link>
            </li>
          </ul>
          <p>{text}</p>
          <CTA to="/leistungen">Leistungen</CTA>
        </Services>
        <Image fluid src={imgSrc} alt={imgAlt} />
      </Grid>
    </Section>
  </Fade>
)

// Export
export default Service
