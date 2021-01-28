import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const HeroStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
`

const Headline = styled.h1`
  font-size: 7.2rem;
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

const Img = styled.img``
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
