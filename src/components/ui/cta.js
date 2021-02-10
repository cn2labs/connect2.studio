import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../../assets/images/logo_white.svg"

const CTAStyles = styled.span`
  color: var(--candy-strawberrys);
  display: inline-block;
  font-family: var(--headline-font);
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-top: 6rem;
  position: relative;
  text-shadow: 0px 0px 6px rgb(219 80 74 / 50%);

  &:hover {
    text-shadow: 0px 0px 20px rgb(219 80 74 / 50%);
  }

  &:before {
    --size: 40px;

    background: url(${logo}) no-repeat center center / contain;
    content: "";
    display: block;
    width: var(--size);
    height: var(--size);
    position: absolute;
    left: calc((var(--size) / 2 - 4px) * -1);
    top: calc((var(--size) / 2 - 10px) * -1);
    opacity: 0.4;
    transition: opacity 0.4s ease;
    will-change: opacity;
    z-index: -1;
  }

  &.play-animation:before {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: spinCta;
    animation-duration: 16s;
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

  &.pause-animation:before {
    animation-play-state: paused;
    opacity: 0.4;
  }
`

export default function CTA({ to, children }) {
  const handleMouseEnter = e => {
    const el = e.target.classList

    if (el.contains("pause-animation")) {
      el.remove("pause-animation")
      el.add("play-animation")
    } else {
      el.add("play-animation")
    }
  }

  const handleMouseLeave = e => {
    const el = e.target.classList
    el.add("pause-animation")
  }

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CTAStyles>{children}</CTAStyles>
    </Link>
  )
}
