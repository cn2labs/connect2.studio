import React from "react"
import styled from "styled-components"

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-column-gap: ${props => props.gap}px;
  ${props => props.align && `align-items: ${props.align};`}
`

const Grid = ({ children, cols, gap = "30", align, ...props }) => (
  <GridStyles cols={cols || children.length} gap={gap} align={align} {...props}>
    {children}
  </GridStyles>
)

export default Grid
