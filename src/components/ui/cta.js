import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../../images/logo_white.svg"

const CTAStyles = styled.span`
  color: var(--candy-strawberrys);
  display: inline-block;
  font-family: var(--headline-font);
  font-size: 2.4rem;
  margin-top: 6rem;
  position: relative;
  text-shadow: 0px 0px 6px rgb(219 80 74 / 50%);

  &:hover {
    text-shadow: 0px 0px 20px rgb(219 80 74 / 50%);
  }

  &:before {
    --size: 60px;

    background: url(${logo}) no-repeat center center / contain;
    content: "";
    display: block;
    width: var(--size);
    height: var(--size);
    position: absolute;
    left: calc((var(--size) / 2 - 2px) * -1);
    top: calc((var(--size) / 2 - 10px) * -1);
    opacity: 0.4;
    transition: opacity 0.4s ease;
    will-change: opacity;
    z-index: -1;
  }

  &:hover:before {
    animation: spinCta 16s linear infinite;
    opacity: 1;

    @keyframes spinCta {
      from {
        transform: rotate(0deg) translateZ(0);
      }
      to {
        transform: rotate(359deg) translateZ(0);
      }
    }
  }
`

export default function CTA({ to, children }) {
  return (
    <Link to={to}>
      <CTAStyles>{children}</CTAStyles>
    </Link>
  )
}
