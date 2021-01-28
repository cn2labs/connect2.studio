import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const HeroStyles = styled.section`
  .hero--headline {
    font-size: 8rem;
  }

  .hero--text {
    font-size: 2rem;
    margin-top: 4rem;
    max-width: 800px;

    p + p {
      margin-top: 2.4rem;
    }
  }
`

export default function Hero({ headline, text }) {
  return (
    <HeroStyles>
      <Fade cascade bottom>
        <h1 className="hero--headline">{headline}</h1>
      </Fade>
      <Fade delay={500}>
        <div
          className="hero--text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </Fade>
    </HeroStyles>
  )
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
