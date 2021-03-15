import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import CTA from "../ui/cta"
import Container from "../styles/container"
import Image from "../img"
import Tagline from "../ui/tagline"
import Outline from "../ui/outline"

import scribble from "../../assets/images/scribble.svg"

const HeroGrid = styled.div`
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

const HeroSection = styled.section`
  margin-bottom: 8rem;
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    margin-bottom: 15rem;
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

const ImageStyle = styled(Image)`
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
    z-index: 25;
  }
  /* Width in PX > 768px */
  @media only screen and (min-width: 48em) {
    max-height: 500px;
  }
`

const FloatContent = styled.div`
  height: 100%;
  transform: translateY(-25%);
  /* Width in PX > 768px */
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 2rem;
    transform: translateY(0);
    z-index: 20;
    background-color: rgb(0 0 0 / 50%);
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

export const CustomHero = ({ tagline, headline, img, imgAlt, keywords }) => (
  <CustomHeroSection>
    <Fade>
      <Container className="container">
        <ImageStyle fluid src={img} alt={imgAlt} />
        <FloatContent className="flex vertical h-center">
          <Tagline>{tagline}</Tagline>
          <Headline className="ta-center">{headline}</Headline>´
          <Keywords
            dangerouslySetInnerHTML={{ __html: keywords }}
            className="ta-center"
          ></Keywords>
        </FloatContent>
      </Container>
    </Fade>
  </CustomHeroSection>
)
