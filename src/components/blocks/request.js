import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import Section from "../styles/section"
import Grid from "../styles/grid"

const RequestButton = styled.button`
  --color: var(--lavender-soap);

  background-color: transparent;
  border: 4px solid var(--color);
  color: var(--color);
  cursor: pointer;
  font-size: 2rem;
  font-family: var(--headline-font);
  line-height: 1.2;
  padding: 20px 10px;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  width: 100%;

  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const SendARequest = () => (
  <Fade>
    <Section>
      <Grid cols="3" gap="100" align="flex-start">
        <h4 className="size-h4">
          Überzeugt? Nice! Wir freuen uns auf deine Anfrage.<sup>*</sup>
        </h4>
        <p>
          <strong>
            <sup>*</sup>Du kannst uns anrufen, uns eine Mail schreiben, oder
            unseren Anfrage-Konfigurator ausfüllen.
          </strong>
        </p>
        <Link to="/anfrage">
          <RequestButton>Jetzt anfragen</RequestButton>
        </Link>
      </Grid>
    </Section>
  </Fade>
)

export default SendARequest
