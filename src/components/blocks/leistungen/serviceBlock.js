import React from "react"
import styled from "styled-components"

import CTA from "../../ui/cta"

const Headline = styled.h2`
  margin-bottom: 1rem;
`

const ServiceBlock = ({ title, text, link }) => (
  <div>
    <Headline className="size-h4">{title}</Headline>
    <p>{text}</p>
    <CTA to={`/leistungen/${link}`}>Mehr dazu</CTA>
  </div>
)

export default ServiceBlock
