import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Cta from "../ui/cta"
import Container from "../styles/container"
import Tagline from "../ui/tagline"
import Outline from "../ui/outline"

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 100px;
  align-items: start;

  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 100px;
  }
`

const HeroSection = styled.section`
  margin-bottom: 8rem;
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    margin-bottom: 15rem;
  }

  img {
    height: 100%;
    width: 100%;
    max-height: 550px;
  }
`

const Headline = styled.h2`
  font-family: var(--headline-font-extended);
  font-size: 3.6rem;
  text-shadow: 0px 0px 14px rgb(174 140 243 / 60%);

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    font-size: 6rem;
  }
`

const Text = styled.div`
  color: var(--almost-white);
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2.75rem;
  max-width: 800px;

  p + p {
    margin-top: 2.4rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`
// ********************************************************************************************** default Hero
export default function Hero({
  tagline,
  headline,
  text,
  img,
  imgAlt,
  link = "/",
  linkText,
}) {
  const image = getImage(img)
  return (
    <HeroSection>
      <Container>
        <HeroGrid>
          <div>
            {tagline && <Tagline>{tagline}</Tagline>}
            <Headline>{headline}</Headline>
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
            {link && <Cta to={link}>{linkText}</Cta>}
          </div>
          <GatsbyImage image={image} alt={imgAlt} />
        </HeroGrid>
      </Container>
    </HeroSection>
  )
}

// ********************************************************************************************** LandingHero

const LandingHeroSection = styled(HeroSection)`
  ${Tagline} {
    color: var(--purple-haze);
    /* margin-bottom: 2rem; */
  }

  ${Text} {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.5rem;
  }
`

const HeadlineWrapper = styled.div`
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
`

export const LandingHero = ({ tagline, headline, text }) => (
  <LandingHeroSection className="ta-center">
    <Fade>
      <Container>
        <Tagline>{tagline}</Tagline>
        <HeadlineWrapper>
          <Outline as="h1" looksLike="h2" align="center">
            <span>{headline}</span>
          </Outline>
        </HeadlineWrapper>
        <Text
          dangerouslySetInnerHTML={{ __html: text }}
          className="ta-center"
        ></Text>
      </Container>
    </Fade>
  </LandingHeroSection>
)

// **********************************************************************************************CustomHero

const CustomHeroSection = styled(HeroSection)`
  margin-bottom: 8rem;
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  /* @media only screen and (min-width: 75em) {
    margin-bottom: 8rem;
  } */

  div.container {
    position: relative;
  }
`

const Keywords = styled.div`
  font-family: var(--headline-font);
  font-size: 1.8rem;
  color: var(--candy-strawberrys);
  margin-top: 3rem;
  line-height: 1.4;
  /* Width in PX > 768px */
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    font-size: 2rem;
  }
`

export const CustomHero = ({ tagline, headline, keywords }) => (
  <CustomHeroSection>
    <Fade>
      <Container className="ta-center">
        <Tagline>{tagline}</Tagline>
        <Headline className="ta-center">{headline}</Headline>
        <Keywords
          dangerouslySetInnerHTML={{ __html: keywords }}
          className="ta-center"
        ></Keywords>
      </Container>
    </Fade>
  </CustomHeroSection>
)
