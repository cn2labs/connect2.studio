import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import Section from "../styles/section"

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
  max-width: 300px;

  &:hover {
    background-color: var(--color);
    color: #fff;
  }
  margin-top: 3rem;
  /* Width in PX > 768px */
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    margin-top: 0;
  }
`

const SendARequest = () => (
  <Fade>
    <Section smallPaddingTop>
      <div className="flex vertical v-start md-grid-appear md-col-2 md-gap-7">
        <div>
          <h3 className="size-h4">
            Überzeugt? Nice! Wir freuen uns auf deine Anfrage.<sup>*</sup>
          </h3>
          <p>
            <strong>
              <sup>*</sup>Du kannst uns anrufen, uns eine Mail schreiben, oder
              unseren Anfrage-Konfigurator ausfüllen.
            </strong>
          </p>
        </div>
        <Link to="/anfrage">
          <RequestButton>Jetzt anfragen</RequestButton>
        </Link>
      </div>
    </Section>
  </Fade>
)

export default SendARequest
