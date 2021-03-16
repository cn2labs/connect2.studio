import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Container from "../../styles/container"
import Section from "../../styles/section"

const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  margin-bottom: 3rem;
  height: 150px;
`

const Headline = styled.h2`
  font-size: 4rem;
  transform: translateY(-30px);
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    font-size: 6rem;
  }
`

const ServiceContent = ({ data }) => (
  <Section>
    <Container class="flex vertical between">
      <div>
        <StyledBackground
          Tag="div"
          fluid={data.backgroundImg.localFile.childImageSharp.fluid}
        >
          <Headline className="ta-center">{data.headline}</Headline>
        </StyledBackground>
      </div>

      <p className="ta-center">{data.text}</p>
    </Container>
  </Section>
)

export default ServiceContent
