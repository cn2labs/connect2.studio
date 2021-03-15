import React from "react"
import styled from "styled-components"
import Container from "./container"

const SectionStyles = styled.section`
  padding: 8rem 0;
  ${props => props.smallPaddingTop && "padding-top: 6rem;"}
  position: relative;

  &:last-child {
    padding-bottom: 6rem;
  }
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    padding: 5rem 10rem;
  }
`

const Aside = styled.aside`
  --color: var(--nets-court);

  color: var(--color);
  font-family: var(--headline-font);
  font-size: 1.2rem;
  transition: color 0.2s ease;
  transform: rotate(180deg) translateY(50%);
  position: absolute;
  top: 50%;
  left: var(--side-notice-distance);
  z-index: 10;
  writing-mode: vertical-rl;
  padding: 0 1rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  :before {
    background: var(--color);
    content: "";
    display: inline-block;
    height: 16px;
    margin-bottom: 12px;
    margin-left: 4px;
    width: 1px;
  }

  :hover {
    --color: var(--almost-white);
  }
`

export default function Section({
  children,
  aside,
  headline,
  smallPaddingTop,
}) {
  return (
    <SectionStyles smallPaddingTop={smallPaddingTop}>
      {aside && <Aside>{aside}</Aside>}
      <Container>
        {headline && <h4 className="size-h3">{headline}</h4>}
        {children}
      </Container>
    </SectionStyles>
  )
}
