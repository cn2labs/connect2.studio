import React from "react"
import styled from "styled-components"

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.repeatCols ? `repeat(${props.repeatCols}, 1fr)` : props.cols};
  grid-column-gap: ${props => props.gap}px;
  ${props => props.align && `align-items: ${props.align};`}
`

const Grid = ({ children, repeatCols, cols, gap = "30", align }) => (
  <GridStyles cols={cols} repeatCols={repeatCols} gap={gap} align={align}>
    {children}
  </GridStyles>
)

export default Grid
