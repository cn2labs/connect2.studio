import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import CTA from "./ui/cta"
import Container from "./styles/container"

const HeroSection = styled.section`
  padding-bottom: 10rem;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
`

const Headline = styled.h1`
  font-size: 7rem;
  text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
`

const Text = styled.div`
  color: var(--almost-white);
  font-size: 2rem;
  margin-top: 4rem;
  max-width: 800px;

  p + p {
    margin-top: 2.4rem;
  }
`

const Img = styled.img`
  --spacing: 24rem;

  max-width: unset;
  width: calc(100% + var(--spacing));
  position: relative;
  left: calc(var(--spacing) / 2 * -1);
  z-index: -1;
`
export default function Hero({ headline, text, img, link = "/" }) {
  return (
    <HeroSection>
      <Container>
        <HeroGrid>
          <div>
            <Fade delay={200}>
              <Headline>{headline}</Headline>
            </Fade>
            <Fade delay={500}>
              <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
            </Fade>
            <Fade delay={700}>
              <CTA to={link}>Lern uns kennen</CTA>
            </Fade>
          </div>
          {img && (
            <Img className="hero--img" src={img.sourceUrl} alt={img.altText} />
          )}
        </HeroGrid>
      </Container>
    </HeroSection>
  )
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  img: PropTypes.object,
}
