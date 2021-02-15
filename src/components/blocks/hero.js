import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CTA from "../ui/cta"
import Container from "../styles/container"
import Image from "../img"
import Tagline from "../ui/tagline"

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-column-gap: 100px;
`

const HeroSection = styled.section`
  margin-bottom: 15rem;
`

const Headline = styled.h1`
  font-size: 6rem;
  text-shadow: 0px 0px 14px rgb(255 255 255 / 50%);
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

Hero.propTypes = {
  tagline: PropTypes.string,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  img: PropTypes.object,
  imgAlt: PropTypes.string,
}
