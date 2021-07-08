import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Section from "../../styles/section"

const Content = styled.div`
  position: relative;
  margin: 0 0 1rem 0;

  h2 {
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
    /* Width in PX > 1200px */
    /* ==== = LARGE = ==== */
    @media only screen and (min-width: 75em) {
      font-size: 5rem;
    }
  }

  .service-text {
    max-width: 700px;
    margin-top: 3rem;
  }
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    margin: 3rem 0 7rem 0;
  }
`

const StyledBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center center;
  height: 500px;
  width: 100%;
  margin-bottom: 4rem;
`

const ColorDiv = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`

const ServiceContent = ({ data }) => (
  <Section smallPaddingTop>
    <Content className="flex vertical v-center">
      <StyledBackground
        Tag="div"
        fluid={data.backgroundImg.localFile.childImageSharp.fluid}
      >
        <ColorDiv className="flex v-center h-center">
          <h2>{data.headline}</h2>
        </ColorDiv>
      </StyledBackground>

      <div
        className="ta-center service-text"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </Content>
  </Section>
)

export default ServiceContent
