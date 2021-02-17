import React from "react"
import styled from "styled-components"

const OutlineStyles = styled.h3`
  line-height: 1;

  span,
  a {
    color: transparent;
    -webkit-text-stroke: 1.2px var(--mommys-blonde-boy);
    transition: color 0.1s ease;
    letter-spacing: 1px;
    will-change: color;

    :hover {
      color: var(--mommys-blonde-boy);
      -webkit-text-stroke: 0 none;
      text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
    }
  }
`

const Outline = ({ children, as = "h3", looksLike = as, align = "left" }) => (
  <OutlineStyles as={as} className={`size-${looksLike} ta-${align}`}>
    {children}
  </OutlineStyles>
)

export default Outline
