import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CTA from "../ui/cta"
import Container from "../styles/container"
import Grid from "../styles/grid"
import Image from "../img"

const HeroSection = styled.section`
  padding-bottom: 10rem;
`

const Headline = styled.h1`
  font-size: 6rem;
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
export default function Hero({
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
        <Grid cols="1.2fr 1fr" gap="100">
          <div>
            <Headline>{headline}</Headline>
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
            {link && <CTA to={link}>{linkText}</CTA>}
          </div>
          <Image fluid src={img} alt={imgAlt} />
        </Grid>
      </Container>
    </HeroSection>
  )
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  img: PropTypes.object,
  imgAlt: PropTypes.string,
}
