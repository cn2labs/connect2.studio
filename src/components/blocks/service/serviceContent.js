import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Container from "../../styles/container"
import Section from "../../styles/section"

const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  margin-bottom: 3rem;
  max-height: 120px;
  height: 100%;
`

const Headline = styled.h2`
  font-size: 3rem;
  transform: translateY(-20px);
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    font-size: 5rem;
  }
`

const StyledContainer = styled(Container)`
  margin-bottom: 10rem;
`

const ServiceContent = ({ data }) => (
  <Section>
    <StyledContainer>
      <StyledBackground
        Tag="div"
        fluid={data.backgroundImg.localFile.childImageSharp.fluid}
      >
        <Headline className="ta-center">{data.headline}</Headline>
      </StyledBackground>

      <p className="ta-center">{data.text}</p>
    </StyledContainer>
  </Section>
)

export default ServiceContent
