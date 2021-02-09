import React from "react"
import styled from "styled-components"

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-column-gap: 4em;
`

const Grid = ({ children }) => (
  <GridStyles cols={children.length}>{children}</GridStyles>
)

export default Grid
