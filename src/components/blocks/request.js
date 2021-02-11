import React from "react"
import styled from "styled-components"

import Section from "../styles/section"
import Grid from "../styles/grid"

const SendARequest = () => (
  <Section aside="Hey buddy">
    <Grid repeatCols="3" gap="100">
      <h4 className="size-h4">
        Überzeugt? Nice! Wir freuen uns auf deine Anfrage.<sup>*</sup>
      </h4>
      <p>
        <strong>
          <sup>*</sup>Wenn du deine Rechnungen bezahlst, unsere Mails
          beantwortest und nichts gegen Mate hast.
        </strong>
      </p>
      <button>Jetzt anfragen</button>
    </Grid>
  </Section>
)

export default SendARequest
