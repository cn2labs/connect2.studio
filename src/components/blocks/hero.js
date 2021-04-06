import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import CTA from "../ui/cta"
import Container from "../styles/container"
import Image from "../img"
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

  .gatsby-image-wrapper {
    min-height: 500px;
  }

  img {
    height: 100%;
    width: 100%;
    max-height: 550px;
  }
`

const Headline = styled.h1`
  font-size: 4rem;
  text-shadow: 0px 0px 14px rgb(255 255 255 / 50%);
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
  return (
    <HeroSection>
      <Container>
        <HeroGrid>
          <div>
            {tagline && <Tagline>{tagline}</Tagline>}
            <Headline>{headline}</Headline>
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
            {link && <CTA to={link}>{linkText}</CTA>}
          </div>
          <Image fluid src={img} alt={imgAlt} />
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
  div.container {
    position: relative;
  }

  ${Tagline} {
    color: var(--purple-haze);
  }
`

const Keywords = styled.div`
  font-family: var(--headline-font);
  font-size: 2rem;
  color: var(--candy-strawberrys);
  margin-top: 3rem;
  /* Width in PX > 768px */
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    font-size: 2.5rem;
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
