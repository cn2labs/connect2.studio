import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import CTA from "./ui/cta"

const HeroStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
`

const Headline = styled.h1`
  font-size: 7rem;
  text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
`

const Text = styled.div`
  color: #fff;
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
export default function Hero({ headline, text, img }) {
  return (
    <HeroStyles>
      <div>
        <Fade delay={200}>
          <Headline>{headline}</Headline>
        </Fade>
        <Fade delay={500}>
          <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
        </Fade>
        <CTA to="/">Lern uns kennen</CTA>
      </div>
      {img && (
        <Img className="hero--img" src={img.sourceUrl} alt={img.altText} />
      )}
    </HeroStyles>
  )
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.object,
}
