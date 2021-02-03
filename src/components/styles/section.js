import React from "react"
import styled from "styled-components"
import Container from "./container"

const SectionStyles = styled.section`
  padding: 12rem 0;
  position: relative;
`

const Aside = styled.aside`
  --color: var(--nets-court);

  color: var(--color);
  font-size: 1.4rem;
  transition: color 0.2s ease;
  transform: rotate(180deg) translateY(50%);
  position: absolute;
  top: 50%;
  left: 120px;
  z-index: 10;
  writing-mode: vertical-rl;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  :before {
    background: var(--color);
    content: "";
    display: inline-block;
    height: 42px;
    margin-bottom: 16px;
    margin-left: -2px;
    width: 1px;
  }

  :hover {
    --color: #fff;
  }
`

export default function Section({ children, aside }) {
  return (
    <SectionStyles>
      {aside && <Aside>{aside}</Aside>}
      <Container>{children}</Container>
    </SectionStyles>
  )
}
