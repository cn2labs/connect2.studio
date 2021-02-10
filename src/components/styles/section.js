import React from "react"
import styled from "styled-components"
import Container from "./container"

const SectionStyles = styled.section`
  padding: 12rem 0;
  position: relative;

  &:last-child {
    padding-bottom: 6rem;
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
    height: 24px;
    margin-bottom: 12px;
    margin-left: -2px;
    width: 1px;
  }

  :hover {
    --color: var(--almost-white);
  }
`

export default function Section({ children, aside, headline }) {
  return (
    <SectionStyles>
      {aside && <Aside>{aside}</Aside>}
      <Container>
        {headline && (
          <h4 className="ta-center size-h3 is-outlined section--title">
            <span>{headline}</span>
          </h4>
        )}
        {children}
      </Container>
    </SectionStyles>
  )
}
