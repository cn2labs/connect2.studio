import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 15px;
  width: 95%;
  /* Width in PX > 1920px */
  /* ==== = EXTRA LARGE = ==== */
  @media only screen and (min-width: 121em) {
    max-width: 1440px;
  }
`

export default Container
