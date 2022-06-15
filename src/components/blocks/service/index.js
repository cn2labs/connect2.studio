import React from "react"
import styled from "styled-components"

import Cta from "../../ui/cta"
import Tagline from "../../ui/tagline"

const BlockStyles = styled.div`
  margin: 10rem 0;
`

const Department = styled.div`
  max-width: 480px;

  h3 {
    line-height: 1.4;
  }
`

const Keywords = styled.div`
  font-weight: 500;
  column-gap: 20px;
  margin-top: 4rem;
  span {
    line-height: 1.55em;
    margin-bottom: 15px;
  }
  /* Width in PX > 768px */
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    column-gap: 20px;
  }
`

const ServiceBlock = ({ tagline, title, keywords, link }) => (
  <BlockStyles>
    <div className="bg-grid-appear bg-col-2">
      <Department>
        <Tagline>&ndash; {tagline}</Tagline>
        <h3 className="size-h5">{title}</h3>
        {/* <Cta title="Mehr dazu" to={`/service${link}`}>Mehr dazu</Cta> */}
      </Department>
      <Keywords className="grid col-2">
        {keywords &&
          keywords.map(keyword => (
            <span key={keyword.title}>{keyword.title}</span>
          ))}
      </Keywords>
    </div>
  </BlockStyles>
)

export default ServiceBlock
