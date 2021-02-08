// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

// Ready-to-use components
import CTA from "../../ui/cta"
import Section from "../../styles/section"

// Styles
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  justify-content: space-between;

  ul {
    list-style: none;
  }

  p {
    margin-top: 2.4rem;
  }
`

const ServiceHeadline = styled.h2`
  font-size: 6rem;
`

// Component
const Service = ({ text, img }) => (
  <Fade>
    <Section aside="What we do">
      <ServiceGrid>
        <div>
          <ul>
            <li>
              <Link to="/service/webentwicklung">
                <ServiceHeadline className="is-outlined">
                  Webentwicklung
                </ServiceHeadline>
              </Link>
            </li>
            <li>
              <Link to="/service/design">
                <ServiceHeadline className="is-outlined">
                  Design
                </ServiceHeadline>
              </Link>
            </li>
            <li>
              <Link to="/service/beratung">
                <ServiceHeadline className="is-outlined">
                  Beratung
                </ServiceHeadline>
              </Link>
            </li>
          </ul>
          <p>{text}</p>
          <CTA to="/service">Unser Service</CTA>
        </div>
        <img src={img.sourceUrl} alt={img.altText} />
      </ServiceGrid>
    </Section>
  </Fade>
)

// Export
export default Service
