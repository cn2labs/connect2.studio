import React from "react"
import styled from "styled-components"

import CTA from "../../ui/cta"
import Tagline from "../../ui/tagline"
import Grid from "../../styles/grid"

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

  span {
    line-height: 1.55em;
    margin-bottom: 15px;
  }
`

const ServiceBlock = ({ tagline, title, keywords, link }) => (
  <BlockStyles>
    <Grid repeatCols="2" gap="0">
      <Department>
        <Tagline>&ndash; {tagline}</Tagline>
        <h3 className="size-h5">{title}</h3>
        <CTA to={`/service${link}`}>Mehr dazu</CTA>
      </Department>
      <Keywords>
        <Grid repeatCols="2" gap="15">
          {keywords &&
            keywords.map(keyword => (
              <span key={keyword.title}>{keyword.title}</span>
            ))}
        </Grid>
      </Keywords>
    </Grid>
  </BlockStyles>
)

export default ServiceBlock
